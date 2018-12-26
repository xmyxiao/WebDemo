$(function () {
    function AddFavorite(sURL, sTitle) {
        if (/firefox/i.test(navigator.userAgent)) {
            return false;
        } else if (window.external && window.external.addFavorite) {
            window.external.addFavorite(sURL, sTitle);
            return true;
        } else if (window.sidebar && window.sidebar.addPanel) {
            window.sidebar.addPanel(sTitle, sURL, "");
            return true;
        } else {
            var touch = (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command' : 'CTRL');
            alert('请使用 ' + touch + ' + D 添加到收藏夹.');
            return false;
        }
    }
    var len = function (str) {
        if (!str)
            return 0;
        var length = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) <= 0x9fa5) {
                length += 2;
            } else {
                length++;
            }
        }
        return length;
    };
    //搜索框
    $("input[name='search']").on("focus", function(){
       $(this).closest(".form-search").addClass("focused");
    }).on("blur", function(){
        var that = this;
        setTimeout(function(){
            $(that).closest(".form-search").removeClass("focused");
        }, 1000);
    });
    // 点击收藏
    $(".addbookbark").attr("rel", "sidebar").click(function () {
        return !AddFavorite(window.location.href, $(this).attr("title"));
    });
    // 点赞
    $(document).on("click", ".product-like-wrapper > a", function () {
        var ids = JSON.parse(localStorage.getItem("vote"));
        ids = $.isArray(ids) ? ids : [];
        var id = $(this).data("id");
        if ($.inArray(id, ids) > -1) {
            alert("你已经投过票了");
            return false;
        }
        $.ajax({
            type: "post",
            data: $(this).data(),
            dataType: 'json',
            success: function (ret) {
                if (ret.code === 1) {
                    ids.push(id);
                    $(".like-bar-wrapper .bar span").css("width", ret.data.likeratio + "%");
                    $(".like-bar-wrapper .num i").text(ret.data.likes);
                    $(".like-bar-wrapper .num span").text(ret.data.dislikes);
                    localStorage.setItem("vote", JSON.stringify(ids));
                }
            }
        });
    });
    if ($("#comment-container").size() > 0) {
        var ci, si;
        $("#commentlist dl dd div,#commentlist dl dd dl dd").on({
            mouseenter: function () {
                clearTimeout(ci);
                var _this = this;
                ci = setTimeout(function () {
                    $(_this).find("small:first").find("a").stop(true, true).fadeIn();
                }, 100);
            },
            mouseleave: function () {
                clearTimeout(ci);
                $(this).find("small:first").find("a").stop(true, true).fadeOut();
            }
        });
        $(".reply").on("click", function () {
            $("#pid").val($(this).data("id"));
            $(this).parent().parent().append($("div#postcomment").detach());
            $("#postcomment h3 a").show();
            $("#commentcontent").focus().val($(this).attr("title"));
        });
        $("#postcomment h3 a").bind("click", function () {
            $("#comment-container").append($("div#postcomment").detach());
            $(this).hide();
        });
        $(".expandall a").on("click", function () {
            $(this).parent().parent().find("dl.hide").fadeIn();
            $(this).fadeOut();
        });

        $(document).on("click", "#submit", function () {
            var btn = $(this);
            var tips = $("#actiontips");
            tips.removeClass();
            var content = $("#commentcontent").val();
            if (len(content) < 3) {
                tips.addClass("text-danger").html("评论内容长度不正确！最少3个字符").fadeIn().change();
                return false;
            }
            var form = $("#postform");
            btn.attr("disabled", "disabled");
            tips.html('正在提交...');
            $.ajax({
                url: form.prop("action"),
                type: 'POST',
                data: form.serialize(),
                dataType: 'json',
                success: function (json) {
                    btn.removeAttr("disabled");
                    if (json.code == 1) {
                        $("#pid").val(0);
                        tips.addClass("text-success").html("评论成功！").fadeIn(300).change();
                        $("#commentcontent").val('');
                        $("#commentcount").text(parseInt($("#commentcount").text()) + 1);
                        setTimeout(function () {
                            location.reload();
                        }, 300);
                    } else {
                        tips.addClass("text-danger").html(json.msg).fadeIn().change();
                    }
                    if (json.data && json.data.token) {
                        $("#postform input[name='__token__']").val(json.data.token);
                    }
                },
                error: function () {
                    btn.removeAttr("disabled");
                    tips.addClass("text-danger").html("评论失败！请刷新页面重试！").fadeIn();
                }
            });
            return false;
        });
        $("#commentcontent").on("keydown", function (e) {
            if ((e.metaKey || e.ctrlKey) && (e.keyCode == 13 || e.keyCode == 10)) {
                $("#submit").trigger('click');
            }
        });
        $("#actiontips").on("change", function () {
            clearTimeout(si);
            si = setTimeout(function () {
                $("#actiontips").fadeOut();
            }, 8000);
        });
        $(document).on("keyup change", "#commentcontent", function () {
            var max = 1000;
            var c = $(this).val();
            var length = len(c);
            var t = $("#actiontips");
            if (max >= length) {
                t.removeClass().show().addClass("loading").html("你还可以输入 <font color=green>" + (Math.floor((max - length) / 2)) + "</font> 字");
                $("#submit").removeAttr("disabled");
            } else {
                t.removeClass().show().addClass("loading").html("你已经超出 <font color=red>" + (Math.ceil((length - max) / 2)) + "</font> 字");
                $("#submit").attr("disabled", "disabled");
            }
        });
    }
    // 回到顶部
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    // 如果是PC则移除navbar的dropdown点击事件
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(navigator.userAgent)) {
        $("#navbar-collapse [data-toggle='dropdown']").removeAttr("data-toggle");
    } else {
        $(".navbar-nav ul li:not(.dropdown-submenu):not(.dropdown) a").removeAttr("data-toggle");
    }
    $.fn.typeahead.Constructor.prototype.click = function (e) {

    };
    // 搜索自动完成
    $("#searchinput").typeahead({
        onSelect: function (item) {
            console.log(item);
            location.href = item.value.url;
        },
        grepper: function (data) {
            return data;
        },
        render: function (items) {
            var that = this;
            items = $(items).map(function (i, item) {
                var i = $(that.options.item);
                i.data("value", item);
                i.find('a').attr('href', item.url);
                i.find('a').html('<h5>' + item.title + '</h5>');
                return i[0];
            });
            items.first().addClass('active');
            that.$menu.css("width", "250px");
            that.$menu.html(items);
            return that;
        },
        alignWidth: false,
        ajax: {
            url: $("#searchinput").data("typeahead-url"),
            valueField: "url",
            method: "post",
            dataType: "JSON",
            preDispatch: function (query) {
                return {
                    search: query
                };
            },
            preProcess: function (data) {
                return data;
            }
        }
    });
    // 百度分享
    if ($(".bdsharebuttonbox").size() > 0) {
        window._bd_share_config = {"common": {"bdSnsKey": {}, "bdText": "", "bdMini": "2", "bdMiniList": false, "bdPic": "", "bdStyle": "0", "bdSize": "116"}, "share": {}};
        with (document)
            0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
    }
});
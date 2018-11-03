var perSelectedItem = null;
var imgArr = new Array();
var hasShowImg = null;

$(function () {
    var apiObj = Album.createParam();
        apiObj = {
        sidebarToggle : "true",
        percent : 100,
        maxPercent : 300,
        minPercent : 25,
        bigImgWidth : 480,
        bigImgHeight : 451
    };
    createImgArr(apiObj);
    $("#sidebarContent img.lazy").lazyload({
        placeholder : "images/test.jpg",
        container: $("#sidebarContent")
    });
    $("#viewerContainer img.lazy").lazyload({
        placeholder : "images/test.jpg",
        container: $("#viewerContainer")
    });
    $("#viewerContainer").height($("#pdfWar").height()-30);
    //初始化页面显示页
    Album.showImg.showFirst(1);
    //监听大图滑块滚动
    $("#viewerContainer").scroll(function(){
        if(!hasShowImg){
            hasShowImg = $("#bigImg1");
        }
        var pdfWinHei = $("#pdfWar").offset().top;
        var showImg = hasShowImg.offset().top;
        var imgHei = hasShowImg.height();
        if(imgHei<=$("#viewerContainer").height()/2){
             if(showImg-pdfWinHei-40<0){
                var num = hasShowImg.attr("data-page-number")-0+1;
                Album.showImg.changSmallImg(num);
                hasShowImg = $("#bigImg"+num);
                 Album.showImg.showSmall(num);
            }else if(showImg-pdfWinHei-40+imgHei>$("#viewerContainer").height()){
                var num = hasShowImg.attr("data-page-number")-1;
                Album.showImg.changSmallImg(num);
                hasShowImg = $("#bigImg"+num);
                 Album.showImg.showSmall(num);
            }
        }
        else{
            if(showImg-pdfWinHei-40-$("#viewerContainer").height()/2<-imgHei){
                var num = hasShowImg.attr("data-page-number")-0+1;
                Album.showImg.changSmallImg(num);
                hasShowImg = $("#bigImg"+num);
                Album.showImg.showSmall(num);
            }else if(showImg>pdfWinHei+40+$("#viewerContainer").height()/2){
                var num = hasShowImg.attr("data-page-number")-1;
                Album.showImg.changSmallImg(num);
                hasShowImg = $("#bigImg"+num);
                Album.showImg.showSmall(num);
            }
        }
    });
    //放大
    $("#zoomIn").click(function(){
        Album.change.zoomIn(apiObj);
    });
    //缩小
    $("#zoomOut").click(function(){
        Album.change.zoomOut(apiObj);
    });
    //边框
    $("#sidebarToggle").click(function(){
        Album.change.hidSidebarToggle(apiObj);
    });
    //宽高比
    var preloader = new Image();
    if(!hasShowImg){
        hasShowImg = $("#bigImg1");
    }
    preloader.src = hasShowImg.find("img").attr("src");
    $(preloader).load(function(evt){
        var meWidth = preloader.width, 
        meHeight = preloader.height,
        maxWidth = $("#viewerContainer").width()-40;

        if(meWidth>maxWidth){
            var percent = meWidth / meHeight;
            meWidth = maxWidth;
            meHeight = maxWidth/percent;
        }
        for(var i=0;i<$("#viewerContainer").find(".pdfViewerLi").length;i++){
            var item = $("#viewerContainer").find(".pdfViewerLi")[i];
            $(item).width(meWidth);
            $(item).height(meHeight);
            $(item).find("img").width(meWidth);
            $(item).find("img").height(meHeight);
        }
        $("#viewerContainer").scroll();
    });
});
function showpic(that) {
    var selectedItem = $(that).parents(".sidebarLi");
    if(perSelectedItem){
        perSelectedItem.removeClass("sidebarLi-selected");
    }
    perSelectedItem = selectedItem;
    selectedItem.addClass("sidebarLi-selected");
    var number = selectedItem.attr("data-page-number");
    $("#viewerContainer").scrollTop( $("#viewerContainer").scrollTop()+$("#bigImg"+number).offset().top-$("#viewerContainer").offset().top);
    hasShowImg = $("#bigImg"+number);
    Album.showImg.showSmall(number);
}
function createImgArr(apiObj){
    var img = $("#sidebarContent").find(".sidebarLi");
    for (var i = 0; i < img.length; i++) {
        imgArr.push({
            bigImg : $(img[i]).find(".main").attr("src"),
            smallImg : $(img[i]).find("img").attr("data-original")
        })
        var j = i-0+1;
    var htm = '<li class="pdfViewerLi" id="bigImg'+j+'" style="width:'+apiObj.bigImgWidth+'px;height:'+apiObj.bigImgHeight+'px;" data-page-number='+j+'>'
              +'<img class="lazy" src="images/test.jpg" style="width:'+apiObj.bigImgWidth+'px;height:'+apiObj.bigImgHeight+'px;" data-original='+$(img[i]).find(".main").attr("src")+' /></li>';
    $("#viewerContainer ul").append(htm);
    }
}




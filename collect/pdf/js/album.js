(function(global){
	var Album;
	Album = global.Album = {};
	//创建参数
	Album.createParam = function(){
		var apiObj = {
			sidebarToggle : "",
			percent : "",
			maxPercent : "",
			minPercent : ""
		};
		return apiObj;
	}
	Album.showImg = {
		showFirst:function(number){
			$("#page"+number).find("img").trigger("click");
			hasShowImg = $("#bigImg"+number);
			perSelectedItem = $("#page"+number).parent(".sidebarLi");
			Album.showImg.showSmall(number);
		},
		changSmallImg:function(number){
			if($("#page"+number)){
				var selectedItem =$("#page"+number).parent(".sidebarLi");
    			if(perSelectedItem){
        			perSelectedItem.removeClass("sidebarLi-selected");
   				}
    			perSelectedItem = selectedItem;
    			selectedItem.addClass("sidebarLi-selected");
			}
		},
		showSmall:function(num){
			var item = $("#page"+num).parent(".sidebarLi");
			if(item){
				var sidebarTop = $("#sidebarContent").offset().top;
				var sidebarHeight = $("#sidebarContent").height();
				if(item.offset().top<(sidebarTop+20)){
					var Itemhei = parseInt(sidebarTop+20);
					$("#sidebarContent").scrollTop($("#sidebarContent").scrollTop()-(Itemhei-item.offset().top));
				}else if(item.offset().top>(sidebarHeight+sidebarTop-item.height())){
					var Itemhei = item.height()-(sidebarHeight + sidebarTop - item.offset().top);
					$("#sidebarContent").scrollTop($("#sidebarContent").scrollTop()+Itemhei);
				}else{
					return;
				}
			}
		}
	}
	Album.change = {
		zoomIn:function(apiObj){
			//放大图片
			if(apiObj.percent>=apiObj.maxPercent){
				return;
			}else{
				var itemPercentPre = apiObj.percent/100;
				apiObj.percent = apiObj.percent-0+10;
				var itemPercent = apiObj.percent/100;
				for(var i=0;i<$("#viewerContainer").find(".pdfViewerLi").length;i++){
					var item = $("#viewerContainer").find(".pdfViewerLi")[i];
					var itemWidth = $(item).width()/itemPercentPre;
					var itemHeight = $(item).height()/itemPercentPre;
					$(item).width(itemWidth*itemPercent);
					$(item).height(itemHeight*itemPercent);
					$(item).find("img").width(itemWidth*itemPercent);
					$(item).find("img").height(itemHeight*itemPercent);
				}
				$("#viewerContainer").scroll();
			}
		},
		zoomOut:function(apiObj){
			//缩小图片
			if(apiObj.percent<=apiObj.minPercent){
				return;
			}else{
				var itemPercentPre = apiObj.percent/100;
				apiObj.percent = apiObj.percent-10;
				var itemPercent = apiObj.percent/100;
				for(var i=0;i<$("#viewerContainer").find(".pdfViewerLi").length;i++){
					var item = $("#viewerContainer").find(".pdfViewerLi")[i];
					var itemWidth = $(item).width()/itemPercentPre;
					var itemHeight = $(item).height()/itemPercentPre;
					$(item).width(itemWidth*itemPercent);
					$(item).height(itemHeight*itemPercent);
					$(item).find("img").width(itemWidth*itemPercent);
					$(item).find("img").height(itemHeight*itemPercent);
				}
				$("#viewerContainer").scroll();
			}
		},
		hidSidebarToggle:function(apiObj){
			if(apiObj.sidebarToggle){
				//隐藏侧边栏
				apiObj.sidebarToggle = !apiObj.sidebarToggle;
				var meWidth = $("#pdfWar").width();
				$("#sidebarContainer").attr("style","display:none");
				$("#mainContainer").width(meWidth);
			}else{
				//显示侧边栏
				apiObj.sidebarToggle = !apiObj.sidebarToggle;
				$("#sidebarContainer").attr("style","display:block");
				var meWidth = $("#pdfWar").width()-$("#sidebarContainer").width();
				$("#mainContainer").width(meWidth);
				var num = hasShowImg.attr("data-page-number");
				Album.showImg.showSmall(num);
			}
		}
	}
})(this);
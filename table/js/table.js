$(function(){
	//竖向滚动条
	if($(".table-right-body")[0].scrollHeight > $(".table-right-body")[0].clientHeight){
		if($(".table-right-body")[0].scrollWidth > $(".table-right-body")[0].clientWidth){
			var height = $(".table-left-body").height()-18;
			$(".table-left-body").attr("style","height:"+height+"px");
			var width = $(".table-right-header").width()-17;
			$(".table-right-header").attr("style","width:"+width+"px");
			$(".table-right").css("border-right","1px solid #ddd");
			$(".scroll-table").css("border-bottom","1px solid #ddd");
		}else{
			var width = $(".table-right-body table").width();
			$(".table-right-header").css("width",width+"px");
			$(".table-right-body").css("width",width+17+"px");
			$(".scroll-table").css("border-bottom","1px solid #ddd");
		}
	}else{
		if($(".table-right-body")[0].scrollWidth > $(".table-right-body")[0].clientWidth){
			var height = $(".table-right-body table").height();
			$(".table-right-body").css("height",height+18+"px");
			$(".table-left-body").css("height",height+"px");
			$(".table-right").css("border-right","1px solid #ddd");
		}else{
			var width = $(".table-right-body table").width()
			$(".table-right-header").css("width",width+"px");
			$(".table-right-body").css("width",width+"px");
			var height = $(".table-right-body table").height();
			$(".table-right-body").css("height",height+"px");
			$(".table-left-body").css("height",height+"px");
		}
	}
	//监听滚动
	 $(".table-right-body").scroll(function(){
	 	var width = $(".table-right-body")[0].scrollLeft;
		var height = $(".table-right-body")[0].scrollTop;
		$(".table-right-header").scrollLeft(width);
		$(".table-left-body").scrollTop(height);
	});
	//打钩打叉
	$(".table-right-body .button").click(function(){
		var item = $(this).children("i");
		if(item.hasClass("btn-check")){
			item.removeClass("btn-check");
			item.addClass("btn-close");
		}else{
			item.addClass("btn-check");
			if(item.hasClass("btn-close")){
				item.removeClass("btn-close");
			}
		}
	});
});

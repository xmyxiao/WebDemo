(function(global){
	var scrollTable;
	scrollTable = global.scrollTable = {};
	
	scrollTable.init = function(id){
			if(id == "" || !id){
				var item = $(".scroll-table");
			}else{
				var item = $("#"+id);
			}
			var tableRightBody = item.find(".table-right-body");
			var tableLeftBody = item.find(".table-left-body");
			var tableRrightHeader = item.find(".table-right-header");
			var tableRight = item.find(".table-right");
			var tableLeft = item.find(".table-left");
			//竖向滚动条
			if(tableRightBody[0].scrollHeight > tableRightBody[0].clientHeight){
				if(tableRightBody[0].scrollWidth > tableRightBody[0].clientWidth){
					var height = tableLeftBody.height()-18;
					tableLeftBody.attr("style","height:"+height+"px");
					var width = tableRrightHeader.width()-17;
					tableRrightHeader.attr("style","width:"+width+"px");
					tableRight.css("border-right","1px solid #ddd");
					item.css("border-bottom","1px solid #ddd");
					item.width(tableRight.width() + tableLeft.width() + 1);
					item.height(tableLeft.height() + 18);
				}else{
					var width = tableRightBody.find("table").width();
					tableRrightHeader.css("width",width+"px");
					tableRightBody.css("width",width+17+"px");
					item.css("border-bottom","1px solid #ddd");
					item.width(tableRight.width() + tableLeft.width() + 1);
					item.height(tableLeft.height());
				}
			}else{
				if(tableRightBody[0].scrollWidth > tableRightBody[0].clientWidth){
					var height = tableRightBody.find("table").height();
					tableRightBody.css("height",height+18+"px");
					tableLeftBody.css("height",height+"px");
					tableRight.css("border-right","1px solid #ddd");
					item.width(tableRight.width() + tableLeft.width() + 1);
					item.height(tableLeft.height() + 18);
				}else{
					var width = tableRightBody.find("table").width() + 1;
					tableRrightHeader.css("width",width+"px");
					tableRightBody.css("width",width+"px");
					var height = tableRightBody.find("table").height();
					tableRightBody.css("height",height+18+"px");
					tableLeftBody.css("height",height+"px");
					item.width(tableRight.width() + tableLeft.width());
					item.height(tableLeft.height());
				}
			}
			//监听滚动
			tableRightBody.scroll(function(){
				var width = tableRightBody.scrollLeft;
				var height = tableRightBody.scrollTop;
				tableRrightHeader.scrollLeft(width);
				tableLeftBody.scrollTop(height);
			});
	}
})(this);























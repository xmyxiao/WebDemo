(function() {
	window.itoPage = {};
	
	itoPage.submitPassword = function(e){
		if(e && e.keyCode != "13"){
			return;
		}
		var pagePassWord = $('#pageDialogInput').val();
		$.ajax({
			type: "get",
			url: "/displays/visitKey",
			async: true,
		    contentType: "application/json; charset=utf-8",
	    	dataType:'json',
	    	appid: getPageHrefAppid(),
	    	pagePassWord: pagePassWord,
			data:{
				appid: getPageHrefAppid(),
				password: pagePassWord
			},
			success: function(data){
				if(data.code === 1){
					window.isPageShow = true;
					for(var i = 0; i < $('body')[0].children.length; i++){
						if(!$($('body')[0].children[i]).hasClass('ht-widget-dialog') && !$($('body')[0].children[i]).hasClass('layui-m-layer')){
							$($('body')[0].children[i]).css('visibility','visible');
						}
					}
        			itoPage.dialogHide();
        			var passWords = getCookie('pagePassWord');
					if(passWords && JSON.parse(passWords)){
						var list = JSON.parse(passWords);
					}else{
						var list = [];
					}
					var item = {
						'id' : this.appid,
						'passWord': this.pagePassWord
					}
					list.push(item)
					SetCookie('pagePassWord',JSON.stringify(list))
				}else{
					alert('密码验证失败！');
				}
			},
			error: function(){
				alert('密码验证失败！');
			}
		})
	}
	itoPage.dialogHide = function(){
		layer.close(0);
	}
	
})();

(function() {

    window.hteditor_config.onRightToolbarCreated = function(editor) {
		if(!editor.userMenu){
			createUserMenu();
		}
        // Hide some items from right toolbar
        editor.rightToolbar.setItemVisible('zoomIn', false);
        editor.rightToolbar.setItemVisible('zoomOut', false);
        editor.rightToolbar.setItemVisible('toggleBoth', false);
        editor.rightToolbar.setItemVisible('toggleLeft', false);
        editor.rightToolbar.setItemVisible('toggleRight', false);
        
		editor.rightToolbar._view.style.borderBottom = '1px solid #a0a0a1';
        // Add some items to right toolbar
        editor.rightToolbar.addItem(createReleaseItem());
        editor.rightToolbar.addItem(createShareItem());
        editor.rightToolbar.addItem(createUserInfoItem());
    };
    
    function createReleaseItem(){
    	var id = 'release';
        var toolTip = '发布';
        var iconName = 'custom/images/发布.json';
        var item = hteditor.createItem(id, toolTip, iconName);
        item.action = function() {
        	editor.preview();
        };
        return item;
    }
    
    function createShareItem(){
    	var id = 'share';
        var toolTip = '分享';
        var iconName = 'custom/images/分享.json';
        var item = hteditor.createItem(id, toolTip, iconName);
        item.action = function() {
        	
        };
        return item;
    }

    function createUserInfoItem() {
        var id = 'userInfo';
        var toolTip = '我的账户';
        var iconName = 'custom/images/user.json';
        var item = hteditor.createItem(id, toolTip, iconName);
        item.action = function() {
        	var toolLeft = editor.rightToolbar.getView().style.width.split("px")[0];
        	editor.userMenu.showOnView(editor.rightToolbar,toolLeft,30);
        };
        return item;
    }
        
    function createUserMenu(){
    	var userStr = getCookie("user");
    	if(!userStr){
    		return
    	}
	    var UserJson = JSON.parse(userStr);

    	var json = [
	        {
	            label: UserJson.name,
	            action: function(item) {
	                
	            }
	        },
	        {
	            label: UserJson.level,
	            action: function(item) {
	                
	            }
	        },
	        {
	            label: "详情",
	            action: function(item) {
	                window.open('http://wlw.fdauto.com/');
	            }
	        },
	        {
	            label: "升级",
	            action: function(item) {
	                window.open('http://wlw.fdauto.com/');
	            }
	        }
	    ];
	    var hideUserMenu = function(e){
	    	var n = editor.userMenu;
            n.isShowing() && !n.getView().contains(e.target) && n.hide();
	    }
	    editor.userMenu = new ht.widget.ContextMenu(json);
	    window.addEventListener("touchstart", hideUserMenu, !1);
        window.addEventListener("mousedown", hideUserMenu, !1);
    }
    
})();



(function() {

    window.hteditor_config.onRightToolbarCreated = function(editor) {

        // Hide some items from right toolbar
        editor.rightToolbar.setItemVisible('zoomIn', false);
        editor.rightToolbar.setItemVisible('zoomOut', false);
        editor.rightToolbar.setItemVisible('toggleBoth', false);

        // Add some items to right toolbar
        editor.rightToolbar.addItem(createFullscreenItem());
    };

    function createFullscreenItem() {
        var id = 'fullScreen';
        var toolTip = hteditor.getString('Fullscreen');
        var iconName = 'custom/images/fullscreen.json';
        var item = hteditor.createItem(id, toolTip, iconName);
        item.action = function() {
            ht.Default.toggleFullscreen(editor.mainPane);
        };
        return item;
    }

})();



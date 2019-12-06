$(function(){
    
})
function show_device_info(id){
    var html = '<div id="device-content">'
             + '<div class="content">'
             + '<label>设备编号：</label>'
             + '<span>TI74569</span>'
             + '</div>'
             + '<div class="content">'
             + '<label>设备名称：</label>'
             + '<span>变电箱</span>'
             + '</div>'
             + '<div class="content">'
             + '<label>设备产能：</label>'
             + '<span>400kw</span>'
             + '</div>'
             + '</div>';
    layer.open({
        title: [
          '设备信息详情',
          'background-color: #D0D0D0; color:#40AFFE;margin: 0;'
        ],
        skin: 'device-info', //样式类名
        content: html
    });
}

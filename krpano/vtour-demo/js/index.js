$(function(){
    addEvent()
})
function show_device_info(id){
    var htmlUrl = 'http://studio.gkiiot.com/previews2D/CSystem.html'
    layer.open({
        type: 2,
        title: false,
        area: ['80%', '80%'],
        shade: 0.8,
        closeBtn: 0,
        shadeClose: true,
        content: htmlUrl
    });
    /*
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
    */
}
function addEvent(){
    addWeixinHide()
}
function addWeixinHide(){
    if(!isPC()){
        $('.p-login-flex .item').click(function(e){
            $(this).find('.tips').toggle()
            $(this).siblings().find('.tips').hide()
        })
    }
}
// 判断是否是pc端
function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
   return flag;
}

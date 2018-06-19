let notify = {  //需要找这个对象中先拥有一个install方法

};
notify.install = function(Vue,options){//Vue是构造函数  options传递的参数
	
};
//导出这个包含install对象  如果调用vue.use就会调用这个install方法
export default notify;
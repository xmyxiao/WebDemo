import modal from './notify.vue'
let notify = {  //需要找这个对象中先拥有一个install方法

};
notify.install = function(Vue,options={time:3000}){//Vue是构造函数  options传递的参数
	Vue.prototype.$notify = function(message,opt={}){//设置opt默认值为一个对象  不传的情况为undefined
		if(notify.el){
			return;
		}
		options = {...options,...opt}  //用接收的参数覆盖原有默认的参数
		let v = Vue.extend(modal);  //继承  返回一个vue的子类  参数是包含阻组件选项的对象
		let vm = new v;
		vm.value = message;
		let oDiv = document.createElement('div');  //创建一个div
		vm.$mount(oDiv);  //将实例挂载到div上
		document.body.appendChild(vm.$el);  //将当前实例添加到页面
		notify.el = vm.$el;
		
		setTimeout(()=>{ //延迟时间   将dom元素移除
			document.body.removeChild(vm.$el);  //将实例上的元素移除
			notify.el = null;
		},options.time);
	}
};
//导出这个包含install对象  如果调用vue.use就会调用这个install方法
export default notify;
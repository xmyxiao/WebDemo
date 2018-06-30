import axios from 'axios'

//设置默认请求路径
axios.defaults.baseURL = 'http://localhost:3000';

//统一拦截结果  将结果处理成res.data
axios.interceptors.response.use((res)=>{
	return res.data;
})

//返回一个promise对象
export function getDataDObj(){
	return axios.get('/getData');
}

export let getHotBook = () => {
	return axios.get('/hot');
}
//删除
export let delBook = (id) => {
	return axios.delete('./book?id=$(id)');
}
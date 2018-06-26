import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';
//设置默认请求路径

//返回一个promise对象
export let getDataDObj = () =>{
	return axios.get('/getData');
}

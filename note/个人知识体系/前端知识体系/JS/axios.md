**axios的使用**</br>
```javascript
  axios({
	headers: {
	  'Content-Type': 'application/json;charset=UTF-8'
	},
	method: 'POST',
	url: '/api/xxx',
	data: JSON.stringify([{name: '123'}])
  }).then(res => {
	console.log('success')
  }).catch(err => {
	this.loading = false
	console.log(err)
  })
```
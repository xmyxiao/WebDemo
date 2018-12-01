<template>
  <div id="page">
    <router-view></router-view>
    <router-link to="/register">
				<span>注册页</span>
			</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
	position: absolute;
	height: 100%;
    width: 100%;
	font-size: 14px;
	color: #333;
}
html,body,ul,li,div,p{
	padding: 0;
	margin: 0;
}
ul,li{
	list-style: none;
}
img {
    vertical-align: middle;
}
#page {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

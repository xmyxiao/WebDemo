<template>
    <div id="home">
      <pageHeader :back="false">
				首页
			</pageHeader>
    </div>
</template>

<script>
	import pageHeader from '../base/pageHeader.vue'
	import {getDataDObj} from '../api';
	export default {
		name: 'home',
		created(){
			//在创建时获取数据
			//let res = getDataDObj();
		},
		components:{
			pageHeader
		}
	}
</script>

<style scoped>

</style>

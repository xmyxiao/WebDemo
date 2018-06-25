<template>
    <div id="home">
        <pageHeader :back="false">
			首页
		</pageHeader>
    </div>
</template>

<script>
	import pageHeader from '../base/pageHeader.vue'
    export default {
      name: 'home',
      components:{
    	  pageHeader
      }
    }
</script>

<style scoped>

</style>

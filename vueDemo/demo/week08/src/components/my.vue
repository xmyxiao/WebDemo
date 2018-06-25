<template>
    <div id="home">
        <pageHeader :back="true">
			个人中心
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

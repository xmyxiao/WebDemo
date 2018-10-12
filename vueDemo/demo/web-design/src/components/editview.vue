<template>
	<div class="design-main">
		<slot></slot>
		<!-- 插槽用于存放插入的组件 -->
	</div>
</template>

<script>
	export default {
	  name: 'editview'
	}
</script>

<style scoped>
	.design-main{
		height: 100%;
		position: relative;
	}
</style>
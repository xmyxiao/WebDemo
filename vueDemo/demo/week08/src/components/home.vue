<template>
    <div id="home">
        <pageHeader :back="false">
			首页
		</pageHeader>
		<div class="pageBody">
			<h3 class="listTitle">书籍列表</h3>
			<ul class="bookList">
				<li v-for="hot in book" :key="hot.bookId">
					<img :src="hot.bookImg" alt="">
					<span>{{hot.bookName}}</span>
				</li>
				<!-- <router-link v-for="hot in book" :to="{name:'detail',params:{bid:hot.bookId}}" :key="index" tag="li"> -->
				<!-- link里面有按钮的时候  使用@click.stop 阻止冒泡 -->
				<!-- 传到其他页面时  接收使用{{$route.params.bid}} 这里的参数来自于link的to-->
			</ul>
		</div>
    </div>
</template>

<script>
	import pageHeader from '../base/pageHeader.vue'
	import {getDataDObj,getHotBook} from '../api/index.js';
	export default {
		name: 'home',
		data(){
			return {sliders:[],book:[]}
		},
		created(){
			//在创建时获取数据
			//let res = getDataDObj();
			this.getBook();
		},
		components:{
			pageHeader
		},
		methods:{
			async getBook(){
				let data = await getHotBook();
				this.book = data;
			}
		}
	}
</script>

<style scoped lang = "less">
	.listTitle{
		color:#333;
		text-align: center;
		padding: 10px 0;
		border-bottom: 1px solid #ccc;
	}
	.pageBody{
		position: absolute;
		top: 50px;
		left: 0;
		width: 100%;
		bottom: 50px;
		overflow: auto;
	}
	.bookList{
		padding: 10px;
		display: flex;
    	flex-wrap: wrap;
		li{
			width: 50%;
			img{
				width: 100%;
			}
		}
	}
</style>

<template>
    <div class="footer">
		<router-link to="/home">
			<i class="iconfont icon-daohangshouye"></i>
			<span>首页</span>
		</router-link>
        <router-link to="/list">
			<i class="iconfont icon-daohangliebiao"></i>
			<span>列表</span>
		</router-link>
		<router-link to="/my">
			<i class="iconfont icon-daohanggerenzhongxin"></i>
			<span>个人中心</span>
		</router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        created(){

        },
        methods:{

        },
        computed:{

        },
        components:{

        }
    }
</script>
<!--
	display:flex
	flex-direction:row/column
	justify-content:center  垂直居中
	align-item:center  横线居中
	flex:1  每份占1
	router-link-exact-action router-link-active  激活状态
-->
<style scoped lang="less">
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
		display: flex;
		border-top: 1px solid #ccc;
		a{
			display: flex;
			flex-direction: column;
			flex:1;
			align-items: center;
			justify-content: center;
			color:#2D2D2D;
			text-decoration: none;
			i{
				font-size: 18px;
			}
			span{
				font-size: 12px;
			}
		}
		a.router-link-active{
			color:#006DCC;
		}
	}
</style>

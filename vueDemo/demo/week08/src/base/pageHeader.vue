<template>
    <div class="header">
        <i class="iconfont icon-xaingzuo" v-if="back" @click="goBack"></i>
		<slot></slot>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
		props:{
			back:{
				type:[Boolean],
				default:'false'
			}
		},
        created(){

        },
        methods:{
			goBack(){
				this.$router.go(-1);
			}
        },
        computed:{

        },
        components:{

        }
    }
</script>

<style scoped lang="less">
	.header{
		width: 100%;
		height: 50px;
		line-height: 50px;
		color: #fff;
		text-align: center;
		background-color: #598df7;
		i{
			font-size: 25px;
			position: absolute;
			left: 5px;
		}
		
	}
</style>

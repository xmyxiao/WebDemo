<template>
<div>
	<div class="p-register-header">
		<i class="p-register-logo"></i>
	</div>
	<div class="p-register-main">
		<div class="logincontent">
			<div class="des-tabpanel">
				<ul class="tab-head">
			    	<li class="item" @click="itemSelect(0)" :class="{'selected':selectItem === 0}">
			    		<div class="text">个人注册</div>
			    	</li>
			    	<li class="item" @click="itemSelect(1)" :class="{'selected':selectItem === 1}">
			    		<div class="text">企业注册</div>
			    	</li>
			    </ul>
			    <div class="tab-body">
			    	<div v-show="selectItem===0"  class="item">
				      	<form class="login-form">
				      		<div class="form-group">
				      			<label class="control-label">登&nbsp;&nbsp;录&nbsp;&nbsp;名：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control" placeholder="请输入登录名" name="">
						        </div>
				      		</div>
				      		<div class="form-group">
				      			<label class="control-label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control" placeholder="请输入姓名" name="">
						        </div>
				      		</div>
				      		<div class="form-group">
				      			<label class="control-label">设置密码：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control" placeholder="请输入密码" name="">
						        </div>
				      		</div>
				      		<div class="form-group">
				      			<label class="control-label">确认密码：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control" placeholder="请再次输入密码" name="">
						        </div>
				      		</div>
				      		<div class="form-group">
				      			<label class="control-label">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control" placeholder="请输入手机号码" name="">
						        </div>
				      		</div>
				      		<div class="form-group">
				      			<label class="control-label">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control" placeholder="请输入邮箱" name="">
						        </div>
				      		</div>
				      		<div class="form-group">
				      			<label class="control-label">验&nbsp;&nbsp;证&nbsp;&nbsp;码：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control code" placeholder="请输入验证码" name="">
						        	<button type="button" :class="{disabled: !this.canClick}" class="code-btn btn" @click="countDown">
						        		{{content}}
						        	</button>
						        </div>
				      		</div>
				      		<button type="submit" id="submitBtn" class="btn" >立即注册</button>
				      	</form>
				    </div>
				    <div v-show="selectItem===1"  class="item">
				      	<form class="login-form">
				      		<div class="form-group">
				      			<label class="control-label">登&nbsp;&nbsp;录&nbsp;&nbsp;名：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control" placeholder="请输入登录名" name="">
						        </div>
				      		</div>
				      		<div class="form-group">
				      			<label class="control-label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control" placeholder="请输入姓名" name="">
						        </div>
				      		</div>
				      		<div class="form-group">
				      			<label class="control-label">设置密码：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control" placeholder="请输入密码" name="">
						        </div>
				      		</div>
				      		<div class="form-group">
				      			<label class="control-label">确认密码：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control" placeholder="请再次输入密码" name="">
						        </div>
				      		</div>
				      		<div class="form-group">
				      			<label class="control-label">公司名称：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control" placeholder="请输入公司名称" name="">
						        </div>
				      		</div>
				      		<div class="form-group">
				      			<label class="control-label">公司地址：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control" placeholder="请输入公司地址" name="">
						        </div>
				      		</div>
				      		<div class="form-group">
				      			<label class="control-label">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control" placeholder="请输入手机号码" name="">
						        </div>
				      		</div>
				      		<div class="form-group">
				      			<label class="control-label">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control" placeholder="请输入邮箱" name="">
						        </div>
				      		</div>
				      		<div class="form-group">
				      			<label class="control-label">验&nbsp;&nbsp;证&nbsp;&nbsp;码：</label>
				      			<div class="control-text">
						        	<input type="text" class="form-control code" placeholder="请输入验证码" name="">
						        	<button type="button" :class="{disabled: !this.comCanClick}" class="code-btn btn" @click="comCountDown">
						        		{{comContent}}
						        	</button>
						        </div>
				      		</div>
				      		<button type="submit" id="submitBtn" class="btn" >立即注册</button>
				      	</form>
				    </div>
			    </div>
			</div>
		</div>
	</div>
	<div class="p-register-footer">
        <div class="footer-w">
            <span>中海创集团&nbsp;|&nbsp;福州奥迈软件有限公司　版权所有Copyright©WWW.AOMAISOFT.COM&nbsp;All&nbsp;rights&nbsp;reserved</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "register",
  data(){
    return {
        selectItem : 0,
        content: '发送验证码',
   	    totalTime: 60,
   	    canClick: true,  // 是否可点击
		comContent :'发送验证码',
		comTotalTime : 60,
	    comCanClick : true
    }
  },
  created(){
    
  },
  mounted() {
    
  },
  methods: {
    itemSelect(index){
    	this.selectItem = index
    },
    countDown(){
		if (!this.canClick) { //是否已经开始倒计时
			return
		}  
		this.canClick = false  //倒计时开始  关闭按钮点击
		this.content = this.totalTime + 's后重新发送'
		
		let clock = window.setInterval(() => {
			this.totalTime--
			this.content = this.totalTime + 's后重新发送'
			if (this.totalTime < 0) {
				window.clearInterval(clock)  //清除倒计时
				this.content = '重新发送验证码'
				this.totalTime = 60
				this.canClick = true  //这里重新开启按钮点击
			}
		},1000)
   },
   comCountDown(){
		if (!this.comCanClick) { //企业注册倒计时
			return
		}  
		this.comCanClick = false
		this.comContent = this.comTotalTime + 's后重新发送'
		
		let comClock = window.setInterval(() => {
			this.comTotalTime--
			this.comContent = this.comTotalTime + 's后重新发送'
			if (this.comTotalTime < 0) {
				window.clearInterval(comClock)
				this.comContent = '重新发送验证码'
				this.comTotalTime = 60
				this.comCanClick = true
			}
		},1000)
    }
  }
};
</script>

<style scoped>
	.p-register-header{
		width: 100%;
		box-sizing: border-box;
		height: 60px;
		background: #000000;
		border-bottom: 1px solid #333;
	}
	.p-register-logo{
		display: block;
	    width: 236px;
	    height: 52px;
	    position: fixed;
	    top: 4px;
    	left: 7%;
	    background: url("../assets/logoA.png") no-repeat;
	}
	.p-register-main{
		min-height: -moz-calc(100vh - 105px);
		min-height: -webkit-calc(100vh - 105px);
		min-height: calc(100vh - 105px);
    	background: url("../assets/Login-backA.jpg") 50% 50% no-repeat;
    	background-size: cover;
    	overflow: hidden;
    	display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	.p-register-main>.logincontent{
		box-sizing: border-box;
	    background: #fff !ie;
	    background: rgba(161, 153, 153, 0.3);
	    filter: alpha(opacity=30);
	    width: 580px;
	    min-height: 320px;
	    margin: 0 auto;
	    margin-bottom: 0px;
	    padding-top: 20px;
	    padding-bottom: 10px;
	    -webkit-border-radius: 7px;
	    -moz-border-radius: 7px;
	    -ms-border-radius: 7px;
	    -o-border-radius: 7px;
	    border-radius: 7px;
	}
	.p-register-footer {
	    position: absolute;
	    bottom: 0;
	    z-index: 99;
	    width: 100%;
	    background: #1f1f1f;
	    height: 45px;
	    line-height: 50px;
	    color: #959595;
	    overflow: hidden;
	    margin: 0 auto;
	}
	.footer-w {
	    margin: 0 auto;
	    text-align: center;
	}
	
  	.des-tabpanel>.tab-head{
	    display: -webkit-flex;
	    display: -ms-flex;
	    display: flex;
	    height: 40px;
		color: #b3b3b3;
	    list-style: none;
	    margin: 0;
	    padding: 0;
    }
    .des-tabpanel .tab-head .item{
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		list-style: none;
		padding: 0 10px;
		border-bottom: 1px solid #808080;
    }
    .des-tabpanel .item .text{
        width: 100%;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color:#b3b3b3;
        z-index: 10;
        font-size: 18px;
    }
    .des-tabpanel .item.selected{   
    	border-bottom: 2px solid #fff;
    }
    .des-tabpanel .item.selected>.text{   
    	color:#fff;
    	font-weight: bolder;
    }
    .des-tabpanel .tab-body .item{
    	box-sizing: border-box;
    	width: 100%;
    	padding: 20px 10%;
    	position: relative;
    	overflow: hidden;
    }
	.form-group{
		width: 100%;
    	display: table;
    	margin-bottom: 15px;
	}
	.form-group .control-label{
	    display: table-cell;
    	width: 20%;
    	text-align: right;
	    color: #fff;
	    font-size: 16px;
	    vertical-align: middle;
	    white-space: nowrap;
	}
	.form-group .control-text{
		display: table-cell;
    	width: 80%;
	}
	.form-control {
	    display: block;
	    box-sizing: border-box;
	    width: 100%;
	    height: 36px;
	    padding: 6px 12px;
	    font-size: 14px;
	    line-height: 1.42857;
	    color: #555555;
	    background-color: #fff;
	    background-image: none;
	    border: 1px solid #c2cad8;
	    border-radius: 4px;
	    outline: none;
	    box-shadow: none;
	}
	.form-control.code{
		width: -moz-calc(100% - 130px);
		width: -webkit-calc(100% - 130px);
		width: calc(100% - 130px);
		float: left;
	}
	.btn {
	    display: inline-block;
	    box-sizing: border-box;
	    padding: 6px 12px;
	    margin-bottom: 0;
	    font-size: 14px;
	    font-weight: normal;
	    line-height: 1.42857143;
	    text-align: center;
	    white-space: nowrap;
	    vertical-align: middle;
	    -ms-touch-action: manipulation;
	    touch-action: manipulation;
	    cursor: pointer;
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	    background-image: none;
	    border: 1px solid transparent;
	    border-radius: 4px;
	    outline: 0;
	}
	.form-group .control-text .code-btn{
		padding: 6px;
		width: 120px;
		float: right;
		border-radius: 5px;
		border: 1px solid #d6d6d6;
	    color: #fff;
	    background: transparent;
	    font-size: 14px;
    	font-weight: normal;
	}
	
	.logincontent .btn {
	    padding: 8px 12px;
	    font-size: 16px;
	    margin-top: 1px;
		background-color: #f60;
	    width: 100%;
	    color: #fff;
	    font-weight: bold;
	}
	.btn:hover {
	    -webkit-transform: scale(1.2);
	    transform: scale(1.2);
	    -webkit-transition: all 0.1s ease;
    	transition: all 0.1s ease;
	}
</style>
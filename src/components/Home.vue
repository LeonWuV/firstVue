<template>
	<div class="home-warp">
		<div class="home-header">
			<img src="../assets/logo.png" style="margin-left: 30px;vertical-align: middle;" />
			<router-link to="/project" class="router-link-noactive">工程</router-link>
			<router-link to="/run" 	class="router-link-noactive">运行</router-link>
			<router-link to="/picture" class="router-link-noactive">画面</router-link>
			<router-link to="/design" class="router-link-noactive">设计</router-link>
			<router-link to="/system" class="router-link-noactive">系统</router-link>
			<router-link to="/help" class="router-link-noactive">帮助</router-link>
			<div class="user-con">
				<div class="user-pic"></div>
				<div class="user-name">Leon</div>
				<div class="user-del">退出</div>
			</div>
		</div>
		<router-view class="home-container"></router-view>
		<div class="home-footer"> {{footerMsg}}</div>
	</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      footerMsg: 'Copyright © UBILINK ALL rights reserverd. 北京东土泛联信息技术有限公司版权所有'
      
      
    }
  }
}
</script>

<style scoped>
	.home-warp{
		height: 100%;
	}
	.home-header{
		height: 7.8%;
		min-height: 47px;
		width: 100%;
		line-height: 47px;
		background-color: #1c1c1c;
	}
	.home-container{
		height: 86%;
	}
	.home-footer{
		height: 6%;
		min-height: 36px;
		width: 100%;
		text-align: center;
		background-color: #1c1c1c;
		color: white;
		line-height: 36px;
	}
	.router-link-noactive{
		text-decoration: none;
		font-size: 16px;
		color: white;
		margin-left: 35px;
		width: 60px;
		height: 30px;
		border-radius: 8px;
		padding: 5px 15px;
	}
	.router-link-active{
		background-color: #303030;
	}
	.user-con{
		float: right;
		color: white;
		width: 160px;
	}
	.user-pic{
		background: url(../assets/logo-vue.png) no-repeat 10px 10px;
		background-size: 70%;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		float: left;
	}
	.user-del,.user-name{
		width: 30px;
		height: 30px;
		float: left;
		margin-left: 20px;
	}
	.user-name{
		
	}
</style>

<template>
 <div>
 		我是系统页面、
 		<button v-if="ifshow" @click="ifshow = !ifshow" type="danger">我是按钮</button>
 		<el-button type="primary" size="mini">主要按钮</el-button>
 		<el-button type="success" size="large">主要按钮</el-button>
 		<el-button type="danger" size="small">主要按钮</el-button>
 		<el-button type="info">主要按钮</el-button> 		
 		<el-button type="text">主要按钮</el-button>
 		
 		<el-button type="primary" :plain="true">主要按钮</el-button>
 </div>
   
</template>

<script>
export default {
 	data(){
	 	return 	{	 		
	 		ifshow:true
	 	}
 	},
 	name:'system'
}
</script>

<style scoped>

</style>

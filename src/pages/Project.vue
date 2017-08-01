<template>
	<div style="height: 86%;">
		<el-row style="height:100%;">
	  		<el-col :span="4"  style="height: 100%; background-color:#324057;overflow-y:scroll;overflow-x: hidden;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="/"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>数据管理</template>
						<el-menu-item index="userList">用户列表</el-menu-item>
						<el-menu-item index="shopList">商家列表</el-menu-item>
						<el-menu-item index="foodList">食品列表</el-menu-item>
						<el-menu-item index="orderList">订单列表</el-menu-item>
						<el-menu-item index="adminList">管理员列表</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-plus"></i>添加数据</template>
						<el-menu-item index="addShop">添加商铺</el-menu-item>
						<el-menu-item index="addGoods">添加商品</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-star-on"></i>图表</template>
						<el-menu-item index="visitor">用户分布</el-menu-item>
						<!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-edit"></i>编辑</template>
						<!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
						<el-menu-item index="vueEdit">文本编辑</el-menu-item>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title"><i class="el-icon-setting"></i>设置</template>
						<el-menu-item index="adminSet">管理员设置</el-menu-item>
						<!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
					</el-submenu>
					<el-submenu index="7">
						<template slot="title"><i class="el-icon-warning"></i>说明</template>
						<el-menu-item index="explain">说明</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow-y: scroll;">
				<el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
					<el-tab-pane v-for="(item, index) in editableTabs2" to="/item.path":key="item.name" :label="item.title" :name="item.name">
						<keep-alive>
				    		<router-view></router-view>
						</keep-alive>
					</el-tab-pane>
				</el-tabs>
				<!--<keep-alive>
				    <router-view></router-view>
				</keep-alive>-->
			</el-col>
		</el-row>
  	</div>
</template>

<script>
	import userList from '@/pages/userList'
  export default {
   data() {
			return {
				editableTabsValue2: '2',
				editableTabs2: [{
					title: 'Tab 1',
					name: '1',
					content: userList
				},{
					title: 'Tab 2',
					name: '2',
					content: 'Tab 2 content'
				}],
				tabIndex: 2
			}
		},
		computed: {
			defaultActive: function() {
				return this.$route.path.replace('/', '');
			}
		},
		methods: {
			addTab(targetName) {
				let newTabName = ++this.tabIndex + '';
				this.editableTabs2.push({
					title: 'New Tab',
					name: newTabName,
					content: 'New Tab content'
				});
				this.editableTabsValue2 = newTabName;
			},
			removeTab(targetName) {
				let tabs = this.editableTabs2;
				let activeName = this.editableTabsValue2;
				if(activeName === targetName) {
					tabs.forEach((tab, index) => {
						if(tab.name === targetName) {
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if(nextTab) {
								activeName = nextTab.name;
							}
						}
					});
				}
				this.editableTabsValue2 = activeName;
				this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
			}
		}
  }
</script>

<style scoped>

</style>

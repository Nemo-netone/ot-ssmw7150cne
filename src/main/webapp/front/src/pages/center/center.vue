<template>
	<div class="center-preview">
		<div class="center-title">{{ title }}</div>
		<div class="center-info">
			<div class="center-info-title">个人信息</div>
			<div class="img-box" v-if="userTableName=='yonghu'">
				<img :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')">
			</div>
			<div class="img-box" v-if="userTableName=='huodongguanliyuan'">
				<img :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')">
			</div>
			<div class="info-item1" v-if="userTableName=='yonghu'">
				<span class="icon iconfont icon-shouye-zhihui"></span>
				<div class="label">用户账号：</div>
				<div class="text">{{sessionForm.yonghuzhanghao}}</div>
			</div>
			<div class="info-item2" v-if="userTableName=='yonghu'">
				<span class="icon iconfont icon-shouye-zhihui"></span>
				<div class="label">用户姓名：</div>
				<div class="text">{{sessionForm.yonghuxingming}}</div>
			</div>
			<div class="info-item3" v-if="userTableName=='yonghu'">
				<span class="icon iconfont icon-shouye-zhihui"></span>
				<div class="label">性别：</div>
				<div class="text">{{sessionForm.xingbie}}</div>
			</div>
			<div class="info-item4" v-if="userTableName=='yonghu'">
				<span class="icon iconfont icon-shouye-zhihui"></span>
				<div class="label">年龄：</div>
				<div class="text">{{sessionForm.nianling}}</div>
			</div>
			<div class="info-item5" v-if="userTableName=='yonghu'">
				<span class="icon iconfont icon-shouye-zhihui"></span>
				<div class="label">手机号：</div>
				<div class="text">{{sessionForm.shoujihao}}</div>
			</div>
			<div class="info-item6" v-if="userTableName=='yonghu'">
				<span class="icon iconfont icon-shouye-zhihui"></span>
				<div class="label">身份证：</div>
				<div class="text">{{sessionForm.shenfenzheng}}</div>
			</div>
		
		</div>
	
		<el-tabs class="center-tabs" tab-position="left" @tab-click="handleClick">
			<el-tab-pane label="个人中心">
				<el-form class="center-preview-pv" ref="sessionForm" :model="sessionForm" :rules="rules" label-width="100px">
					<el-form-item class="center-item" v-if="userTableName=='yonghu'" label="用户账号" prop="yonghuzhanghao">
						<el-input v-model="sessionForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
					</el-form-item>
					<el-form-item class="center-item" v-if="userTableName=='yonghu'" label="用户姓名" prop="yonghuxingming">
						<el-input v-model="sessionForm.yonghuxingming" placeholder="用户姓名" ></el-input>
					</el-form-item>
					<el-form-item class="center-item" v-if="userTableName=='yonghu'" label="性别" prop="xingbie">
						<el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
							<el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="center-item" v-if="userTableName=='yonghu'" label="年龄" prop="nianling">
						<el-input v-model="sessionForm.nianling" placeholder="年龄" ></el-input>
					</el-form-item>
					<el-form-item class="center-item" v-if="userTableName=='yonghu'" label="手机号" prop="shoujihao">
						<el-input v-model="sessionForm.shoujihao" placeholder="手机号" ></el-input>
					</el-form-item>
					<el-form-item class="center-item" v-if="userTableName=='yonghu'" label="身份证" prop="shenfenzheng">
						<el-input v-model="sessionForm.shenfenzheng" placeholder="身份证" ></el-input>
					</el-form-item>
					<el-form-item class="center-item" v-if="userTableName=='yonghu'" label="详细住址" prop="xiangxizhuzhi">
						<el-input v-model="sessionForm.xiangxizhuzhi" placeholder="详细住址" ></el-input>
					</el-form-item>
					<el-form-item class="center-item" v-if="userTableName=='yonghu'" label="头像" prop="touxiang">
						<file-upload
							tip="点击上传头像"
							action="file/upload"
							:limit="1"
							:multiple="true"
							:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
							@change="yonghutouxiangHandleAvatarSuccess"
							></file-upload>
					</el-form-item>
					<el-form-item class="center-btn-item">
						<div class="updateBtn" type="primary" @click="onSubmit('sessionForm')">
							<span class="icon iconfont icon-kaitongfuwu"></span>
							<span class="text">更新信息</span>
						</div>
						<div class="closeBtn" type="danger" @click="logout">
							<span class="icon iconfont icon-shanchu1"></span>
							<span class="text">退出登录</span>
						</div>
					</el-form-item>
				</el-form>
			</el-tab-pane>
			<el-tab-pane label="修改密码">
				<el-form class="center-preview-pv" ref="passwordForm" :model="passwordForm" :rules="passwordRules" label-width="100px">
					<el-form-item class="center-item" label="原密码" prop="password">
						<el-input type="password" v-model="passwordForm.password" placeholder="原密码"></el-input>
					</el-form-item>
					<el-form-item class="center-item" label="新密码" prop="newpassword">
						<el-input type="password" v-model="passwordForm.newpassword" placeholder="新密码"></el-input>
					</el-form-item>
					<el-form-item class="center-item" label="确认密码" prop="repassword">
						<el-input type="password" v-model="passwordForm.repassword" placeholder="确认密码"></el-input>
					</el-form-item>
					<el-form-item class="center-btn-item">
						<div class="updateBtn" type="primary" @click="updatePassword">
							<span class="icon iconfont icon-kaitongfuwu"></span>
							<span class="text">修改密码</span>
						</div>
					</el-form-item>
				</el-form>
			</el-tab-pane>
			<el-tab-pane v-for="(item,index) in menuList" :key="index" v-if="hasBack(item.menu)" :label="item.child[0].menu" :name="item.child[0].tableName"></el-tab-pane>
			<el-tab-pane label="我的收藏"></el-tab-pane>
		</el-tabs>

	</div>
</template>

<script>
	import config from '@/config/config';
	import menu from '@/config/menu';
	import Vue from 'vue';
	export default {
		//数据集合
		data() {
			return {
				title: '个人中心',
				baseUrl: config.baseUrl,
				sessionForm: {},
				passwordForm: {},
				passwordRules: {
					password: [
						{
							required: true,
							message: "密码不能为空",
							trigger: "blur"
						}
					],
					newpassword: [
						{
							required: true,
							message: "新密码不能为空",
							trigger: "blur"
						}
					],
					repassword: [
						{
							required: true,
							message: "确认密码不能为空",
							trigger: "blur"
						}
					]
				},
				rules: {},
				menuList: [],
				disabled: false,
				uploadUrl: config.baseUrl + 'file/upload',
				imageUrl: '',
				headers: {Token: localStorage.getItem('frontToken')},
				userTableName: localStorage.getItem('UserTableName'),
				dynamicProp: {},
			}
		},
		created() {
			let menus = menu.list()
			for(let x in menus){
				if(menus[x].tableName == this.userTableName){
					for(let i in menus[x].backMenu){
						if(menus[x].backMenu[i].menu=='考试管理'){
							menus[x].backMenu.splice(i,1)
						}
					}
					this.menuList = menus[x].backMenu
				}
			}
			if ('yonghu' == this.userTableName) {
				this.$set(this.sessionForm, 'yonghuzhanghao', null);
			}
			if ('yonghu' == this.userTableName) {
				this.$set(this.sessionForm, 'mima', null);
			}
			if ('yonghu' == this.userTableName) {
				this.$set(this.sessionForm, 'yonghuxingming', null);
			}
			if ('yonghu' == this.userTableName) {
				this.$set(this.sessionForm, 'xingbie', null);
			}
			if ('yonghu' == this.userTableName) {
				this.$set(this.sessionForm, 'nianling', null);
			}
			if ('yonghu' == this.userTableName) {
				this.$set(this.sessionForm, 'shoujihao', null);
			}
			if ('yonghu' == this.userTableName) {
				this.$set(this.sessionForm, 'shenfenzheng', null);
			}
			if ('yonghu' == this.userTableName) {
				this.$set(this.sessionForm, 'xiangxizhuzhi', null);
			}
			if ('yonghu' == this.userTableName) {
				this.$set(this.sessionForm, 'touxiang', null);
			}

			if ('yonghu' == this.userTableName&&this.rules['yonghuzhanghao']){
				this.rules['yonghuzhanghao'].push({ required: true, message: '请输入用户账号', trigger: 'blur' })
			}else if('yonghu' == this.userTableName&&!this.rules['yonghuzhanghao']) {
				this.$set(this.rules, 'yonghuzhanghao', [{ required: true, message: '请输入用户账号', trigger: 'blur' }]);
			}
			if ('yonghu' == this.userTableName&&this.rules['mima']){
				this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
			}else if('yonghu' == this.userTableName&&!this.rules['mima']) {
				this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
			}
			if ('yonghu' == this.userTableName&&this.rules['yonghuxingming']){
				this.rules['yonghuxingming'].push({ required: true, message: '请输入用户姓名', trigger: 'blur' })
			}else if('yonghu' == this.userTableName&&!this.rules['yonghuxingming']) {
				this.$set(this.rules, 'yonghuxingming', [{ required: true, message: '请输入用户姓名', trigger: 'blur' }]);
			}
			if ('yonghu' == this.userTableName) {
				this.$set(this.rules, 'nianling', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
			}
			if ('yonghu' == this.userTableName) {
				this.$set(this.rules, 'shoujihao', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
			}
			if ('yonghu' == this.userTableName&&this.rules['shoujihao']){
				this.rules['shoujihao'].push({ required: true, message: '请输入手机号', trigger: 'blur' })
			}else if('yonghu' == this.userTableName&&!this.rules['shoujihao']) {
				this.$set(this.rules, 'shoujihao', [{ required: true, message: '请输入手机号', trigger: 'blur' }]);
			}
			if ('yonghu' == this.userTableName) {
				this.$set(this.rules, 'shenfenzheng', [{ required: false, validator: this.$validate.isIdCard, trigger: 'blur' }]);
			}

			this.init();
			this.sessionForm = JSON.parse(localStorage.getItem('sessionForm'))
		},
		//方法集合
		methods: {
			init() {
				if ('yonghu' == this.userTableName) {
					this.dynamicProp.xingbie = '男,女'.split(',');
				}
			},
			setSession(){
				localStorage.setItem('sessionForm',JSON.stringify(this.sessionForm))
			},
			onSubmit(formName) {
				if(`yonghu` == this.userTableName && this.sessionForm.touxiang!=null){
					this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
				}
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
							if (res.data.code == 0) {
								this.setSession()
								this.$message({
									message: '更新成功',
									type: 'success',
									duration: 1500
								});
							}
						});
					} else {
						return false;
					}
				});
			},
			yonghutouxiangHandleAvatarSuccess(fileUrls) {
				this.sessionForm.touxiang = fileUrls;
			},
			handleClick(tab, event) {
				switch(event.target.outerText) {
					case '个人中心':
						tab.$router.push('/index/center');
						break;
					case '修改密码':
						this.passwordForm = {
							password: '',
							newpassword: '',
							repassword: '',
						}
						this.$forceUpdate()
						break;
					case '我的收藏':
						localStorage.setItem('storeupType', 1);
						tab.$router.push('/index/storeup');
						break;
					default:
						tab.$router.push(`/index/${tab.name}?centerType=1`);
				}

				this.title = event.target.outerText;
			},
			async updatePassword(){
				this.$refs["passwordForm"].validate(async valid => {
					if (valid) {
						var password = "";
						if (this.sessionForm.mima) {
							password = this.sessionForm.mima;
						} else if (this.sessionForm.password) {
							password = this.sessionForm.password;
						}
						if (this.userTableName == 'yonghu') {
						}
						if (this.passwordForm.password != password) {
							this.$message.error("原密码错误");
							return;
						}
						if (this.passwordForm.newpassword != this.passwordForm.repassword) {
							this.$message.error("两次密码输入不一致");
							return;
						}
						if (this.passwordForm.newpassword == this.passwordForm.password) {
							this.$message.error("新密码与原密码相同！");
							return;
						}
						this.sessionForm.password = this.passwordForm.newpassword;
						this.sessionForm.mima = this.passwordForm.newpassword;
						this.$http.post(`${this.userTableName}/update`,this.sessionForm).then(({data})=>{
							if (data && data.code === 0) {
								this.$message({
									message: "修改密码成功,下次登录系统生效",
									type: "success",
									duration: 1500,
									onClose: () => {
									}
								});
								this.setSession()
							} else {
								this.$message.error(data.msg);
							}
						});
					}
				})
			},
			logout() {
				localStorage.clear();
				Vue.http.headers.common['Token'] = "";
				this.$router.push('/index/home');
				this.activeIndex = '0'
				localStorage.setItem('keyPath', this.activeIndex)
				this.$forceUpdate()
				this.$message({
					message: '登出成功',
					type: 'success',
					duration: 1500,
				});
			},
			hasBack(name){
				switch(name){
					case '我的收藏管理':
						return false
						break;
					default:
						return true
				}
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.center-preview {
		padding: 0 16%;
		margin: 10px auto;
		background: none;
		width: 100%;
		position: relative;
		.center-title {
			margin: 10px 0;
			color: #fff;
			background: url(http://codegen.caihongy.cn/20241127/0acd634bb5d34165a420a799b58e4f17.png) 100% 100%/cover no-repeat;
			font-weight: bold;
			font-size: 24px;
			line-height: 100px;
			text-align: center;
			height: 80px;
		}
		.center-info {
			padding: 50px 20px;
			margin: 20px auto;
			display: flex;
			border-color: #fff;
			min-height: 245px;
			flex-wrap: wrap;
			border-radius: 10px;
			box-shadow: 0 0px 0px rgba(0, 0, 0, 0.3);
			background: #EFF6FF;
			width: 100%;
			border-width: 0 0 0 260px;
			align-items: center;
			position: relative;
			border-style: solid;
			height: auto;
			.center-info-title {
				color: #333;
				display: none;
				width: 100%;
				font-size: 15px;
				border-color: #efefef;
				border-width: 0 0 1px 0;
				line-height: 44px;
				border-style: solid;
				height: 44px;
			}
			.img-box {
				top: 15%;
				left: -260px;
				width: 260px;
				font-size: 0;
				position: absolute;
				height: auto;
				img {
					border-radius: 100%;
					margin: 10px auto;
					object-fit: cover;
					display: block;
					width: 100px;
					border-color: #efefef;
					border-width: 0 0 1px 0;
					border-style: solid;
					height: 100px;
				}
			}
			.info-item1 {
				padding: 0 20px;
				left: -260px;
				bottom: 15%;
				display: flex;
				width: 260px;
				line-height: 40px;
				justify-content: center;
				position: absolute;
				height: auto;
				.icon {
					display: none;
				}
				.label {
					padding: 0 10px 0 0;
					color: #000;
					font-size: 20px;
				}
				.text {
					color: #000;
					font-size: 20px;
				}
			}
			.info-item2 {
				padding: 0 20px;
				display: flex;
				width: 33%;
				line-height: 40px;
				height: auto;
				.icon {
					display: none;
				}
				.label {
					padding: 0 10px 0 0;
					color: #000;
					font-size: 15px;
				}
				.text {
					color: #000;
					font-size: 15px;
				}
			}
			.info-item3 {
				padding: 0 20px;
				display: flex;
				width: 33%;
				line-height: 40px;
				height: auto;
				.icon {
					display: none;
				}
				.label {
					padding: 0 10px 0 0;
					color: #000;
					font-size: 15px;
				}
				.text {
					color: #000;
					font-size: 15px;
				}
			}
			.info-item4 {
				padding: 0 20px;
				display: flex;
				width: 33%;
				line-height: 40px;
				height: auto;
				.icon {
					display: none;
				}
				.label {
					padding: 0 10px 0 0;
					color: #000;
					font-size: 15px;
				}
				.text {
					color: #000;
					font-size: 15px;
				}
			}
			.info-item5 {
				padding: 0 20px;
				display: flex;
				width: 33%;
				line-height: 40px;
				height: auto;
				.icon {
					display: none;
				}
				.label {
					padding: 0 10px 0 0;
					color: #000;
					font-size: 15px;
				}
				.text {
					color: #000;
					font-size: 15px;
				}
			}
			.info-item6 {
				padding: 0 20px;
				display: flex;
				width: 33%;
				line-height: 40px;
				height: auto;
				.icon {
					display: none;
				}
				.label {
					padding: 0 10px 0 0;
					color: #000;
					font-size: 15px;
				}
				.text {
					color: #000;
					font-size: 15px;
				}
			}
		}
		.center-tabs.el-tabs {
			background: none;
			/deep/ .el-tabs__header {
				border: none;
				margin: 0;
				flex-direction: column;
				background: #fff;
				display: flex;
				width: 200px;
				border-color: #E4E7ED;
				border-width: 0;
				border-style: solid;
				height: 100%;
			}
			/deep/ .el-tabs__header .el-tabs__item {
				padding: 0 10px;
				margin: 0 0 2px;
				color: #333;
				background: #fff;
				font-weight: 500;
				font-size: 14px;
				line-height: 50px;
				position: relative;
				text-align: center;
				height: 50px;
			}
			/deep/ .el-tabs__header .el-tabs__item:hover {
				padding: 0 10px;
				margin: 0 0 2px;
				color: #fff;
				background: #157ED2;
				font-weight: 500;
				font-size: 14px;
				line-height: 50px;
				position: relative;
				text-align: center;
				height: 50px;
			}
			/deep/ .el-tabs__header .el-tabs__item.is-active {
				padding: 0 10px;
				margin: 0 0 2px;
				color: #fff;
				background: #157ED2;
				font-weight: 500;
				font-size: 14px;
				line-height: 50px;
				position: relative;
				text-align: center;
				height: 50px;
			}
			/deep/ .el-tabs__content {
				padding: 10px;
				background: none;
			}
			/deep/ .el-tabs__content .el-tab-pane {
				display: flex;
				width: 100%;
				align-items: flex-start;
			}
			& /deep/ .el-tabs__header {
				.el-tabs__nav{
					overflow: auto;
				}
				::-webkit-scrollbar {
					-webkit-appearance: none;
					width: 6px;
					height: 6px;
				}
				::-webkit-scrollbar-track {
					background: rgba(0, 0, 0, 0.1);
					border-radius: 0;
				}
				::-webkit-scrollbar-thumb {
					cursor: pointer;
					border-radius: 5px;
					background: rgba(0, 0, 0, 0.15);
					transition: color 0.2s ease;
				}
				::-webkit-scrollbar-thumb:hover {
					background: rgba(0, 0, 0, 0.3);
				}
				.el-tabs__nav-wrap {
					margin: 0;
					&::after {
						content: none;
					}
				}
				.el-tabs__active-bar {
					display: none !important;
				}
			}
			.center-preview-pv {
				.center-item.el-form-item {
					padding: 10px;
					margin: 0 0 10px;
					background: none;
					display: inline-block;
					width: 48%;
					/deep/ .el-form-item__label {
						padding: 0 5px 0 0;
						color: #000;
						font-weight: 500;
						width: 100px;
						font-size: 13px;
						line-height: 40px;
						text-align: left;
					}
					.el-form-item__content {
						margin-left: 100px;
					}
					.el-input {
						width: 100%;
					}
					.el-input /deep/ .el-input__inner {
						border: 1px solid #E2E3E5;
						border-radius: 10px;
						padding: 0 12px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #000;
						width: 100%;
						font-size: 14px;
						height: 40px;
					}
					.el-input /deep/ .el-input__inner[readonly="readonly"] {
						border: 1px solid #E2E3E5;
						cursor: not-allowed;
						border-radius: 10px;
						padding: 0 12px;
						box-shadow: 0 0 0px rgba(85, 85, 127, 0.5);
						outline: none;
						color: #000;
						background: #eee;
						width: 100%;
						font-size: 14px;
						height: 40px;
					}
					.el-select {
						width: 100%;
					}
					.el-select /deep/ .el-input__inner {
						border: 1px solid #E2E3E5;
						border-radius: 10px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #000;
						width: 100%;
						font-size: 14px;
						height: 40px;
					}
					.el-select /deep/ .is-disabled .el-input__inner {
						border: 1px solid #E2E3E5;
						cursor: not-allowed;
						border-radius: 10px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(85, 85, 127, 0.5);
						outline: none;
						color: #000;
						background: #eee;
						width: 100%;
						font-size: 14px;
						height: 40px;
					}
					.el-date-editor {
						width: 100%;
					}
					.el-date-editor /deep/ .el-input__inner {
						border: 1px solid #E2E3E5;
						border-radius: 10px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #000;
						width: 100%;
						font-size: 14px;
						height: 40px;
					}
					.el-date-editor /deep/ .el-input__inner[readonly="readonly"] {
						border: 1px solid #E2E3E5;
						cursor: not-allowed;
						border-radius: 10px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(85, 85, 127, 0.5);
						outline: none;
						color: #000;
						background: #eee;
						width: 100%;
						font-size: 14px;
						height: 40px;
					}
					/deep/ .el-upload--picture-card {
						background: transparent;
						border: 0;
						border-radius: 0;
						width: auto;
						height: auto;
						line-height: initial;
						vertical-align: middle;
					}
					/deep/ .upload .upload-img {
						border: 1px dashed #aaa;
						cursor: pointer;
						border-radius: 10px;
						color: #aaa;
						object-fit: cover;
						width: 100px;
						font-size: 32px;
						line-height: 100px;
						text-align: center;
						height: 100px;
					}
					/deep/ .el-upload-list .el-upload-list__item {
						border: 1px dashed #aaa;
						cursor: pointer;
						border-radius: 10px;
						color: #aaa;
						object-fit: cover;
						width: 100px;
						font-size: 32px;
						line-height: 100px;
						text-align: center;
						height: 100px;
						font-size: 14px;
						line-height: 1.8;
					}
					/deep/ .el-upload .el-icon-plus {
						border: 1px dashed #aaa;
						cursor: pointer;
						border-radius: 10px;
						color: #aaa;
						object-fit: cover;
						width: 100px;
						font-size: 32px;
						line-height: 100px;
						text-align: center;
						height: 100px;
					}
					/deep/ .el-upload__tip {
						color: #838fa1;
						display: none;
					}
					/deep/ .el-input__inner::placeholder {
						color: #999;
						font-size: 14px;
					}
				}
				.center-btn-item {
					padding: 0;
					margin: 0;
					.updateBtn {
						border: 0;
						cursor: pointer;
						border-radius: 4px;
						padding: 0 15px;
						margin: 0 20px 0 0;
						outline: none;
						background: #157ED2;
						display: inline-block;
						width: auto;
						font-size: 14px;
						line-height: 30px;
						height: 30px;
						.icon {
							color: rgba(255, 255, 255, 1);
							display: none;
						}
						.text {
							color: rgba(255, 255, 255, 1);
						}
					}
					.updateBtn:hover {
						background: rgba(64, 158, 255, .5);
						.icon {
							color: #fff;
						}
						.text {
							color: #fff;
						}
					}
					.closeBtn {
						border: 0px solid rgba(64, 158, 255, 1);
						cursor: pointer;
						border-radius: 4px;
						padding: 0 15px;
						margin: 0 20px 0 0;
						outline: none;
						background: #858585;
						display: inline-block;
						width: auto;
						font-size: 14px;
						line-height: 30px;
						height: 30px;
						.icon {
							color: #fff;
							display: none;
						}
						.text {
							color: #fff;
						}
					}
					.closeBtn:hover {
						opacity: 0.7;
						.icon {
							color: #fff;
						}
						.text {
							color: #fff;
						}
					}
				}
				.el-date-editor.el-input {
					width: auto;
				}
			}
		}
	}
</style>

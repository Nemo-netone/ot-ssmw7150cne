<template>
	<div>
		<div class="register-container">
			<el-form v-if="pageFlag=='register'" ref="ruleForm" class="rgs-form animate__animated animate__" :model="ruleForm" :rules="rules">
				<div class="rgs-form2">
					<div class="title">基于SSM框架的校园活动管理系统设计与实现</div>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('yonghuzhanghao')?'required':''">用户账号：</div>
						<el-input  v-model="ruleForm.yonghuzhanghao"  autocomplete="off" placeholder="用户账号"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('mima')?'required':''">密码：</div>
						<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
						<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('yonghuxingming')?'required':''">用户姓名：</div>
						<el-input  v-model="ruleForm.yonghuxingming"  autocomplete="off" placeholder="用户姓名"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
						<el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
							<el-option
								v-for="(item,index) in yonghuxingbieOptions"
								v-bind:key="index"
								:label="item"
								:value="item">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('nianling')?'required':''">年龄：</div>
						<el-input  v-model.number="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('shoujihao')?'required':''">手机号：</div>
						<el-input  v-model="ruleForm.shoujihao"  autocomplete="off" placeholder="手机号"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('shenfenzheng')?'required':''">身份证：</div>
						<el-input  v-model="ruleForm.shenfenzheng"  autocomplete="off" placeholder="身份证"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('xiangxizhuzhi')?'required':''">详细住址：</div>
						<el-input  v-model="ruleForm.xiangxizhuzhi"  autocomplete="off" placeholder="详细住址"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'">
						<div class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
						<file-upload
							tip="点击上传头像"
							action="file/upload"
							:limit="3"
							:multiple="true"
							:fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
							@change="yonghutouxiangUploadChange"
						></file-upload>
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'">
						<div class="lable" :class="changeRules('guanlizhanghao')?'required':''">管理账号：</div>
						<el-input  v-model="ruleForm.guanlizhanghao"  autocomplete="off" placeholder="管理账号"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'">
						<div class="lable" :class="changeRules('mima')?'required':''">密码：</div>
						<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'">
						<div class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
						<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'">
						<div class="lable" :class="changeRules('guanlixingming')?'required':''">管理姓名：</div>
						<el-input  v-model="ruleForm.guanlixingming"  autocomplete="off" placeholder="管理姓名"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'">
						<div class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
						<el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
							<el-option
								v-for="(item,index) in huodongguanliyuanxingbieOptions"
								v-bind:key="index"
								:label="item"
								:value="item">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'">
						<div class="lable" :class="changeRules('nianling')?'required':''">年龄：</div>
						<el-input  v-model="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'">
						<div class="lable" :class="changeRules('youxiang')?'required':''">邮箱：</div>
						<el-input  v-model="ruleForm.youxiang"  autocomplete="off" placeholder="邮箱"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'">
						<div class="lable" :class="changeRules('shoujihao')?'required':''">手机号：</div>
						<el-input  v-model="ruleForm.shoujihao"  autocomplete="off" placeholder="手机号"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'">
						<div class="lable" :class="changeRules('shenfenzheng')?'required':''">身份证：</div>
						<el-input  v-model="ruleForm.shenfenzheng"  autocomplete="off" placeholder="身份证"  type="text"  />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'">
						<div class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
						<file-upload
							tip="点击上传头像"
							action="file/upload"
							:limit="3"
							:multiple="true"
							:fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
							@change="huodongguanliyuantouxiangUploadChange"
						></file-upload>
					</el-form-item>
					<div class="register-btn">
						<div class="register-btn1">
							<button type="button" class="r-btn" @click="login()">注册</button>
						</div>
						<div class="register-btn2">
							<div class="r-login" @click="close()">已有账号，点击登录</div>
						</div>
					</div>
				</div>
				<div class="idea-box2"></div>
			</el-form>
		</div>
	</div>
</template>

<script>
	import 'animate.css'
export default {
	data() {
		return {
			ruleForm: {
			},
			forgetForm: {},
            pageFlag : '',
			tableName:"",
			rules: {},
            yonghuxingbieOptions: [],
            huodongguanliyuanxingbieOptions: [],
		};
	},
	mounted(){
		this.pageFlag = this.$route.query.pageFlag
		if(this.$route.query.pageFlag=='register'){
			
			let table = this.$storage.get("loginTable");
			this.tableName = table;
			if(this.tableName=='yonghu'){
				this.ruleForm = {
					yonghuzhanghao: '',
					mima: '',
					yonghuxingming: '',
					xingbie: '',
					nianling: '',
					shoujihao: '',
					shenfenzheng: '',
					xiangxizhuzhi: '',
					touxiang: '',
				}
			}
			if(this.tableName=='huodongguanliyuan'){
				this.ruleForm = {
					guanlizhanghao: '',
					mima: '',
					guanlixingming: '',
					xingbie: '',
					nianling: '',
					youxiang: '',
					shoujihao: '',
					shenfenzheng: '',
					touxiang: '',
				}
			}
			if ('yonghu' == this.tableName) {
				this.rules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.shoujihao = [{ required: true, message: '请输入手机号', trigger: 'blur' }]
			}
			if ('huodongguanliyuan' == this.tableName) {
				this.rules.guanlizhanghao = [{ required: true, message: '请输入管理账号', trigger: 'blur' }]
			}
			if ('huodongguanliyuan' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('huodongguanliyuan' == this.tableName) {
				this.rules.guanlixingming = [{ required: true, message: '请输入管理姓名', trigger: 'blur' }]
			}
			this.yonghuxingbieOptions = "男,女".split(',')
			this.huodongguanliyuanxingbieOptions = "男,女".split(',')
		}
	},
	created() {
	},
	destroyed() {
		  	},
	methods: {
		changeRules(name){
			if(this.rules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        yonghutouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        huodongguanliyuantouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
			if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
				this.$message.error(`用户账号不能为空`);
				return
			}
			if((!this.ruleForm.mima) && `yonghu` == this.tableName){
				this.$message.error(`密码不能为空`);
				return
			}
			if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
				this.$message.error(`两次密码输入不一致`);
				return
			}
			if((!this.ruleForm.yonghuxingming) && `yonghu` == this.tableName){
				this.$message.error(`用户姓名不能为空`);
				return
			}
			if(`yonghu` == this.tableName && this.ruleForm.nianling &&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
				this.$message.error(`年龄应输入整数`);
				return
			}
			if((!this.ruleForm.shoujihao) && `yonghu` == this.tableName){
				this.$message.error(`手机号不能为空`);
				return
			}
			if(`yonghu` == this.tableName && this.ruleForm.shoujihao &&(!this.$validate.isMobile(this.ruleForm.shoujihao))){
				this.$message.error(`手机号应输入手机格式`);
				return
			}
			if(`yonghu` == this.tableName && this.ruleForm.shenfenzheng &&(!this.$validate.checkIdCard(this.ruleForm.shenfenzheng))){
				this.$message.error(`身份证应输入身份证格式`);
				return
			}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
			if((!this.ruleForm.guanlizhanghao) && `huodongguanliyuan` == this.tableName){
				this.$message.error(`管理账号不能为空`);
				return
			}
			if((!this.ruleForm.mima) && `huodongguanliyuan` == this.tableName){
				this.$message.error(`密码不能为空`);
				return
			}
			if((this.ruleForm.mima!=this.ruleForm.mima2) && `huodongguanliyuan` == this.tableName){
				this.$message.error(`两次密码输入不一致`);
				return
			}
			if((!this.ruleForm.guanlixingming) && `huodongguanliyuan` == this.tableName){
				this.$message.error(`管理姓名不能为空`);
				return
			}
			if(`huodongguanliyuan` == this.tableName && this.ruleForm.youxiang &&(!this.$validate.isEmail(this.ruleForm.youxiang))){
				this.$message.error(`邮箱应输入邮件格式`);
				return
			}
			if(`huodongguanliyuan` == this.tableName && this.ruleForm.shoujihao &&(!this.$validate.isMobile(this.ruleForm.shoujihao))){
				this.$message.error(`手机号应输入手机格式`);
				return
			}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.register-container {
	position: relative;
	background: url(http://codegen.caihongy.cn/20241116/8d8a668935d34d8d8437886dc21403eb.jpg) no-repeat center center / 100% 100%;
	background: url(http://codegen.caihongy.cn/20241116/8d8a668935d34d8d8437886dc21403eb.jpg) no-repeat center center / 100% 100%;
	display: flex;
	width: 100%;
	min-height: 100vh;
	justify-content: center;
	align-items: center;
	position: relative !important;
	.rgs-form {
		.rgs-form2 {
		padding: 60px 60px 40px 130px;
		margin: 0 -200px 0 0;
		background: #fff;
		width: 100%;
		}
		border-radius: 0px;
		padding: 80px 0px 60px 650px;
		margin: 50px auto;
		align-content: flex-start;
		background: url(http://codegen.caihongy.cn/20241116/462d7b5907fd472db3ddc89140834fcc.png) repeat-y right top,url(http://codegen.caihongy.cn/20241116/73640fdcdf00426aaf32b7f1fa6b2e9b.jpg) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20241116/fd3faa5f723b44aaa3a986058fe31829.jpg) repeat-y center top / 100% auto;
		display: flex;
		width: 1200px;
		min-height: 660px;
		align-items: flex-start;
		position: relative;
		flex-wrap: wrap;
		height: auto;
		.title {
			padding: 0;
			margin: 0 0 20px 0;
			color: #fff;
			top: 280px;
			left: 60px;
			background: none;
			font-weight: 500;
			width: 500px;
			font-size: 24px;
			line-height: 40px;
			position: absolute;
			text-align: left;
		}
		.list-item {
			padding: 0;
			margin: 0 0 10px;
			width: 100%;
			position: relative;
			height: auto;
			/deep/ .el-form-item__content {
				display: block;
			}
			.lable {
				padding: 0 10px 0 0;
				color: #333;
				left: -130px;
				background: none;
				width: auto;
				font-size: 16px;
				line-height: 34px;
				position: absolute !important;
				text-align: right;
				min-width: 130px;
			}
			.el-input {
				width: 100%;
			}
			.el-input /deep/ .el-input__inner {
				border-radius: 8px;
				padding: 0 10px;
				color: #666;
				background: none;
				width: 100%;
				font-size: 15px;
				border-color: #b7b7b7;
				border-width: 0 0 2px;
				border-style: solid;
				height: 40px;
			}
			.el-input /deep/ .el-input__inner:focus {
				border-radius: 8px;
				padding: 0 10px;
				outline: none;
				color: #666;
				background: none;
				width: 100%;
				font-size: 15px;
				border-color: #03b6be;
				border-width: 0 0 2px;
				border-style: solid;
				height: 40px;
			}
			.el-input-number {
				width: 100%;
			}
			.el-input-number /deep/ .el-input__inner {
				text-align: center;
				border-radius: 8px;
				padding: 0 10px;
				color: #666;
				background: none;
				width: 100%;
				font-size: 15px;
				border-color: #b7b7b7;
				border-width: 0 0 2px;
				border-style: solid;
				height: 40px;
			}
			.el-input-number /deep/ .el-input__inner:focus {
				border-radius: 8px;
				padding: 0 10px;
				outline: none;
				color: #666;
				background: none;
				width: 100%;
				font-size: 15px;
				border-color: #03b6be;
				border-width: 0 0 2px;
				border-style: solid;
				height: 40px;
			}
			.el-input-number /deep/ .el-input-number__decrease {
				display: none;
			}
			.el-input-number /deep/ .el-input-number__increase {
				display: none;
			}
			.el-select {
				width: 100%;
			}
			.el-select /deep/ .el-input__inner {
				border-radius: 8px;
				padding: 0 10px;
				color: #666;
				background: none;
				width: 100%;
				font-size: 15px;
				border-color: #b7b7b7;
				border-width: 0 0 2px;
				border-style: solid;
				height: 38px;
			}
			.el-select /deep/ .el-input__inner:focus {
				border-radius: 8px;
				padding: 0 10px;
				outline: none;
				color: #666;
				background: none;
				width: 100%;
				font-size: 15px;
				border-color: #03b6be;
				border-width: 0 0 2px;
				border-style: solid;
				height: 38px;
			}
			.el-date-editor {
				width: 100%;
			}
			.el-date-editor /deep/ .el-input__inner {
				border-radius: 8px;
				padding: 0 10px 0 30px;
				color: #666;
				background: none;
				width: 100%;
				font-size: 15px;
				border-color: #b7b7b7;
				border-width: 0 0 2px;
				border-style: solid;
				height: 38px;
			}
			.el-date-editor /deep/ .el-input__inner:focus {
				border-radius: 8px;
				padding: 0 10px 0 30px;
				outline: none;
				color: #666;
				background: none;
				width: 100%;
				font-size: 15px;
				border-color: #03b6be;
				border-width: 0 0 2px;
				border-style: solid;
				height: 38px;
			}
			.el-date-editor.el-input {
				width: 100%;
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
				border: 2px solid #b7b7b7;
				cursor: pointer;
				border-radius: 0;
				color: #b7b7b7;
				background: none;
				width: 100px;
				font-size: 24px;
				line-height: 50px;
				text-align: center;
				height: 50px;
			}
			/deep/ .el-upload-list .el-upload-list__item {
				border: 2px solid #b7b7b7;
				cursor: pointer;
				border-radius: 0;
				color: #b7b7b7;
				background: none;
				width: 100px;
				font-size: 24px;
				line-height: 50px;
				text-align: center;
				height: 50px;
			}
			/deep/ .el-upload .el-icon-plus {
				border: 2px solid #b7b7b7;
				cursor: pointer;
				border-radius: 0;
				color: #b7b7b7;
				background: none;
				width: 100px;
				font-size: 24px;
				line-height: 50px;
				text-align: center;
				height: 50px;
			}
			/deep/ .el-upload__tip {
				color: #666;
				font-size: 15px;
			}
			/deep/ .el-input__inner::placeholder {
				color: #999;
				font-size: 16px;
			}
			.required {
				position: relative;
			}
			.required::after{
				color: red;
				top: 5px;
				left: 118px;
				position: inherit;
				content: "*";
				order: -1;
			}
			.editor {
				background: #fff;
				width: 100%;
				height: auto;
			}
			.editor>.avatar-uploader {
				line-height: 0;
				height: 0;
			}
		}
		.list-item.email {
			input {
				border-radius: 8px;
				padding: 0 10px;
				margin: 0;
				color: #666;
				background: none;
				flex: 1;
				width: 100%;
				font-size: 15px;
				border-color: #b7b7b7;
				border-width: 0 0 2px;
				border-style: solid;
				height: 38px;
			}
			input:focus {
				border-radius: 8px;
				padding: 0 10px;
				outline: none;
				color: #666;
				background: none;
				width: 100%;
				font-size: 15px;
				border-color: #03b6be;
				border-width: 0 0 2px;
				border-style: solid;
				height: 38px;
			}
			input::placeholder {
				color: #999;
				font-size: 16px;
			}
			button {
				border: 0px solid #e6e6e6;
				cursor: pointer;
				border-radius: 0;
				padding: 0;
				margin: 0 0 0 10px;
				color: #fff;
				background: #56cee3;
				width: 150px;
				font-size: 15px;
				height: 38px;
			}
			button:hover {
				opacity: 0.9;
			}
		}
		.register-btn {
			display: flex;
			width: 100%;
			flex-wrap: wrap;
		}
		.register-btn1 {
			margin: 10px 0 0;
			width: 100%;
			text-align: right;
			order: 2;
		}
		.register-btn2 {
			margin: 0;
			top: 400px;
			left: 60px;
			background: none;
			display: flex;
			width: 500px;
			align-items: center;
			position: absolute;
			flex-wrap: wrap;
		}
		.r-btn {
			border: 0px solid rgba(0, 0, 0, 1);
			cursor: pointer;
			padding: 0 30px;
			margin: 0 0 10px;
			color: #fff;
			font-weight: 600;
			letter-spacing: 2px;
			font-size: 22px;
			border-radius: 0;
			background: #56cee3;
			width: auto;
			text-align: center;
			min-width: 68px;
			height: 50px;
		}
		.r-btn:hover {
			border: 0px solid rgba(0, 0, 0, 1);
			opacity: 0.9;
		}
		.r-login {
			cursor: pointer;
			border: 1px solid #03b6be;
			padding: 0 20px;
			color: #03b6be;
			display: inline-block;
			width: auto;
			font-size: 15px;
			line-height: 50px;
			text-align: left;
		}
		.r-login:hover {
			opacity: 1;
		}
	}
	.idea-box2 {
		margin: 0 auto;
		background: rgba(255,255,255,.9);
		width: 540px;
		font-size: 16px;
		height: 32px;
		order: -1;
	}
}
	
	::-webkit-scrollbar {
	  display: none;
	}
</style>

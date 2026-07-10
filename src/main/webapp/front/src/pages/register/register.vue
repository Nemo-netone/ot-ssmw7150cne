<template>
	<div>

		<div class="container">
			<el-form class='rgs-form animate__animated animate__' v-if="pageFlag=='register'" ref="registerForm" :model="registerForm" :rules="rules">
				<div class="rgs-form2">
					<div class="title">基于SSM框架的校园活动管理系统设计与实现</p></div>
					<el-form-item class="list-item" v-if="tableName=='yonghu'" prop="yonghuzhanghao">
						<div class="label" :class="changeRules('yonghuzhanghao')?'required':''">用户账号：</div>
						<el-input v-model="registerForm.yonghuzhanghao"  placeholder="请输入用户账号" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'" prop="mima">
						<div class="label" :class="changeRules('mima')?'required':''">密码：</div>
						<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'" prop="mima2">
						<div class="label" :class="changeRules('mima')?'required':''">确认密码：</div>
						<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'" prop="yonghuxingming">
						<div class="label" :class="changeRules('yonghuxingming')?'required':''">用户姓名：</div>
						<el-input v-model="registerForm.yonghuxingming"  placeholder="请输入用户姓名" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'" prop="xingbie">
						<div class="label" :class="changeRules('xingbie')?'required':''">性别：</div>
						<el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
							<el-option
								v-for="(item,index) in yonghuxingbieOptions"
								:key="index"
								:label="item"
								:value="item">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'" prop="nianling">
						<div class="label" :class="changeRules('nianling')?'required':''">年龄：</div>
						<el-input v-model.number="registerForm.nianling"  placeholder="请输入年龄" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'" prop="shoujihao">
						<div class="label" :class="changeRules('shoujihao')?'required':''">手机号：</div>
						<el-input v-model="registerForm.shoujihao"  placeholder="请输入手机号" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'" prop="shenfenzheng">
						<div class="label" :class="changeRules('shenfenzheng')?'required':''">身份证：</div>
						<el-input v-model="registerForm.shenfenzheng"  placeholder="请输入身份证" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'" prop="xiangxizhuzhi">
						<div class="label" :class="changeRules('xiangxizhuzhi')?'required':''">详细住址：</div>
						<el-input v-model="registerForm.xiangxizhuzhi"  placeholder="请输入详细住址" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='yonghu'" prop="touxiang">
						<div class="label" :class="changeRules('touxiang')?'required':''">头像：</div>
						<file-upload
							tip="点击上传头像"
							action="file/upload"
							:limit="1"
							:multiple="true"
							:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
							@change="yonghutouxiangUploadChange"
						></file-upload>
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'" prop="guanlizhanghao">
						<div class="label" :class="changeRules('guanlizhanghao')?'required':''">管理账号：</div>
						<el-input v-model="registerForm.guanlizhanghao"  placeholder="请输入管理账号" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'" prop="mima">
						<div class="label" :class="changeRules('mima')?'required':''">密码：</div>
						<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'" prop="mima2">
						<div class="label" :class="changeRules('mima')?'required':''">确认密码：</div>
						<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'" prop="guanlixingming">
						<div class="label" :class="changeRules('guanlixingming')?'required':''">管理姓名：</div>
						<el-input v-model="registerForm.guanlixingming"  placeholder="请输入管理姓名" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'" prop="xingbie">
						<div class="label" :class="changeRules('xingbie')?'required':''">性别：</div>
						<el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
							<el-option
								v-for="(item,index) in huodongguanliyuanxingbieOptions"
								:key="index"
								:label="item"
								:value="item">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'" prop="nianling">
						<div class="label" :class="changeRules('nianling')?'required':''">年龄：</div>
						<el-input v-model="registerForm.nianling"  placeholder="请输入年龄" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'" prop="youxiang">
						<div class="label" :class="changeRules('youxiang')?'required':''">邮箱：</div>
						<el-input v-model="registerForm.youxiang"  placeholder="请输入邮箱" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'" prop="shoujihao">
						<div class="label" :class="changeRules('shoujihao')?'required':''">手机号：</div>
						<el-input v-model="registerForm.shoujihao"  placeholder="请输入手机号" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'" prop="shenfenzheng">
						<div class="label" :class="changeRules('shenfenzheng')?'required':''">身份证：</div>
						<el-input v-model="registerForm.shenfenzheng"  placeholder="请输入身份证" />
					</el-form-item>
					<el-form-item class="list-item" v-if="tableName=='huodongguanliyuan'" prop="touxiang">
						<div class="label" :class="changeRules('touxiang')?'required':''">头像：</div>
						<file-upload
							tip="点击上传头像"
							action="file/upload"
							:limit="1"
							:multiple="true"
							:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
							@change="huodongguanliyuantouxiangUploadChange"
						></file-upload>
					</el-form-item>
					<div class="register-btn">
						<div class="register-btn1">
							<el-button class="register_btn" type="primary" @click="submitForm('registerForm')">注册</el-button>
						</div>
						<div class="register-btn2">
							<router-link class="has_btn" to="/login">已有账号，直接登录</router-link>
						</div>
					</div>
				</div>
				<div class="idea1"></div>
				<div class="idea2"></div>
			</el-form>
		</div>
	</div>
</div>
</template>

<script>
	import 'animate.css';

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            yonghuxingbieOptions: [],
            huodongguanliyuanxingbieOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			this.tableName = this.$route.query.role;
			if(this.tableName=='yonghu'){
				this.registerForm = {
					yonghuzhanghao: '',
					mima: '',
					mima2: '',
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
				this.registerForm = {
					guanlizhanghao: '',
					mima: '',
					mima2: '',
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
				this.rules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }];
				this.requiredRules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }];
				this.requiredRules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }]
			}
			this.yonghuxingbieOptions = "男,女".split(',');
			if ('yonghu' == this.tableName) {
				this.rules.nianling = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
			}
			if ('yonghu' == this.tableName) {
				this.rules.shoujihao = [{ required: true, validator: this.$validate.isMobileNotNull, trigger: 'blur' }];
				this.requiredRules.shoujihao = [{ required: true, message: '请输入手机号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.rules.shenfenzheng = [{ required: true, validator: this.$validate.isIdCard, trigger: 'blur' }];
			}
			if ('huodongguanliyuan' == this.tableName) {
				this.rules.guanlizhanghao = [{ required: true, message: '请输入管理账号', trigger: 'blur' }];
				this.requiredRules.guanlizhanghao = [{ required: true, message: '请输入管理账号', trigger: 'blur' }]
			}
			if ('huodongguanliyuan' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('huodongguanliyuan' == this.tableName) {
				this.rules.guanlixingming = [{ required: true, message: '请输入管理姓名', trigger: 'blur' }];
				this.requiredRules.guanlixingming = [{ required: true, message: '请输入管理姓名', trigger: 'blur' }]
			}
			this.huodongguanliyuanxingbieOptions = "男,女".split(',');
			if ('huodongguanliyuan' == this.tableName) {
				this.rules.youxiang = [{ required: true, validator: this.$validate.isEmail, trigger: 'blur' }];
			}
			if ('huodongguanliyuan' == this.tableName) {
				this.rules.shoujihao = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
        // 下二随
		yonghutouxiangUploadChange(fileUrls) {
			this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
		},
		huodongguanliyuantouxiangUploadChange(fileUrls) {
			this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
		},

		// 多级联动参数


		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					var url=this.tableName+"/register";
					if(`yonghu` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if(`huodongguanliyuan` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
						this.$message.error(`两次密码输入不一致`);
						return
					}
					this.$http.post(url, this.registerForm).then(res => {
						if (res.data.code === 0) {
							this.$message({
								message: '注册成功',
								type: 'success',
								duration: 1500,
								onClose: () => {
									this.$router.push('/login');
								}
							});
						} else {
							this.$message.error(res.data.msg);
						}
					});
				} else {
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		background: url(http://codegen.caihongy.cn/20241122/dbdfddef8ece42a79916756d83a8694e.png) 100% 100%/cover no-repeat;
		display: flex;
		width: 100%;
		min-height: 100vh;
		justify-content: flex-start;
		align-items: center;
		position: relative;
		background: url(http://codegen.caihongy.cn/20241122/dbdfddef8ece42a79916756d83a8694e.png) 100% 100%/cover no-repeat;
		.rgs-form {
			border-radius: 0;
			padding: 40px 20px 20px;
			box-shadow: 0 0px 0px rgba(64, 158, 255, .8);
			margin: 0;
			z-index: 1;
			width: 50%;
			position: relative;
			height: auto;
			.rgs-form2 {
				width: 100%;
				.title {
					margin: 0 0 30px 0;
					color: #000;
					font-weight: bold;
					width: 100%;
					font-size: 30px;
					line-height: 50px;
					text-align: center;
				}
				.subtitle {
					margin: 0 0 10px 0;
					text-shadow: 4px 4px 2px rgba(64, 158, 255, .5);
					color: rgba(64, 158, 255, 1);
					width: 100%;
					font-size: 20px;
					line-height: 44px;
					text-align: center;
				}
				.list-item {
					padding: 0;
					margin: 0 auto 15px;
					width: 60%;
					height: auto;
					/deep/.el-form-item__content {
						display: flex;
						align-items: flex-start;
						.label {
							border-radius: 10px 0 0 10px;
							color: #fff;
							background: #157ED2;
							width: 100px;
							font-size: 13px;
							line-height: 50px;
							text-align: center;
						}
						
						.required {
							position: relative;
						}
						.required::after{
							color: #fff;
							top: 0;
							left: 5px;
							line-height: 55px;
							position: absolute;
							content: "*";
						}
						.el-input {
							width: calc(100% - 100px);
						}
						.el-input .el-input__inner {
							border: 1px solid #fff;
							border-radius: 0 10px 10px 0;
							padding: 0 10px;
							box-shadow: 0 0 0px rgba(64, 158, 255, .5);
							outline: none;
							color: #666;
							width: 100%;
							font-size: 14px;
							height: 50px;
						}
						.el-input .el-input__inner:focus {
							border: 1px solid #157ED2;
							border-radius: 0 10px 10px 0;
							padding: 0 10px;
							box-shadow: 0 0 0px rgba(64, 158, 255, .5);
							outline: none;
							color: #000;
							width: 100%;
							font-size: 14px;
							height: 50px;
						}
						.el-input-number {
							width: calc(100% - 100px);
						}
						.el-input-number .el-input__inner {
							text-align: left;
							border: 1px solid #fff;
							border-radius: 0 10px 10px 0;
							padding: 0 10px;
							box-shadow: 0 0 0px rgba(64, 158, 255, .5);
							outline: none;
							color: #666;
							width: 100%;
							font-size: 14px;
							height: 50px;
						}
						.el-input-number .el-input-number__decrease {
							display: none;
						}
						.el-input-number .el-input-number__increase {
							display: none;
						}
						.el-select {
							width: calc(100% - 100px);
						}
						.el-select .el-input__inner {
							border: 1px solid #fff;
							border-radius: 0 10px 10px 0;
							padding: 0 10px;
							box-shadow: 0 0 0px rgba(64, 158, 255, .5);
							outline: none;
							color: #666;
							width: 100%;
							font-size: 14px;
							height: 50px;
						}
						.el-select .el-input__inner:focus {
							border: 1px solid #157ED2;
							border-radius: 0 10px 10px 0;
							padding: 0 10px;
							box-shadow: 0 0 0px rgba(85, 170, 0, 0.5);
							color: #000;
							width: 100%;
							font-size: 14px;
							height: 50px;
						}
						.el-date-editor {
							width: calc(100% - 100px);
						}
						.el-date-editor .el-input__inner {
							border: 1px solid #fff;
							border-radius: 0 10px 10px 0;
							padding: 0 10px 0 30px;
							box-shadow: 0 0 0px rgba(64, 158, 255, .5);
							outline: none;
							color: #666;
							width: 100%;
							font-size: 14px;
							height: 50px;
						}
						.el-date-editor .el-input__inner:focus {
							border: 1px solid #157ED2;
							border-radius: 0 10px 10px 0;
							padding: 0 10px 0 30px;
							box-shadow: 0 0 0px rgba(85, 170, 0, 0.5);
							color: #000;
							width: 100%;
							font-size: 14px;
							height: 50px;
						}
						.el-upload--picture-card {
							background: transparent;
							border: 0;
							border-radius: 0;
							width: auto;
							height: auto;
							line-height: initial;
							vertical-align: middle;
						}
						.upload .upload-img {
							border: 1px dashed #157ED2;
							cursor: pointer;
							border-radius: 8px;
							margin: 0 0 0 20px;
							color: #157ED2;
							background: #fff;
							width: 100px;
							font-size: 32px;
							line-height: 100px;
							text-align: center;
							height: 100px;
						}
						.el-upload-list .el-upload-list__item {
							border: 1px dashed #157ED2;
							cursor: pointer;
							border-radius: 8px;
							margin: 0 0 0 20px;
							color: #157ED2;
							background: #fff;
							width: 100px;
							font-size: 32px;
							line-height: 100px;
							text-align: center;
							height: 100px;
							font-size: 14px;
							line-height: 1.8;
						}
						.el-upload .el-icon-plus {
							border: 1px dashed #157ED2;
							cursor: pointer;
							border-radius: 8px;
							margin: 0 0 0 20px;
							color: #157ED2;
							background: #fff;
							width: 100px;
							font-size: 32px;
							line-height: 100px;
							text-align: center;
							height: 100px;
						}
						.el-upload__tip {
							color: #838fa1;
							display: none;
						}
						.emailInput {
							border: 1px solid #fff;
							border-radius: 0 10px 10px 0;
							padding: 0 12px;
							box-shadow: 0 0 0px rgba(64, 158, 255, .5);
							margin: 0;
							outline: none;
							color: #666;
							background: #fff;
							width: 100%;
							font-size: 14px;
							height: 50px;
						}
						.emailInput:focus {
							border: 1px solid #157ED2;
							border-radius: 0 10px 10px 0;
							padding: 0 12px;
							box-shadow: 0 0 0px rgba(85, 170, 0, 0.5);
							color: #000;
							width: 100%;
							font-size: 14px;
							height: 50px;
						}
						.el-btn {
							border: 0;
							cursor: pointer;
							padding: 0;
							margin: 0 0 0 5px;
							color: #fff;
							font-size: 12px;
							line-height: 50px;
							border-radius: 10px;
							box-shadow: 0 0 0px rgba(64, 158, 255, .5);
							outline: none;
							background: #157ED2;
							width: 80px;
							height: 50px;
						}
						.el-btn:hover {
							opacity: 0.5;
						}
						
						.el-input__inner::placeholder {
							color: #999;
							font-size: 13px;
						}
						input::placeholder {
							color: #999;
							font-size: 13px;
						}
						.editor {
							border: none;
							background: #fff;
							width: calc(100% - 100px);
							height: auto;
						}
					}
				}
				.register-btn {
					margin: 0 auto;
					width: 60%;
				}
				.register-btn1 {
					width: 40%;
				}
				.register-btn2 {
					width: 100%;
					text-align: center;
				}
				.register_btn {
					border: 0;
					cursor: pointer;
					padding: 0 10px;
					margin: 20px auto 5px;
					color: #fff;
					font-weight: bold;
					display: block;
					font-size: 22px;
					border-radius: 10px;
					box-shadow: 0 0 0px rgba(64, 158, 255, .5);
					outline: none;
					background: #157ED2;
					width: 100%;
					height: 60px;
				}
				.register_btn:hover {
					opacity: 0.5;
				}
				.has_btn {
					cursor: pointer;
					padding: 0;
					color: #959595;
					display: inline-block;
					text-decoration: none;
					font-size: 12px;
					line-height: 1;
				}
				.has_btn:hover {
					opacity: 0.5;
				}
			}
			.idea1 {
				background: red;
				display: none;
				width: 100%;
				height: 40px;
			}
			.idea2 {
				background: blue;
				display: none;
				width: 100%;
				height: 40px;
			}
		}
	}
	
	::-webkit-scrollbar {
		display: none;
	}
</style>

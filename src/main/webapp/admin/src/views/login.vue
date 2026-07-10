<template>
	<div>
		<div class="login-container">
			<el-form class="login_form animate__animated animate__">
				<div class="login_form2">
					<div class="title-container">基于SSM框架的校园活动管理系统设计与实现</div>
					<div v-if="loginType==1" class="list-item">
						<div class="lable">
							账号：
						</div>
						<input placeholder="请输入账号：" name="username" type="text" v-model="rulesForm.username">
					</div>
					<div v-if="loginType==1" class="list-item">
						<div class="lable">
							密码：
						</div>
						<div class="password-box">
							<input placeholder="请输入密码：" name="password" :type="showPassword?'text':'password'" v-model="rulesForm.password">
							<span class="icon iconfont" :class="showPassword?'icon-liulan13':'icon-liulan17'" @click="showPassword=!showPassword"></span>
						</div>
					</div>

					<div class="list-item " v-if="roles.length>1">
						<div class="lable">
							角色：
						</div>
						<div prop="loginInRole" class="list-type">
							<el-radio v-if="loginType==1||(loginType==2&&item.roleName!='管理员')" v-for="item in roles" v-bind:key="item.roleName" v-model="rulesForm.role" :label="item.roleName">{{item.roleName}}</el-radio>
						</div>
					</div>

		
					<div class="login-btn">
						<div class="login-btn1">
							<el-button v-if="loginType==1" type="primary" @click="login()" class="loginInBt">登录</el-button>
						</div>
						<div class="login-btn2">
							<el-button type="primary" @click="register('huodongguanliyuan')" class="register">
								注册活动管理员							</el-button>
						</div>
						<div class="login-btn3">
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
	import menu from "@/utils/menu";
	export default {
		data() {
			return {
				verifyCheck2: false,
				flag: false,
				baseUrl:this.$base.url,
				loginType: 1,
				rulesForm: {
					username: "",
					password: "",
					role: "",
				},
				menus: [],
				roles: [],
				tableName: "",
				showPassword: false,
			};
		},
		mounted() {
			let menus = menu.list();
			this.menus = menus;

			for (let i = 0; i < this.menus.length; i++) {
				if (this.menus[i].hasBackLogin=='是') {
					this.roles.push(this.menus[i])
				}
			}

		},
		created() {

		},
		destroyed() {
		},
		components: {
		},
		methods: {

			//注册
			register(tableName){
				this.$storage.set("loginTable", tableName);
				this.$router.push({path:'/register',query:{pageFlag:'register'}})
			},
			// 登陆
			login() {

				if (!this.rulesForm.username) {
					this.$message.error("请输入用户名");
					return;
				}
				if (!this.rulesForm.password) {
					this.$message.error("请输入密码");
					return;
				}
				if(this.roles.length>1) {
					if (!this.rulesForm.role) {
						this.$message.error("请选择角色");
						return;
					}

					let menus = this.menus;
					for (let i = 0; i < menus.length; i++) {
						if (menus[i].roleName == this.rulesForm.role) {
							this.tableName = menus[i].tableName;
						}
					}
				} else {
					this.tableName = this.roles[0].tableName;
					this.rulesForm.role = this.roles[0].roleName;
				}
		
				this.loginPost()
			},
			loginPost() {
				this.$http({
					url: `${this.tableName}/login?username=${this.rulesForm.username}&password=${this.rulesForm.password}`,
					method: "post"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						this.$storage.set("Token", data.token);
						this.$storage.set("role", this.rulesForm.role);
						this.$storage.set("sessionTable", this.tableName);
						this.$storage.set("adminName", this.rulesForm.username);
						this.$router.replace({ path: "/" });
					} else {
						this.$message.error(data.msg);
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
.login-container {
	min-height: 100vh;
	position: relative;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
	background: url(http://codegen.caihongy.cn/20241116/8d8a668935d34d8d8437886dc21403eb.jpg) no-repeat center center / 100% 100%;
	background: url(http://codegen.caihongy.cn/20241116/8d8a668935d34d8d8437886dc21403eb.jpg) no-repeat center center / 100% 100%;
	display: flex;
	width: 100%;
	min-height: 100vh;
	justify-content: center;
	align-items: center;
	position: relative !important;

	.login_form {
		border-radius: 0px;
		padding: 80px 0px 30px 650px;
		margin: 0 auto;
		align-content: flex-start;
		background: url(http://codegen.caihongy.cn/20241116/462d7b5907fd472db3ddc89140834fcc.png) repeat-y right top,url(http://codegen.caihongy.cn/20241116/73640fdcdf00426aaf32b7f1fa6b2e9b.jpg) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20241116/fd3faa5f723b44aaa3a986058fe31829.jpg) repeat-y center top / 100% auto;
		display: flex;
		width: 1200px;
		min-height: 630px;
		align-items: flex-start;
		position: relative;
		flex-wrap: wrap;
		height: auto;
		.login_form2 {
			padding: 60px 80px 50px 0;
			margin: 0 -200px 0 0;
			background: #fff;
			width: 100%;
		}
		.title-container {
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
			margin: 0 0 20px;
			display: flex;
			width: calc(100% - 0px);
			align-items: center;
			position: relative;
			flex-wrap: wrap;
			.lable {
				border-radius: 8px 0 0 8px;
				padding: 0 0 0 10px;
				color: #000;
				background: #fff;
				width: 120px;
				font-size: 16px;
				line-height: 40px;
				text-align: right;
			}
			input {
				border: 1px solid #0674fc;
				border-radius: 0px;
				padding: 0 10px;
				color: #666;
				flex: 1;
				background: none;
				width: auto;
				font-size: 15px;
				border-color: #b7b7b7;
				border-width: 0 0 2px;
				border-style: solid;
				height: 40px;
			}
			input:focus {
				border-radius: 0px;
				padding: 0 10px;
				color: #666;
				flex: 1;
				background: none;
				width: 100%;
				font-size: 15px;
				border-color: #00b5bd;
				border-width: 0 0 2px;
				border-style: solid;
				height: 40px;
			}
			.password-box {
				flex: 1;
				display: flex;
				width: auto;
				position: relative;
				align-items: center;
				input {
					border-radius: 0px;
					padding: 0 10px;
					color: #666;
					flex: 1;
					background: none;
					width: auto;
					font-size: 15px;
					border-color: #b7b7b7;
					border-width: 0 0 2px;
					border-style: solid;
					height: 40px;
				}
				input:focus {
					border-radius: 0px;
					padding: 0 10px;
					color: #666;
					flex: 1;
					background: none;
					width: 100%;
					font-size: 15px;
					border-color: #00b5bd;
					border-width: 0 0 2px;
					border-style: solid;
					height: 40px;
				}
				.iconfont {
					cursor: pointer;
					z-index: 1;
					color: #e6e6e6;
					top: 0;
					font-size: 16px;
					line-height: 44px;
					position: absolute;
					right: 13px;
				}
			}
			input::placeholder {
				color: #999;
				font-size: 16px;
			}
		}
		.list-type {
			padding: 0 0px;
			margin: 0;
			background: none;
			flex: 1;
			width: calc(100% - 0px);
			line-height: 38px;
			height: auto;
			/deep/ .el-radio__input .el-radio__inner {
				border-radius: 0;
				background: rgba(53, 53, 53, 0);
				border-color: #aaa;
			}
			/deep/ .el-radio__input.is-checked .el-radio__inner {
				border-radius: 0;
				background: #00b5bd;
				border-color: #00b5bd;
			}
			/deep/ .el-radio__label {
				color: #aaa;
				font-size: 16px;
			}
			/deep/ .el-radio__input.is-checked+.el-radio__label {
				color: #00b5bd;
				font-size: 16px;
			}
		}
		.login-btn {
			padding: 0 0 0 120px;
			margin: 20px auto 0;
			display: flex;
			width: 100%;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			.login-btn1 {
				margin: 0;
				width: 100%;
				text-align: right;
			}
			.login-btn2 {
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
			.login-btn3 {
				margin: 0 0 20px;
				width: 100%;
				text-align: center;
				order: -1;
			}
			.loginInBt {
				border: 0px solid rgba(0, 0, 0, 1);
				cursor: pointer;
				border-radius: 0;
				padding: 0 30px;
				margin: 0 0 10px 0;
				color: #fff;
				background: #56cee3;
				font-weight: 500;
				letter-spacing: 4px;
				width: auto;
				font-size: 22px;
				height: 50px;
			}
			.loginInBt:hover {
				opacity: 0.9;
			}
			.register {
				border: 1px solid #fff;
				cursor: pointer;
				border-radius: 0px;
				padding: 0 10px;
				margin: 0 30px 10px 0;
				color: #fff;
				background: none;
				width: calc(33% - 30px);
				font-size: 16px;
				height: 44px;
			}
			.register:hover {
				opacity: 0.8;
			}
			.forget {
				cursor: pointer;
				border: 0;
				border-radius: 0;
				padding: 0 0px;
				margin: 0 0px 0px 0;
				color: #56cee3;
				background: none;
				width: 100%;
				font-size: 16px;
				text-align: left;
				height: 34px;
			}
			.forget:hover {
				opacity: 1;
			}
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

</style>

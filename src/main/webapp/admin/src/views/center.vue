<template>
	<div :style='{"width":"100%","padding":"20px 30px","fontSize":"15px"}'>
		<el-form
			:style='{"padding":"40px 30px","borderColor":"#eee","borderRadius":"10px","borderStyle":"solid","borderWidth":"0px 0 0","background":"#ffffff"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			label-width="180px"
		>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}'   v-if="flag=='yonghu'"  label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" readonly						placeholder="用户账号" clearable></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}'   v-if="flag=='yonghu'"  label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" 						placeholder="用户姓名" clearable></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}' v-if="flag=='yonghu'"  label="性别" prop="xingbie">
					<el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
						<el-option
							v-for="(item,index) in yonghuxingbieOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}'   v-if="flag=='yonghu'"  label="年龄" prop="nianling">
					<el-input v-model="ruleForm.nianling" 						placeholder="年龄" clearable></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}'   v-if="flag=='yonghu'"  label="手机号" prop="shoujihao">
					<el-input v-model="ruleForm.shoujihao" 						placeholder="手机号" clearable></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}'   v-if="flag=='yonghu'"  label="身份证" prop="shenfenzheng">
					<el-input v-model="ruleForm.shenfenzheng" 						placeholder="身份证" clearable></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}'   v-if="flag=='yonghu'"  label="详细住址" prop="xiangxizhuzhi">
					<el-input v-model="ruleForm.xiangxizhuzhi" 						placeholder="详细住址" clearable></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}' v-if="flag=='yonghu'" label="头像" prop="touxiang">
					<file-upload
						tip="点击上传头像"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
						@change="yonghutouxiangUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}'   v-if="flag=='huodongguanliyuan'"  label="管理账号" prop="guanlizhanghao">
					<el-input v-model="ruleForm.guanlizhanghao" readonly						placeholder="管理账号" clearable></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}'   v-if="flag=='huodongguanliyuan'"  label="管理姓名" prop="guanlixingming">
					<el-input v-model="ruleForm.guanlixingming" 						placeholder="管理姓名" clearable></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}' v-if="flag=='huodongguanliyuan'"  label="性别" prop="xingbie">
					<el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
						<el-option
							v-for="(item,index) in huodongguanliyuanxingbieOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}'   v-if="flag=='huodongguanliyuan'"  label="年龄" prop="nianling">
					<el-input v-model="ruleForm.nianling" 						placeholder="年龄" clearable></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}'   v-if="flag=='huodongguanliyuan'"  label="邮箱" prop="youxiang">
					<el-input v-model="ruleForm.youxiang" 						placeholder="邮箱" clearable></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}'   v-if="flag=='huodongguanliyuan'"  label="手机号" prop="shoujihao">
					<el-input v-model="ruleForm.shoujihao" 						placeholder="手机号" clearable></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}'   v-if="flag=='huodongguanliyuan'"  label="身份证" prop="shenfenzheng">
					<el-input v-model="ruleForm.shenfenzheng" 						placeholder="身份证" clearable></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}' v-if="flag=='huodongguanliyuan'" label="头像" prop="touxiang">
					<file-upload
						tip="点击上传头像"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
						@change="huodongguanliyuantouxiangUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}' v-if="flag=='users'" label="用户名" prop="username">
					<el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","width":"49%","padding":"0","margin":"0 0 26px 0","display":"inline-block"}' v-if="flag=='users'" label="头像" prop="image">
					<file-upload
						tip="点击上传头像"
						action="file/upload"
						:limit="1"
						:multiple="false"
						:fileUrls="ruleForm.image?ruleForm.image:''"
						@change="usersimageUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"20px 0 0"}'>
					<el-button class="btn3" :style='{"border":"0px solid #ccc","cursor":"pointer","padding":"0 10px","margin":"0 10px 0 0","color":"#fff","borderRadius":"6px","background":"#ebc78a","width":"auto","fontSize":"16px","minWidth":"110px","height":"40px"}' type="primary" @click="onUpdateHandler">
						<span class="icon iconfont icon-xihuan" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","display":"none","height":"40px"}'></span>
						提交
					</el-button>
				</el-form-item>
		</el-form>
	</div>
</template>
<script>
// 校验引入
import { 
	isIntNumer,
	isEmail,
	isMobile,
	checkIdCard,
} from "@/utils/validate";

export default {
	data() {
		return {
			ruleForm: {},
			flag: '',
			usersFlag: false,
			yonghuxingbieOptions: [],
			huodongguanliyuanxingbieOptions: [],
		};
	},
	mounted() {
		var table = this.$storage.get("sessionTable");
		this.flag = table;
		this.$http({
			url: `${this.$storage.get("sessionTable")}/session`,
			method: "get"
		}).then(({ data }) => {
			if (data && data.code === 0) {
				this.ruleForm = data.data;
			} else {
				this.$message.error(data.msg);
			}
		});
		this.yonghuxingbieOptions = "男,女".split(',')
		this.huodongguanliyuanxingbieOptions = "男,女".split(',')
	},
	methods: {
		yonghutouxiangUploadChange(fileUrls) {
			this.ruleForm.touxiang = fileUrls;
		},
		huodongguanliyuantouxiangUploadChange(fileUrls) {
			this.ruleForm.touxiang = fileUrls;
		},
		usersimageUploadChange(fileUrls) {
			this.ruleForm.image = fileUrls;
		},
		onUpdateHandler() {
			if((!this.ruleForm.yonghuzhanghao)&& 'yonghu'==this.flag){
				this.$message.error('用户账号不能为空');
				return
			}


			if((!this.ruleForm.mima)&& 'yonghu'==this.flag){
				this.$message.error('密码不能为空');
				return
			}

			if((!this.ruleForm.yonghuxingming)&& 'yonghu'==this.flag){
				this.$message.error('用户姓名不能为空');
				return
			}






			if( 'yonghu' ==this.flag && this.ruleForm.nianling&&(!isIntNumer(this.ruleForm.nianling))){
				this.$message.error(`年龄应输入整数`);
				return
			}
			if((!this.ruleForm.shoujihao)&& 'yonghu'==this.flag){
				this.$message.error('手机号不能为空');
				return
			}


			if( 'yonghu' ==this.flag && this.ruleForm.shoujihao&&(!isMobile(this.ruleForm.shoujihao))){
				this.$message.error(`手机号应输入手机格式`);
				return
			}


			if( 'yonghu' ==this.flag && this.ruleForm.shenfenzheng&&(!checkIdCard(this.ruleForm.shenfenzheng))){
				this.$message.error(`身份证应输入身份证格式`);
				return
			}




			if(this.ruleForm.touxiang!=null) {
				this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
			}
			if((!this.ruleForm.guanlizhanghao)&& 'huodongguanliyuan'==this.flag){
				this.$message.error('管理账号不能为空');
				return
			}


			if((!this.ruleForm.mima)&& 'huodongguanliyuan'==this.flag){
				this.$message.error('密码不能为空');
				return
			}

			if((!this.ruleForm.guanlixingming)&& 'huodongguanliyuan'==this.flag){
				this.$message.error('管理姓名不能为空');
				return
			}








			if( 'huodongguanliyuan' ==this.flag && this.ruleForm.youxiang&&(!isEmail(this.ruleForm.youxiang))){
				this.$message.error(`邮箱应输入邮箱格式`);
				return
			}


			if( 'huodongguanliyuan' ==this.flag && this.ruleForm.shoujihao&&(!isMobile(this.ruleForm.shoujihao))){
				this.$message.error(`手机号应输入手机格式`);
				return
			}




			if(this.ruleForm.touxiang!=null) {
				this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
			}
			if('users'==this.flag && this.ruleForm.username.trim().length<1) {
				this.$message.error(`用户名不能为空`);
				return	
			}
			if(this.flag=='users'){
				this.ruleForm.image = this.ruleForm.image.replace(new RegExp(this.$base.url,"g"),"")
			}
			this.$http({
				url: `${this.$storage.get("sessionTable")}/update`,
				method: "post",
				data: this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "修改信息成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							if(this.flag=='users'){
								this.$storage.set('headportrait',this.ruleForm.image)
							}
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
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
				padding: 0 10px 0 0;
				color: #6e6e6e;
				font-weight: 500;
				width: 180px;
				font-size: 15px;
				line-height: 40px;
				text-align: right;
			}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
		margin-left: 180px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
				border: 1px solid #E8E8E8;
				border-radius: 0px;
				padding: 0 12px;
				color: #666;
				background: #fff;
				width: 100%;
				font-size: 15px;
				min-width: 50%;
				height: 40px;
			}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
				border: 1px solid #E8E8E8;
				border-radius: 0px;
				padding: 0 10px;
				color: #666;
				background: #fff;
				width: 100%;
				font-size: 15px;
				height: 40px;
			}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
				border: 1px solid #E8E8E8;
				border-radius: 0px;
				padding: 0 10px 0 30px;
				color: #666;
				background: #fff;
				width: 100%;
				font-size: 15px;
				height: 40px;
			}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
				border: 1px solid #E8E8E8;
				cursor: pointer;
				border-radius: 0px;
				color: #666;
				background: #fff;
				width: 90px;
				font-size: 24px;
				line-height: 60px;
				text-align: center;
				height: 60px;
			}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
				border: 1px solid #E8E8E8;
				cursor: pointer;
				border-radius: 0px;
				color: #666;
				background: #fff;
				width: 90px;
				font-size: 24px;
				line-height: 60px;
				text-align: center;
				height: 60px;
			}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
				border: 1px solid #E8E8E8;
				border-radius: 0px;
				padding: 12px;
				color: #666;
				background: #fff;
				width: 100%;
				font-size: 15px;
				min-height: 150px;
				height: auto;
			}
	
	.add-update-preview .btn3 {
				border: 0px solid #ccc;
				cursor: pointer;
				border-radius: 6px;
				padding: 0 10px;
				margin: 0 10px 0 0;
				color: #fff;
				background: #ebc78a;
				width: auto;
				font-size: 16px;
				min-width: 110px;
				height: 40px;
			}
	
	.add-update-preview .btn3:hover {
				opacity: 0.8;
			}
	
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>

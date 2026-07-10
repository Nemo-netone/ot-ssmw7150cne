<template>
	<div class="home-content">
		<!-- title -->
		<div id="home-title" class="home-title animate__animated">
			<div class="titles" >
				<span>欢迎使用</span>
				{{this.$project.projectName}}
			</div>
		</div>
		<div id="news-box" class="news-box animate__animated">
			<div class="news-title">
				公告信息
			</div>
			<div class="news-list">
				<div class="news-item" v-for="(item,index) in newsList" :index="index" @click="newsDetailClick(item)">
					<div class="news-text">
						{{item.title}}
					</div>
					<div class="news-time">
						{{item.addtime}}
					</div>
				</div>
			</div>
		</div>
		<el-dialog :visible.sync="newsVisible" title="公告信息" :append-to-body="true" width="60%">
			<div style="width: 100%;text-align: center;font-size: 20px;color: #000;padding: 0 0 20px;font-weight: bold;">{{newsDetail.title}}</div>
			<div style="width: 100%;">
				<div class="ql-snow ql-editor" v-html="newsDetail.content"></div>
			</div>
		</el-dialog>
	
		<!-- echarts -->
	</div>
</template>
<script>
import 'animate.css'
//0
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
			newsList: [],
			newsDetail: {},
			newsVisible: false,
		};
	},
	mounted(){
		this.init();
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
	},
	computed: {
		avatar(){
			return this.$storage.get('headportrait')?this.$storage.get('headportrait'):''
		},
	},
	methods:{
		handleScroll() {
			let arr = [
				{id:'home-title',css:'animate__'},
				{id:'news-box',css:'animate__'},
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
		init(){
			if(this.$storage.get('Token')){
				this.$http({
					url: `${this.$storage.get('sessionTable')}/session`,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code != 0) {
						router.push({ name: 'login' })
					}
				});
			}else{
				router.push({ name: 'login' })
			}
			this.getNewsList()
		},
		getNewsList(){
			let params = {
				page: 1,
				limit: 6,
				sort: 'addtime',
				order: 'desc',
			}
			this.$http({
				url: `news/list`,
				method: "get",
				params: params
			}).then(res => {
				if(res.data&&res.data.code==0){
					this.newsList = res.data.data.list
				}
			});
		},
		newsDetailClick(row){
			this.newsDetail = row
			this.newsVisible = true
		},
	}
};
</script>
<style lang="scss" scoped>
	.home-content {
		padding: 10px 30px 40px;
		background: url(http://codegen.caihongy.cn/20241117/128d431588c94c338bdc03f63de3eef9.png) no-repeat center top / cover;
		display: flex;
		width: 100%;
		min-height: 100vh;
		flex-wrap: wrap;
		.home-title {
			border-radius: 5px;
			padding: 10px 0;
			box-shadow: 0 0px 0px rgba(0,0,0,.3);
			margin: 10px 0;
			background: none;
			display: flex;
			width: 100%;
			justify-content: center;
			align-items: center;
			transition: 0.3s;
			.titles {
				padding: 0 0 0 12px;
				color: #03b6be;
				font-weight: 600;
				font-size: 26px;
				line-height: 44px;
				span {
				}
			}
		}
		.home-title:hover {
			transform: translate3d(0, 0px, 0);
			z-index: 1;
			background: rgba(255,255,255,.12);
		}
		.news-box {
			border: 0px solid #ccc;
			padding: 0;
			margin: 10px;
			display: block;
			transition: 0.3s;
			border-radius: 10px;
			box-shadow: 0 0px 0px rgba(0,0,0,.3);
			flex-direction: column;
			background: #fff;
			flex: 1;
			width: calc(33% - 20px);
			justify-content: center;
			align-items: center;
			order: 2;
			.news-title {
				padding: 0 20px;
				margin: 0 0 10px;
				color: #fff;
				font-weight: 600;
				font-size: 16px;
				border-color: #e6e6e6;
				line-height: 60px;
				border-radius: 10px 10px 0 0;
				background: #03b6be;
				width: 100%;
				border-width: 0px;
				border-style: solid;
				text-align: left;
			}
			.news-list {
				margin: 0 auto;
				flex-direction: column;
				display: flex;
				width: 92%;
				justify-content: space-between;
				align-items: center;
			}
			.news-item {
				cursor: pointer;
				border-radius: 10px;
				padding: 12px 10px;
				margin: 0 0 10px;
				display: flex;
				width: 100%;
				border-color: #ddd;
				border-width: 0 0 1px;
				justify-content: space-between;
				align-items: center;
				border-style:  solid;
				.news-text {
					overflow: hidden;
					color: #000;
					white-space: nowrap;
					font-weight: 500;
					width: 100%;
					font-size: 15px;
					text-overflow: ellipsis;
				}
				.news-time {
					color: #999;
					display: none;
					font-size: 14px;
				}
			}
		}
		.news-box:hover {
			transform: translate3d(0, 0px, 0);
		}
	}
	
	.echarts-flag-2 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 10px 20px;
		background: rebeccapurple;
	
		&>div {
			width: 32%;
			height: 300px;
			margin: 10px 0;
			background: rgba(255,255,255,.1);
			border-radius: 8px;
			padding: 10px 20px;
		}
	}
	.animate__animated {
		animation-fill-mode: none;
	}
</style>

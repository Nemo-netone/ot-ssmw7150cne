<template>
	<div class="home-preview">




		<!-- 新闻资讯 -->
		<div id="animate_newsnews" class="news animate__animated">
			<div class="news_title_box">
				<span class="news_title">公告信息</span>
				<span class="news_subhead">{{'news'.toUpperCase()}}</span>
			</div>
			<div v-if="newsList.length" class="list list22 index-pv1">
				<div class="top-list">
					<template v-for="(item,index) in newsList">
						<div v-if="index < 3" class="list-item animation-box" @click="toDetail('newsDetail', item)">
							<img :src="baseUrl + item.picture" alt="" />
							<div class="infoBox">
								<div class="name">{{item.title}}</div>
								<div class="time_item">
									<span class="icon iconfont icon-shijian21"></span>
									<span class="label">发布时间：</span>
									<span class="text">{{item.addtime.split(' ')[0]}}</span>
								</div>
								<div class="publisher_item">
									<span class="icon iconfont icon-geren16"></span>
									<span class="label">发布人：</span>
									<span class="text">{{item.name}}</span>
								</div>
								<div class="like_item">
									<span class="icon iconfont icon-zan10"></span>
									<span class="label">点赞数：</span>
									<span class="text">{{item.thumbsupnum}}</span>
								</div>
								<div class="collect_item">
									<span class="icon iconfont icon-shoucang10"></span>
									<span class="label">收藏量：</span>
									<span class="text">{{item.storeupnum}}</span>
								</div>
								<div class="view_item">
									<span class="icon iconfont icon-chakan9"></span>
									<span class="label">点击量：</span>
									<span class="text">{{item.clicknum}}</span>
								</div>
							</div>
						</div>
					</template>
				</div>
				<div class="list-body">
					<template v-for="(item,index) in newsList">
						<div v-if="index > 2" class="list-item animation-box" @click="toDetail('newsDetail', item)">
							<img :src="baseUrl + item.picture" alt="" />
							<div class="infoBox">
								<div class="name">{{item.title}}</div>
								<div class="time_item">
									<span class="icon iconfont icon-shijian21"></span>
									<span class="label">发布时间：</span>
									<span class="text">{{item.addtime}}</span>
								</div>
								<div class="publisher_item">
									<span class="icon iconfont icon-geren16"></span>
									<span class="label">发布人：</span>
									<span class="text">{{item.name}}</span>
								</div>
								<div class="like_item">
									<span class="icon iconfont icon-zan10"></span>
									<span class="label">点赞数：</span>
									<span class="text">{{item.thumbsupnum}}</span>
								</div>
								<div class="collect_item">
									<span class="icon iconfont icon-shoucang10"></span>
									<span class="label">收藏量：</span>
									<span class="text">{{item.storeupnum}}</span>
								</div>
								<div class="view_item">
									<span class="icon iconfont icon-chakan9"></span>
									<span class="label">点击量：</span>
									<span class="text">{{item.clicknum}}</span>
								</div>
							</div>
						</div>
					</template>
				</div>
			</div>
			<div class="moreBtn" @click="moreBtn('news')">
				<span class="text">查看更多</span>
				<i class="icon iconfont icon-gengduo1"></i>
			</div>
		</div>
		<!-- 新闻资讯 -->
		<!-- 特价商品 -->
		<div id="animate_listhuodongxinxi" class="lists animate__animated">
			<div class="list_title_box">
				<span class="list_title">活动信息展示</span>
				<span class="list_subhead">{{'huodongxinxi'.toUpperCase()}} SHOW</span>
			</div>
			<!-- 样式一 -->
			<div class="list list1 index-pv1">
				<div v-for="(item,index) in huodongxinxiList" :key="index" @click="toDetail('huodongxinxiDetail', item)" class="list-item animation-box">
					<img v-if="preHttp(item.huodongtupian)" :src="item.huodongtupian.split(',')[0]" alt="" />
					<img v-else :src="baseUrl + (item.huodongtupian?item.huodongtupian.split(',')[0]:'')" alt="" />
					<div class="name line1">{{item.huodongmingcheng}}</div>
					<div class="name line1">{{item.huodongfenlei}}</div>
					<div class="name line1">{{item.huodongdidian}}</div>
				
					<div class="time_item">
						<span class="icon iconfont icon-shijian21"></span>
						<span class="label">发布时间：</span>
						<span class="text">{{item.addtime}}</span>
					</div>
					<div class="like_item">
						<span class="icon iconfont icon-zan10"></span>
						<span class="label">点赞数：</span>
						<span class="text">{{item.thumbsupnum}}</span>
					</div>
					<div class="collect_item">
						<span class="icon iconfont icon-shoucang10"></span>
						<span class="label">收藏量：</span>
						<span class="text">{{item.storeupnum}}</span>
					</div>
				</div>
			</div>
			<div class="moreBtn" @click="moreBtn('huodongxinxi')">
				<span class="text">查看更多</span>
				<i class="icon iconfont icon-gengduo1"></i>
			</div>
	

		</div>
		<!-- 特价商品 -->
	</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

	export default {
		//数据集合
		data() {
			return {
				baseUrl: '',
				newsList: [],

				huodongxinxiList: [],




			}
		},
		created() {
			this.baseUrl = this.$config.baseUrl;
			this.getNewsList();
			this.getList();
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
			setTimeout(()=>{
				this.handleScroll()
			},100)
			
			this.swiperChanges()
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.handleScroll)
		},
		//方法集合
		methods: {
			swiperChanges() {
				setTimeout(()=>{
				},750)
			},


			handleScroll() {
				let arr = [
					{id:'about',css:'animate__'},
					{id:'system',css:'animate__'},
					{id:'animate_listhuodongxinxi',css:'animate__'},
					{id:'animate_newsnews',css:'animate__'},
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
			preHttp(str) {
				return str && str.substr(0,4)=='http';
			},
			getNewsList() {
				let data = {
					page: 1,
					limit: 6,
					sort: 'addtime',
					order: 'desc'
				}
				this.$http.get('news/list', {params: data}).then(res => {
					if (res.data.code == 0) {
						this.newsList = res.data.data.list;
					
					}
				});
			},
			getList() {
				let autoSortUrl = "";
				let data = {}
			
				data = {
					page: 1,
					limit: 10,
				}

				this.$http.get('huodongxinxi/list', {params: data}).then(res => {
					if (res.data.code == 0) {
						this.huodongxinxiList = res.data.data.list;
					}
				});
			},
			toDetail(path, item) {
				this.$router.push({path: '/index/' + path, query: {id: item.id}});
			},
			moreBtn(path) {
				this.$router.push({path: '/index/' + path});
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		padding: 0 16%;
		margin: 20px auto;
		flex-direction: column;
		display: flex;
		width: 100%;
		.news {
			border-radius: 10px;
			padding: 0 20px;
			margin: 0 0 20px;
			background: #fff;
			position: relative;
			order: 3;
			.news_title_box {
				margin: 0px auto;
				background: none;
				width: 100%;
				line-height: 80px;
				text-align: left;
				.news_title {
					color: #157ED2;
					font-weight: bold;
					font-size: 26px;
				}
				.news_subhead {
					margin: 0 0 10px;
					color: #999;
					display: none;
					width: 100%;
					font-size: 20px;
					line-height: 1.5;
					text-align: center;
				}
			}
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
			.list22 {
				padding: 10px;
				width: 100%;
				height: auto;
				.top-list {
					display: flex;
					width: 100%;
					justify-content: space-between;
					flex-wrap: wrap;
					height: auto;
					.list-item {
						cursor: pointer;
						border-radius: 10px;
						overflow: hidden;
						display: flex;
						width: 31%;
						position: relative;
						height: auto;
						img {
							margin: 0 0 0 auto;
							z-index: -1;
							object-fit: cover;
							display: block;
							width: 50%;
							height: 180px;
							order: 2;
						}
						.infoBox {
							padding: 20px 20% 20px 0;
							flex-direction: column;
							background: linear-gradient( 90deg, #FADC95 0%, rgba(209,220,222,0) 100%);
							display: flex;
							width: 70%;
							justify-content: space-around;
							position: absolute;
							order: 1;
							height: 100%;
							.name {
								padding: 0 10px;
								overflow: hidden;
								color: #323232;
								display: -webkit-box;
								font-size: 16px;
								line-height: 1.5;
								text-overflow: ellipsis;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 2;
							}
							.time_item {
								padding: 0 10px;
								.icon {
									margin: 0 2px 0 0;
									color: #fff;
									display: none;
									font-size: 12px;
									line-height: 1.5;
								}
								.label {
									color: #666;
									display: none;
									font-size: 12px;
									line-height: 1.5;
								}
								.text {
									color: #323232;
									font-size: 14px;
									line-height: 1.5;
								}
							}
							.publisher_item {
								padding: 0 10px;
								display: none;
								.icon {
									margin: 0 2px 0 0;
									color: #fff;
									font-size: 12px;
									line-height: 1.5;
								}
								.label {
									color: #666;
									font-size: 12px;
									line-height: 1.5;
								}
								.text {
									color: #fff;
									font-size: 12px;
									line-height: 1.5;
								}
							}
							.like_item {
								padding: 0 10px;
								display: none;
								.icon {
									margin: 0 2px 0 0;
									color: #fff;
									font-size: 12px;
									line-height: 1.5;
								}
								.label {
									color: #666;
									font-size: 12px;
									line-height: 1.5;
								}
								.text {
									color: #fff;
									font-size: 12px;
									line-height: 1.5;
								}
							}
							.collect_item {
								padding: 0 10px;
								display: none;
								.icon {
									margin: 0 2px 0 0;
									color: #fff;
									font-size: 12px;
									line-height: 1.5;
								}
								.label {
									color: #666;
									font-size: 12px;
									line-height: 1.5;
								}
								.text {
									color: #fff;
									font-size: 12px;
									line-height: 1.5;
								}
							}
							.view_item {
								padding: 0 10px;
								display: none;
								.icon {
									margin: 0 2px 0 0;
									color: #fff;
									font-size: 12px;
									line-height: 1.5;
								}
								.label {
									color: #666;
									font-size: 12px;
									line-height: 1.5;
								}
								.text {
									color: #fff;
									font-size: 12px;
									line-height: 1.5;
								}
							}
						}
					}
				}
				.list-body {
					display: flex;
					width: 100%;
					justify-content: space-between;
					flex-wrap: wrap;
					height: auto;
					.list-item {
						margin: 20px 0 0 0;
						display: flex;
						width: 31%;
						border-color: #F2F3F7;
						border-width: 0 0 1px;
						border-style: solid;
						height: auto;
						img {
							object-fit: cover;
							display: none;
							width: 150px;
							height: 131px;
						}
						.infoBox {
							padding: 10px;
							overflow: hidden;
							flex: 1;
							display: flex;
							flex-wrap: wrap;
							height: auto;
							.name {
								padding: 0;
								overflow: hidden;
								color: #323232;
								display: -webkit-box;
								width: 100%;
								font-size: 16px;
								line-height: 1.5;
								text-overflow: ellipsis;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 1;
							}
							.time_item {
								padding: 10px 0 0;
								width: 100%;
								.icon {
									margin: 0 2px 0 0;
									color: #8C8C8C;
									font-size: 14px;
									line-height: 1.5;
								}
								.label {
									color: #666;
									display: none;
									font-size: 12px;
									line-height: 1.5;
								}
								.text {
									color: #8C8C8C;
									font-size: 14px;
									line-height: 1.5;
								}
							}
							.publisher_item {
								padding: 0 10px;
								display: none;
								.icon {
									margin: 0 2px 0 0;
									color: #666;
									font-size: 12px;
									line-height: 1.5;
								}
								.label {
									color: #666;
									font-size: 12px;
									line-height: 1.5;
								}
								.text {
									color: #666;
									font-size: 12px;
									line-height: 1.5;
								}
							}
							.like_item {
								padding: 10px 15px 0 0;
								.icon {
									margin: 0 2px 0 0;
									color: #323232;
									font-size: 14px;
									line-height: 1.5;
								}
								.label {
									color: #666;
									display: none;
									font-size: 14px;
									line-height: 1.5;
								}
								.text {
									color: #323232;
									font-size: 14px;
									line-height: 1.5;
								}
							}
							.collect_item {
								padding: 10px 15px 0 0;
								.icon {
									margin: 0 2px 0 0;
									color: #323232;
									font-size: 14px;
									line-height: 1.5;
								}
								.label {
									color: #666;
									display: none;
									font-size: 12px;
									line-height: 1.5;
								}
								.text {
									color: #323232;
									font-size: 14px;
									line-height: 1.5;
								}
							}
							.view_item {
								padding: 10px 15px 0 0;
								.icon {
									margin: 0 2px 0 0;
									color: #323232;
									font-size: 14px;
									line-height: 1.5;
								}
								.label {
									color: #666;
									display: none;
									font-size: 12px;
									line-height: 1.5;
								}
								.text {
									color: #323232;
									font-size: 14px;
									line-height: 1.5;
								}
							}
						}
					}
				}
			}
			.moreBtn {
				border: 0;
				margin: 0px auto;
				top: 0;
				background: none;
				display: block;
				width: 80px;
				line-height: 80px;
				position: absolute;
				right: 20px;
				text-align: center;
				.text {
					color: #9E9E9E;
					font-size: 14px;
				}
				.icon {
					color: #9E9E9E;
					font-size: 14px;
				}
			}
		}
		.lists {
			border-radius: 10px;
			padding: 0 20px;
			margin: 0 0 20px;
			background: #fff;
			position: relative;
			order: 2;
			.list_title_box {
				margin: 0px auto;
				background: none;
				width: 100%;
				line-height: 80px;
				text-align: left;
				.list_title {
					color: #157ED2;
					font-weight: bold;
					font-size: 26px;
				}
				.list_subhead {
					margin: 0 0 10px;
					color: #999;
					display: none;
					width: 100%;
					font-size: 20px;
					line-height: 1.5;
					text-align: center;
				}
			}
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
			.list1 {
				padding: 0 0;
				background: #fff;
				display: flex;
				width: 100%;
				flex-wrap: wrap;
				height: auto;
				.list-item {
					margin: 10px;
					background: none;
					display: flex;
					width: calc(20% - 20px);
					justify-content: space-between;
					position: relative;
					flex-wrap: wrap;
					height: auto;
					img {
						border-radius: 10px;
						object-fit: cover;
						display: block;
						width: 100%;
						height: 150px;
					}
					.name {
						padding: 10px 0 0;
						color: #555555;
						width: 100%;
						font-size: 16px;
						line-height: 1.5;
					}
					.price {
						padding: 10px 0;
						color: #f00;
						width: 100%;
						font-size: 13px;
						line-height: 1.5;
					}
					.time_item {
						padding: 0 10px;
						display: none;
						.icon {
							margin: 0 2px 0 0;
							color: #666;
							font-size: 12px;
							line-height: 1.5;
						}
						.label {
							color: #666;
							font-size: 12px;
							line-height: 1.5;
						}
						.text {
							color: #666;
							font-size: 12px;
							line-height: 1.5;
						}
					}
					.publisher_item {
						padding: 0 10px;
						display: none;
						.icon {
							margin: 0 2px 0 0;
							color: #666;
							font-size: 12px;
							line-height: 1.5;
						}
						.label {
							color: #666;
							font-size: 12px;
							line-height: 1.5;
						}
						.text {
							color: #666;
							font-size: 12px;
							line-height: 1.5;
						}
					}
					.like_item {
						border-radius: 5px;
						padding: 0 0 0 10px;
						overflow: hidden;
						background: #FDD922;
						display: flex;
						.icon {
							padding: 0 5px 0 0;
							margin: 0;
							color: #000;
							font-size: 14px;
							line-height: 1.5;
						}
						.label {
							color: #666;
							display: none;
							font-size: 12px;
							line-height: 1.5;
						}
						.text {
							padding: 0 10px;
							color: #fff;
							background: #108BEA;
							flex: 1;
							font-size: 14px;
							line-height: 1.5;
						}
					}
					.collect_item {
						border-radius: 5px;
						padding: 0 0 0 10px;
						overflow: hidden;
						background: #FDD922;
						display: flex;
						.icon {
							padding: 0 5px 0 0;
							margin: 0;
							color: #000;
							font-size: 14px;
							line-height: 1.5;
						}
						.label {
							color: #666;
							display: none;
							font-size: 12px;
							line-height: 1.5;
						}
						.text {
							padding: 0 10px;
							color: #fff;
							background: #108BEA;
							flex: 1;
							font-size: 14px;
							line-height: 1.5;
						}
					}
					.view_item {
						border-radius: 5px;
						padding: 0 0 0 10px;
						overflow: hidden;
						background: #FDD922;
						display: flex;
						.icon {
							padding: 0 5px 0 0;
							margin: 0;
							color: #000;
							font-size: 14px;
							line-height: 1.5;
						}
						.label {
							color: #666;
							display: none;
							font-size: 12px;
							line-height: 1.5;
						}
						.text {
							padding: 0 10px;
							color: #fff;
							background: #108BEA;
							flex: 1;
							font-size: 14px;
							line-height: 1.5;
						}
					}
				}
			}
			.moreBtn {
				border: 0;
				margin: 0px auto;
				top: 0;
				background: none;
				display: block;
				width: 80px;
				line-height: 80px;
				position: absolute;
				right: 20px;
				text-align: center;
				.text {
					color: #9E9E9E;
					font-size: 14px;
				}
				.icon {
					color: #9E9E9E;
					font-size: 14px;
				}
			}
		}
	}
</style>

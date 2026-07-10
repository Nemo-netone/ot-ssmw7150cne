<template>
	<div>
		<div class="breadcrumb-preview">
			<el-breadcrumb :separator="'/'">
				<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
				<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index"><a>{{item.name}}</a></el-breadcrumb-item>
			</el-breadcrumb>
		</div>
	
		<div class="news-preview-pv">
			<el-form :inline="true" :model="formSearch" class="list-form-pv">
				<el-form-item class="search-item">
					<el-input v-model="title" placeholder="标题"></el-input>
				</el-form-item>
				<el-button class="search-btn" type="primary" @click="getNewsList(1)">
					<span class="icon iconfont icon-chakan14"></span>
					搜索
				</el-button>
			</el-form>
			
			<!-- category -->
			<div class="category-list">
				<div class="item" @click="categoryClick(0)" :class="categoryIndex == 0 ? 'active' : ''">全部</div>
				<div v-for="(item,index) in categoryList" @click="categoryClick(index+1)" :key="index" class="item" :class="categoryIndex == index+1 ? 'active' : ''">{{item.typename}}</div>
			</div>
			<div class="list12">
				<div class="list-item1" @click="toNewsDetail(newsList[0])">
					<div class="img">
						<img :src="baseUrl + newsList[0].picture" alt="">
					</div>
					<div class="infoBox">
						<div class="name">{{newsList[0].title}}</div>
						<div class="desc">{{newsList[0].introduction}}</div>
						<div class="infoCenter">
							<div class="time_item">
								<span class="icon iconfont icon-shijian21"></span>
								<span class="label">发布时间：</span>
								<span class="text">{{newsList[0].addtime}}</span>
							</div>
							<div class="publisher_item">
								<span class="icon iconfont icon-geren16"></span>
								<span class="label">发布人：</span>
								<span class="text">{{newsList[0].name}}</span>
							</div>
							<div class="like_item">
								<span class="icon iconfont icon-zan10"></span>
								<span class="label">点赞数：</span>
								<span class="text">{{newsList[0].thumbsupnum}}</span>
							</div>
							<div class="collect_item">
								<span class="icon iconfont icon-shoucang10"></span>
								<span class="label">收藏量：</span>
								<span class="text">{{newsList[0].storeupnum}}</span>
							</div>
							<div class="view_item">
								<span class="icon iconfont icon-chakan9"></span>
								<span class="label">点击量：</span>
								<span class="text">{{newsList[0].clicknum}}</span>
							</div>
						</div>
						<div class="more_btn">
							<span class="text">查看更多</span>
							<span class="icon iconfont icon-gengduo1"></span>
						</div>
					</div>
				</div>
				<div class="list-body">
					<div class="list-body-left">
						<div v-if="index>0&&index<=Number(3)" v-for="(item,index) in newsList" :key="index" class="list-item" @click="toNewsDetail(item)">
							<div class="img">
								<img :src="baseUrl + item.picture" alt="">
							</div>
							<div class="name">{{item.title}}</div>
						</div>
					</div>
					<div class="list-body-right">
						<div v-if="index>Number(3)&&index<=Number(4)" v-for="(item,index) in newsList" :key="index" class="list-item" @click="toNewsDetail(item)">
							<div class="infoBox">
								<div class="name">{{item.title}}</div>
								<div class="desc">{{item.introduction}}</div>
							</div>
							<div class="time_item">
								<div class="day">{{item.addtime.split(' ')[0].split('-')[1]}}-{{item.addtime.split(' ')[0].split('-')[2]}}</div>
								<div class="year">{{item.addtime.split(' ')[0].split('-')[0]}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<el-pagination
				background
				id="pagination" class="pagination"
				:pager-count="7"
				:page-size="pageSize"
				:page-sizes="pageSizes"
				prev-text="<"
				next-text=">"
				:hide-on-single-page="true"
				:layout='["total","prev","pager","next"].join()'
				:total="total"
				@current-change="curChange"
				@prev-click="prevClick"
				@next-click="nextClick"
				></el-pagination>

			<!-- 热门信息 -->
			<div class="hot">
				<div class="hot-title">热门信息</div>
				<div class="hot-list">
					<div class="hot-item" v-for="item in hotList" :key="item.id" @click="toNewsDetail(item)">
						<img :src="baseUrl + item.picture" alt="">
						<div class="hot-name">{{ item.title }}</div>
						<div class="hot-time">{{item.addtime}}</div>
					</div>
				</div>
			</div>
			<!-- 最新动态 -->
			<div class="news">
				<div class="news-title">最新动态</div>
				<div class="news-list">
					<div class="news-item" v-for="item in recommendList" :key="item.id" @click="toNewsDetail(item)">
						<img :src="baseUrl + item.picture" alt="">
						<div class="news-name">{{ item.title }}</div>
						<div class="news-time">{{item.addtime}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		//数据集合
		data() {
			return {
				baseUrl: this.$config.baseUrl,
				breadcrumbItem: [
				  {
					name: '公告信息'
				  }
				],
				newsList: [],
				total: 1,
				pageSize: 10,
				pageSizes: [],
				totalPage: 1,
				layouts: '',
				title: '',
				categoryIndex: 0,
				categoryList: [],
				hotList: [],
				recommendList: [],
			}
		},
		created() {
			this.getCategoryList()
			
			this.getHotList()
			this.getRecommendList()
		},
		//方法集合
		methods: {
			getCategoryList(){
				this.$http.get('newstype/list', {}).then(res => {
					if (res.data.code == 0) {
						this.categoryList = res.data.data.list;
						this.getNewsList(1);
					}
				});
			},
			categoryClick(index) {
				this.categoryIndex = index
				this.getNewsList()
			},
			getNewsList(page) {
				let params = {page, limit: this.pageSize,sort:'addtime',order:'desc'};
				let searchWhere = {};
				if(this.title != '') searchWhere.title = '%' + this.title + '%';
				if(this.categoryIndex!=0){
					searchWhere.typename = this.categoryList[this.categoryIndex - 1].typename
				}
				this.$http.get('news/list', {params: Object.assign(params, searchWhere)}).then(res => {
					if (res.data.code == 0) {
						this.newsList = res.data.data.list;
						this.total = res.data.data.total;
						this.pageSize = Number(res.data.data.pageSize);
						this.totalPage = res.data.data.totalPage;
						if(this.pageSizes.length==0){
							this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
						}
					}
				});
			},
			getHotList(){
				let params = {page:1, limit: 4,sort:'addtime',order:'desc'};
				this.$http.get('news/autoSort', {params: params}).then(res => {
					if (res.data.code == 0) {
						this.hotList = res.data.data.list;
					}
				});
			},
			getRecommendList(){
				let url = 'news/autoSort'
				if(localStorage.getItem('frontToken')){
					url = 'news/autoSort2'
				}
				let params = {page:1, limit: 4,sort:'addtime',order:'desc'};
				this.$http.get(url, {params: params}).then(res => {
					if (res.data.code == 0) {
						this.recommendList = res.data.data.list;
					}
				});
			},
			curChange(page) {
				this.getNewsList(page);
			},
			prevClick(page) {
				this.getNewsList(page);
			},
			nextClick(page) {
				this.getNewsList(page);
			},
			toNewsDetail(item) {
				this.$router.push({path: '/index/newsDetail', query: {id: item.id}});
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.news-preview-pv {
				padding: 0 16%;
				margin: 10px auto;
				background: none;
				width: 100%;
				position: relative;
				.list-form-pv {
						padding: 10px;
						background: none;
						display: flex;
						width: 100%;
						justify-content: center;
						align-items: center;
						flex-wrap: wrap;
						height: auto;
						.search-item {
								margin: 0 10px;
								.el-input {
										width: 100%;
									}
				.el-input /deep/ .el-input__inner {
										border: 0;
										border-radius: 30px;
										padding: 0 10px;
										margin: 0;
										outline: none;
										color: #333;
										width: 200px;
										font-size: 14px;
										line-height: 40px;
										height: 40px;
									}
			}
			.search-btn {
								cursor: pointer;
								border: 0;
								border-radius: 30px;
								padding: 0px 20px;
								margin: 0 10px 0 0;
								outline: none;
								color: #333;
								background: #FDD922;
								width: auto;
								font-size: 14px;
								line-height: 40px;
								height: 40px;
								.icon {
										margin: 0 10px 0 0;
										color: #fff;
										display: none;
										font-size: 14px;
									}
			}
		}
		.category-list {
						padding: 10px;
						background: none;
						display: flex;
						width: 100%;
						justify-content: center;
						height: auto;
						.item {
								cursor: pointer;
								border-radius: 5px;
								margin: 0 10px 0 0;
								color: #157ED2;
								background: #fff;
								width: 72px;
								font-size: 14px;
								line-height: 50px;
								text-align: center;
							}
			
			.item:hover {
								color: #fff;
								background: #157ED2;
							}
			
			.item.active {
								color: #fff;
								background: #157ED2;
							}
		}
		.list12 {
						border-radius: 10px;
						padding: 10px 10px 20px;
						margin: 0 0 20px;
						background: #fff;
						width: 100%;
						.list-item1 {
								border: 1px solid #E6E6E6;
								border-radius: 10px;
								padding: 20px;
								margin: 0 auto;
								overflow: hidden;
								max-width: 100%;
								background: #F7F7F7;
								width: 100%;
								border-width: 0;
								transition: all 0.6s;
								.img {
										max-height: 400px;
										overflow: hidden;
										width: 44%;
										float: left;
										height: 364px;
										img {
												object-fit: cover;
												width: 100%;
												transition: all 0.6s;
												height: 364px;
											}
				}
				.infoBox {
										padding: 52px 32px 0 30px;
										overflow: hidden;
										width: 55%;
										box-sizing: border-box;
										float: left;
										.name {
												color: #333;
												font-weight: 600;
												font-size: 20px;
												line-height: 36px;
											}
					.desc {
												margin: 15px 0 0 0;
												overflow: hidden;
												color: #666;
												font-weight: 400;
												display: -webkit-box;
												font-size: 14px;
												line-height: 32px;
												text-overflow: ellipsis;
												position: relative;
												-webkit-box-orient: vertical;
												-webkit-line-clamp: 2;
											}
					.infoCenter {
												display: flex;
												width: 100%;
												flex-wrap: wrap;
												.time_item {
														padding: 0;
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
														padding: 0;
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
														padding: 0;
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
						.collect_item {
														padding: 0;
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
						.view_item {
														padding: 0;
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
					}
					.more_btn {
												border: 1px solid #157ED2;
												cursor: pointer;
												margin: 52px 0;
												color: #157ED2;
												display: block;
												line-height: 44px;
												transition: all 0.6s;
												border-radius: 23px;
												overflow: hidden;
												background: none;
												width: 140px;
												text-align: center;
												height: 44px;
												.text {
														color: inherit;
														font-size: 16px;
													}
						.icon {
														color: inherit;
														font-size: 16px;
													}
					}
				}
			}
			.list-item1:hover {
								background: #fff;
								.img {
					img {
												transform: scale(1.05);
											}
				}
				.infoBox {
					.name {
												color: #157ED2;
											}
					.desc {
												color: #000;
											}
					.infoCenter {
						.time_item {
							.icon {
																color: #000;
															}
							.label {
																color: #000;
															}
							.text {
																color: #000;
															}
						}
						.publisher_item {
							.icon {
																color: #000;
															}
							.label {
																color: #000;
															}
							.text {
																color: #000;
															}
						}
						.like_item {
							.icon {
																color: #000;
															}
							.label {
																color: #000;
															}
							.text {
																color: #000;
															}
						}
						.collect_item {
							.icon {
																color: #000;
															}
							.label {
																color: #000;
															}
							.text {
																color: #000;
															}
						}
						.view_item {
							.icon {
																color: #000;
															}
							.label {
																color: #000;
															}
							.text {
																color: #000;
															}
						}
					}
					.more_btn {
												border: 1px solid #157ED2;
												background: #157ED2;
												.text {
														color: #fff;
													}
						.icon {
														color: #fff;
													}
					}
				}
			}
			.list-body {
								margin: 30px auto 0;
								overflow: hidden;
								width: 100%;
								.list-body-left {
										overflow: hidden;
										width: 30%;
										box-sizing: border-box;
										float: left;
										.list-item {
												cursor: pointer;
												border: 1px solid #E6E6E6;
												padding: 10px;
												margin: 0 0 14px;
												overflow: hidden;
												display: block;
												width: 100%;
												border-width: 0 0 1px;
												.img {
														overflow: hidden;
														width: 100%;
														text-align: center;
														height: auto;
														img {
																max-height: 100%;
																max-width: 100%;
																object-fit: cover;
																display: inline-block;
																width: 100%;
																transition: all 0.6s;
																height: 230px;
															}
						}
						.name {
														margin: 18px auto 0px;
														overflow: hidden;
														color: #333;
														font-weight: 600;
														display: -webkit-box;
														width: 100%;
														font-size: 16px;
														text-overflow: ellipsis;
														-webkit-box-orient: vertical;
														-webkit-line-clamp: 1;
														transition: all 0.6s;
													}
					}
					.list-item:hover {
												background: #fff;
												border-color: #157ED2;
												.img {
							img {
																transform: scale(1.05);
															}
						}
						.name {
														color: #157ED2;
													}
					}
				}
				.list-body-right {
										border: 1px solid #E6E6E6;
										padding: 10px;
										width: 70%;
										border-width: 0;
										box-sizing: border-box;
										float: right;
										height: 100%;
										.list-item {
												cursor: pointer;
												border: 1px solid #E6E6E6;
												padding: 20px;
												margin: 0 0 0;
												overflow: hidden;
												display: block;
												width: 100%;
												border-width: 0 0 1px;
												.infoBox {
														width: 84%;
														float: right;
														.name {
																overflow: hidden;
																color: #333;
																white-space: nowrap;
																font-weight: 700;
																font-size: 16px;
																line-height: 20px;
																text-overflow: ellipsis;
																transition: all 0.6s;
															}
							.desc {
																margin: 21px 0 0px;
																overflow: hidden;
																color: #888;
																font-weight: 400;
																display: -webkit-box;
																font-size: 14px;
																line-height: 200%;
																text-overflow: ellipsis;
																position: relative;
																-webkit-box-orient: vertical;
																-webkit-line-clamp: 2;
																transition: all 0.6s;
															}
						}
						.time_item {
														border: 0px solid #E6E6E6;
														padding: 0 0;
														margin: 15px 0 0;
														background: none;
														float: left;
														text-align: center;
														.day {
																padding: 10px 15px;
																color: #000;
																background: #F2F3F7;
																font-weight: 400;
																font-size: 20px;
																transition: all 0.6s;
															}
							.year {
																border: none;
																padding: 4px 15px;
																color: #000;
																background: #F2F3F7;
																font-weight: 400;
																font-size: 20px;
																transition: all 0.6s;
															}
						}
					}
					.list-item:hover {
												background: #fff;
												border-color: #157ED2;
												.infoBox {
							.name {
																color: #157ED2;
															}
							.desc {
																color: #000;
															}
						}
						.time_item {
														.day {
																color: #fff;
																background: #157ED2;
															}
							.year {
																color: #fff;
																background: #157ED2;
															}
						}
					}
				}
			}
		}
		.hot {
						box-shadow: 0 0px 0px rgba(0,0,0,.1);
						margin: 20px 0 10px;
						background: none;
						width: 100%;
						height: auto;
						order: 9;
						.hot-title {
								color: #157ED2;
								background: none;
								font-weight: bold;
								width: 100%;
								font-size: 26px;
								line-height: 80px;
								text-align: left;
							}
			.hot-list {
								padding: 0 0 5px 0;
								background: none;
								display: flex;
								width: 100%;
								justify-content: space-between;
								flex-wrap: wrap;
								height: auto;
								.hot-item {
										border-radius: 10px;
										padding: 20px;
										margin: 0 0 20px;
										background: #fff;
										display: flex;
										width: 48%;
										align-items: center;
										flex-wrap: wrap;
										height: auto;
										img {
												border-radius: 10px;
												object-fit: cover;
												display: block;
												width: 40%;
												height: 150px;
											}
					.hot-name {
												padding: 0px 10px 0;
												color: #000;
												font-weight: bold;
												width: 60%;
												font-size: 18px;
												line-height: 1;
											}
					.hot-time {
												padding: 0 5px;
												color: #555555;
												width: 100%;
												font-size: 12px;
												line-height: 12px;
												text-align: right;
											}
				}
			}
		}
		.news {
						box-shadow: 0 0px 0px rgba(0,0,0,.1);
						margin: 0 0 20px;
						background: none;
						width: 100%;
						height: auto;
						order: 9;
						.news-title {
								color: #157ED2;
								background: none;
								font-weight: bold;
								width: 100%;
								font-size: 26px;
								line-height: 80px;
								text-align: left;
							}
			.news-list {
								border-radius: 10px;
								padding: 20px;
								background: #fff;
								display: flex;
								width: 100%;
								justify-content: space-between;
								flex-wrap: wrap;
								height: auto;
								.news-item {
										background: #fff;
										width: 23%;
										height: auto;
										img {
												border-radius: 10px;
												object-fit: cover;
												display: block;
												width: 100%;
												height: 180px;
											}
					.news-name {
												padding: 0;
												color: #000;
												font-size: 18px;
												line-height: 2;
											}
					.news-time {
												padding: 0;
												color: #999;
												font-size: 15px;
												line-height: 12px;
												text-align: right;
											}
				}
			}
		}
	}
	
	.index-pv1 .animation-box {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		z-index: initial;
	}
	
	.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1.2) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
	}
	
	.index-pv1 .animation-box img {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
	}
	
	.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(0.8) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
</style>

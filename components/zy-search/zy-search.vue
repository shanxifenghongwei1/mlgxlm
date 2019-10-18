<template name="zy-search">
	<view>
		<view class="fathers">

			<view class="search">
				<template v-if="isFocus">
					<input maxlength="20" focus type="text" value="" confirm-type="search" @confirm="searchStart()" placeholder="请输入关键词搜索"
					 v-model.trim="searchText" />
				</template>
				<template v-else>
					<input @input="searchtexts" maxlength="20" type="text" value="" confirm-type="search" @confirm="searchStart()"
					 placeholder="请输入关键词搜索" v-model.trim="searchText" />
				</template>
				<image src="../../static/zy-search/search.svg" mode="aspectFit" @click="searchStart()" class="search-icon"></image>
			</view>
		</view>

		<template v-if="isBlock">
			<view v-if="mydiv">
				<view class='father-borde'>
					<view class="s-block" v-if="hList.length > 0">
						<view class="header">
							历史记录
							<image src="../../static/zy-search/delete.svg" mode="aspectFit" @click="delhistory"></image>
						</view>
						<view class="list">
							<view v-for="(item,index) in hList" :key="index" @click="keywordsClick(item)">{{item}}</view>
						</view>
					</view>
					<view class="wanted-block" v-if="showWant">
						<view class="header">猜你想搜的</view>
						<view class="list">
							<view v-for="(item,index) in wantList" :key="index" @click="keywordsClick(item)">{{item}}</view>
						</view>
					</view>
				</view>
			</view>
			<view v-else>
				<shoplist></shoplist>
				
			</view>
			
			
		</template>

		<template v-else>
			<view v-if="mydiv">
			<view class='father-borde'>


				<view class="s-circle" v-if="hList.length > 0">
					<view class="header">
						<text class="iconfont icon-lishijilu"> <text class="font">历史记录</text></text>
						<image src="../../static/zy-search/delete.svg" mode="aspectFit" @click="delhistory"></image>
					</view>
					<view class="list">
						<view v-for="(item,index) in hList" :key="index" @click="keywordsClick(item)">{{item}}</view>
					</view>
				</view>
				<view class="wanted-circle" v-if="showWant">
					<view class="header"> <text class="iconfont icon-remenbiaoqian icon-col"> </text> <text class="font">热门搜索</text>
					</view>
					<view class="list">
						<view v-for="(item,index) in wantList" :key="index" @click="keywordsClick(item)">{{item}}</view>
					</view>
				</view>
			</view>
			</view>
			<view v-else>
				<shoplist></shoplist>
				
			</view>
			
		</template>

	</view>
</template>

<script>
	import shoplist from '@/components/shoplist/shoplist.vue'
	export default {
		components: {
			shoplist
		},
		name: "zy-search",
		props: {
			isFocus: { //是否自动获取焦点
				type: Boolean,
				value: false
			},
			isBlock: { //选择块级显示还是圆形显示
				type: Boolean,
				value: true
			},
			showWant: { //是否展示推荐菜单
				type: Boolean,
				value: false
			}

		},
		data() {
			return {
				searchText: '', //搜索关键词
				mydiv: true,
				hList: uni.getStorageSync('search_cache'), //历史记录
				wantList: ['栏目1', '栏目2', '栏目3', '栏目4', '栏目4', '栏目4', '栏目4', '栏目4', '栏目4'] //初始化推荐列表
			};
		},
		methods: {
			searchtexts(e) {
				console.log(e)
				if (e.detail.value == '') {
					this.mydiv = true
				} else {
					this.mydiv = false
				}
			},
			searchStart: function() { //触发搜索
				let _this = this;
				if (_this.searchText == '') {
					uni.showToast({
						title: '请输入关键字',
						icon: 'none',
						duration: 1000
					});
					return false;
				} else {
					uni.getStorage({
						key: 'search_cache',
						success(res) {
							let list = res.data;
							console.log(list);
							if (list.length > 5) {
								for (let item of list) {
									if (item == _this.searchText) {
										return false;
									}
								}
								list.pop();
								list.unshift(_this.searchText);
							} else {
								for (let item of list) {
									if (item == _this.searchText) {
										return false;
									}
								}
								list.unshift(_this.searchText);
							}
							_this.hList = list;
							uni.setStorage({
								key: 'search_cache',
								data: _this.hList
							});
						},
						fail() {
							_this.hList = [];
							_this.hList.push(_this.searchText);
							uni.setStorage({
								key: 'search_cache',
								data: _this.hList
							});
						}
					})
				}
			},
			keywordsClick(item) { //推荐搜索
				this.searchText = item;
			},
			delhistory() { //清空历史记录
				this.hList = [];
				uni.setStorage({
					key: 'search_cache',
					data: []
				});
			},

		}
	}
</script>

<style lang="less" scoped>
	.fathers {
		width: 100%;
		height: 150upx;
		background-image: linear-gradient(#FE0000, #f49797);
		;
		overflow: hidden;

	}

	.father-borde {
		margin: 10upx auto;
		width: 94%;
		height: 50%;
		border: 1px solid #f9c9c9;
		box-shadow: 0 0 10px #f07676;
		border-radius: 10px;
	}

	.search {
		width: 700upx;
		margin: 30upx auto 0;
		position: relative;

		input {
			background-color: #F7F7F7;
			padding: 8upx 34upx;
			font-size: 28upx;
			border-radius: 50upx;
		}

		.search-icon {
			width: 36upx;
			height: 36upx;
			padding: 16upx 20upx 16upx 0;
			position: absolute;
			right: 0;
			top: 4upx;
			z-index: 10;
		}
	}

	.s-block {
		margin-top: 30upx;

		.header {
			font-size: 32upx;
			padding: 30upx;
			position: relative;

			image {
				width: 36upx;
				height: 36upx;
				padding: 10upx;
				position: absolute;
				right: 40upx;
				top: 24upx;
			}
		}

		.list {
			display: flex;
			flex-wrap: wrap;

			view {
				width: 50%;
				color: #8A8A8A;
				font-size: 28upx;
				box-sizing: border-box;
				text-align: center;
				padding: 20upx 0;
				border-top: 2upx solid #FFF;
				border-left: 2upx solid #FFF;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				background-color: #F7F7F7;
			}
		}
	}

	.s-circle {
		margin-top: 30upx;

		.header {
			font-size: 32upx;
			padding: 30upx;
			border-bottom: 2upx solid #F9F9F9;
			position: relative;

			text {
				font-size: 50upx;
				color: #FE0000;
			}

			.font {
				margin-left: 15upx;
				color: #333333;
				font-weight: 600;
				font-size: 35upx;
			}

			image {
				width: 36upx;
				height: 36upx;
				padding: 10upx;
				position: absolute;
				right: 40upx;
				top: 24upx;
			}
		}

		.list {
			display: flex;
			flex-wrap: wrap;
			padding: 0 30upx 20upx;

			view {
				padding: 8upx 30upx;
				margin: 20upx 30upx 0 0;
				font-size: 28upx;
				color: #fff;
				background-color: #ed4d4d;
				box-sizing: border-box;
				text-align: center;
				border-radius: 20upx;
			}
		}
	}

	.wanted-block {
		margin-top: 30upx;

		.header {
			font-size: 32upx;
			padding: 30upx;
		}

		.list {
			display: flex;
			flex-wrap: wrap;

			view {
				width: 50%;
				color: #8A8A8A;
				font-size: 28upx;
				box-sizing: border-box;
				text-align: center;
				padding: 20upx 0;
				border-top: 2upx solid #FFF;
				border-left: 2upx solid #FFF;
				background-color: #F7F7F7;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}

	.wanted-circle {
		margin-top: 30upx;

		.header {
			font-size: 35upx;
			font-weight: 600;
			padding: 30upx;

			.font {
				line-height: 55upx;
			}

			.icon-col {
				color: #FE0000;
				font-size: 55upx;
				margin-right: 15upx;
			}
		}

		.list {
			display: flex;
			flex-wrap: wrap;
			padding: 0 30upx 20upx;

			view {
				padding: 8upx 30upx;
				margin: 20upx 20upx 0 0;
				font-size: 28upx;
				color: #FFFFFF;
				background-color: #ed4d4d;
				box-sizing: border-box;
				text-align: center;
				border-radius: 20upx;
			}
		}
	}
</style>

<!-- 详情页 -->

<template>
	<view>
		<view class="cons">
			<searchAny></searchAny>
		</view>
		<view class="newbox any-flex" style="align-items: flex-start;">
			<scroll-view :scroll-into-view='ids' :class="menue == true ? 'menu' : 'menu1' " scroll-x>
				<view class="scroll-list">
					<view @click="runid(item.id)" :id=" 'a'+ item.id " v-for="(item,index) in menulist" :key='index' :class=" 'a'+ item.id == ids ? 'active' : '' "
					 class="menu-list">{{item.text}}</view>
				</view>
			</scroll-view>
			<view class="down iconfont icon-icon-up" @click="menushow"></view>
		</view>
		<!-- 轮播 -->
		<view class="banner">
			<swiper :indicator-active-color='colors' :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000">
				<swiper-item v-for="(item ,index) in bannerlist" :key='index' class="banner-item">
					<view class="swiper-item">
						<image :src="item" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="con-box">
			<view class="con-box-head">
				<view class="icons">
					<view class="iconsss"></view>
					<view class="icons-tit">本周新店</view>
				</view>
				<view class="more">更多</view>
			</view>
			<view class="con-box-text">
				这应该是汉子什么的，你乱写会出事的；
				我试试能写几行湿哒哒所大所大所大大大大
				撒大大萨达是扣扣扣扣扣
				大搜拍大师的卡牌看到怕斯柯达牌看得开跑酷跑酷
				大破大立店铺塑料大棚熟练地拍了拍斗罗大陆普林斯顿伦理片
				撒大大是电动OK
				大实打实大大扣款我我都控电控房
				adadadsaad
			</view>
			<view class="con-box-bottom">
				<view class="font1">仪器</view>
				<view class="font2">
					|
				</view>
				<view class="font1">两年以上</view>
				<view class="font2">
					|
				</view>
				<view class="font1">20000-40000元</view>
			</view>
		</view>

		<view class="two-head">
			<view class="two-head-con" :class="cateid?'':'active'"  @click="cate(0)"> 美容院 </view>
			<view class="two-head-con" :class="cateid?'active':''" @click="cate(1)"> 案例 </view>
		</view>
		<view  v-if="!cateid">
			<shoplist :shoplists='shoplists' :myid='shopid'></shoplist>
		</view>
		<view class="two-head-box" v-else>
			<view class="case-tit">
				【热玛吉】
				<view class="case-tit-name">
					冯宏伟的123456
				</view>
			</view>
			<view class="case-con">
				<view class="case-con-box" v-for="(item,index) in caseList">
					<!-- 图片展示 -->
					<view class="picture">
						<view class="picture-box">
							<image :src="item.prepic" mode=""></image>
							<view class="picture-time">
								体验前
							</view>
						</view>
						<view class="picture-box">
							<image :src="item.pic" mode=""></image>
							<view class="picture-time">
								体验后35天
							</view>
						</view>
					</view>
					<!-- 年纪信息 -->
					<view class="case-info">
						<image src="../../../static/image/other/bookmark.png" mode=""></image>
						<view class="info-age">
							{{item.age}}
						</view>
						<view class="info-state">
							{{item.state}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<loadmore :status="more"></loadmore>
	</view>
</template>

<script>
	import searchAny from '@/components/my-search/my-search.vue';
	import shoplist from '@/components/shoplist/shoplist.vue';
	import loadmore from "@/components/uni-load-more/uni-load-more.vue";
	export default {
		components: {
			searchAny,
			shoplist,
			loadmore
		},
		data() {
			return {
				more:"more",
				// 菜单列表
				menulist: [{
						id: '1',
						text: '精选'
					}, {
						id: '2',
						text: '热玛吉'
					}, {
						id: '3',
						text: '激光除皱'
					},
					{
						id: '4',
						text: '玻尿酸'
					}, {
						id: '5',
						text: '热拉提'
					}, {
						id: '6',
						text: '假数据'
					}, {
						id: '7',
						text: '用来试验的'
					}, {
						id: '8',
						text: '用来凑数'
					}
				],
				// 控制高亮
				ids: 'a1',
				// 指示点颜色
				colors: '#e01818',
				// 菜单栏目的显示隐藏
				menue: true,
				bannerlist: [
					'../../../static/image/banner/1.jpg', '../../../static/image/banner/2.jpg', '../../../static/image/banner/3.jpg',
					'../../../static/image/banner/4.jpg'
				],
				cateid:0,
				
				//店铺列表 
				shoplists: [{
					prople: '2000',
					image: '../../static/image/shop/shop-1.jpg',
					shopname: '艾美世界家',
					address: '山西大医院',
					start: '3.5',
					labels: '便签',
					goodssprice: '998',
					newgoodssprice: '398',
					goodsname: '芳香精油乳腺疏通',
					othergoods: '酒槽鼻修护套餐',
					othergoodsprices: "100",
				}],
				shopid:6,
				
				caseList:[{
					pic:"/static/image/shop/shop-1.jpg",
					prepic:"/static/image/shop/shop-1.jpg",
					age:"23",
					state:"面部松弛"
				},{
					pic:"/static/image/shop/shop-1.jpg",
					prepic:"/static/image/shop/shop-1.jpg",
					age:"23",
					state:"面部松弛"
				}],
				
				
				
			};
		},
		methods: {
			runid(e) {
				this.ids = 'a' + e
				if (this.menue == false) {
					this.menue = true
				}
			},

			menushow() {
				this.menue == true ? this.menue = false : this.menue = true;
			},
			cate(e){
				this.cateid = e;
			}
		},
		onReachBottom(){
			console.log("下拉了")
			this.more = "loading"
		}
	}
</script>

<style lang="scss">
	.newbox {
		margin-top: 20rpx;
		overflow: hidden;

		.down {
			height: 64rpx;
			background: #FFFFFF;
			width: 60rpx;
			text-align: center;
			line-height: 64rpx;
		}

		.menu {
			overflow: hidden;
			white-space: nowrap;
			border-bottom: 1rpx solid $any-zol;
			width: 95%;
			margin: 0 0 0 20rpx;

			.scroll-list {
				width: 100%;

				.menu-list {
					display: inline-block;
					padding: 10rpx 20rpx;
					border-radius: 50rpx;
					font-size: $uni-font-size-lg;
				}
			}
		}

		.menu1 {
			overflow: hidden;
			border-bottom: 1rpx solid $any-zol;
			width: 95%;
			margin: 0 0 0 20rpx;

			.scroll-list {
				width: 100%;

				.menu-list {
					display: inline-block;
					padding: 10rpx 20rpx;
					border-radius: 50rpx;
					font-size: $uni-font-size-lg;
				}
			}
		}

		.active {
			color: $any-col;
			position: relative;
		}

		.active:after {
			content: '';
			display: block;
			position: absolute;
			top: 55rpx;
			left: 10%;
			width: 80%;
			height: 8rpx;
			background: $any-col;
		}
	}

	.banner {
		width: 100%;
		height: 340rpx;
		margin-top: 30rpx;

		swiper {
			width: 100%;
			height: 100%;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.con-box {
		margin-top: 20rpx;
		width: 100%;
		padding: 16rpx 3%;
		box-sizing: border-box;
		box-shadow:#cccccc 0px 0px 10rpx;
		.con-box-head {
			width: 100%;
			height: 60rpx;

			@extend .any-flex;
			justify-content: space-between;
			margin-bottom: 16rpx;

			.icons {
				@extend .any-flex;
				font-size: $uni-font-size-base;

				.iconsss {
					height: 40rpx;
					width: 8rpx;
					margin-right: 10rpx;
					background: $any-col;
					font-size: $uni-font-size-lg;
				}
				.icons-tit{
					font-size: $uni-font-size-lg;
				}
			}

			.more {
				font-size: $uni-font-size-base;
				width: 60rpx;
				height: 40rpx;
				line-height: 40rpx;
				background: $any-col;
				color: #fff;
				text-align: center;
				border-radius: 10rpx;
			}
		}

		.con-box-text {
			width: 100%;
			max-height: 120rpx;
			font-size: $uni-font-size-lg;
			@include multi-row-apostrophe(3);
			overflow: hidden;
		}
		.con-box-bottom{
			@extend .any-flex;
			align-items: center;
			font-size: $uni-font-size-base;
			margin-top: 10rpx;
			.font1{
				font-size: $uni-font-size-base;
			}
			.font2{
				font-size: $uni-font-size-sm;
				padding: 0 8rpx;
			}
		}
	}
	
	.two-head {
		@extend .any-flex;
		justify-content: space-around;
		box-shadow:#cccccc 0px 0px 10rpx;
		margin-top: 20rpx;
		height: 75rpx;
		.two-head-con{
			font-size:$uni-font-size-lg;
			font-weight: bold;
			line-height: 75rpx;
			padding: 0 15rpx;
		}
		.two-head-con.active{
			font-size:$uni-font-size-lg;
			font-weight: bold;
			color: $any-col;
			border-bottom: 10rpx solid $any-col;
		}
	}
	.two-head-box{
		width: 100%;
		padding: 24rpx 3%;
		box-sizing: border-box;
		.case-tit{
			@extend .any-flex;
			font-size: $uni-font-size-base;
		}
		.case-tit-name{
			margin-left:10rpx;
		}
		.picture{
			padding: 23rpx 0;
			@extend .any-flex;
			justify-content: space-between;
		}
		.picture-box{
			width: 345rpx;
			height: 274rpx;
			position: relative;
		}
		.picture-box image{
			width: 345rpx;
			height: 274rpx;
			background: yellow;
		}
		.picture-time{
			display:inline-block;
			background: $any-col;
			position: absolute;
			left: 0;
			bottom: 0;
			font-size: $uni-font-size-base;
			padding: 7rpx;
		}
		.case-info{
			@extend .any-flex;
		}
		.case-info image{
			width:25rpx;
			height: 35rpx;
		}
		.info-age,.info-state{
			font-size: $uni-font-size-base;
			border: 2rpx solid $any-col;
			margin-left: 15rpx;
			padding: 0rpx 5rpx;
		}
	}

	
</style>

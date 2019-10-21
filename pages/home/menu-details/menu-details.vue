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

		<view class="cons">
			<view class="message-head">
				<view class="newshop-head">
					<view class="icons">
						<view class="iconsss"></view>
						<view>本周新店</view>
					</view>
					<view class="more">更多</view>
				</view>

				<view class="some-text">
					这应该是汉子什么的，你乱写会出事的；
					我试试能写几行湿哒哒所大所大所大大大大
					撒大大萨达是扣扣扣扣扣
					大搜拍大师的卡牌看到怕斯柯达牌看得开跑酷跑酷
					大破大立店铺塑料大棚熟练地拍了拍斗罗大陆普林斯顿伦理片
					撒大大是电动OK
					大实打实大大扣款我我都控电控房
					adadadsaad
				</view>


			</view>
		</view>

<view class="two-head ">
	
	<view class=""> 美容院 </view>
	<view class=""> 案例 </view>
</view>

	</view>
</template>

<script>
	import searchAny from '@/components/my-search/my-search.vue';
	export default {
		components: {
			searchAny
		},
		data() {
			return {
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
			}
		}
	}
</script>

<style lang="scss">
	.two-head{
		@extend .any-flex;
		justify-content:space-around;
	}
	
	.cons{
		margin-top:20rpx;
		border:2rpx solid $any-zol;
		.message-head {
			height:240rpx;
			.newshop-head {
				width: 100%;
				height: 60rpx;
		
				@extend .any-flex;
				justify-content: space-between;
				margin: 16rpx 0rpx;
		
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
			.some-text{
				width: 100%;
				height: 120rpx;
				// margin-bottom:20rpx;
				font-size: $uni-font-size-lg;
				@include multi-row-apostrophe(3);
				overflow:hidden;
			}
		}
	}
	



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
</style>

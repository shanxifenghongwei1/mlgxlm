<template>
	<view class="">

		<view class="conss">
			<!-- 搜索框 -->
			<searchAny></searchAny>
			<!-- 下面四个图标 -->
			<view class="seduce">
				<view class="list-one">
					<view class="icon iconfont icon-icon_coupon"></view>
					<view class="text font-weig">优惠券</view>
				</view>

				<view class="list-one">
					<view class="icon iconfont icon-pintuan"></view>
					<view class="text font-weig">拼团</view>
				</view>

				<view class="list-one">
					<view class="icon iconfont icon-shijian"></view>
					<view class="text font-weig">限时抢</view>
				</view>

				<view class="list-one">
					<view class="icon iconfont icon-hezuo"></view>
					<view class="text font-weig">置换</view>
				</view>

			</view>
		</view>
		<!-- 主要功能 -->
		<view class="significance-father">
			
			<view class="significance">
				<view @click="runHairdressing(1)" data-bs='asdxs' class="sign-one">
					<view class="icon"></view>
					<view class="text font-weig">美容美发</view>
				</view>
				<view @click="runHairdressing(2)" class="sign-one">
					<view class="icon-1"></view>
					<view class="text font-weig">身体护理</view>
				</view>
				<view @click="runHairdressing(3)" class="sign-one">
					<view class="icon-2"></view>
					<view class="text font-weig">问题皮肤</view>
				</view>
				<view @click="runHairdressing(4)" class="sign-one">
					<view class="icon-3"></view>
					<view class="text font-weig">瑜伽健身</view>
				</view>
				<view class="sign-one">
					<view class="icon-4"></view>
					<view class="text font-weig">附近店铺</view>
				</view>

			</view>
		</view>

		<!-- 中间的20个功能图标 -->
		<view class="son-father">
			<view class="son">
				<view class="butf">
					<view v-for="(item , index) in sonicon" :key='index' class="list-one">
						<image mode="aspectFit" :src="item.icon" class="icon"></image>
						<view class="text">{{item.text}}</view>
					</view>
				</view>
				<view class="head">
					<view v-for="(item , index) in bodycare" :key='index' class="list-one">
						<image mode="aspectFit" :src="item.icon" class="icon"></image>
						<view class="text">{{item.text}}</view>
					</view>
				</view>
				<view class="quester">
					<view v-for="(item , index) in skin" :key='index' class="list-one">
						<image mode="aspectFit" :src="item.icon" class="icon"></image>
						<view class="text">{{item.text}}</view>
					</view>
				</view>
				<view class="flode">
					<view v-for="(item , index) in yoga" :key='index' class="list-one">
						<image mode="aspectFit" :src="item.icon" class="icon"></image>
						<view class="text">{{item.text}}</view>
					</view>
					<view class="list-one">
						<image mode="aspectFit" src="../../static/image/homepage/quanbu.jpg" class="icon"></image>
						<view class="text">更多</view>
					</view>
				</view>
			</view>
		</view>

		<!-- banner图 -->
		<view class="banner">
			<swiper :indicator-active-color='colors' :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000">
				<swiper-item v-for="(item ,index) in bannerlist" :key='index' class="banner-item">
					<view class="swiper-item">
						<image :src="item" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- 店铺精选 -->

		<view class="choiceness">
			<view class="bac-img">
				<image src="../../static/image/other/shopimg.jpg" mode="widthFix" class="bac-imgs"></image>
			</view>
			<view class='shoplist'>
				<view v-for="(item,index) in headlist" :key='index' class="list" :class="item.id== ids? 'active' : '' " @click="exchanges(item.id)">{{ item.name }}</view>
			</view>

			<shoplist :shoplists='shoplists' :myid='ids'></shoplist>

		</view>

		<!-- 本周新店 -->

		<view class="newshop">
			<view class="newshop-head">
				<view class="icons">
					<view class="iconsss"></view>
					<view>本周新店</view>
				</view>
				<view class="more">更多</view>
			</view>

			<view class="shop-col">
				<view class="shop-col-img">
					<image src="../../static/image/other/shopimg2.jpg" mode=""></image>
				</view>
				<view class="shop-col-message">
					<view class="shopname">爱美食家 <text>山东青岛市市区</text> </view>
					<view class="shopnameng">asdasdas </view>
					<view class="gooods"> <text class="iconfont icon-icon-up"></text> 芳香精油乳腺疏通 </view>
					<view class="gooods"> <text class="iconfont icon-icon-up"></text> 芳香精油乳腺疏通 </view>
					<view class="gooods"> <text class="iconfont icon-icon-up"></text> 芳香精油乳腺疏通 </view>
					<view class="gooods"> <text class="iconfont icon-icon-up"></text> 芳香精油乳腺疏通 </view>
					<view class="buy">Buy</view>

				</view>

			</view>


		</view>

		<!-- 今日推荐 -->
		<view class="today">
			<view class="bac-img">
				<image src="../../static/image/other/shopings.png" mode="widthFix" class="bac-imgs"></image>
			</view>


			<view class="father">
				<view class="goodslist">
					<view class="goods-one">
						<view class="goodsname">肩颈按摩</view>
						<view class="goodsprice"> <text>98</text> RMB </view>
						<view class="goodsimg"></view>
					</view>

					<view class="goods-one">
						<view class="goodsname">肩颈按摩</view>
						<view class="goodsprice"> <text>98</text> RMB </view>
						<view class="goodsimg"></view>
					</view>

					<view class="goods-one">
						<view class="goodsname">肩颈按摩</view>
						<view class="goodsprice"> <text>98</text> RMB </view>
						<view class="goodsimg"></view>
					</view>

					<view class="goods-one">
						<view class="goodsname">肩颈按摩</view>
						<view class="goodsprice"> <text>98</text> RMB </view>

						<view class="goodsimg"></view>
					</view>

					<view class="goods-one">
						<view class="goodsname">肩颈按摩</view>
						<view class="goodsprice"> <text>98</text> RMB </view>

						<view class="goodsimg"></view>
					</view>

					<view class="goods-one">
						<view class="goodsname">肩颈按摩</view>
						<view class="goodsprice"> <text>98</text> RMB </view>

						<view class="goodsimg"></view>
					</view>

					<view class="goods-one">
						<view class="goodsname">肩颈按摩</view>
						<view class="goodsprice"> <text>98</text> RMB </view>

						<view class="goodsimg"></view>
					</view>

					<view class="goods-one">
						<view class="goodsname">肩颈按摩</view>
						<view class="goodsprice"> <text>98</text> RMB </view>

						<view class="goodsimg"></view>
					</view>

					<view class="goods-one">
						<view class="goodsname">肩颈按摩</view>
						<view class="goodsprice"> <text>98</text> RMB </view>

						<view class="goodsimg"></view>
					</view>

				</view>
			</view>



		</view>


	</view>


	</view>
</template>


<script>
	import shoplist from '@/components/shoplist/shoplist.vue'
	import searchAny from '@/components/my-search/my-search.vue'
	export default {
		components: {
			shoplist,
			searchAny
		},
		data() {
			return {
				// 搜索栏样式
				iconType: ['search'],
				// 美容美发
				sonicon: [{
						icon: '../../static/image/homepage/mianbuhuli.jpg',
						text: '面部护理'
					},
					{
						icon: '../../static/image/homepage/kangsuichuzhou.jpg',
						text: '抗衰除皱'
					},
					{
						icon: '../../static/image/homepage/shuxinghuanfu.jpg',
						text: '塑形换肤'
					},
					{
						icon: '../../static/image/homepage/jianfei.jpg',
						text: '美发美甲'
					},
					{
						icon: '../../static/image/homepage/shenduqingjie.jpg',
						text: '深度清洁'
					},
				],
				// 身体护理
				bodycare: [{
						icon: '../../static/image/homepage/simibaoyang.jpg',
						text: '私密保养'
					},
					{
						icon: '../../static/image/homepage/tuomao.jpg',
						text: '冰点脱毛'
					},
					{
						icon: '../../static/image/homepage/baguan.jpg',
						text: '刮痧拔罐'
					},
					{
						icon: '../../static/image/homepage/meifameijia.jpg',
						text: '减肥健胸'
					},
					{
						icon: '../../static/image/homepage/anmo.jpg',
						text: '肩颈护理'
					},
				],
				// 问题皮肤
				skin: [{
						icon: '../../static/image/homepage/qudou.jpg',
						text: '祛斑祛痘'
					},
					{
						icon: '../../static/image/homepage/maokong.jpg',
						text: '毛孔粗大'
					},
					{
						icon: '../../static/image/homepage/mingganjifu.jpg',
						text: '敏感肌肤'
					},
					{
						icon: '../../static/image/homepage/jifuanchen.jpg',
						text: '肌肤暗沉'
					},
					{
						icon: '../../static/image/homepage/heitou.jpg',
						text: '黑头'
					},
				],
				// 美容瑜伽
				yoga: [{
						icon: '../../static/image/homepage/meirongyujia.jpg',
						text: '美容瑜伽'
					},
					{
						icon: '../../static/image/homepage/qiantiyujia.jpg',
						text: '纤体瑜伽'
					},
					{
						icon: '../../static/image/homepage/kangfuyujia.jpg',
						text: '康复瑜伽'
					},
					{
						icon: '../../static/image/homepage/jianshengyujia.jpg',
						text: '肌肤暗沉'
					},

				],
				// banner图
				bannerlist: [
					'../../static/image/banner/1.jpg', '../../static/image/banner/2.jpg', '../../static/image/banner/3.jpg',
					'../../static/image/banner/4.jpg'
				],
				// 指示点颜色
				colors: '#e01818',

				// 循环列表
				headlist: [{id: 1,name: '拼团'}, {id: 2,name: '优惠'}, {id: 3,name: '销量'}, {id: 4,name: '限时抢'}, {id: 5,name: '免费送'}],
				// 高亮id
				ids: 1,
				labels: '标签',
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
				}]

			}

		},
		methods: {
			// 组件事件实例
			wearego() {
				console.log('gogogogo')
			},
			// 美容美发/身体护理/问题皮肤/瑜伽健身 四个功能的跳转
			runHairdressing(e){
				uni.navigateTo({
					url:"/pages/home/hairdressing/hairdressing?runid="+e					
				})
			},

			// 高亮id
			exchanges(id) {
				this.ids = id
			},

			init() {
				console.log('this.global')
				console.log(this.global)
				this.global.request.post({
					url: '',
					data: {
						wd:'123',
						ie:'UTF-8'
					},
					isLoading: true,
					load: '请求中...',
					success: (res) => {
						console.log(res)
					}
				})
			}
		},
 
		onLoad(Option) {
			this.init()
			console.log(this.global)
			this.global.utils.sethead('美丽共享联盟')
		}

	}
</script>

<style lang="scss">
	.today {
		width: 100%;
		@extend .any-over;

		.bac-imgs {
			margin: 6rpx 0;
			height: 74rpx;
			width: 100%;
			background: #007AFF;

			image {
				width: 100%;
			}
		}

		.father {
			@extend .cons;
			height: 600rpx;

			.goodslist {
				padding: 3% 0;
				@extend .any-flex;
				flex-wrap: wrap;

				.goods-one {
					width: 29%;
					height: 46%;
					padding-top: 10rpx;
					margin: 1.5%;
					border-radius: 20rpx;
					border: 2rpx solid $any-zol;

					.goodsname {
						font-size: 34rpx;
						text-align: center;
						width: 100%;
						@extend .font-weig;
					}

					.goodsprice {
						font-size: $uni-font-size-base;
						text-align: center;
						width: 100%;

						text {
							color: $any-col;
							font-size: $uni-font-size-lg;
						}
					}

					.goodsimg {
						width: 100%;
						height: 210rpx;
						overflow: hidden;
						background: url(../../static/image/other/goods.jpg) no-repeat center center;
						background-size: cover;
						border-bottom-right-radius: 20rpx;
						border-bottom-left-radius: 20rpx;
					}
				}
			}

		}
	}

	.newshop {
		@extend .cons;
		height: 400rpx;

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

		.shop-col {
			@extend .any-flex;
			width: 100%;
			height: 300rpx;
			border: 2rpx solid $any-col;

			.shop-col-img {
				width: 35%;
				height: 100%;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.shop-col-message {
				position: relative;
				width: 54%;
				height: 94%;
				padding: 3%;

				.shopname {
					font-size: $uni-font-size-lg;
					color: $any-col;

					text {
						margin-left: 16rpx;
						color: #666;
						font-size: $uni-font-size-sm;
					}
				}

				.shopnameng {
					font-size: $uni-font-size-base;
					color: #999999;
					position: relative;
					border-bottom: 4rpx solid #999;
					width: 85%;
					line-height: 40rpx;
				}

				.shopnameng:after {
					content: '';
					background: #999;
					height: 4rpx;
					width: 50%;
					position: absolute;
					bottom: 0rpx;
					left: 2rpx;
				}

				.gooods {
					margin: 4rpx 0;
					font-size: $uni-font-size-lg;

					text {
						color: $any-col;
					}
				}

				.buy {
					position: absolute;
					right: -8rpx;
					bottom: 28rpx;
					font-size: $uni-font-size-base;
					padding: 4rpx 6rpx;
					background: $any-col;
					width: 60rpx;
					color: #FFFFFF;
					text-align: center;
				}
			}
		}

	}

	.choiceness {
		width: 100%;
		@extend .any-over;

		.bac-img {
			margin: 20rpx 0;
			height: 74rpx;
			width: 100%;

			image {
				width: 100%;
			}
		}

		.shoplist {
			width: 100%;
			height: 80rpx;
			border-top: 2rpx solid $any-zol;
			border-bottom: 2rpx solid $any-zol;
			font-size: $uni-font-size-lg;
			@extend .any-flex;
			justify-content: space-between;

			.list {
				width: 20%;
				text-align: center;
				line-height: 80rpx;
			}

			.active {
				color: $any-col;
				position: relative;
			}

			.active:after {
				content: '';
				display: block;
				position: absolute;
				top: 74rpx;
				left: 10%;
				width: 80%;
				height: 8rpx;
				background: $any-col;
			}
		}


	}

	.banner {
		width: 100%;
		height: 340rpx;

		swiper {
			width: 100%;
			height: 100%;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.son-father {
		@extend .any-over;
		@extend .cons;
		padding-bottom: 20rpx;

		.son {
			margin-top: 92rpx;
			width: 100%;
			height: 560rpx;
			border: 2rpx solid #d6d6d6;
			box-shadow: 0rpx 0rpx 20rpx #bfbdbd;

			.butf,
			.head,
			.quester,
			.flode,
			.near {
				width: 100%;
				height: 23%;
				margin-top: 10rpx;
				@extend .any-flex;
				justify-content: space-around;

				.list-one {
					width: 20%;
					height: 100%;
					text-align: center;

					.icon {
						background-size: cover;
						width: 50%;
						height: 50%;
					}

					.text {
						height: 20%;
						font-size: $uni-font-size-base;
					}
				}
			}

			.butf {
				margin-top: 20rpx;
			}
		}
	}

	.conss {
		@extend .cons;
		background-image: linear-gradient($any-col, #f7b2b2);
		@extend .any-over;
		height: 330rpx;
		position: relative;
	}

	.significance-father {
		@extend .cons;
		position: absolute;
		left: 0;
		top: 200rpx;

		.significance {
			width: 100%;
			background: #FFFFFF;
			height: 180rpx;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
			margin-top: 30rpx;
			@extend .any-over;
			@extend .any-flex;
			justify-content: space-around;

			.sign-one {
				margin-top: 30rpx;
				width: 20%;
				height: 100%;

				.icon {
					margin: 5rpx auto;
					width: 100rpx;
					height: 100rpx;
					background: url(../../static/image/homepage/butf.png) no-repeat;
					background-size: cover;
				}

				.icon-1 {
					@extend .icon;
					background: url(../../static/image/homepage/head.png) no-repeat center;
					background-size: cover;
				}

				.icon-2 {
					@extend .icon;
					background: url(../../static/image/homepage/quester.png) no-repeat center;
					background-size: cover;
				}

				.icon-3 {
					@extend .icon;
					background: url(../../static/image/homepage/flode.png) no-repeat center;
					background-size: cover;
				}

				.icon-4 {
					@extend .icon;
					background: url(../../static/image/homepage/near.png) no-repeat center;
					background-size: cover;
				}

				.text {
					width: 90%;
					text-align: center;
					margin: 0 auto;
					font-size: $uni-font-size-base;
				}
			}
		}

	}

	.seduce {
		width: 100%;
		height: 120rpx;
		@extend .any-flex;
		justify-content: space-around;
		margin-top: 10rpx;

		.list-one {
			height: 100%;
			width: 20%;
			color: #FFFFFF;
			@extend .any-over;

			.icon {
				text-align: center;
				font-size: 60rpx;
				margin: 6rpx auto 2rpx;
			}

			.text {
				font-size: $uni-font-size-lg;
				text-align: center;
			}
		}
	}

	.sear {
		width: 100%;
		height: 60rpx;
		// border: 1rpx solid $any-col;
		border-radius: 50rpx;
		background: $any-zol;
		margin-top: 20rpx;
		@extend .any-flex;
		justify-content: space-between;
		

		.sear-text {
			font-size: $uni-font-size-base;
			line-height: 60rpx;
			margin-left: 30rpx;
			color: #d0d0d0;
		}

		.sear-logo {
			.icon-fathre {
				width: 20rpx;
				height: 20rpx;
				border-radius: 10rpx;
				background: $any-col;
			}

			margin-right: 30rpx;

			.sear-icon {
				color: #000000;
			}
		}

	}
</style>

<template>
	<!-- 分销中心页面 -->
	<view>
		<!-- 个人信息 -->
		<view class="header">
			<view class="header-box">
				<image :src="userInfo.wx_headimg"
				 mode="widthFix"></image>
				<view class="con">
					<view class="">
						{{userInfo.wx_name}}
					</view>
					<view class="">
						邀请码
						{{userInfo.shop_random_str}}
					</view>
				</view>
			</view>
		</view>


		<!-- 提现 -->
		<view class="tixian">
			<view class="left">
				<view class="">
					可提现佣金
				</view>
				<view class="">
					{{userInfo.withdrawable_money}}元
				</view>
			</view>
			<view class="right" @click="toCash()">
				提现
			</view>
		</view>

		<!-- 额度 -->
		<view class="edu">
			<view class="">
				<view class="green">
					已提现佣金
				</view>
				<view class="">
					{{userInfo.withdrawals_money}}元
				</view>
			</view>
			<view class="">
				<view class="red">
					未结算佣金
				</view>
				<view class="">
					{{userInfo.not_acquired_money}}元
				</view>
			</view>
		</view>


		<view class="gather">
			<view class="gather-box">
				<view class="list" v-for="(item,index) in cate" :key="index" @click="toDetail(item.link_url)">
					<image :src="item.img" mode=""></image>
					<view class="name">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>

		<!-- <view class="banner">
			<mySwiper :bannerlist="bannerlist"></mySwiper>
		</view>

		<view class="jingxuan">
			<view class="bac-img">
				<image src="/static/image/other/shoping-jingxuan.png" mode="widthFix" class="bac-imgs"></image>
			</view>
			<view class="">
				<goods :titCon="titCon" :more="false"></goods>
			</view>
		</view> -->
	</view>
</template>

<script>
	import mySwiper from "@/components/mine/my-swiper.vue";
	import goods from "@/components/mine/goods.vue";
	export default {
		components: {
			mySwiper,
			goods
		},
		data() {
			return {
				options: {},
				bannerlist: [
					'../../static/image/banner/1.jpg', '../../static/image/banner/2.jpg', '../../static/image/banner/3.jpg',
					'../../static/image/banner/4.jpg'
				],
				titCon: [1, 2, 3, 4], //商品列表
				cate: [{
						name: "分销佣金",
						link_url: "/pages/home/retail/rank",
						img: "/static/image/other/retail_money.png",
						cell: "元"
					},
					{
						name: "提现明细",
						link_url: "/pages/home/retail/retail_cash",
						img: "/static/image/other/retail_detail.png"
					},
					{
						name: "分销订单",
						link_url: "/pages/home/retail/my_order",
						img: "/static/image/other/retail_order.png"
					},
					{
						name: "我的团队",
						link_url: "/pages/home/retail/my_team",
						img: "/static/image/other/retail_team.png"
					},

					{
						name: "邀请二维码",
						img: "/static/image/other/retail_code.png"
					}
				],
				userInfo:{}
			}
		},
		methods: {
			toDetail(e) {
				if (e) {
					this.global.utils.jump(1, e)
				} else {
					console.log("该打开二维码了")
				}
			},
			toCash(){
				this.global.utils.jump(1, "/pages/member/my-coupon/money/cash?cate=yj")
			}
		},
		onLoad(options) {
			this.global.utils.sethead("分销")
		
		},
		onShow() {
			this.global.login_state.login_state().then((res) => {
				if (res) {
					this.global.request.post({
						url: 'user_reseller_List',
						success: res => {
							console.log(res)
							if(res.code==0){
								this.userInfo=res.userInfo
							}else{
								this.global.utils.showToast_my(res.msg)
							}
						}
					})
				}
			})
		}
	}
</script>

<style lang="scss">
	.header {
		width: 100%;
		height: 254rpx;
		background: $any-col;
	}

	.header-box {
		width: 100%;
		height: 190rpx;
		padding: 30rpx 6%;
		box-sizing: border-box;
		@extend .any-flex;

		image {
			width: 130rpx;
			height: 130rpx;
			border-radius: 50%;
		}

		.con {
			flex-grow: 1;
			height: 100%;
			padding: 10rpx 0 10rpx 30rpx;
			box-sizing: border-box;
			font-size: $uni-font-size-base;
			@extend .any-flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			color: #ffffff;

			view {
				padding-bottom: 10rpx;
				font-weight: bold;
			}
		}
	}

	.tixian {
		width: 94%;
		height: 150rpx;
		background: #ffffff;
		margin: -60rpx auto 0;
		border-radius: 20rpx;
		box-shadow: #cccccc 0px 0px 10rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		@extend .any-flex;
		font-size: $uni-font-size-base;

		.left {
			flex-grow: 1;
			height: 100%;
			@extend .any-flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;

			view {
				padding: 10rpx 0;
			}
		}

		.right {
			display: inline-block;
			padding: 5rpx 15rpx;
			background: $any-col;
			color: #ffffff;
			border-radius: 10rpx;
		}
	}

	.edu {
		width: 100%;
		height: 100rpx;
		@extend .any-flex;
		font-size: $uni-font-size-sm;
		position: relative;
		margin-top: 20rpx;

		view {
			flex-grow: 1;
			@extend .any-flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;

			.green {
				font-size: $uni-font-size-base;
				color: #09BB07;
				padding: 10rpx 0;
				font-weight: bold;
			}

			.red {
				font-size: $uni-font-size-base;
				color: $any-col;
				padding: 10rpx 0;
				font-weight: bold;
			}
		}
	}

	.edu:after {
		content: "";
		width: 2rpx;
		height: 80%;
		position: absolute;
		background: $uni-border-color;
		display: block;
		bottom: 10%;
		left: 50%;


	}

	.gather {
		width: 100%;
		padding: 20rpx 3%;
		box-sizing: border-box;
		margin-top: 15rpx;
		font-size: $uni-font-size-sm;
		margin-top: 20rpx;

		.gather-box {
			width: 100%;
			height: 100%;
			@extend .any-flex;
			flex-wrap: wrap;
			border-radius: 20rpx;
			box-shadow: #cccccc 0px 0px 10rpx;

			.list {
				width: 30%;
				height: 160rpx;
				@extend .any-flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-right: 3%;

				image {
					width: 75rpx;
					height: 66rpx;
				}

				.name {
					width: 100%;
					text-align: center;
					margin-top: 15rpx;
				}

				.num {
					width: 100%;
					text-align: center;
					height: 26rpx;
				}
			}

			.list:nth-child(3n) {
				margin-right: 0;
			}
		}
	}

	.banner {
		margin-top: 20rpx;
	}

	.jingxuan {
		.bac-img {
			margin: 20rpx 0;
			height: 74rpx;
			width: 100%;

			image {
				width: 100%;
			}
		}
	}
</style>

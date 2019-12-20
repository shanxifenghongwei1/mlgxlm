<template>
	<view class="">

		<view class="address-box">
			<view class="address-con">
				<view class="icon iconfont icon-dizhi">

				</view>
				<view class="add-con">
					<view class="infor">
						<text class="lg mar">{{order_detail.name}}</text>
						<text class="base gray">{{order_detail.tel}}</text>
					</view>
					<view class="base mar-t gray">
						{{order_detail.address_provice+order_detail.address_city+order_detail.address_area+order_detail.address_detail}}
					</view>
				</view>
				<text class="icon iconfont icon-jiantou-copy lg wei"></text>
			</view>
		</view>


		<!-- 商品详情 -->
		<view class="goods-detail">
			<view class="detail-box">
				<view class="title">
					<image :src="picUrl+order_detail.shop_name" mode=""></image>
					<view class="">
						{{order_detail.shop_name}}
					</view>
				</view>
				<view class="list">
					<image :src="picUrl+order_detail.re_goods_picture" mode=""></image>
					<view class="list-con">
						<view class="top">

							<view class="li">
								<view class="name">
									商品名称：
								</view>
								<view class="right">
									<text>{{order_detail.re_goods_name}}</text>
								</view>
							</view>
							<view class="li">
								<view class="name">
									单价：
								</view>
								<view class="right">
									<text>￥{{order_detail.re_goods_price}}</text>
								</view>
							</view>
							<view class="li">
								<view class="name">
									购买数量：
								</view>
								<view class="right">
									<text>x {{order_detail.buy_num}}</text>
								</view>
							</view>
							<view class="li">
								<view class="name">
									合计金额：
								</view>
								<view class="right">
									<text>￥{{order_detail.buy_num * order_detail.re_goods_price}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>


		<view class="goods-detail">
			<view class="detail-box">
				<view class="title">
					<image src="/static/image/shopping.png" mode=""></image>
					<view class="">
						订单详情
					</view>
				</view>
				<view class="order-detail">
					<view class="order-item">
						<view class="">
							订单编号：
						</view>
						<view class="">
							{{order_detail.re_order_no}}
						</view>
					</view>
					<view class="order-item">
						<view class="">
							购买数量：
						</view>
						<view class="">
							1
						</view>
					</view>
					<view class="order-item">
						<view class="">
							订单总价：
						</view>
						<view class="">
							￥{{order_detail.buy_num * order_detail.re_goods_price}}
						</view>
					</view>
					<view class="order-item">
						<view class="">
							下单时间：
						</view>
						<view class="">
							{{order_detail.create_time*1000|time}}
						</view>
					</view>
					<view class="order-item" v-if="order_detail.order_status ==2 || order_detail.order_status ==3 || order_detail.order_status ==4">
						<view class="">
							物流单号：
						</view>
						<view class="">
							{{order_detail.logistics_no}}
						</view>
					</view>
				</view>
			</view>
		</view>
 
		<view class="goods-detail" v-if="order_detail.order_status!==0">
			<view class="detail-box">
				<view class="title">
					<image src="/static/image/shopping.png" mode=""></image>
					<view class="">
						支付方式
					</view>
				</view>
				<view class="pay-item">
					<view class="pay-con">
						<view class="">
							支付时间：
						</view>
						<view class="">
							{{order_detail.pay_time*1000|time}}
						</view>
					</view>
					<view class="pay-con">
						<view class="">
							支付金额：
						</view>
						<view class="">
							{{order_detail.pay_price}}
						</view>
					</view>
					<view class="pay-con">
						<view class="">
							支付方式：
						</view>
						<view class="" v-if="order_detail.pay_type==0">
							分享币支付
						</view>
						<view class="" v-if="order_detail.pay_type==1">
							代金券支付
						</view>
						<view class="" v-if="order_detail.pay_type==2">
							微信支付
						</view>
					</view>
				</view>
			</view>
		</view>



		<view class="rule">
			<text class="icon iconfont icon-wenti"></text>退改规则
		</view>

		<view class="emit">
			
		</view>
		<view class="save">
			<view class="btn-box">
				<btn font="联系商家" @save="save()" btnSize="sm" :select="0"></btn>
			</view>
			<view class="btn-box" v-if="order_detail.order_status==1||order_detail.order_status==2">
				<btn font="申请退款" @save="save()" btnSize="sm" :select="0"></btn>
			</view>
			<view class="btn-box" v-if="order_detail.order_status==2">
				<btn font="查看物流" @save="save()" btnSize="sm" :select="0"></btn>
			</view>
			<view class="btn-box" v-if="order_detail.order_status==2">
				<btn font="确认收货" @save="save()" btnSize="sm" :select="1"></btn>
			</view>
			<view class="btn-box" v-if="order_detail.order_status==3">
				<btn font="评价服务" @save="assess(item.re_order_id)" btnSize="sm" :select="1"></btn>
			</view>
			<view class="btn-box" v-if="order_detail.order_status==0">
				<btn font="确认支付" @save="save()" btnSize="sm" :select="1"></btn>
			</view>
			<view class="btn-box" v-if="order_detail.order_status==1">
				<btn font="提醒发货" @save="save()" btnSize="sm" :select="1"></btn>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {},
				order_detail: {},
				userInfo: {},
				picUrl: this.global.demao.domain.videoUrl
			}
		},
		methods: {
			save() {
				uni.navigateTo({
					url: "/pages/pay/refund"
				})
			}
		},
		onLoad(options) {
			console.log(options);
			this.options = options;

			this.global.login_state.login_state().then((res) => {
				if (res) {
					// 获取用户分享币信息
					let data = {};
					data.re_order_id = options.re_order_id;
					this.global.request.post({
						url: "user_center",
						method: "GET",
						data: {},
						success: (res) => {
							this.userInfo = res.userInfo;
						}
					})


					//获取订单信息
					this.global.request.post({
						url: "index_reseller_Choose_payment",
						data: data,
						isLoading: true,
						success: (res) => {
							console.log(res)
							this.order_detail = res.data
						}
					})
				}
			})
		}
	}
</script>

<style lang="scss">
	.red {
		color: $any-col;
	}

	.big {
		font-size: 45rpx;
	}

	.lg {
		font-size: $uni-font-size-lg;
	}

	.base {
		font-size: $uni-font-size-base;
	}

	.sm {
		font-size: $uni-font-size-sm;
	}

	.ccc {
		color: #cccccc;
	}

	.gray {
		color: #808080;
	}

	.mul {
		@include multi-row-apostrophe(1);
	}

	.tag {
		padding: 5rpx 20rpx;
		border-radius: 50rpx;
		background: $any-col;
	}

	.mar {
		margin-right: 10rpx;
	}

	.mar-t {
		margin-top: 10rpx;
	}

	.wei {
		font-weight: bold;
	}

	.emit {
		width: 100%;
		height: 120rpx;
	}

	.address-box {
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;
		margin-top: 20rpx;

		.address-con {
			width: 100%;
			height: 100%;
			border-radius: 15rpx;
			-webkit-box-shadow: 0rpx 0rpx 10rpx #cccccc;
			box-shadow: 0rpx 0rpx 10rpx #cccccc;
			-webkit-box-pack: justify;
			-webkit-justify-content: space-between;
			-ms-flex-pack: justify;
			justify-content: space-between;
			display: flex;
			align-items: center;
			padding: 0 10px;
			box-sizing: border-box;

			.icon-dizhi {
				font-size: 60rpx;
				color: $any-col;
			}

			.add-con {
				width: 560rpx;
				height: 100%;
				display: flex;
				justify-content: center;
				flex-direction: column;
				padding: 20rpx 0;
			}
		}
	}

	.goods-detail {
		width: calc(100% - 48rpx);
		padding: 0 3%;
		padding-bottom: 20rpx;
		margin: 0 auto;
		margin-top: 20rpx;
		box-sizing: border-box;
		box-shadow: 0rpx 0rpx 10rpx #cccccc;
		font-size: $uni-spacing-row-lg;
		border-radius: 15rpx;

		.detail-box {
			width: 100%;
			height: 100%;
			background: #ffffff;
			.title {
				width: 100%;
				height: 70rpx;
				border-bottom: 1rpx solid #bfbdbd;
				@extend .any-flex;
				align-items: center;
				font-weight: bold;

				image {
					width: 36rpx;
					height: 36rpx;
					display: inline-block;
					margin-right: 20rpx;
				}
			}

			.list {
				width: 100%;
				height: 180rpx;
				padding-top: 10rpx;
				box-sizing: border-box;
				@extend .any-flex;
				align-items: center;

				image {
					width: 140rpx;
					height: 150rpx;
					background: red;

				}

				.list-con {
					flex-grow: 1;
					// height: 100%;
					padding-left: 30rpx;
					padding-right: 10rpx;
					box-sizing: border-box;
					@extend .any-flex;
					flex-direction: column;
					justify-content: space-between;

					.top {
						width: 100%;

						.li {
							@extend .any-flex;
							align-items: center;
							margin-bottom: 10rpx;
							color: #868686;
						}

						.li {
							justify-content: space-between;

							.name {
								font-size: $uni-font-size-base;
								max-width: 60%;
								@include multi-row-apostrophe(1);
								color: #575757;
							}

							.right {
								font-size: $uni-font-size-sm;

								.re {
									color: $any-col;
									margin-right: 5rpx;
								}
							}
						}
					}

					.bottom {
						width: 100%;
						color: #868686;

						.re {
							color: $any-col;
							margin-left: 5rpx;
						}
					}
				}
			}

			.order-detail {
				width: 100%;
				padding: 0 10rpx;
				box-sizing: border-box;

				.order-item {
					width: 100%;
					@extend .any-flex;
					justify-content: space-between;
					align-items: center;
					font-size: $uni-font-size-base;
					padding-top: 10rpx;
					color: #868686;
				}
			}

			.pay-item {
				width: 100%;
				padding: 0 10rpx;

				.pay-con {
					width: 100%;
					@extend .any-flex;
					justify-content: space-between;
					align-items: center;
					font-size: $uni-font-size-base;
					padding-top: 10rpx;
					color: #868686;
				}
			}


		}
	}

	.rule {
		width: calc(100% - 48rpx);
		margin: 0 auto;
		border-radius: 10rpx;
		height: 70rpx;
		padding: 10rpx 3%;
		display: flex;
		align-items: center;
		font-size: $uni-font-size-lg;
		font-weight: bold;
		box-sizing: border-box;
		margin-top: 20rpx;
		box-shadow: 0rpx 0rpx 10rpx #bfbdbd;
		color: #575757;

		.icon-wenti {
			margin-right: 10rpx;
		}
	}

	.save {
		width: 100%;
		height: 80rpx;
		padding: 0 5%;
		background: #ffffff;
		box-sizing: border-box;
		margin-top: 30rpx;
		display: flex;
		position: fixed;
		align-items: center;
		justify-content: flex-end;
		bottom: 0;
		left: 0;
		border-top: 1rpx solid #cccccc;
		.btn-box{
			margin-left: 30rpx;
		}
	}
</style>

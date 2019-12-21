<template>
	<view class="">

		<view class="address-box">
			<view class="address-con">
				<view class="icon iconfont icon-dizhi">

				</view>
				<view class="add-con">
					<!-- 					<view class="infor">
						<text class="lg mar">{{order_detail.name}}</text>
						<text class="base gray">{{order_detail.tel}}</text>
					</view> -->
					<view class="base mar-t gray">
						{{order_detail.shop_address_provice+order_detail.shop_address_city+order_detail.shop_address_area+order_detail.shop_address_detail}}
					</view>
				</view>
				<text class="icon iconfont icon-jiantou-copy lg wei"></text>
			</view>
		</view>


		<!-- 商品详情 -->
		<view class="goods-detail">
			<view class="detail-box">
				<view class="title">
					<image :src="picUrl+order_detail.shop_logo" mode=""></image>
					<view class="">
						{{order_detail.shop_name}}
					</view>
				</view>
				<view class="list">
					<image :src="picUrl+order_detail.picture" mode=""></image>
					<view class="list-con">
						<view class="top">

							<view class="li">
								<view class="name">
									商品名称：
								</view>
								<view class="right">
									<text>{{order_detail.goods_name}}</text>
								</view>
							</view>
							<view class="li">
								<view class="name">
									服务次数：
								</view>
								<view class="right">
									<text>x1</text>
								</view>
							</view>
							<view class="li">
								<view class="name">
									购买方式：
								</view>
								<view class="right">
									<text>
										{{order_detail.order_method ==0?"普通购买":order_detail.order_method ==1?"拼团购买":order_detail.order_method ==2?"优惠券购买":order_detail.order_method ==3?"限时抢购买":""}}
									</text>
								</view>
							</view>
							<view class="li">
								<view class="name">
									{{order_detail.order_status!=0?"实付金额：":"应付金额："}}
								</view>
								<view class="right">
									<text>￥{{order_detail.pay_price}}</text>
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
							{{order_detail.order_no}}
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
						<view class="" v-if="order_detail.order_pay==0">
							分享币支付
						</view>
						<view class="" v-if="order_detail.order_pay==1">
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
			<!-- 未支付 -->
			<block v-if="order_detail.order_status==0">
				<view class="btn-box">
					<btn font="联系商家" @save="call(order_detail.shop_phone)" btnSize="sm" :select="0"></btn>
				</view>
				<view class="btn-box" v-if="order_detail.order_status==1||order_detail.order_status==2">
					<btn font="申请退款" @save="refund()" btnSize="sm" :select="0"></btn>
				</view>
				<view class="btn-box">
					<btn font="确认支付" @save="yesorder()" btnSize="sm" :select="1"></btn>
				</view>
			</block>


			<!-- 支付成功，并未接受服务 -->
			<block v-if="order_detail.order_status==1">
				<view class="btn-box">
					<btn font="联系商家" @save="call(order_detail.shop_phone)" btnSize="sm" :select="0"></btn>
				</view>
				<view class="btn-box" v-if="order_detail.order_status==1||order_detail.order_status==2">
					<btn font="申请退款" @save="refund()" btnSize="sm" :select="0"></btn>
				</view>
				<view class="btn-box" v-if="order_detail.order_status==2">
					<btn font="服务完成" @save="save()" btnSize="sm" :select="1"></btn>
				</view>
			</block>


			<!-- 支付成功，并未接受服务 -->
			<block v-if="order_detail.order_status==3">
				<view class="btn-box">
					<btn font="联系商家" @save="call(order_detail.shop_phone)" btnSize="sm" :select="0"></btn>
				</view>
				<view class="btn-box" v-if="order_detail.order_status==3">
					<btn font="评价服务" @save="assess()" btnSize="sm" :select="1"></btn>
				</view>
			</block>


			<block v-if="order_detail.order_status==4">
				<view class="btn-box">
					<btn font="联系商家" @save="call(order_detail.shop_phone)" btnSize="sm" :select="1"></btn>
				</view>
			</block>

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
			//联系商家
			call(e) {
				console.log(e)
				uni.makePhoneCall({
					phoneNumber: e,
					success(res) {

					}
				})
			},
			//去评价
			assess(e) {
				this.sunblind = true;
				let url = "/pages/pay/assess?id=" + this.options.order_id
				this.global.utils.jump(1, url);
			},
			//申请退款
			refund(e){
				this.global.request.post({
					url:'re_refund_add',
					method:'GET',
					data:{
						id:this.options.order_id
					},
					success:res=>{
						console.log({mes:'点击申请退款',res:res})
						if(res.data.status_refund == 0){
							this.global.utils.jump(1,"/pages/pay/refund?order_id=" + e)
							console.log({mes:'点击申请退款',res:e})
						}else if(res.data.status_refund == 1){
							this.global.utils.showToast_my('您已经申请过啦！')
						}else if(res.data.status_refund == 2){
							this.global.utils.showToast_my('您的申请已经在审核中！')
						}else if(res.data.status_refund == 3){
							this.global.utils.showToast_my('您的退款已成功！')
						}else if(res.data.status_refund == 4){
							this.global.utils.showToast_my('退款未通过审核')
						}
					}
				})	
			},
			//确认付款
			yesorder(e){
				console.log({mes:'点击确认订单',res:e})
				this.global.utils.jump(1,"/pages/pay/pay?is_min=1&order_id=" + this.options.order_id)
			},
			//确认收货
			mygoods_add(){
				this.global.request.post({
					url:'up_status_add',
					data:{
						id:this.options.order_id,
						order_id:this.order_detail.order_id
					},
					success:res=>{
						if(res.data.data == 1){
							this.global.utils.showToast_my('已成功确认')
						}else if(res.data.data == 2){
							this.global.utils.showToast_my('退款中不能确认收货')
						}else if(res.data.data == 3){
							this.global.utils.showToast_my('确认收货有误')
						}
						
					}
				})
			},
			
		},
		onLoad(options) {
			console.log(options);
			this.options = options;

		},
		onShow() {
			let data = {
				id: this.options.order_id,
				is_big: 0,
			};

			this.global.login_state.login_state().then((res) => {
				if (res) {
					this.global.request.post({
						url: "order_detail",
						method: "GET",
						data: data,
						success: (res) => {
							this.order_detail = res.data[0]
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

		.btn-box {
			margin-left: 30rpx;
		}
	}
</style>

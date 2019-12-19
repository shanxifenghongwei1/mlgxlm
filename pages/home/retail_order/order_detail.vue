<template>
	<view class="">
		<view class="header">
			<view class="">
				<text class="icon iconfont icon--location"></text>山西省太原市小店区
			</view>
			<view class="icon iconfont icon-jiantou-copy">
				
			</view>
		</view>


		<!-- 商品详情 -->
		<view class="goods-detail">
			<view class="detail-box">
				<view class="title">
					<image src="/static/image/shopping.png" mode=""></image>
					<view class="">
						店铺名称
					</view>
				</view>
				<view class="list">
					<image src="" mode=""></image>
					<view class="list-con">
						<view class="top">
							<view class="li">
								<view class="name">
									芳香精油乳腺疏通
								</view>
								<view class="right">
									<text class="re">平台价：</text>
									<text>￥399</text>
								</view>
							</view>
							<view class="li">
								<view class="left">
									芳香精油乳腺疏通
								</view>
								<view class="right">
									x 1
								</view>
							</view>
							<view class="li">
								<text class="icon iconfont icon--location"></text>太原市小店区大马村
							</view>
						</view>
						<view class="bottom">
							实付：<text class="re">￥298.00</text>
						</view>
					</view>
				</view>

				<view class="list">
					<image src="" mode=""></image>
					<view class="list-con">
						<view class="top">
							<view class="li">
								<view class="name">
									芳香精油乳腺疏通
								</view>
								<view class="right">
									<text class="re">平台价：</text>
									<text>￥399</text>
								</view>
							</view>
							<view class="li">
								<view class="left">
									芳香精油乳腺疏通
								</view>
								<view class="right">
									x 1
								</view>
							</view>
							<view class="li">
								<text class="icon iconfont icon--location"></text>太原市小店区大马村
							</view>
						</view>
						<view class="bottom">
							实付：<text class="re">￥298.00</text>
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
							12348415213246851234165
						</view>
					</view>
					<view class="order-item">
						<view class="">
							订单总价：
						</view>
						<view class="">
							￥233
						</view>
					</view>
					<view class="order-item">
						<view class="">
							使用日期：
						</view>
						<view class="">
							2013.06.21 星期三
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
							联系人：
						</view>
						<view class="">
							冯宏伟
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="goods-detail">
			<view class="detail-box">
				<view class="pay-item">
					<view class="pay-con">
						<view class="">
							下单时间：
						</view>
						<view class="">
							2018-02.23 11：20：30
						</view>
					</view>
					<view class="pay-con">
						<view class="">
							支付方式：
						</view>
						<view class="">
							微信支付
						</view>
					</view>
				</view>
			</view>
		</view>



		<view class="rule">
			<text class="icon iconfont icon-wenti"></text>退改规则
		</view>
		
		<view class="save" @click="save()">
			<button type="warn">申请退款</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			save(){
				uni.navigateTo({
					url:"/pages/pay/refund"
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods-detail {
		width: 100%;
		// background: pink;
		padding: 0 3%;
		padding-bottom: 20rpx;
		margin-top: 20rpx;
		box-sizing: border-box;
		box-shadow: 0rpx 0rpx 10rpx #bfbdbd;
		font-size: $uni-spacing-row-lg;

		.detail-box {
			width: 100%;
			height: 100%;
			background: #ffffff;

			.title {
				width: 100%;
				height: 75rpx;
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
				padding: 10rpx 0;
				box-sizing: border-box;
				@extend .any-flex;
				border-bottom: 1rpx solid #bfbdbd;

				image {
					width: 140rpx;
					height: 150rpx;
					background: red;

				}

				.list-con {
					flex-grow: 1;
					height: 100%;
					padding-left: 30rpx;
					padding-right: 10rpx;
					box-sizing: border-box;
					@extend .any-flex;
					flex-direction: column;
					justify-content: space-between;

					.top {
						width: 100%;
						height: 150rpx;

						.li {
							@extend .any-flex;
							align-items: center;
							margin-bottom: 10rpx;
							color: #868686;
						}

						.li:nth-child(1) {
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

						.li:nth-child(2) {
							justify-content: space-between;
							font-size: $uni-font-size-sm;
						}

						.li:nth-child(3) {
							font-size: $uni-font-size-sm;

							.icon--location {
								font-size: $uni-font-size-base;
								margin-right: 10rpx;
								color: #575757;
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
		width: 100%;
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
		.icon-wenti{
			margin-right: 10rpx;
		}
	}
	.save{
		width: 100%;
		padding: 0 5%;
		box-sizing: border-box;
		margin-top: 30rpx;
	}
</style>

<!-- 这是我的分享币页面 -->
<template>
	<view class="page">
		<view class="head"></view>
		<view class="num">
			<view class="num-box">
				<view class="price">
					<view class="bg-num">
						{{userInfo[0].money}}
					</view>
					<view class="tit">
						￥分享币
					</view>
				</view>
				<view class="opection">
					<view class="" @click="cash()">
						<image src="/static/image/other/money-1.png" mode=""></image>
						分享币提现
					</view>
					<view class="" @click="inverst()">
						<image src="/static/image/other/money-2.png" mode=""></image>
						钱包充值
					</view>
				</view>
			</view>
		</view>
		
		<view class="red-width">
			<view class="box"></view>
			<view class="list">
				<view class="list-box">
					<view class="title">
						账单明细
					</view>
					<view class="li">
						<view class="li-box">
							<view class="pic">
								￥
							</view>
							<view class="con">
								<view class="">
									充值
								</view>
								<view class="">
									微信支付
								</view>
								<view class="">
									2019.05.05
								</view>
							</view>
							<view class="number">
								+300
							</view>
						</view>
						<view class="li-box">
							<view class="pic">
								￥
							</view>
							<view class="con">
								<view class="">
									充值
								</view>
								<view class="">
									微信支付
								</view>
								<view class="">
									2019.05.05
								</view>
							</view>
							<view class="number">
								+300
							</view>
						</view>
						<view class="li-box">
							<view class="pic">
								￥
							</view>
							<view class="con">
								<view class="">
									充值
								</view>
								<view class="">
									微信支付
								</view>
								<view class="">
									2019.05.05
								</view>
							</view>
							<view class="number">
								+300
							</view>
						</view>
					</view>	
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{},
				coupon_num:0,
				identity:0
			}
		},
		methods: {
			inverst:()=>{
				uni.navigateTo({
					url:"/pages/member/my-coupon/money/invest"
				})
			},
			cash:()=>{
				uni.navigateTo({
					url:"/pages/member/my-coupon/money/cash"
				})
			},
			findInfo() {
				let that=this;
				this.global.request.post({
					url: "user_center",
					method: "GET",
					data: {
						openid:uni.getStorageSync("session").data.openid
					},
					success: (res) => {
						this.userInfo=res.userInfo;
						this.coupon_num=res.coupon_num
						if(res.userInfo[0].mt_reseller==1){     ///0普通用户   1.参与分销
							if(res.userInfo[0].p_id==0){		////0分销商    else  分销员
								that.identity=1;
							}else{
								that.identity=2;
							}
						}else{
							
							that.identity=0;
						}
					}
				})
			},
			findList(){
				let that=this;
				this.global.request.post({
					url: "share_Currency_list",
					success: (res) => {
						console.log(res)
					}
				})
			}
		},
		onLoad() {
			this.findList()
			this.findInfo()
		}
	}
</script>

<style lang="scss">
	.page{
		width: 100%;
		min-height: 100vh;
		background: #efefef;
	}
	.head{
		width: 100%;
		height: 200rpx;
		background:$any-col;
	}
	.num{
		width: 100%;
		height: 380rpx;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: -100rpx; 
	}
	.num-box{
		width: 100%;
		height: 100%;
		box-shadow: 0rpx 0rpx 20rpx #bfbdbd;
		border-radius: 15rpx;
		background: #ffffff;
		@extend .any-flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.price{
		margin-top: 100rpx;
		@extend .any-flex;
		flex-direction: column;
		align-items: center;
		color: $any-col;
	}
	.bg-num{
		font-size: 60rpx;
	}
	.tit{
		margin-top: 20rpx;
		font-size: $uni-font-size-base;
	}
	.opection{
		width: 100%;
		@extend .any-flex;
		font-size: $uni-font-size-base;
		margin-bottom: 50rpx;
		position: relative;
		view{
			width: 50%;
			@extend .any-flex;
			justify-content: center;
			image{
				width:30rpx;
				height: 30rpx;
				margin-right: 20rpx;
			}
		}
		
	}
	.opection:after{
		position: absolute;
		display: block;
		content: "";
		width: 2rpx;
		height: 90%;
		left: 50%;
		top: 10%;
		background: #cccccc;
	}
	.red-width{
		width: 100%;
		padding: 0 2%;
		box-sizing: border-box;
		margin-top: 20rpx;
		.box{
			width: 100%;
			height: 20rpx;
			background: $any-col;
			border-radius: 20rpx;
		}
	}
	.list{
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;
		margin-top: -8rpx;
		.list-box{
			width: 100%;
			height: 100%;
			background: #ffffff;
			border-bottom-left-radius: 10rpx;
			border-bottom-right-radius: 10rpx;
			.title{
				width: 100%;
				height: 80rpx;
				background: #f8f8f8;
				padding: 0 10rpx;
				box-sizing: border-box;
				font-size: $uni-font-size-base;
				line-height: 80rpx;
			}
			.li{
				width: 100%;
				padding: 20rpx;
				box-sizing: border-box;
				.li-box{
					width: 100%;
					height: 130rpx;
					background: #ffffff;
					border-bottom: 1rpx solid #cccccc;
					@extend .any-flex;
					align-items: flex-start;
					padding: 10rpx 0;
					.pic{
						width: 70rpx;
						height: 70rpx;
						border-radius: 50%;
						background: #FF9101;
						text-align: center;
						line-height: 70rpx;
						font-size: 50rpx;
						color: #ffffff;
					}
					.con{
						width: 400rpx;
						height: 100%;
						padding-left: 20rpx;
						box-sizing: border-box;
						@extend .any-flex;
						flex-direction: column;
						align-items: flex-start;
						view:nth-child(1){
							font-size: $uni-font-size-lg;
						}
						view:nth-child(2){
							margin-top: 10rpx;
							font-size: $uni-font-size-sm;
							color: #9A9A9A;
						}
						view:nth-child(3){
							margin-top: 10rpx;
							font-size: $uni-font-size-sm;
							color: #9A9A9A;
						}
						
					}
					.number{
						flex-grow: 1;
						height: 100%;
						line-height: 130rpx;
						font-size: $uni-font-size-base;
						text-align: right;
					}
				}
				.li-box:last-child{
					border: none;
				}
			}
		}
		
	}
</style>

<!-- 签到页面 -->
<template>
	<view>
		<view class="signIn-box">
			<view class="num">
				86
			</view>
			<view class="tit">
				当前积分
			</view>
			<view class="signIn">
				<view class="sign" v-for="(item,index) in week">
					<view class="" style="width: 100%;height: 80rpx;"></view>
					<view class="sign-box" v-if="item.state">
						<view class="dit">
							<image class="sure" src="/static/image/other/icon-sure.png" mode="widthFix"></image>
						</view>
						<view class="double-box" v-if="item.isdouble">
							<view class="double">
								积分翻倍
							</view>
						</view>
					</view>
					<view class="sign-box1" v-else>
						<view class="sign-box1-box">
							<image class="money" src="/static/image/other/icon-money.png" mode="widthFix"></image>
						</view>
						<view class="double-box" v-if="item.isdouble">
							<view class="double">
								积分翻倍
							</view>
						</view>
					</view>
					<view class="week">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class="sign-click-box">
				签到
			</view>
			<view class="desc">
				每天签到有惊喜，领取积分换好礼
			</view>
			<view class="water-group">
				<view class="water water1"></view>
				<view class="water water2"></view>
			</view>
		
		</view>
		<view class="sign-list">
			<view class="sign-list-box">
				<view class="sign-list-title">
					签到明细
				</view>
				<view class="sign-list-li">
					<view class="left">
						<view class="top">
							 每日签到奖励每日签到奖励
						</view>
						<view class="bottom">
							2019年10月24日
						</view>
					</view>
					<view class="right">
						+1
					</view>
				</view>
				<view class="sign-list-li">
					<view class="left">
						<view class="top">
							 每日签到奖励每日签到奖励
						</view>
						<view class="bottom">
							2019年10月24日
						</view>
					</view>
					<view class="right">
						+1
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSteps from "@/components/uni-steps/uni-steps.vue"
	export default {
		components: {
			uniSteps
		},
		data() {
			return {
				steps: [{
					title: '事件一'
				}, {
					title: '事件二'
				}, {
					title: '事件三'
				}, {
					title: '事件四'
				}],
				week: [{
						state: false,
						name: "周一",
						isdouble: true
					},
					{
						state: true,
						name: "周二",
						isdouble: false
					},
					{
						state: false,
						name: "周三",
						isdouble: false
					},
					{
						state: true,
						name: "周四",
						isdouble: false
					},
					{
						state: false,
						name: "周五",
						isdouble: false
					},
					{
						state: true,
						name: "周六",
						isdouble: false
					},
					{
						state: false,
						name: "周日",
						isdouble: true
					}
				],

			}
		},
		methods: {
			save(){
				this.global.request.post({
					url: this.global.demao.api.user_sign,
					method: "GET",
					data: {},
					success: (res) => {
						console.log(res);
					}
				})
			}
		},
		onLoad(){
			// this.global.request.post({
			// 	url: this.global.demao.api.user_sign_add,
			// 	method: "GET",
			// 	data: {},
			// 	success: (res) => {
			// 		console.log(res);
			// 	}
			// })
			
			
			this.global.request.post({
				url: this.global.demao.api.user_sign,
				method: "GET",
				data: {},
				success: (res) => {
					console.log(res);
				}
			})
		}
	}
</script>

<style lang="scss">
	.signIn-box {
		width: 100%;
		height: 686rpx;
		background: url('~@/static/image/other/icon-sign.jpg') no-repeat center;
		background-size: cover;
		@extend .any-flex;
		flex-direction: column;
		justify-content: center;
		color: #ffffff;

		.num {
			font-size: 55rpx;
		}

		.tit {
			margin-top: 10rpx;
			font-size: 30rpx;
		}

		.sign-click-box {
			width: 200rpx;
			height: 80rpx;
			background: #ffffff;
			border-radius: 45rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: $uni-font-size-lg;
			color: $any-col;
		}

		.desc {
			margin-top: 20rpx;
			font-size: $uni-font-size-sm;
		}
	}

	.signIn {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 0;
		position: relative;

		&:before {
			content: " ";
			position: absolute;
			width: 100%;
			height: 5rpx;
			background: #fff;
			display: block;
			bottom: 104rpx;
			left: 0;
			z-index: 0;
		}

		.sign {
			width: 15%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			color: #ffffff;
			position: relative;
		}

		.sign-box {
			width: 60rpx;
			height: 60rpx;
			border-radius: 50%;
			background: rgba(255, 255, 255, 0.4);
			padding: 10rpx;
			box-sizing: border-box;
			position: relative;
		}

		.sign-box1 {
			width: 60rpx;
			height: 60rpx;
			border-radius: 50%;
			background: red;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
		}

		.sign-box1-box {
			width: 60rpx;
			height: 60rpx;
			border-radius: 50%;
			background: rgba(0, 0, 0, 0.2);
			padding: 10rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.dit {
			width: 100%;
			height: 100%;
			background: #ffffff;
			border-radius: 50%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.week {
			margin-top: 20rpx;
			font-size: 30rpx;
		}

		.sure {
			width: 30rpx;
		}

		.money {
			width: 40rpx;
		}

		.double-box {
			width: 100%;
			height: 70rpx;
			position: absolute;
			top: -80rpx;
			left: -70rpx;
		}

		.sign:first-child .double-box {
			width: 100%;
			height: 70rpx;
			position: absolute;
			top: -80rpx;
			left: 0rpx;
		}

		.double {
			width: 130rpx;
			height: 66rpx;
			background: url(../../../static/image/other/icon-double.png) no-repeat center;
			background-size: cover;
			text-align: center;
			font-size: $uni-font-size-base;
			line-height: 60rpx;
			color: red;
		}

		.sign:first-child .double {
			width: 130rpx;
			height: 66rpx;
			background: url(../../../static/image/other/icon-double1.png) no-repeat center;
			background-size: cover;
			text-align: center;
			font-size: $uni-font-size-base;
			line-height: 60rpx;
			color: red;
		}
	}

	// 动画模块
	.water-group {
		position: relative;
		height: 200rpx;
		width: 100%;
		overflow: hidden;
		background: linear-gradient(to bottom, #e40001, #f28484);
	}

	.water-group .water {
		position: absolute;
		width: 200%;
		height: 100%;
		background-size: 50% 100%;
		
	}

	.water-group .water1 {
		top: 10px;
		left: -90%;
		opacity: 0.3;
		animation: water-right 6s infinite linear;
		background: url(../../../static/image/other/wave1.png) no-repeat center;
	}

	.water-group .water2 {
		top: 10rpx;
		left: -5%;
		opacity: 0.3;
		animation: water-left 6s infinite linear;
		background: url(../../../static/image/other/wave.png) no-repeat center;
	}

	.water-group .water3 {
		top: 20rpx;
		left: -100%;
		animation: water-right 6s infinite linear;
	}

	@keyframes water-right {
		0% {
			transform: translateX(0) translateZ(0) scaleY(1)
		}
		25%{
			transform: translateX(10%) translateZ(0) scaleY(1)
		}
		50% {
			transform: translateX(30%) translateZ(0) scaleY(1)
		}
		75% {
			transform: translateX(20%) translateZ(0) scaleY(1)
		}
		100%{
			transform: translateX(0) translateZ(0) scaleY(1)
		}
	}

	@keyframes water-left {
		
		0% {
			transform: translateX(-5%) translateZ(0) scaleY(1)
		}
		25%{
			transform: translateX(-20%) translateZ(0) scaleY(1)
		}
		50% {
			transform: translateX(-40%) translateZ(0) scaleY(1)
		}
		75% {
			transform: translateX(-20%) translateZ(0) scaleY(1)
		}
		100%{
			transform: translateX(-5%) translateZ(0) scaleY(1)
		}
	}
	
	.sign-list{
		width: 100%;
		height: 500rpx;
		padding: 20rpx 3%;
		box-sizing: border-box;

		.sign-list-box{
			width: 100%;
			height: 100%;
			border-radius: 20rpx;
			box-shadow: 0rpx 0rpx 10rpx #bfbdbd;
		}
		.sign-list-title{
			width: 100%;
			height: 90rpx;
			background: #ffffff;
			border-bottom: 1rpx solid #cccccc;
			@extend .any-flex;
			font-size: $uni-font-size-lg;
			font-weight: bold;
			justify-content: center;
			align-items: center;
		}
		.sign-list-li{
			width: 100%;
			height: 90rpx;
			background: #ffffff;
			border-bottom: 1rpx solid #cccccc;
			@extend .any-flex;
			.left{
				width: 80%;
				padding-left: 20rpx;
				@extend .any-flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				box-sizing: border-box;
				.top{
					width: 80%;
					font-size: $uni-font-size-base;
					padding: 5rpx;
					@include multi-row-apostrophe(1);
				}
				.bottom{
					width: 80%;
					font-size: $uni-font-size-sm;
					padding: 5rpx;
					@include multi-row-apostrophe(1);
					color: $uni-border-color;
				}
			}
			.right{
				width: 20%;
				height: 100%;
				text-align: right;
				line-height: 90rpx;
				font-size: $uni-font-size-base;
				padding-right: 20rpx;
				box-sizing: border-box;
			}
		}
	}
</style>

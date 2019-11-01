<template>
	<view class="page">
		<view class="card" v-for="(item,index) in cardList" :key="index">
			<view class="card-box">
				<view class="top">
					<view class="card-name">
						{{item.cardName}}
					</view>
					<view class="card-cate">
						{{item.cardCategory}}丨{{item.name}}
					</view>
				</view>
				<view class="card-num">
					**** **** **** {{item.cardNum}}
				</view>
			</view>
		</view>
		<view class="" style="width: 100%;height: 110rpx;">

		</view>

		<navigator hover-class="none" url="./addcard" class="bind">
			绑定银行卡
		</navigator>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardList: [{
						cardName: "招商银行",
						cardCategory: "借记卡",
						name: "边鹏举",
						cardNum: "6666"
					},
					{
						cardName: "招商银行",
						cardCategory: "借记卡",
						name: "边鹏举",
						cardNum: "6666"
					},
					{
						cardName: "招商银行",
						cardCategory: "借记卡",
						name: "边鹏举",
						cardNum: "6666"
					},
					{
						cardName: "招商银行",
						cardCategory: "借记卡",
						name: "边鹏举",
						cardNum: "6666"
					},
					{
						cardName: "招商银行",
						cardCategory: "借记卡",
						name: "边鹏举",
						cardNum: "6666"
					},
					{
						cardName: "招商银行",
						cardCategory: "借记卡",
						name: "边鹏举",
						cardNum: "6666"
					},
					{
						cardName: "招商银行",
						cardCategory: "借记卡",
						name: "边鹏举",
						cardNum: "6666"
					},
					{
						cardName: "招商银行",
						cardCategory: "借记卡",
						name: "边鹏举",
						cardNum: "6666"
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.page {
		width: 100%;
		min-height: 100vh;
		background: #efefef;
	}

	.card {
		width: 100%;
		height: 258rpx;
		padding: 20rpx 3% 0;
		box-sizing: border-box;
		color: #ffffff;

		.card-box {
			width: 100%;
			height: 100%;
			border-radius: 15rpx;
			background: url('~@/static/image/other/card-blue.png') no-repeat center center;
			background-size: cover;
			padding: 41rpx 0 41rpx 46rpx;
			box-sizing: border-box;
			@extend .any-flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
		}

		.top {}

		.card-name {
			font-size: $uni-font-size-lg;
		}

		.card-cate {
			margin-top: 10rpx;
			font-size: $uni-font-size-sm;
		}

		.card-num {
			font-size: $uni-font-size-base;
		}
	}

	.card:nth-child(3n+1) {
		.card-box {
			background: url('~@/static/image/other/card-pink.png') no-repeat center center;
					background-size: cover;
		}
	}

	.card:nth-child(3n+2) {
		.card-box {
			background: url('~@/static/image/other/card-red.png') no-repeat center center;
					background-size: cover;
		}
	}
	.bind {
		width: 100%;
		height: 110rpx;
		text-align: center;
		line-height: 110rpx;
		font-size: $uni-font-size-lg;
		color: #ffffff;
		background: #f95b5b;
		position: fixed;
		left: 0;
		bottom: 0;
		letter-spacing: 10rpx;
	}
</style>

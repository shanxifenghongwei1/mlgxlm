<template>
	<view class="">
		<view class="top any-flex">
			<text class="icon iconfont icon-xuanzhong red"></text>
			<text class="big">预约成功</text>
		</view>
		<view class="tip ccc sm">
			商家会为您预留60分钟，过时订单将作废，请及时到店，出示您的 订单即刻享受优质的服务.
		</view>
		<view class="list any-flex mar">
			<view class="left">
				店铺名称
			</view>
			<view class="right">
				边鹏举的小店
			</view>
		</view>
		<view class="list any-flex">
			<view class="left">
				服务项目
			</view>
			<view class="right">
				芳香精油乳腺精通
			</view>
		</view>
		<view class="list any-flex">
			<view class="left">
				预约时间
			</view>
			<view class="right any-flex">
					<view class="uni-input1 any-flex">
						<text>{{date[0]}}</text>
						<text>年</text>
						<text>{{date[1]}}</text>
						<text>月</text>
						<text>{{date[2]}}</text>
						<text>日</text>
					</view>
					<view class="uni-input2 any-flex">
						<text>09:00</text>
					</view>
			</view>
		</view>
		<view class="save">
			<button type="warn">查看订单详情</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date:[
					"2019","01","12"
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.red{
		color: $any-col;
	}
	.lg{
		font-size: $uni-font-size-lg;
	}
	.base{
		font-size: $uni-font-size-base;
	}
	.sm{
		font-size: $uni-font-size-sm;
	}
	.big{
		font-size: 40rpx;
		font-weight: bold;
	}
	.ccc{
		color: #919191;
	}
	.mar{
		margin-top: 30rpx;
	}
	.icon-xuanzhong{
		font-size: 82rpx;
		margin-right: 20rpx;
	}
	.top{
		width: 100%;
		height: 82rpx;
		margin-top: 20rpx;
		justify-content: center;
		align-items: center;
	}
	.tip{
		width: 100%;
		margin-top: 20rpx;
		padding: 0 3%;
		box-sizing: border-box;
	}
	.list {
		width: 100%;
		height: 80rpx;
		border-bottom: 1rpx solid #EFEFEF;
		padding: 0 5%;
		box-sizing: border-box;
		font-size: $uni-font-size-base;
		font-weight: bold;
	
		.left {
			width: 160rpx;
		}
	
		.right {
			flex-grow: 1;
		}
	}
	.uni-input1 {
		width: 330rpx;
		height: 30rpx;
		justify-content: space-between;
		margin-right: 20rpx;
	}
	
	.uni-input2 {
		width: 100rpx;
		height: 30rpx;
		justify-content: center;
	}
	.save{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-bottom: 20rpx;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	
</style>

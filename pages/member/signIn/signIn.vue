<template>
	<view>
		<uniSteps :options="steps" :active="1"></uniSteps>
		<view class="signIn">
			<view class="sign" v-for="(item,index) in week">
				<view class="sign-box" v-if="item.state">
					<view class="dit">
						<image class="sure" src="/static/image/other/icon-sure.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="sign-box1" v-else>
					<image class="money" src="/static/image/other/icon-money.png" mode="widthFix"></image>
				</view>
				<view class="week">
					{{item.name}}
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniSteps from "@/components/uni-steps/uni-steps.vue"
	export default {
		components:{
			uniSteps
		},
		data() {
			return {
				steps:[{title: '事件一'}, {title: '事件二'}, {title: '事件三'}, {title: '事件四'}],
				week:[{state:false,name:"周一"},{state:true,name:"周二"},{state:false,name:"周三"},{state:true,name:"周四"},{state:false,name:"周五"},{state:true,name:"周六"},{state:false,name:"周日"}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.signIn{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.sign{
		width: 15%;
		background: red;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		color: #ffffff;
	}
	.sign-box{
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		background:rgba(255,255,255,0.4);
		padding: 10rpx;
		box-sizing: border-box;
	}
	.sign-box1{
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		background:rgba(0,0,0,0.2);
		padding: 10rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.dit{
		width: 100%;
		height: 100%;
		background: #ffffff;
		border-radius: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.week{
		margin-top: 20rpx;
		font-size: 30rpx;
	}
	.sure{
		width: 30rpx;
	}
	.money{
		width: 40rpx;
	}
</style>

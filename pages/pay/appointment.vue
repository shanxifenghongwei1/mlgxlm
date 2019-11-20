<template>
	<!-- 我要预约页面 -->
	<view class="">
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
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input1 any-flex" :class="!change1?'placeholder':''">
						<text>{{date[0]}}</text>
						<text>年</text>
						<text>{{date[1]}}</text>
						<text>月</text>
						<text>{{date[2]}}</text>
						<text>日</text>
					</view>
				</picker>
				<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
					<view class="uni-input2 any-flex" :class="!change2?'placeholder':''">
						<text>09:00</text>
					</view>
				</picker>
			</view>
		</view>
		<view class="list any-flex">
			<view class="left">
				您的手机
			</view>
			<view class="right">
				<input type="number" value="" placeholder="请输入您的手机号" placeholder-class="placeholder" />
			</view>
		</view>
		<view class="text-box">
			<textarea value="" placeholder="备注(选填),请输入您的其他请求" placeholder-class="placeholder1"/>
		</view>
		
		<view class="li">
			<text class="icon iconfont icon-tixing"></text><text>为了方便联系您到店享受服务，请认真填写信息</text>
		</view>
		<view class="li active">
			<text class="icon iconfont icon-dainhau"></text><text>联系商家</text>
		</view>
		<view class="but" @click="save()">
			<button type="warn">我要预约</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				meth: 0,
				startDate: "2019-01-12",
				endDate: "2020-01-12",
				date: [],
				time: "09:00",
				selectDate: "",
				selectTime: "",
				change1:false,
				change2:false
			}
		},
		onLoad() {
			var date = new Date();
			let a = date.toLocaleDateString(); //获取当前日期
			let b = a.split("/")
			console.log(b)
			this.date = b
		},
		methods: {
			bindDateChange(e) {
				if(e.detail.value){
					this.change1=true
				}
				this.selectDate = e.detail.value
				e.detail.value.split("-")
				this.date = e.detail.value.split("-")
			},
			bindTimeChange(e) {
				if(e.detail.value){
					this.change2=true
				}
				console.log(e.detail.value)
				this.selectTime = e.detail.value
				this.time = e.detail.value
			},
			save(){
				this.global.utils.jump(1,"/pages/pay/appointment_success")
			}
		}
	}
</script>

<style lang="scss">
	.list {
		width: 100%;
		height: 80rpx;
		// background: pink;
		border-bottom: 1rpx solid #EFEFEF;
		padding: 0 3%;
		box-sizing: border-box;
		font-size: $uni-font-size-base;
		font-weight: bold;

		.left {
			width: 140rpx;
		}

		.right {
			flex-grow: 1;
		}
	}

	.placeholder {
		color: #ACACAC;
	}
	.placeholder1{
		color: $any-col;
	}
	.list:first-child {
		margin-top: 20rpx;
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
	.text-box{
		width:100%;
		height:200rpx;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 15rpx;
		border-bottom: 1rpx solid #EFEFEF;
	}
	textarea{
		width: 100%;
		height: 100%;
		font-size: $uni-font-size-sm;
	}

	.li{
		width:100%;
		padding: 0 3%;
		box-sizing: border-box;
		font-size: $uni-font-size-sm;
		margin-top: 10rpx;
		color:#B4B5B5;
	}
	
	.icon-tixing{
		font-size: $uni-font-size-sm;
		color: #F2A70E;
		margin-right: 20rpx;
	}
	.icon-dainhau{
		font-size: $uni-font-size-base;
		color: $any-col;
		margin-right: 20rpx;
	}
	.but{
		width:100%;
		height: 80rpx;
		padding:0 5%;
		box-sizing:border-box;
		margin-top: 35rpx;
	}
	.active{
		color: #1A1A1A;
		font-size: $uni-font-size-base;
		margin-top: 0;
		padding: 10rpx 3%;
	}
</style>

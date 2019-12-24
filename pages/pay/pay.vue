<template>
	<view class="page">
		<view class="tip">
			<uniNoticeBar show-icon="true" scrollable="true" single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uniNoticeBar>
		</view>
	
		<view class="detail">
			<view class="detail-box" v-for="(item,index) in order_detail" :key="index">
				<view class="title">
					产品详情
				</view>
				<view class="con">
					<view class="con-box" >
						<text>产品名称：</text><text>{{item.goods_name}}</text>
					</view>
					<view class="con-box">
						<text>订单编号：</text><text>{{item.order_no}}</text>
					</view>
					<view class="con-box"> 
						<text>总计金额：</text><text>{{item.price}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="method">
			<view class="method-box" @click="selectMethod(1)">
				<image src="/static/image/other/pay_wx.png" class="left-pic" mode=""></image>
				<view class="con">
					微信支付
				</view>
				<image src="/static/image/other/icon-select-cir-out.png"  class="right-pic"  mode="" v-show="meth==0"></image>
				<image src="/static/image/other/icon-select-cir-on.png"  class="right-pic"  mode="" v-show="meth==1"></image>
			</view>
			<view class="method-box" @click="selectMethod(0)">
				<image src="/static/image/other/pay_money.png" class="left-pic" mode=""></image>
				<view class="con">
					分享币支付
				</view>
				<image src="/static/image/other/icon-select-cir-on.png"  class="right-pic"  mode="" v-show="meth==0"></image>
				<image src="/static/image/other/icon-select-cir-out.png"  class="right-pic"  mode="" v-show="meth==1"></image>
			</view>
		</view>
		

		<view class="pay">
			<btn :font="'确认支付'+ num +'元'" btnSize="base" @save="save()"></btn>
		</view>
		
	
	</view>
</template>

<script>
	import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar"
	export default {
		components:{
			uniNoticeBar
		},
		data() {
			return {
				meth:0,
				options:{},
				order_detail:{},
				userInfo:{},
				is_big:1,
				num:0
			}
		},
		methods: {
			selectMethod(e){
				this.meth=e; 
			},
			save(){
				let that=this;
				if(this.meth==0){
					if(this.userInfo[0].money>this.num){
						// console.log("分享币支付")
						let data={};
						data.price=this.num;
						data.order_id=this.options.order_id;
						data.is_big=this.is_big;
						this.global.request.post({
							url: this.global.demao.api.moneybuy,
							method: "GET",
							data: data,
							success: (res) => {
								console.log()
								if(res.code==0){
									this.global.utils.showToast_my("支付成功")
									setTimeout(()=>{
										this.global.utils.jump(3,"/pages/pay/pay_success?money=" + this.num)
									},2000)
								}else{
									
								}
							}
						}) 
					}else{
						uni.showModal({
						    title: '提示',
						    content: '分享币不足，是否切换为微信支付',
						    success:(res)=> {
						        if (res.confirm) {
									that.meth=1;
						            let data = {};
						            data.id=that.options.order_id;
						            data.openid= uni.getStorageSync("session").data.openid;
						            data.is_big=that.is_big;
						            uni.request({
						            	url: that.global.demao.domain.request + "test_pay",
						            	data: data,
						            	dataType: "json",
						            	method:"POST",
						            	header: {
						            		"Content-Type": 'application/x-www-form-urlencoded', // 默认值
						            		'X-TOKEN-PETMALL': '',
						            	},
						            	success: (result) => {
						            		
						            		console.log(result.data)
						            		uni.requestPayment({
						            		    provider: 'wxpay',
						            		    timeStamp: result.data.timeStamp,
						            		    nonceStr: result.data.nonceStr,
						            		    package: result.data.package,
						            		    signType: result.data.signType,
						            		    paySign: result.data.paySign,
						            		    success: function (res) {
						            		        that.global.utils.showToast_my("支付成功")
						            		        setTimeout(() => {
						            					that.global.utils.jump(3,"/pages/pay/pay_success?money=" + that.num)
						            		        }, 2000)
						            		    },
						            		    fail: function (err) {
						            		        console.log('fail:' + JSON.stringify(err));
						            		    }
						            		});
						            	},
						            })
						        } else if (res.cancel) {
						           this.global.utils.showToast_my("支付失败")
						        }
						    }
						});
					}
				}else{
					
					let data = {};
					data.id=this.options.order_id;
					data.openid= uni.getStorageSync("session").data.openid;
					data.is_big=this.is_big;
					uni.request({
						url: this.global.demao.domain.request + "test_pay",
						data: data,
						dataType: "json",
						method:"POST",
						header: {
							"Content-Type": 'application/x-www-form-urlencoded', // 默认值
							'X-TOKEN-PETMALL': '',
						},
						success: (result) => {
							
							console.log(result.data)
							uni.requestPayment({
							    provider: 'wxpay',
							    timeStamp: result.data.timeStamp,
							    nonceStr: result.data.nonceStr,
							    package: result.data.package,
							    signType: result.data.signType,
							    paySign: result.data.paySign,
							    success: function (res) {
							        that.global.utils.showToast_my("支付成功")
							        setTimeout(() => {
										that.global.utils.jump(3,"/pages/pay/pay_success?money=" + that.num)
							        }, 2000)
							    },
							    fail: function (err) {
							        console.log('fail:' + JSON.stringify(err));
							    }
							});
						},
					})
				}
			}
		},
		onLoad(options){
			console.log(options.order_id)
			this.options=options;
			//1大订单
			
			if(options.is_min){
				this.is_big=0
			}else{
				this.is_big=1
			}
			let data={};
			data.id=options.order_id;
			data.is_big=this.is_big;
			this.global.request.post({
				url: "user_center",
				method: "GET",
				data: {},
				success: (res) => {
					this.userInfo=res.userInfo;
				}
			})
			this.global.request.post({
				url: this.global.demao.api.order_detail, 
				method: "GET",
				data: data,
				isLoading: true,
				success: (res) => {
					this.order_detail=res.data
					let num=0;
					res.data.forEach((v)=>{
						console.log(v.price) 
						num=num + Number(v.price)
					})
					this.num=num;
				}
			})
		}
	}
</script>

<style lang="scss">
	.page{
		width: 100%;
		min-height: 100vh;
		background: #F0F0F0;
		overflow: hidden;
	}
	.detail{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 30rpx;
		.detail-box{
			width: 100%;
			height: 100%;
			background: url('~@/static/image/other/pay_1.png') no-repeat center;
			background-size: cover;
			padding: 0 30rpx;
			box-sizing: border-box;
			margin-top: 20rpx;
			.title{
				width: 100%;
				height: 106rpx;
				font-size: $uni-font-size-lg;
				text-align: center;
				line-height: 106rpx;
				color: #666666;
			}
			.con{
				width: 100%;
				height: 186rpx;
				@extend .any-flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				font-size: $uni-font-size-base;
				.con-box{
					width:100%;
					height: 24rpx;
					padding: 8rpx 0;
					@include multi-row-apostrophe(1);
					text:nth-child(1){
						color: #B2B2B2;
					}
					text:nth-child(2){
						color: #666666;
						margin-left: 3rpx;
					}
				}
			}
		}
	}
	
	.method{
		width: 100%;

		margin-top: 30rpx;
		background: #ffffff;
		position: relative;
		.method-box{
			width: 100%;
			height: 100rpx;
			@extend .any-flex;
			padding: 0 5%;
			box-sizing: border-box;
			justify-content: space-between;
			align-items: center;
		}
		.left-pic{
			width: 60rpx;
			height: 60rpx;
			padding: 20rpx;
		}
		.con{
			flex-grow: 1;
			height: 100%;
			padding-left: 10rpx;
			box-sizing: border-box;
			font-size: $uni-font-size-base;
			text-align: left;
			line-height: 100rpx;
			
		}
		.right-pic{
			width: 40rpx;
			height: 40rpx;
			padding: 20rpx;
		}
	}
	.method:after{
		content: "";
		display: block;
		position: absolute;
		width: 100%;
		height: 2rpx;
		left: 0;
		bottom: 50%;
		background:#C7C7C7;
	}
	.pay{
		width: 100%;
		padding: 0 5%;
		box-sizing: border-box;
		margin-top: 60rpx;
		position: relative;
	}
</style>

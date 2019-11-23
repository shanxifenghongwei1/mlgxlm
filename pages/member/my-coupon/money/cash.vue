<!-- 提现页面 -->
<template>
	<view class="page">
		<view class="head">
			<view class="content">
				<view class="icon iconfont icon-nongyeyinhang"></view>
				<view class="bank">
					中国工商银行
					<view class="">
						储蓄卡
					</view>
				</view>
			</view>
			<view class="bank-num">
				6228480900796906312
			</view>
			<view class="toMore"  @click="openPopup">
				更换银行卡
				<view class="icon iconfont icon-jiantou-copy">
					
				</view>
			</view>
		</view>
		<view class="con">
			<view class="title">
				提现金额
			</view>
			<view class="number">
				<input type="text" value="" placeholder="请输入提现金额" placeholder-class="placeholder"/>
				<view class="">
					全部提现
				</view>
			</view>
			<view class="number1">
				可提现金额1908.22元
			</view>
		</view>
		<view class="save" @click="save()">
			<button type="primary">确认提现</button>
		</view>
		<navigator url="/pages/member/my-coupon/money/cash_detail" class="bottom">
			<view class="see">
				查看记录
			</view>
			<view class="icon iconfont icon-jiantou-copy">
				
			</view>
		</navigator>
		
		
		<view>
		    <uniPopup ref="popup" type="center">
		        <view class="card-list">
		        	<view class="title">
		        		<view class="icon iconfont icon-jiantou-copy">
		        			
		        		</view>
						选择银行卡
						<view>
							
						</view>
		        	</view>
					<view class="list">
						<view class="icon iconfont icon-zhaoshangyinhang">
							
						</view>
						<view class="backname">
							招商银行
						</view>
						<view class="icon iconfont icon-xuanzhong1" v-show="true">
							
						</view>
						<view class="icon iconfont icon-weixuanzhong" v-show="!true">
							
						</view>
					</view>
					<view class="list">
						<view class="icon iconfont icon-jiansheyinhang">
							
						</view>
						<view class="backname">
							建设银行
						</view>
						<view class="icon iconfont icon-xuanzhong1" v-show="true">
							
						</view>
						<view class="icon iconfont icon-weixuanzhong" v-show="!true">
							
						</view>
					</view>
		        </view>
		    </uniPopup>
		</view>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue";
	export default{
		components:{
			uniPopup
		},
		data(){
			return{
				
			}
		},
		methods:{
			save:()=>{
				uni.redirectTo({
					url:"/pages/member/my-coupon/money/cash_success"
				})
			},
			 openPopup(){
			            this.$refs.popup.open()
			        },
			        closePopup(){
			            this.$refs.popup.close()
			        }
		}
	}
</script>

<style lang="scss">
	.page {
		width: 100%;
		min-height: 100vh;
		background: #F2F2F2;
		overflow: hidden;
	}

	.head {
		width: 100%;
		height: 180rpx;
		background: #ffffff;
		padding: 10rpx 3%;
		box-sizing: border-box;
		@extend .any-flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		position: relative;
		margin-top: 20rpx;
		.content {
			box-sizing: border-box;
			@extend .any-flex;
			.icon-nongyeyinhang {
				font-size: 72rpx;
				color: #09BB07;
				padding: 0 20rpx;
			}

			.bank {
				font-size: $uni-font-size-lg;
				font-weight: bold;
				@extend .any-flex;
				view{
					display: inline-block;
					background: #F2F2F2;
					color: #9A9A9A;
					font-size: $uni-font-size-sm;
					padding: 2rpx 5rpx;
					margin-left: 15rpx;
				}
			}
		}

		.bank-num {
			width: 100%;
			padding-left: 130rpx;
			box-sizing: border-box;
			font-size: $uni-font-size-base;
			font-weight: bold;
		}
		.toMore{
			@extend .any-flex;
			position: absolute;
			right: 30rpx;
			top: 20%;
			font-size: $uni-font-size-base;
			color:  $any-col;
			padding: 5rpx 10rpx;
			font-weight: bold;
			.icon-jiantou-copy{
				font-weight: bold;
				margin-top: 1rpx;
			}
		}
	}
	.con{
		width: 100%;
		height: 360rpx;
		background: #ffffff;
		margin-top:30rpx;
		padding: 30rpx 3%;
		box-sizing: border-box;
		@extend .any-flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		.title{
			font-size: $uni-font-size-base;
			font-weight: bold;
		}
		.number{
			@extend .any-flex;
			align-items: center;
			border-bottom: 1rpx solid #F2F2F2;
			input{
				width: 500rpx;
				height: 100rpx;
				color:  $any-col;
				font-size: $uni-font-size-lg;
				font-weight: bold;
			}
			.placeholder{
				color:  $any-col;
				font-size: $uni-font-size-lg;
			}
			view{
				font-size: $uni-font-size-sm;
				color:  $any-col;
				font-weight: bold;
			}
		}
		.number1{
			font-size: $uni-font-size-sm;
			color: RGBA(154, 154, 154, 1);
		}
	}
	
	.save{
		width: 100%;
		padding: 0 10%;
		box-sizing: border-box;
		margin: 50rpx 0 20rpx;
	}
	.bottom{
		display: flex;
		justify-content: center;
		padding: 10rpx 0;
		color: #9A9A9A;
		font-size: $uni-font-size-base;
		align-items: center;
		.see{
			line-height: 40rpx;
		}
	}
	button[type=primary] {
		background-color: $any-col;
	}
	
	.button-hover[type=primary] {
		background-color: $any-col;
	}
	
	.card-list{
		width: 625rpx;
		height: 711rpx;
		background: #ffffff;
		border-radius: 20rpx;
		padding: 20rpx;
		box-sizing: border-box;
		font-size: $uni-font-size-base;
		.title{
			width: 100%;
			height: 80rpx;
			@extend .any-flex;
			justify-content:space-between;
			align-items: center;
			font-weight: bold;
			.icon-jiantou-copy{
				font-size: 40rpx;
				transform: rotate(180deg);
				padding: 10rpx;
			}
		}
		.list{
			width: 100%;
			height: 80rpx;
			@extend .any-flex;
			justify-content:space-between;
			image{
				width: 60rpx;
				height: 60rpx;
				border-radius: 50%;
				background:red;
			}
			.backname{
				width: 400rpx;
				line-height: 80rpx;
				font-size: $uni-font-size-base;
			}
			.icon-xuanzhong1{
				font-size: 40rpx;
				color:  $any-col;
			}
			.icon-weixuanzhong{
				font-size: 38rpx;
			}
			
			.icon-zhaoshangyinhang{
				font-size: 60rpx;
				color:  $any-col;
			}
			.icon-jiansheyinhang{
				font-size: 60rpx;
			}
		}
	}
</style>

<template>
	<!-- 分销订单页面 -->
	<view class="">
		<view class="fxdd cons">
			
			<!-- 累计的盒子 -->
			<view class='accum'>
				<view class='accum-list'>
					<view class="bigfont">10</view>
					<view class="smfont">今日累计订单</view>
				</view>
				
				<view class='accum-list'>
					<view class="bigfont">10</view>
					<view class="smfont">当月累计订单</view>
				</view>
				
				<view class='accum-list'>
					<view class="bigfont">10</view>
					<view class="smfont">累计订单总数</view>
				</view>
			</view>	
		</view>
		
		<!-- 订单分类 -->
		<view class="cate">
			<view class="cate-box">
				<view class="cate-con" :class="cateId==1?'active':''" @click="selectCate(1)">
					<text class="base">未完成订单</text>
					<text class="base">200件</text>
				</view>
			</view>
			<view class="cate-box">
				<view class="cate-con" :class="cateId==2?'active':''" @click="selectCate(2)">
					<text class="base">未收货订单</text>
					<text class="base">200件</text>
				</view>
			</view>
			<view class="cate-box">
				<view class="cate-con" :class="cateId==3?'active':''" @click="selectCate(3)">
					<text class="base">已完成订单</text>
					<text class="base">200件</text>
				</view>
			</view>
		</view>
		
		<!-- 订单列表 -->
		<view class="order base" v-for="i in num" :key="i">
			<view class="order-code">
				<text>订单编号：yhdsyhaya</text>
				<text class="red">等待付款</text>
			</view>
			<view class="order-person">
				<text>用户姓名：王三</text>
			</view>
			<view class="order-phone">
				<text>商品名称：1651234156</text>
			</view>
			<view class="order-time">
				<text>申请时间：yhdsyhaya</text>
			</view>
			<view class="detail"  @click="toDetail()">
				订单详情
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				cateId:1,
				num:6
			}
		},
		methods:{
			selectCate(e){
				this.cateId=e;
			},
			toDetail(){
				this.global.utils.jump(1,"/pages/home/retail/retail_order_detail")
			}
		}
	}
</script>

<style lang="scss">
	.red{
		color:$any-col;
	}
	.big {
		font-size: 40rpx;
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
	.ccc{
		color: #cccccc;
	}
	.accum{
		width: 100%;
		height: 150rpx;
		margin-top:30rpx;
		background-image: linear-gradient(to right, #FF5151 , #E40000);
		@extend .any-flex;
		justify-content: center;
		border-radius: 20rpx;
		color: #fff;
		text-align: center;
		.accum-list{
			width: 33%;
			.bigfont{
				
			}
			.smfont{
				font-size: $uni-font-size-base;
			}
		}
		.accum-list:nth-child(2){
			position: relative;
		}
		.accum-list:nth-child(2)::after{
			position:absolute;
			content:'';
			display: block;
			top: 30%;
			left: 0;
			width: 2rpx;
			height:50%;
			background: #fff;
		}
		.accum-list:nth-child(2)::before{
			position:absolute;
			content:'';
			display: block;
			top: 30%;
			right: 0;
			width: 2rpx;
			height:50%;
			background: #fff;
		}
		
	}
	.cate{
		width: 100%;
		padding: 0 3%;
		margin-top:20rpx;
		box-sizing: border-box;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0rpx 0rpx 10rpx #bfbdbd;
		box-sizing: border-box;
		.cate-box{
			height: 100rpx;
			padding: 1rpx 30rpx;
		}
		.cate-con{
			width: 100%;
			height: 100%;
			@extend .any-flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.active{
			border-bottom: 2rpx solid $any-col;
			color: $any-col;
		}
	}
	.order{
		width: 100%;
		height: 240rpx;
		margin-top: 20rpx;
		border: 1rpx solid #bfbdbd;
		padding: 20rpx 3%;
		box-sizing: border-box;
		@extend .any-flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-direction: column;
		color: #A2A2A2;
		position: relative;
		.order-code{
			width: 100%;
			@extend .any-flex;
			justify-content: space-between;
			align-items: center;
		}
		.detail{
			width: 150rpx;
			height: 44rpx;
			background: $any-col;
			border-radius: 15rpx;
			position: absolute;
			right: 3%;
			bottom: 20rpx;
			text-align: center;
			line-height: 44rpx;
			letter-spacing: 2rpx;
			color: #ffffff;
		}
	}
</style>

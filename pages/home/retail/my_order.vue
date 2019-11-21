<template>
	<!-- 分销订单页面 -->
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
		
		<!-- 待付款订单 -->
		
	</view>
</template>

<script>
	export default{
		name:'分销订单页面',
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		onLode(option){
			
		}
	}
</script>

<style lang="scss">
	
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
	
</style>

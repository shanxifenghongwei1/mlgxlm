<!-- 模块标题组件 -->
<template>
	<view class="newshop-head">
		<view class="icons">
			<view class="iconsss"></view>
			<view>{{titCon.name}}</view>
		</view>
		<view class="more" @click="linkPages(titCon.link)">{{titCon.more}}</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			titCon:{
				type:Object, //商品数据列表
				default:{}
			}
		},
		methods:{
			linkPages(e){
				console.log(e);
				uni.navigateTo({
					url:e
				})
			}
		}
	}
</script>

<style lang="scss">
	.newshop-head {
		width: 100%;
		height: 60rpx;
		@extend .any-flex;
		justify-content: space-between;
	
		.icons {
			@extend .any-flex;
			font-size: $uni-font-size-lg;
			font-weight: bold;
	
			.iconsss {
				height: 40rpx;
				width: 8rpx;
				margin-right: 15rpx;
				background: $any-col;
				font-size: $uni-font-size-lg;
			}
		}
	
		.more {
			font-size: $uni-font-size-lg;
			height: 40rpx;
			line-height: 40rpx;
			background: $any-col;
			color: #fff;
			text-align: center;
			border-radius: 10rpx;
			padding: 0 6rpx;
		}
	}
</style>

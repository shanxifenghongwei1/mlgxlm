<template>
	<view class="cate">
		<view class="cate-item"  v-for="(item,index) in cateList" :key="index" @click="selCate(item.id)">
			<view class="" :class="cateid==item.id?'active':'' ">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			cateList:{
				type:Array, //商品数据列表
			},
				
			cateid:{
				type:Number,     //默认id
				default:1
			}
		},
		methods:{
			selCate(e){
				this.$emit('seleId',e)
			}
		}
	}
</script>

<style lang="scss">
	.cate{
		width: 100%;
		height: 70rpx;
		box-shadow: #cccccc 0px 0px 10rpx;
		background: #ffffff;
		@extend .any-flex;
		justify-content: space-between;
		padding: 0 3%;
		box-sizing: border-box;
		font-size: $uni-font-size-base;
		margin-top: 20rpx;
		.cate-item{
			// display: inline-block;
			flex-grow: 1;
			height: 100%;
			background: #ffffff;
			@extend .any-flex;
			justify-content: center;
			align-items: center;
		}
		.cate-item view{
			display: inline-block;
			height: 100%;
			padding: 0 5rpx;
			background: #ffffff;
			line-height: 70rpx;
		}
		.active{
			border-bottom: 8rpx solid $any-col;
			box-sizing: border-box;
			color: $any-col;
		}
	}
</style>

<template>
	<view>
		<view class="cate">
			<view class="cate-item"  v-for="(item,index) in list" :key="index">
				<view class="" :class="cateid==item.id?'active':'' " @click="selCate(item.id)">
					{{item.name}}
				</view>
			</view>
		</view>
		
		<view class="">
			<flashCard></flashCard>
		</view>
	</view>
</template>

<script>
	import flashCard from "@/components/mine/flashSale.vue"
	export default {
		components:{
			flashCard
		},
		data() {
			return {
				list:[{
					id:1,
					name:"正在抢购"
				},{
					id:2,
					name:"即将开抢"
				}],
				cateid:1
			}
		},
		methods: {
			selCate(e){
				console.log(e);
				this.cateid=e;
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

<template>
	<view>
		<evaluate :mine="true" :evallist="evallist">
			<view class="images-father">
				
				
				<view style="background: red; width: 120rpx; height: 120rpx;margin: 10rpx;" v-for='(item,index) in evallist'>
					<image style="width: 100%;height: 100%;" src="../../../../static/image/other/about_us.png" mode=""></image>
				</view>
				

				
				
			</view>
		</evaluate>
	</view>
</template>

<script>
	import evaluate from "@/components/mine/evaluate"
	export default {
		components:{
			evaluate
		},
		data() {
			return {
				evallist:[1,2,3,4,5]
			}
		}, 
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.images-father{
		overflow: hidden;
		width: 100%;
		// height: 175rpx;
		padding: 10rpx;
		box-sizing: border-box;
		background: #007AFF;
		@extend .any-flex;
		flex-wrap: wrap;
	}
</style>

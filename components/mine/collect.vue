<template>
	<view >
		<view class="collect">
			<button type="" open-type="share" @click="share">
				<view class="icon iconfont icon-fenxiang fon blue">
					
				</view>
			</button>
			<button type="" @click="collect">
				<view class="icon iconfont icon-pingjia fon" :class="collect_state?'red':'ccc'">
					
				</view>
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
	
			}
		},
		props: {
			collect_state: {
				type: Boolean, 
				default: false
			}	
		},
		methods:{
			share(){
				this.$emit("share",true)
			},
			collect(){
				this.$emit("collect",true)
			}
		}
	}
</script>

<style lang="scss">
	.collect{
		width: 180rpx;
		height: 70rpx;
		position: fixed; 
		right: 10rpx;
		top: 10rpx;
		z-index: 100;
		@extend .any-flex;
	}
	button{
		width: 50%;
		height: 100%;
		background: rgba(0,0,0,0) !important;
		border: none;
		padding: 0;
		font-size: 48rpx;
		line-height: 1.8;
	}
	.blue{
		color: #008AE1;
	}
	.ccc{
		color: #C8C7CC;
	}
	.red{
		color:$any-col;
	}
	.fon{
		font-size: 45rpx;
	}
</style>

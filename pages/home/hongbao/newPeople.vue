<template>
	<view>
		<view class="con">
			<image :src="picUrl+'/images/5dfc65b57928d26.jpg'" mode="" class="back"></image>
			
			<view class="num">
				30
			</view>
			<view class="draw" @click="save()">
				立即领取
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picUrl:this.global.demao.domain.videoUrl
			}
		},
		methods: {
			save(){
				this.global.login_state.login_state().then((res) => {
					if (res) {
						this.global.request.post({
							url: 'draw_package',
							success: res => {
								this.global.utils.showToast_my(res.msg)
							}
						})
					}
				})
			}
		},
		onLoad(e){
			
		}
	}
</script>

<style lang="scss">
	.con {
		width: 100vw;
		height: 100vh;
		position: relative;
	}

	.back {
		width: 100vw;
		height: 100vh;
		margin: 0;
		display: block;
	}

	.num{
		font-size: 110rpx;
		color: #ffffff;
		position: absolute;
		left: 36%;
		bottom: 25%;
	}
	.draw{
		width: 491rpx;
		height: 85rpx;
		border-radius: 42rpx;
		background: #FB9F00;
		position: absolute;
		left: 130rpx;
		bottom: 10%;
		text-align: center;
		line-height: 85rpx;
		font-size: $uni-font-size-lg;
		letter-spacing: 3rpx;
		color: #ffffff;
	}
</style>

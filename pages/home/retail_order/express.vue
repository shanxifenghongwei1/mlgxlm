<template>
	<view class="pages">
		<view class="express_top">
			<image :src="info.log_img" mode=""></image>
			<view class="express_info">
				<view class="lg">
					{{info.log_name}}
				</view>
				<view class="base">
					{{info.log_phone}}
				</view>
			</view>
		</view>
		<view class="express_top">
			<uni-steps :options="list" direction="column" :active="0"></uni-steps>
		</view>
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue';
	export default {
		components: {
			uniSteps
		},
		data() {
			return {
				options: {},
				list: [],
				info:{}
			}
		},
		methods: {
			save() {
				uni.navigateTo({
					url: "/pages/pay/refund"
				})
			}
		},
		onLoad(options) {
			this.options = options;
			this.global.request.post({
				url: "reseller_order_information",
				data: {
					re_order_id: options.re_order_id,
				},
				success: (res) => {
					console.log(res)

					let list=JSON.parse(res.data).Traces;
					let array=[];
					list.forEach((v)=>{
						let obj={};
						obj.title=v.AcceptStation;
						obj.desc=v.AcceptTime;
						array.push(obj)
					})
					this.list = array.reverse();
					this.info = res.reOrderInfo;
				}
			})
		}
	}
</script>

<style lang="scss">
	.red {
		color: $any-col;
	}

	.big {
		font-size: 45rpx;
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

	.ccc {
		color: #cccccc;
	}

	.gray {
		color: #808080;
	}

	.mul {
		@include multi-row-apostrophe(1);
	}

	.tag {
		padding: 5rpx 20rpx;
		border-radius: 50rpx;
		background: $any-col;
	}

	.mar {
		margin-right: 10rpx;
	}

	.mar-t {
		margin-top: 10rpx;
	}

	.wei {
		font-weight: bold;
	}

	.emit {
		width: 100%;
		height: 120rpx;
	}

	.pages {
		width: 100%;
		min-height: 100vh;
		background: #f1f1f1;
		overflow: hidden;
	}

	.express_top {
		width: 702rpx;
		// height: 200rpx;
		background: #ffffff;
		margin: 20rpx auto 0;
		border-radius: 15rpx;
		display: flex;
		align-items: center;
		padding: 20rpx;
		box-sizing: border-box;

		image {
			width: 90rpx;
			height: 90rpx;
			margin-right: 25rpx;
		}
	}
</style>

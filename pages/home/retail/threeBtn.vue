<template>
	<!-- 这个是分销订单详情 -->
	<view class="">
		<view class="">
			<cateflex :cateList="cateList" :cateid="cateid" @seleId="seleId()"></cateflex>
		</view>
		<view class="info">
			<block v-if="cateid==1">
				<view class="li">
					<view class="title base">
						店铺名称
					</view>
					<input type="text" class="input base" value="" placeholder="请填写店铺名称" />
				</view>
				<view class="li">
					<view class="title base">
						联系人
					</view>
					<input type="text" class="input base" value="" placeholder="请填写店铺负责人" />
				</view>
				<view class="li">
					<view class="title base">
						联系电话
					</view>
					<input type="text" class="input base" value="" placeholder="请填写联系电话" />
				</view>
				<view class="li">
					<view class="title base">
						店铺地址
					</view>
					<input type="text" class="input base" value="" placeholder="请填写您店铺具体位置" />
				</view>
			</block>
			<block v-if="cateid==2">
				<view class="li">
					<view class="title base">
						店铺名称
					</view>
					<input type="text" class="input base" value="" placeholder="请填写店铺名称" />
				</view>
				<view class="li">
					<view class="title base">
						联系人
					</view>
					<input type="text" class="input base" value="" placeholder="请填写店铺负责人" />
				</view>
				<view class="li">
					<view class="title base">
						联系电话
					</view>
					<input type="text" class="input base" value="" placeholder="请填写联系电话" />
				</view>
				<view class="li">
					<view class="title base">
						店铺地址
					</view>
					<input type="text" class="input base" value="" placeholder="请填写您店铺具体位置" />
				</view>
			</block>
			<block v-if="cateid==3">
				<view class="li">
					<view class="title base">
						所属行业
					</view>
					<input type="text" class="input base" value="" placeholder="请填写所属行业名称" />
				</view>
				<view class="li">
					<view class="title base">
						联系人
					</view>
					<input type="text" class="input base" value="" placeholder="请填写您的名字" />
				</view>
				<view class="li">
					<view class="title base">
						联系电话
					</view>
					<input type="text" class="input base" value="" placeholder="请填写联系电话" />
				</view>
				<view class="li">
					<view class="title base">
						备注
					</view>
					<input type="text" class="input base" value="" placeholder="请填写您申请的具体事宜" />
				</view>
			</block>
		</view>
		<view class="save" @click="save()">
			<button type="warn">提交信息</button>
		</view>
	</view>
</template>

<script>
	import cateflex from "@/components/mine/cate-flex.vue";
	export default {
		components: {
			cateflex
		},
		data() {
			return {
				cateList: [{
						id: 1,
						name: "分销代理"
					},
					{
						id: 2,
						name: "分销商"
					}, {
						id: 3,
						name: "异业联盟"
					}
				],
				cateid: 1
			}
		},
		methods: {
			seleId(e) {
				this.cateid = e;
			}
		},
		onLoad(e) {
			this.cateid = e.opec
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
		color: #777777;
	}

	.mul {
		@include multi-row-apostrophe(1);
	}

	.tag {
		padding: 5rpx 20rpx;
		border-radius: 50rpx;
		background: $any-col;
		;
	}

	.mar {
		margin-right: 10rpx;
	}

	.wei {
		font-weight: bold;
	}

	.emit {
		width: 100%;
		height: 120rpx;
	}

	.info {
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 20rpx;

		.li {
			width: 100%;
			height: 120rpx;
			padding: 0 10rpx;
			box-sizing: border-box;
			border-bottom: 1rpx solid #BEBEBE;
			@extend .any-flex;
			justify-content: center;
			flex-direction: column;
			align-items: flex-start;
		}

		input {
			width: 100%;
			height: 40rpx;
			margin-top: 10rpx;
		}
	}
	.save {
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 40rpx;
	}
</style>

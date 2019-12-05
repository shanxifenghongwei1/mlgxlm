<template>
	<!-- 拼团列表页面 -->
	<view class="">
		<view class="search">
			<view hover-class='none' url="/pages/home/search/search" class="sear">
				<view class="sear-text"></view>
				<input type="number" value="" placeholder="您可以输入您想找的团队ID" class="base" @input="input" />
				<view class="sear-logo">
					<view class="icon-fathre">
						<view class="sear-icon iconfont icon-sousuo"></view>
					</view>
				</view>
			</view>
		</view>


		<view class="pt_list">
			<scroll-view scroll-y="true" class="li-box">
				<view v-for="(item,index) in list" :key="index" class="everyfontclass">
					<view class="pt_id">
						<view class="">
							团队id：{{item.pt_id}}
						</view>
					</view>
					<view class="list-li">

						<view class="u-team">
							<image :src="item.wx_headimg" mode=""></image>
							<view class="">
								{{item.wx_name}}
							</view>
						</view>
						<view class="u-info">
							<view class="">
								还差
								<view style="display: inline-block;background: $any-col;">
									{{item.promotion_prople - item.pt_sum}}人
								</view>
								拼团
							</view>
						</view>
						<view class="u-btn" @click="select(item.pt_id)">
							去拼团
						</view>
					</view>

				</view>
				
				
				

				
			</scroll-view>
		</view>


		<view class="bottom-box">
			<!-- <view class="tip base wei">
				商品详情
			</view>
			<view class="goods">
				<image :src="picUrl+good_detail.picture" mode="" class="pic"></image>
				<view class="price">
					<text class="big red">￥123元</text>
					<text class="base wei">芳香精油乳腺疏通</text>
				</view>
			</view> -->
			<view class="tip base wei" v-if="select_item.pt_id">
				所选团队
			</view>
			
			<view class="everyfontclass" v-if="select_item.pt_id">
			<view class="pt_id">
				<view class="">
					团队id：{{select_item.pt_id}}
				</view>
			</view>
			<view class="list-li active" >
				<view class="u-team">
					<image :src="select_item.wx_headimg" mode="" class="pic"></image>
					<view class="">
						{{select_item.wx_name}}
					</view>
				</view>
				<view class="u-info">
					<view class="">
						还差
						<view style="display: inline-block;background: $any-col;">
							{{select_item.promotion_prople - select_item.pt_sum}}人
						</view>
						拼团
					</view>
				</view>
			</view>
			</view>
			
			
		</view>

		<view class="save" v-if="select_item.pt_id">
			<btn font="拼团购买" @save="save()"></btn>
		</view>

	</view>

</template>

<script>
	import mysearch from "@/components/my-search/my-search"
	export default {
		components: {
			mysearch
		},
		data() {
			return {
				options: {},
				all_list: [],
				list: [],
				good_detail: {},
				picUrl: "",
				select_item: {}
			}
		},
		onLoad(options) {
			console.log(options)
			this.options = options;

			this.picUrl = this.global.demao.domain.videoUrl;

			let data = {};
			data.goods_id = this.options.goods_id

			this.global.request.post({
				url: this.global.demao.api.goodsInfo,
				method: "GET",
				data: data,
				success: (res) => {
					console.log(res)
					this.good_detail = res.goodsInfo;
				}
			})
		},
		onShow() {
			let data = {
				goods_id: this.options.goods_id
			};
			this.global.request.post({
				url: this.global.demao.api.pt_add_list,
				method: "GET",
				data: data,
				success: (res) => {
					console.log("这是列表数据")
					console.log(res.data)
					this.list = res.data;
					this.all_list = res.data;
				}
			})
		},
		methods: {
			select(e) {
				console.log(e)
				let a = this.list;
				let b = a.filter((v) => {
					return v.pt_id == e;
				})
				this.select_item = b[0];
			},
			save() {
				let that = this;
				let a = [];
				a.push(that.options.goods_id)
				let data = {};
				data.goods_id = a.join(',');
				data.shop_id = that.good_detail.shop_id;
				data.buy_num = 1;
				data.good_cate = 0;
				data.total_price = that.good_detail.promotion_price;
				data.pt_id = that.select_item.pt_id;
				that.global.request.post({
					url: that.global.demao.api.pt_add,
					method: "GET",
					data: data,
					isLoading: true,
					success: (res) => {
						console.log(res)
						if (res.code == 0) {
							that.global.utils.showToast_my("下单成功")
							setTimeout(function() {
								that.global.utils.jump(1, "/pages/pay/pay?order_id=" + res.data.order_id)
							}, 10);
						}
					}
				})
			},
			input(e) {
				let a = this.all_list;
				if (e.detail.value.trim()) {
					let b = a.filter((v) => {
						return v.pt_id == e.detail.value.trim()
					})
					if (b.length) {
						this.list = b;
					} else {
						this.list = this.all_list;
					}
				} else {
					this.list = this.all_list;
				}
			}
		}
	}
</script>

<style lang="scss">
	.everyfontclass{
		margin:10rpx 0 ;
		border-bottom: 1rpx solid #ccc;
		overflow: hidden;
		.pt_id {
			margin-top: 5rpx;
			// width: 80rpx;
			font-size: $uni-font-size-sm;
		}
	}
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

	.search {
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
	}

	input {
		width: 90%;
		height: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;
	}

	.sear {
		width: 100%;
		height: 60rpx;
		border-radius: 50rpx;
		background: $any-zol;
		margin-top: 20rpx;
		@extend .any-flex;
		justify-content: space-between;

		.sear-text {
			font-size: $uni-font-size-base;
			line-height: 60rpx;
			margin-left: 30rpx;
			color: #d0d0d0;
		}

		.sear-logo {
			padding: 20rpx 0 20rpx 20rpx;

			.icon-fathre {
				width: 20rpx;
				height: 20rpx;
				border-radius: 10rpx;
				background: $any-col;
			}

			margin-right: 30rpx;

			.sear-icon {
				color: #000000;
			}
		}
	}

	.pt_list {
		width: 94%;
		border-radius: 20rpx;
		margin: 0 auto;
		margin-top: 40rpx;
		// overflow: hidden;
		font-size: $uni-font-size-base;
		box-shadow: 0rpx 0rpx 10rpx #cccccc;

		.li-top {
			width: 100%;
			height: 100rpx;
			background: #cccccc;
			padding: 0 20rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;

			text {
				flex-grow: 1;
				text-align: center;
				line-height: 100rpx;
			}
		}

		.li-box {
			width: 100%;
			height: 50vh;
			padding: 0 20rpx;
			box-sizing: border-box;
		}
	}

	.bottom-box {
		width: 100%;
		margin-top: 1vh;
		padding: 0 3%;
		box-sizing: border-box;

		.goods {
			width: 100%;
			height: 160rpx;
			display: flex;
			align-items: flex-end;

			.pic {
				width: 160rpx;
				height: 160rpx;
				background: yellow;
			}

			.price {
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				padding: 0 20rpx;
				box-sizing: border-box;
				padding-bottom: 10rpx;
			}
		}
	}


	.list-li {
		width: 100%;
		height: 92rpx;
		border-bottom: 2rpx solid #b4b4b4;
		box-sizing: border-box;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
		
		.pt_id {
			margin-top: 5rpx;
			// width: 80rpx;
			font-size: $uni-font-size-sm;
		}

		.u-team {
			width: 270rpx;
			font-size: $uni-font-size-base;
			@extend .any-flex;
			align-items: center;
		}

		.u-team image {
			width: 69rpx;
			height: 69rpx;
			border-radius: 50%;
			margin-right: 30rpx;
		}

		.u-team view {
			width: 180rpx;
			height: 100%;
		}

		.u-info {
			font-size: $uni-font-size-sm;
			@extend .any-flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;
		}

		.u-btn {
			padding: 5rpx 12rpx;
			color: #ffffff;
			background: $any-col;
			border-radius: 10rpx;
			font-size: $uni-font-size-base;
		}
	}

	.list-li:last-child {
		border: none;
	}

	.list-li.active {
		border: 1rpx solid#cccccc;
		padding: 0 20rpx;
	}

	.tip {
		padding: 10rpx 0;
		box-sizing: border-box;
	}

	.save {
		width: 100%;
		margin-top: 20rpx;
	}
</style>

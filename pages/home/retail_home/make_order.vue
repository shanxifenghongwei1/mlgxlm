<template>
	<!-- 分销下订单页面 -->
	<view class="">

		<!-- 地址处理 -->
		<navigator url="/pages/member/tool/address/address?fromPage=order" class="address-box" v-if="user_addressInfo.id">
			<view class="address-con">
				<view class="icon iconfont icon-dizhi">

				</view>
				<view class="add-con">
					<view class="infor">
						<text class="lg mar">{{user_addressInfo.name}}</text>
						<text class="base gray">{{user_addressInfo.tel}}</text>
					</view>
					<view class="base mar-t gray">
						{{user_addressInfo.address_provice + user_addressInfo.address_city + user_addressInfo.address_area + user_addressInfo.address_detail}}
					</view>
				</view>
				<text class="icon iconfont icon-jiantou-copy lg wei"></text>
			</view>
		</navigator>

		<!-- 地址处理 -->
		<navigator url="/pages/member/tool/address/address?fromPage=order" class="address-box" v-else style="height: 80rpx;">
			<view class="address-con">
				<view class="icon iconfont icon--location lg mar"></view>
				<view class="add-con">
					点击选择收货地址
				</view>
				<text class="icon iconfont icon-jiantou-copy lg wei"></text>
			</view>
		</navigator>

		<!-- 商品信息 -->
		<view class="good">
			<view class="store lg">
				<image :src="picUrl + detail.re_goodsShopInfo.shop_img" mode=""></image>
				{{detail.re_goodsShopInfo.shop_name}}
			</view>
			<view class="con">
				<image :src="picUrl+detail.re_goodsShopInfo.re_goods_picture" mode=""></image>
				<view class="goods-info">
					<view class="name">
						{{detail.re_goodsShopInfo.re_goods_name}}
					</view>
					<view class="price">
						￥{{detail.re_goodsShopInfo.re_goods_price}}元
					</view>
					<view class="dtl">
						{{detail.re_goodsShopInfo.re_goods_introduction}}
					</view>
				</view>
				<view class="opection">
					<numbox :Number="index" :min="1" :max="detail.re_goodsShopInfo.re_goods_stock" :step="1" @change="change()"></numbox>
				</view>
			</view>
		</view>
		
		<!-- 下订单 -->
		<view class="save" @click="save()">
			<button type="warn">提交订单</button>
		</view>
	</view>
</template>

<script>
	import numbox from "@/components/uni-number-box/uni-number-box.vue"
	export default {
		components: {
			numbox
		},
		data() {
			return {
				address: "",
				options: {},
				detail: {},
				picUrl: this.global.demao.domain.videoUrl,
				user_addressInfo: {},
				index:1
			}
		},
		methods: {
			change(e){
				console.log(e)
				this.index=e
			},
			save() {
				let data={
					re_goods_id:this.options.re_goods_id,
					address_id:this.user_addressInfo.id,
					buy_num:this.index 
				}
				console.log(data)
				
				this.global.login_state.login_state().then((res) => {
					if (res) {
						this.global.request.post({
							url: "index_reseller_orderAdd",
							data:data,
							success: (res) => {
								console.log(res)
								this.global.utils.showToast_my(res.msg)
								if(res.code==0){
									setTimeout(()=>{
										this.global.utils.jump(3, "/pages/home/retail_home/retail_pay?re_order_id="+res.data.re_order_id)
									},2000)
								}
							}
						});
					}
				})
			}
		},
		onShow() {
			if (uni.getStorageSync("address")) {
				//得到选择地址信息
				this.address = uni.getStorageSync("address");
				this.global.login_state.login_state().then((res) => {
					if (res) {
						this.global.request.post({
							url: "reseller_user_AddressDetail",
							method: "POST",
							data: {
								address_id:this.address
							},
							success: (res) => {
								console.log(res)
								this.user_addressInfo = res.user_addressInfo
							}
						});
						
					}
				})
			}else{
				//得到我的默认地址信息
				this.global.login_state.login_state().then((res) => {
					if (res) {
						this.global.request.post({
							url: "reseller_user_address",
							method: "POST",
							data: {},
							success: (res) => {
								console.log(res)
								this.user_addressInfo = res.user_addressInfo
							}
						});
						
					}
				})
			}
		},
		onLoad(options) {
			console.log("这是这个页面的数据")
			console.log(options)
			this.options = options;		

			let data = {};
			data.re_goods_id = options.re_goods_id;
			this.global.request.post({
				url: 'index_reseller_goodsDetail',
				data: data,
				success: res => {
					this.detail = res;
				}
			})
		},
		onUnload() {
			uni.setStorageSync("address", "")
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

	.address {
		width: 100%;
		height: 90rpx;
		box-shadow: 0rpx 0rpx 10rpx #cccccc;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 20rpx;
		justify-content: space-between;
		align-items: center;
	}

	.good {
		width: calc(100% - 48rpx);
		margin-top: 20rpx;
		-webkit-box-shadow: 0rpx 0rpx 10rpx #cccccc;
		box-shadow: 0rpx 0rpx 10rpx #cccccc;
		padding: 0 3%;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		margin: 0 auto;
		margin-top: 20rpx;
		border-radius: 15rpx;


		.store {
			width: 100%;
			height: 100rpx;
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid #CDCDCD;

			image {
				width: 51rpx;
				height: 51rpx;
				margin-right: 20rpx;
			}
		}

		.con {
			width: 100%;
			position: relative;
			padding: 15rpx 10rpx;
			box-sizing: border-box;
			@extend .any-flex;
			align-items: center;
			border-bottom: 1rpx solid #E5E5E5;
			color: #808080;
		}

		.con:last-child {
			border-bottom: none;
		}

		image {
			width: 140rpx;
			height: 150rpx;
			margin-right: 20rpx;
		}

		.goods-info {
			width: 320rpx;
			height: 120rpx;
			@extend .any-flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;

			.name {
				width: 100%;
				box-sizing: border-box;
				@include multi-row-apostrophe(1);
				font-size: $uni-font-size-base;
				color: #575757;
			}

			.cate {
				width: 100%;
				@extend .any-flex;
				flex-wrap: wrap;
				padding-top: 10rpx;
				box-sizing: border-box;
				font-size: $uni-font-size-sm;

				view {
					display: inline-block;
					padding: 2rpx 5rpx;
					color: #868686;
					border: 1rpx solid #868686;
					margin-right: 10rpx;
					margin-bottom: 10rpx;
				}
			}

			.price {
				width: 100%;
				box-sizing: border-box;
				@include multi-row-apostrophe(1);
				font-size: $uni-font-size-lg;
				color: $any-col;
			}

			.dtl {
				width: 100%;
				box-sizing: border-box;
				@include multi-row-apostrophe(1);
				font-size: $uni-font-size-sm;
			}
		}

		.opection {
			position: absolute;
			right: 20rpx;
		}

		.opection-box {
			width: 100%;
			margin-top: 10rpx;
			display: flex;

			.icon-shanchu-copy-copy {
				font-size: 32rpx;
				padding: 10rpx;
				margin-left: 20rpx;
				color: #808080;
			}

			.icon-star {
				font-size: 32rpx;
				padding: 10rpx;
			}
		}
	}

	.save {
		width: 100%;
		padding: 0 5%;
		box-sizing: border-box;
		margin-top: 40rpx;
	}

	.address-box {
		width: 100%;
		height: 160rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		margin-top: 20rpx;

		.address-con {
			width: 100%;
			height: 100%;
			border-radius: 15rpx;
			-webkit-box-shadow: 0rpx 0rpx 10rpx #cccccc;
			box-shadow: 0rpx 0rpx 10rpx #cccccc;
			-webkit-box-pack: justify;
			-webkit-justify-content: space-between;
			-ms-flex-pack: justify;
			justify-content: space-between;
			display: flex;
			align-items: center;
			padding: 0 10px;
			box-sizing: border-box;

			.icon-dizhi {
				font-size: 60rpx;
				color: $any-col;
			}

			.add-con {
				width: 560rpx;
				height: 100%;
				display: flex;
				justify-content: center;
				flex-direction: column;
			}
		}
	}
</style>

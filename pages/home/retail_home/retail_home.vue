<template>
	<!-- 首页分销页面 -->
	<view>
		<view class="opection">
			<view @click="opec(1)" class="opection-li">
				分销代理
			</view>
			<view @click="opec(2)" class="opection-li">
				分销商
			</view>
			<view @click="opec(3)" class="opection-li">
				异业联盟
			</view>
		</view>
		<view class="emit">

		</view>
		<view class="shop_box" v-for="(item,index) in list" :key='index'>
			<view class="shop">
				<view class="top">
					<view class="pic" @click="toDetail(item.shop_id)">
						<image class='pic' :src="imageurl + item.shop_img" mode=""></image>
					</view>
					<view class="con" @click="toDetail(item.shop_id)">
						<view class="title">
							<text></text>
							{{item.shop_name}}
						</view>
						<view class="num">
							<text>销量{{item.goods_num}}</text>
							<text style="margin-left: 20rpx;">共{{item.child.length}}件商品</text>
						</view>
					</view>
					<view class="goShop" v-if="mt_reseller==1" @click="toDetail(item.shop_id)">
						进店看看
					</view>
					<view class="goShop" v-else @click="apply(item.shop_random_str)">
						申请分销
					</view>
				</view>
				<view class="bottom" @click="toDetail(item.shop_id)">
					<view class="pic-box" v-for="(qq,ww) in item.child" :key='ww'>
						<image :src="imageurl + qq.goods_img" mode=""></image>
						<view class="price">
							￥{{qq.goods_price}}
						</view>
					</view>
				</view>
			</view>
		</view>


		<uniPopup ref="popup">
			<view class="pop_box" style="">
				<view class="pop_box-top">
					分销申请
				</view>
				<view class="tip">
					<!-- 提示：参与该店铺的分销后，可得到一定的收益哦 -->
					<view class="tip-left">
						提示：
					</view>
					<view class="tip-right">
						<view>1.参与该店铺的分销后，可得到一定的收益哦；</view>
						<view>2.如果不填写邀请码后，则默认成为店铺一级分销员哦；</view>
						<view>3.申请之后不可以再申请成为其他店铺的分销员。</view>
					</view>
				</view>
				<view class="code">
					<text>邀请码</text>
					<input type="text" value="" placeholder="邀请码" v-model="invite_code" />
				</view>
				<view class="opec">
					<view class="">
						<btn font="取消" btnSize="sm" @save="save()" select="0"></btn>
					</view>
					<view class="">
						<btn font="确认申请" btnSize="sm" @save="save()" select="1"></btn>
					</view>
				</view>
			</view>
		</uniPopup>

	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue";
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				list: [],
				imageurl: this.global.demao.domain.videoUrl,
				invite_code: "",
				mt_reseller: 0
			}
		},
		methods: {
			toDetail(e) {
				this.global.utils.jump(1, "/pages/home/retail_home/shop_detail?shop_id=" + e)
			},
			apply(e) {
				this.global.login_state.login_state().then((res) => {
					if (res) {
						this.invite_code = e;
						this.$refs.popup.open()
					}
				})
			},
			save() {
				this.global.request.post({
					url: 'my_team_Add',
					data: {
						invite_code: this.invite_code
					},
					success: res => {
						if(res.code==0){
							this.global.utils.showToast_my("申请成功，快去看看吧")
							this.init();
						}
					}
				})
				this.$refs.popup.close()
				this.invite_code = ""
			},
			opec(e) {
				this.global.utils.jump(1, "/pages/home/retail/threeBtn?opec=" + e)
			},
			// 数组去重
			unique(arr) {
				return Array.from(new Set(arr))
			},
			init() {
				this.global.request.post({
					url: 'index_rellerList',
					success: res => {
						this.mt_reseller = res.mt_reseller;
						let a = res.shop_resellerInfo
						let b = []
						a.forEach((v) => {
							b.push(v.shop_id)
						})
						let c = this.unique(b);
						let d = []
						console.log(c)
						c.forEach((item, index) => {
							let e = {
								shop_id: item,
								child: []
							};
							let num = 0;

							a.forEach((q) => {
								if (item == q.shop_id) {
									e.shop_name = q.shop_name
									e.shop_img = q.shop_img
									e.shop_random_str = q.shop_random_str
									num = num + q.re_goods_volume;
									e.child.push({
										goods_id: q.re_goods_id,
										goods_price: q.re_goods_price,
										goods_img: q.re_goods_picture,
									})

								}
							})
							e.goods_num = num;
							d.push(e)
						})
						this.list = d;

					}
				})
			}
		},
		onShow() {
			this.init()
		}
	}
</script>

<style lang="scss">
	.emit {
		width: 100%;
		height: 110rpx;
	}

	.opection {
		width: 100%;
		height: 110rpx;
		padding: 0 3%;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		top: 0;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;

		.opection-li {
			width: 170rpx;
			height: 52rpx;
			background: $any-col;
			color: #ffffff;
			border-radius: 26rpx;
			text-align: center;
			line-height: 52rpx;
			font-size: $uni-font-size-lg;
		}
	}

	.shop_box {
		width: 100%;
		height: 300rpx;
		padding: 0 3%;
		box-sizing: border-box;
	}

	.shop {
		width: 100%;
		height: 100%;
		border-radius: 15rpx;
		box-shadow: 0px 0px 10rpx #bfbdbd;
		box-sizing: border-box;
		@extend .any-flex;
		flex-direction: column;
	}

	.top {
		width: 100%;
		height: 110rpx;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
		border-bottom: 2rpx solid #B4B4B4;
		box-sizing: border-box;
	}

	.pic {
		width: 66rpx;
		height: 73rpx;
		// background: $any-col;
	}

	.con {
		flex-grow: 1;
		height: 100%;
		padding: 0 5%;
		box-sizing: border-box;
		@extend .any-flex;
		flex-direction: column;
		justify-content: center;
	}

	.goShop {
		width: 120rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		background: $any-col;
		border-radius: 15rpx;
		font-size: $uni-font-size-base;
		color: #ffffff;
	}

	.title {
		width: 100%;
		font-size: $uni-font-size-lg;
		padding: 2rpx 0;
		font-weight: bold;
	}

	.num {
		width: 100%;
		font-size: $uni-font-size-base;
		padding: 2rpx 0;
	}

	.bottom {
		flex-grow: 1;
		width: 100%;
		padding: 0 20rpx;
		@extend .any-flex;
		// justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}

	.pic-box {
		width: 155rpx;
		height: 155rpx;
		position: relative;
		margin-right: 14rpx;
		border-radius: 10rpx;

		image {
			width: 155rpx;
			height: 155rpx;
			// background: blue;
		}

		.price {
			display: inline-block;
			padding: 2rpx 5rpx;
			position: absolute;
			bottom: 0;
			right: 0;
			background: $any-col;
			color: #ffffff;
			font-size: $uni-font-size-base;
		}
	}

	.pic-box:last-child {
		margin-right: 0;
	}


	.pop_box {
		width: 530rpx;
		background: #ffffff;
	}

	.pop_box-top {
		width: 100%;
		height: 80rpx;
		border-bottom: 1rpx solid #cccccc;
		font-size: $uni-font-size-lg;
		text-align: center;
		line-height: 80rpx;
		font-weight: bold;
	}

	.tip {
		width: 100%;
		margin: 10rpx 0;
		padding: 0 20rpx;
		color: $any-col;
		font-size: $uni-font-size-sm;
		box-sizing: border-box;
		display: flex;
	}

	.tip-left {
		width: 80rpx;
	}

	.tip-right {
		flex-grow: 1;

	}

	.code {
		width: 100%;
		height: 80rpx;
		@extend .any-flex;
		// justify-content: center;
		// align-items: center;
		margin-left: 80rpx;
		font-size: $uni-font-size-base;
	}

	input {
		margin-left: 20rpx;
		width: 200rpx;
		border-bottom: 1rpx solid #cccccc;
		box-sizing: border-box;
		font-size: $uni-font-size-base;
	}

	.opec {
		width: 100%;
		height: 110rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
		box-sizing: border-box;
	}
</style>

<template>
	<view>
		<view class="con">
			<image :src="picUrl+'images/5dfc65b56776191.jpg'" mode="" class="back"></image>
			<view class="person-box">

				<view class="list" v-for="(item,index) in num" :key="index">

					<image :src="item.wx_headimg" mode="" class="pic"></image>

				</view>
				<view class="list" v-for="i in number" :key="i">
					<view class="li">

					</view>
				</view>
			</view>

			<button open-type="share" class="share" v-if="num.length !=6">
				邀请好友拆红包
			</button>

			<button class="share" v-else @click="open()">
				点击拆红包
			</button>

			<view class="tip">
				还差{{number}}人即可瓜分100元红包,快邀请好友来拆吧
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				open_id: "",
				join_id: "",
				num: [],
				number: 6,
				picUrl:this.global.demao.domain.videoUrl
			}
		},
		methods: {
			open() {
				let a = uni.getStorageSync("session").data.openid;
				let b = this.num[0].openid;
				if (a == b) {
					this.global.login_state.login_state().then((res) => {
						if (res) {
							this.global.request.post({
								url: 'open_red_packet',
								success: res => {
									console.log(res)
									if (res.code == 0) {
										this.global.utils.showToast_my("加入团队成功")
									} else {
										this.global.utils.showToast_my(res.msg)
									}
									uni.removeStorageSync("p_id")
								}
							})
						}
					})
				} else {
					this.global.utils.showToast_my("只有队长才能够拆红包哦，快去提醒他吧")
				}
			}
		},
		onLoad(e) {
			console.log(e.p_id)
			if (e.p_id) {
				uni.setStorageSync("p_id", e.p_id)
				this.global.login_state.login_state().then((res) => {
					if (res) {
						this.global.request.post({
							url: 'invite_friend',
							data: {
								openid2: e.p_id,
								openid1: uni.getStorageSync("session").data.openid
							},
							success: res => {
								console.log(res)
								if (res.code == 0) {
									this.global.utils.showToast_my("加入团队成功")
								} else {
									this.global.utils.showToast_my(res.msg)
								}
								uni.removeStorageSync("p_id")
							}
						})
					}
				})
				console.log(uni.getStorageSync("p_id"))
			};


			let a = uni.getStorageSync("session");
			this.open_id = a.data.openid;


		},
		onShow() {
			this.global.request.post({
				url: 'invite_userInfo',
				success: res => {
					this.num = res.arrayInfo;
					this.number = 6 - this.num.length;
				}
			})
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: '自定义分享标题',
				path: '/pages/home/share/share?p_id=' + this.open_id
			}
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

	.person-box {
		width: 280rpx;
		height: 220rpx;
		position: absolute;
		left: 32%;
		top: 58%;
	}

	.list {
		padding: 11rpx;
		padding-bottom: 0;
		display: inline-block;
	}

	.li {
		width: 70rpx;
		height: 70rpx;
		background: red;
		border-radius: 50%;
	}

	.pic {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
	}

	.share {
		width: 270rpx;
		height: 75rpx;
		background: #FB9F00;
		border-radius: 75rpx;
		text-align: center;
		line-height: 75rpx;
		font-size: $uni-font-size-base;
		letter-spacing: 5rpx;
		color: #ffffff;

		position: absolute;
		left: 31.5%;
		top: 75%;
	}

	.tip {
		width: 440rpx;
		position: absolute;
		left: 20%;
		top: 88%;
		text-align: center;
		font-size: 20rpx;
		color: #FFA100;
	}
</style>

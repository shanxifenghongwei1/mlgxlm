<template>
	<view>
		<view class="con">
			<image src="/static/image/other/share_1.png" mode="" class="back"></image>
			<view class="person-box">

				<view class="list" v-for="(item,index) in num" :key="index">
					<view class="li">

					</view>
				</view>
			</view>
			<button open-type="share" class="share">
				邀请好友拆红包
			</button>
			<view class="tip">
				还差4人即可瓜分100元红包,快邀请好友来拆吧
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				open_id:"",
				join_id:"",
				num: [1, 2, 3, 4, 5, 6]
			}
		},
		methods: {
	
		},
		onLoad(e){
			console.log("分享页面数据")
			console.log(e)
			let a=uni.getStorageSync("session");
			console.log(a)
			this.open_id=a.data.openid
			// console.log(e);
			// this.join_id=e.open_id;
			// this.open_id=uni.getStorageSync("open_id")
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: '自定义分享标题',
				path: '/pages/home/share/share?p_id='+this.open_id
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

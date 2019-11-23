<template>
	<view>
		<view class="title lg wei">
			美容美发
		</view>
		<view class="con">
			<view @click="menuDetail(item.t_id,item.t_name)" v-for="(item , index) in s_type1" :key='index' class="list-one">
				<image mode="aspectFit" :src="picUrl+item.t_img" class="icon"></image>
				<view class="text">{{item.t_name}}</view>
			</view>
		</view>
		<view class="title lg wei">
			美容美发
		</view>
		<view class="con">
			<view @click="menuDetail(item.t_id,item.t_name)" v-for="(item , index) in s_type1" :key='index' class="list-one">
				<image mode="aspectFit" :src="picUrl+item.t_img" class="icon"></image>
				<view class="text">{{item.t_name}}</view>
			</view>
		</view>
		<view class="title lg wei">
			美容美发
		</view>
		<view class="con">
			<view @click="menuDetail(item.t_id,item.t_name)" v-for="(item , index) in s_type1" :key='index' class="list-one">
				<image mode="aspectFit" :src="picUrl+item.t_img" class="icon"></image>
				<view class="text">{{item.t_name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				s_type1: [{
						t_id: 6,
						t_name: "面部护理",
						t_img: "/images/mianbuhuli.jpg",
						p_id: 1,
						is_hot: 1
					},
					{
						t_id: 7,
						t_name: "抗衰除皱",
						t_img: "/images/kangsuichuzhou.jpg",
						p_id: 1,
						is_hot: 1
					},
					{
						t_id: 8,
						t_name: "塑形换肤",
						t_img: "/images/shuxinghuanfu.jpg",
						p_id: 1,
						is_hot: 1
					},
					{
						t_id: 9,
						t_name: "养发美甲",
						t_img: "/images/meifameijia.jpg",
						p_id: 1,
						is_hot: 1
					},
					{
						t_id: 10,
						t_name: "深度清洁",
						t_img: "/images/shenduqingjie.jpg",
						p_id: 1,
						is_hot: 1
					},
					{
						t_id: 7,
						t_name: "抗衰除皱",
						t_img: "/images/kangsuichuzhou.jpg",
						p_id: 1,
						is_hot: 1
					},
					{
						t_id: 8,
						t_name: "塑形换肤",
						t_img: "/images/shuxinghuanfu.jpg",
						p_id: 1,
						is_hot: 1
					},
					{
						t_id: 9,
						t_name: "养发美甲",
						t_img: "/images/meifameijia.jpg",
						p_id: 1,
						is_hot: 1
					},
					{
						t_id: 10,
						t_name: "深度清洁",
						t_img: "/images/shenduqingjie.jpg",
						p_id: 1,
						is_hot: 1
					}
				],
				picUrl: ""
			}
		},
		methods: {

		},
		onLoad(){
			this.picUrl=this.global.demao.domain.picUrl
		}
	}
</script>

<style lang="scss">
	.let-space {
		letter-spacing: 3rpx;
	}

	.white {
		color: #ffffff;
	}

	.red {
		color: $any-col;
	}

	.big {
		font-size: 50rpx;
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
		margin-right: 20rpx;
	}

	.mar-b {
		margin-bottom: -2rpx;
	}

	.wei {
		font-weight: bold;
	}

	.emit {
		width: 100%;
		height: 120rpx;
	}

	.pic {
		width: 100%;
	}

	.title {
		width: 100%;
		height: 80rpx;
		padding: 0 3%;
		box-sizing: border-box;
		line-height: 80rpx;
	}

	.con {
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		.list-one {
			width: 141rpx;
			height: 150rpx;
			text-align: center;
			display: inline-block;
			padding: 15rpx 0;
			box-sizing: border-box;
			.icon {
				background-size: cover;
				width: 50%;
				height: 50%;
			}

			.text {
				font-size: $uni-font-size-base;
			}
		}
	}
</style>

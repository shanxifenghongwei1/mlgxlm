<template>
	<view>
		<block v-for="(item,index) in s_type1" :key="index">
			<view class="title lg wei">
				{{item.t_name}}
			</view>
			<view class="con">
				<view @click="menuDetail(v.t_id,v.t_name)" v-for="(v,i) in item.child" :key="i" class="list-one">
					<image mode="aspectFit" :src="picUrl+v.t_img" class="icon"></image>
					<view class="text">{{v.t_name}}</view>
				</view>
			</view>
		</block>
		
		<!-- <view class="title lg wei">
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
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				s_type1: [],
				picUrl: this.global.demao.domain.videoUrl,
				options:{}
			}
		},
		methods: {

		},
		onLoad(options){
			this.options = options 

			this.global.request.post({
				url: this.global.demao.api.type_lists,
				method: "GET",
				data: {},
				success: (res) => {
					let a =res.data.filter((v)=>{
						return v.p_id==0
					})
					a.forEach((v)=>{
						console.log(v.t_id)
						v.child=res.data.filter((x)=>{
							return x.p_id==v.t_id;
						})
					})
					this.s_type1=a;
				}
			})
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

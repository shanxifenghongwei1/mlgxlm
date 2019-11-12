<template>
	<view class="page">
		<view class="card" v-for="(item,index) in cardList" :key="index" @longpress="del(item.bankcard_id)">
			<view class="card-box">
				<view class="top">
					<view class="card-name">
						{{item.bank}}
					</view>
					<view class="card-cate">
						{{item.bankcard_type}}丨{{item.bankcard_name}}
					</view>
				</view>
				<view class="card-num">
					**** **** **** {{item.bankcard_num | shear}}
				</view>
			</view>
		</view>
		<view class="" style="width: 100%;height: 110rpx;">

		</view>

		<navigator hover-class="none" url="./addcard" class="bind">
			绑定银行卡
		</navigator>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardList: []
			}
		},
		methods: {
			del(e){
				let that=this;
				uni.showModal({
					title: '提示',
					content: '确认删除这张银行卡吗',
					success: (res)=> {
					    if (res.confirm) {
					       that.global.request.post({
					       	url:this.global.demao.api.add_bankcard_delete,
					       	method:"GET",
					       	data:{
								bankcard_id:e
							},
					       	success:(res)=>{
					       		that.showToast_my(res.msg);
					       		that.findlist()
					       	}
					       })
					    } else if (res.cancel) {
					        console.log('用户点击取消');
					    }
					}
				})
			},
			showToast_my: function(e) {
				uni.showToast({
					title: e,
					duration: 2000,
					icon: "none"
				});
				return false;
			},
			findlist(){
				this.global.request.post({
					url: this.global.demao.api.bankcard_list,
					method: "GET",
					data: {},
					success: (res) => {
						this.cardList=res.respo
					}
				})
			},
		},
		onShow(){
			this.findlist()
		},
		filters:{
			shear(str){
				return str.toString().slice(-4)
			}
		}
	}
</script>

<style lang="scss">
	.page {
		width: 100%;
		min-height: 100vh;
		background: #efefef;
	}

	.card {
		width: 100%;
		height: 258rpx;
		padding: 20rpx 3% 0;
		box-sizing: border-box;
		color: #ffffff;

		.card-box {
			width: 100%;
			height: 100%;
			border-radius: 15rpx;
			background: url('~@/static/image/other/card-blue.png') no-repeat center center;
			background-size: cover;
			padding: 41rpx 0 41rpx 46rpx;
			box-sizing: border-box;
			@extend .any-flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
		}

		.top {}

		.card-name {
			font-size: $uni-font-size-lg;
		}

		.card-cate {
			margin-top: 10rpx;
			font-size: $uni-font-size-sm;
		}

		.card-num {
			font-size: $uni-font-size-base;
		}
	}

	.card:nth-child(3n+1) {
		.card-box {
			background: url('~@/static/image/other/card-pink.png') no-repeat center center;
					background-size: cover;
		}
	}

	.card:nth-child(3n+2) {
		.card-box {
			background: url('~@/static/image/other/card-red.png') no-repeat center center;
					background-size: cover;
		}
	}
	.bind {
		width: 100%;
		height: 110rpx;
		text-align: center;
		line-height: 110rpx;
		font-size: $uni-font-size-lg;
		color: #ffffff;
		background: #f95b5b;
		position: fixed;
		left: 0;
		bottom: 0;
		letter-spacing: 10rpx;
	}
</style>

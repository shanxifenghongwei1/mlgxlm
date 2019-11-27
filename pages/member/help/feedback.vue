<template>
	<view class="">
		<view class="opection">
			<view @click="opec(1)" class="opection-li" :class="cateId==1?'active':''">
				账号问题
			</view>
			<view @click="opec(2)" class="opection-li" :class="cateId==2?'active':''">
				支付问题
			</view>
			<view @click="opec(3)" class="opection-li" :class="cateId==3?'active':''">
				其他问题
			</view>
		</view>
		<view class="textarea-box">
			<textarea value="" placeholder="请描述您遇到的问题" maxlength="200"/>
			<view class="num">
				2/200
			</view>
		</view>
		<view class="save" @click="save()">
			<button type="warn">提交反馈</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cateId:1 
			}
		},
		methods: {
			opec(e){
				this.cateId=e;
			},
			save(){
				this.global.utils.showToast_my("发布成功")
				setTimeout(()=>{
					this.global.utils.jump(1,"/pages/member/help/feedback_success")
				}, 2000);
				
			}
		}
	}
</script>

<style lang="scss">
	.opection{
		width: 100%;
		height: 110rpx;
		padding: 0 3%;
		box-sizing: border-box;
		@extend .any-flex;
		align-items: center;
		.opection-li{
			width: 170rpx;
			height: 52rpx;
			border: 1rpx solid #BCBCBC;
			color: #666666;
			border-radius: 26rpx;
			text-align: center;
			line-height: 52rpx;
			font-size: $uni-font-size-lg;
			margin-right: 20rpx;
		}
		.active{
			border: 1rpx solid $any-col;
			color: $any-col;
		}
	}
	.textarea-box{
		width: 100%;
		height: 280rpx;
		font-size: $uni-font-size-base;
		padding: 0 4%;
		box-sizing: border-box;
		textarea{
			width: 100%;
			height: 250rpx;
		}
		.num{
			width: 100%;
			height: 30rpx;
			text-align: right;
		}
	}
	.save {
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 40rpx;
	}
</style>

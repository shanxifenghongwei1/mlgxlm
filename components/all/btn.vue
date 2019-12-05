<template>
	<view class="">
		<form report-submit="true" @submit="formSubmit">
			<button :class="type=='circle'?'active':''" form-type="submit" v-if="btnSize=='base'">{{font}}</button>
			<button class="sm_btn" :class="select==1?'btn_sel':''" form-type="submit" v-else>{{font}}</button>
		</form>
	</view> 
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: {
			type: {
				type: String,
				default: "circle"
			},
			font: {
				type: String,
				default: "提交"
			},
			btnSize: {
				type: String,
				default: "base"
			},
			select:{
				type:Number,
				default:0
			}
		},
		methods: {
			formSubmit: function(e) {
				console.log(e.detail.formId)
				this.$emit("save",true)
			},
		},
		// created(){
		// 	console.log(this.btnsize)
		// }
		mounted(){
			console.log(this)
			console.log(this.btnSize)
		}
	}
</script>

<style lang="scss">
	button {
		width: 480rpx;
		height: 80rpx;
		background: $any-col;
		line-height: 80rpx;
		color: #ffffff;
		letter-spacing: 3rpx;
		font-size: 30rpx;
	}
	.active {
		border-radius: 45rpx;
	}
	.sm_btn{
		width: 150rpx;
		height: 45rpx;
		font-size: 24rpx;
		text-align: center;
		line-height: 36rpx;
		border-radius: 20rpx;
		border: 2rpx solid #666868;
		color: #666868;
		padding: 0;
		background: #ffffff;
	}
	.btn_sel{
		border: 2rpx solid #FE0000;
		color: #FE0000;
	}
</style>

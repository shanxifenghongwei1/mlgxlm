<template>
	<!-- <btn font="提交按钮" @save="save()"></btn> -->
	<view class="">
		<form report-submit="true" @submit="formSubmit">
			<button :class="type=='circle'?'active':''" form-type="submit">{{font}}</button>
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
		},
		methods: {
			formSubmit: function(e) {
				console.log(e.detail.formId)
				this.$emit("save",true)
			},
		}
	}
</script>

<style lang="scss">
	button {
		width: 480rpx;
		height: 90rpx;
		background: $any-col;
		line-height: 90rpx;
		color: #ffffff;
		letter-spacing: 3rpx;
		font-size: 37rpx;
	}

	.active {
		border-radius: 45rpx;
	}
</style>

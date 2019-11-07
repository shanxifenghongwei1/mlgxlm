<template>
	<!-- 店铺收藏 -->
	<view>
		<store></store>
	</view>
</template>

<script>
	import store from "@/components/mine/store.vue"
	export default {
		components:{
			store
		},
		data() {
			return {
				shoplists:[1,2,2],
				titCon:[1,2,3]
			}
		},
		methods: {
			
		},
		onLoad() {
			this.global.utils.sethead("店铺收藏")
		}
	}
</script>

<style>
</style>

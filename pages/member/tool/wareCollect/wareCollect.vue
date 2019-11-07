<template>
	<!-- 店铺收藏 -->
	<view>
		<goods :titCon="titCon" :more="false" place="3"></goods>
	</view>
</template>

<script>
import goods from "@/components/mine/goods.vue"
	export default {
		components:{
			goods
		},
		data() {
			return {
				titCon:[1,2,3]
			}
		},
		methods: {
			
		},
		onLoad() {
			this.global.utils.sethead("商品收藏")
		}
	}
</script>

<style>
</style>

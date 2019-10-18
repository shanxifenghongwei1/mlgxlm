<template>
	<view>
		店铺街
			<shoplist></shoplist>
			<uni-rate disabled='false' margin='2' size="50" max='5' value="3.4" color="#7f7f7f" active-color="#ffb540" />
	</view>
</template>

<script>
	
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	import shoplist from '@/components/shoplist/shoplist.vue'
	export default {
		components: {
			uniRate,
			shoplist
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

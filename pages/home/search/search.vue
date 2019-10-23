<!-- 搜索页面 -->

<template>
	<view>
			<zy-search :is-focus="false" :is-block="false" :show-want="true"></zy-search>
	</view>
</template>

<script>
	import zySearch from '@/components/zy-search/zy-search.vue'
	
	export default { 
		components: {
			zySearch
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

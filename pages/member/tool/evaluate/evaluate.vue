<template>
	<view>
		<evaluate :mine="true" :evallist="evallist"></evaluate>
	</view>
</template>

<script>
	import evaluate from "@/components/mine/evaluate"
	export default {
		components:{
			evaluate
		},
		data() {
			return {
				evallist:[1,2,3]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

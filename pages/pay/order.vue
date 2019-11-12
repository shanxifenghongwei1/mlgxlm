<template>
	<view class="">
		<view class="">
			<cateflex :cateList="cateList" :cateid="cateid" @seleId="seleId"></cateflex>
		</view>
	</view>
</template>

<script>
	import cateflex from "@/components/mine/cate-flex.vue"
	export default{
		components:{
			cateflex
		},
		data(){
			return{
				cateList:[
					{name:"综合",id:1},
					{name:"待付款",id:2},
					{name:"待发货",id:3},
					{name:"待收货",id:4},
					{name:"待评价",id:5},
				],
				cateid:1
			}
		},
		methods:{
			seleId(e){
				this.cateid=e;
			}
		}
	}
</script>

<style>
</style>

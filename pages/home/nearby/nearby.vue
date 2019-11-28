<!-- 附近店铺 -->

<template>
	<view>
		<view class="search-box">
			<search></search>
		</view>
		<view class="cate-box">
			<cateFlex :cateList="list" :cateid="cateid" @seleId="seleId"></cateFlex>
		</view>
		<view>
			<store :store="store"></store>
		</view>
	</view>
</template>

<script>
	import store from "@/components/mine/store.vue"
	import cateFlex from '@/components/mine/cate-flex.vue';
	import search from '@/components/my-search/my-search.vue';
	export default {
		components:{
			store,search,cateFlex
		},
		data() {
			return {
				options:{},
				//分类列表以及选中id
				list:[{
					id:1,
					name:"全部店铺"
				},{
					id:2,
					name:"附近店铺"
				},{
					id:3,
					name:"销量"
				}],
				cateid:2,
				store:[]
			}
		},
		methods: {
			seleId(e){
				this.cateid=e;
			},
			findlist(){
				this.global.request.post({
					url: this.global.demao.api.nearby_shop,
					method: "GET",
					data: {
						lat:this.global.lat,
						lng:this.global.lng
					},
					success: (res) => {
						this.store=res.shopInfo
					}
				})
			}
		},
		onLoad(options) {
			this.options=options;
			this.global.utils.sethead(options.head)
			this.findlist()
		}
	}
</script>

<style>
	.search-box{
		width: 100%;
		padding: 0 3%;
		box-sizing: border-box;
	}
	.shoplist-box{
		
	}
</style>

<template>

	<view>
		<view class="search-box">
			<search></search>
		</view>
		<view class="shoplist-box">
			<shoplist :shoplists='datalist' :myid='ids' :num="num"></shoplist>
		</view>
	</view>
</template>

<script>
	import shoplist from '@/components/mine/shop-list.vue';
	import search from '@/components/my-search/my-search.vue';
	export default {
		components:{
			shoplist,search 
		},
		data() {
			return {
				options:{},
				
				//商品列表以及每隔几条出现广告
				num:3,			
				datalist:[{
					shop_name	:	"测试店铺",
	
					shop_address_provice	:	"山西省",
							
					shop_address_city	:	"太原市",
							
					shop_address_area	:	"小店区",
							
					shop_score	:	3.5,
							
					goods_id	:	7,
							
					goods_name	:	"NYX 16色眼影盘 16*0.83g，轻松get欧美妆！",
							
					price	:	"298",
							
					market_price	:	"298.00",
							
					introduction	:	"",
							
					picture	:	"/images/0e1c1739e14db26c54921be94fd4d60.png",		
					promotion_price	:	"298.00",		
					prople	:	1,
					shop_label	:	"免费皮肤检测"
				}],
				ids:6
			}
		},
		methods: {

		},
		onLoad(options) {
			this.options=options;
			this.global.utils.sethead(options.head)
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

<template>
	<view class="">
		<view class="head">
			<cateflex :cateList="cateList" :cateid="cateid" @seleId="sel"></cateflex>
		</view>
		<view class="emit">
			
		</view>
		<view>
			<goods :titCon="titCon" :more="false" :place="true"></goods>
		</view>
	</view>

</template>

<script>
	import goods from "@/components/mine/goods"
	import cateflex from "@/components/mine/cate-flex"
	export default {
		components: {
			goods,
			cateflex
		},
		data() {
			return {
				options:{},
				cateList:[{
					name:"全部商品",
					id:1
				},{
					name:"最新上架",
					id:2
				},{
					name:"最具人气",
					id:3
				}],
				cateid:1,
				titCon: [1, 2, 3, 4, 5]
			}
		},
		methods: {
			sel(e){
				this.cateid=e
			}
		},
		onLoad(options) {
			this.global.utils.sethead("置换商城")
		}
	}
</script>

<style>
	.head{
		width: 100%;
		padding-bottom: 10rpx;
		background: #ffffff;
		position: fixed;
		left: 0;
		top: 0;
	}
	.emit{
		width: 100%;
		height: 90rpx;
	}
</style>

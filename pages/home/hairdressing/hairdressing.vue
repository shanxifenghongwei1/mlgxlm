<!-- 主要功能内容页面 -->

<template>
	<view>
		<view class="head-con">
			<searchAny></searchAny>
			<!-- 大标题 -->
			<view class="device">
				<view v-for="(item,index) in gnlist" :key='index' class="device-son">
					<image :src="item.picture" mode="widthFix" @click="menuDetail()"></image>
				</view>
			</view>
			<view class="newshop-head" v-if="options.runid!=3">
				<view class="icons">
					<view class="iconsss"></view>
					<view>热门项目</view>
				</view>
				<view class="more">更多</view>
			</view>
			<!-- 热门项目 -->
			<view class="device" v-if="options.runid!=3">
				<view v-for="(item,index) in gnlistmore" :key='index' class="device-son">
					<image :src="item.picture" mode="widthFix"></image>
				</view>
			</view>
			<!-- 轮播 -->
			<view class="banner">
				<swiper :indicator-active-color='colors' :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000">
					<swiper-item v-for="(item ,index) in bannerlist" :key='index' class="banner-item">
						<view class="swiper-item">
							<image :src="item" mode="widthFix"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 栏目 -->
			<view class='shoplist' v-if="options.runid!=3">
				<view v-for="(item,index) in headlist" :key='index' class="list" :class="item.id== ids? 'active' : '' " @click="exchanges(item.id)">{{ item.name }}</view>
			</view>
		</view>
		<shoplist myid="7" :shoplists="shoplists"></shoplist>
		
		
	</view>
</template>

<script>
	import './hairdressing.scss'
	import shoplist from '@/components/shoplist/shoplist.vue'
	import searchAny from '@/components/my-search/my-search.vue'
	export default {
		components:{
			searchAny,
			shoplist
		},
		data() {
			return {
				// 一级功能列表
				options:{},
				gnlist:[
					{id:1,text:'面部护理',picture:'../../../static/image/other/mianbu.png'},
					{id:2,text:'抗衰除皱',picture:'../../../static/image/other/kangsui.png'},
					{id:3,text:'塑性焕肤',picture:'../../../static/image/other/shuxing.png'},
					{id:4,text:'美发美甲',picture:'../../../static/image/other/meifa.png'},
					{id:5,text:'深度清洁',picture:'../../../static/image/other/shendu.png'},
					],
					// 一级功能列表更多
					gnlistmore:[
						{id:1,text:'美白凝眸',picture:'../../../static/image/other/meibai.png'},
						{id:2,text:'激光除皱',picture:'../../../static/image/other/jiguang.png'},
						{id:3,text:'冰川补水',picture:'../../../static/image/other/bingchuan.png'},
						{id:4,text:'韩式美甲',picture:'../../../static/image/other/meijia.png'},
						{id:5,text:'磨砂气泡',picture:'../../../static/image/other/mosha.png'},
						],
						// 热门项目
					bannerlist: [
						'../../../static/image/banner/1.jpg', '../../../static/image/banner/2.jpg', '../../../static/image/banner/3.jpg',
						'../../../static/image/banner/4.jpg'
					],
					// 高亮id
					ids: 6,
					// 指示点颜色
					colors: '#e01818',
					headlist: [{id: 6,name: '精选'}, {id: 7,name: '除皱'}, {id: 8,name: '补水'}, {id: 9,name: '塑形'}, {id: 10,name:'美白'}],
					shoplists: [{
						prople: '2000',
						image: '../../static/image/shop/shop-1.jpg',
						shopname: '艾美世界家',
						address: '山西大医院',
						start: '3.5',
						labels: '便签',
						goodssprice: '998',
						newgoodssprice: '398',
						goodsname: '芳香精油乳腺疏通',
						othergoods: '酒槽鼻修护套餐',
						othergoodsprices: "100",
					}]
			};
		},
		methods:{
			// 高亮id
			exchanges(id) {
				this.ids = id
			},
			menuDetail() {
				uni.navigateTo({
					url:"/pages/home/menu-details/menu-details"
				})
			}
			
		},
		onLoad(options) {
			console.log(options)
			this.options=options;
			this.global.utils.sethead(options.head)
		}
	}
</script>

<style lang="scss">
	
</style>

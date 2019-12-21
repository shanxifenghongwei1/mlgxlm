<template>
	<view>
		<view v-for="(item,index) in evallist">
			
		<evaluate :mine="true" :evallist="item.father">
			
			<view class="images-father">
				<view class='images-son' v-for='(items,indexs) in item.child' :key='indexs'>
					<image @click="yulan(index)" style="width: 100%;height: 100%;"  :src="items" mode=""></image>
				</view>

			</view>
		</evaluate>
		
		</view>
		
	</view>
</template>

<script>
	import evaluate from "@/components/mine/evaluate"
	export default {
		components: {
			evaluate
		},
		data() {
			return {
				imgurl:this.global.demao.domain.videoUrl,
				evallist: [],
			}
		},
		methods: {
			yulan(e){
				console.log('选中了第几个了？？ ' + e)
				uni.previewImage({
					urls:this.evallist[e].child
				})
			},
			init(){
				this.global.request.post({
					url:'my_evaluate_list',
					success:res=>{
						let p = []
						
						let a = res.data
						a.forEach((item,index)=>{
							let comper = { father:[] , child:[] }
							comper.father.push(item)
							comper.child=this.funarray( item.goods_evaluate_img )
							p.push(comper)
						})
						this.evallist = p
					}
				})
			},
			// 将字符串处理为数组
			funarray(msg){
				let a =	msg.split(",") 
					for(let i = 0 ; i< a.length; i++){
						console.log(i)
						a[i] = this.imgurl + a[i]
					}
				return a ;
			}
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style lang="scss">
	.images-father {
		overflow: hidden;
		width: 100%;
		// height: 175rpx;
		padding: 10rpx;
		box-sizing: border-box;
		// background: #007AFF;
		@extend .any-flex;
		flex-wrap: wrap;
	}

	.images-son {
		// background: red;
		width: 140rpx;
		height: 140rpx;
		margin: 10rpx;
	}
</style>

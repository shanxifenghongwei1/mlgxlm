<template>
	<view class="pages">
		<view class="goods">
			<image :src="picUrl+order_detail.re_goods_picture" mode=""></image>
			<view class="goods_info">
				<view class="goods_name lg">
					{{order_detail.re_goods_name}}
				</view>
				<view class="goods_desc mar-t base ccc">
					{{order_detail.re_goods_introduction}}
				</view>
			</view>
		</view>
		<view class="desc">
			<view class="base wei mar">
				描述相符
			</view>

			<uni-rate margin='2' size="20" max='5' :value="star1" color="#7f7f7f" active-color="#ffb540" @change="starchange1()" />
			<view class="mar-l base red">
				{{star1==5?'非常好':star1==4?'好':star1==3?'一般':star1==2?'差':star1==1?'非常差':""}}
			</view>
		</view>
		<view class="text">
			<textarea value="" placeholder="宝贝满足你的期待吗？说说他的优点以及美中不足的地方吧" v-model="text_desc" />
			<view class="pic-box">
				<view class="pic" v-for="(item,index) in pic_list" :key="index" @click="prev(index)">
					<image :src="item" mode="aspectFit" ></image>
					<view class="icon iconfont icon-shanchu" @click="del(index)">
						
					</view>
				</view>
				
				<view class="pic active" @click="add">
					<view class="addBtn ccc">
						<text class="icon iconfont icon-pingjiapaizhao"></text>
						<text class="zi">添加照片</text>
					</view>
				</view>
			
			</view>
		</view>
		<view class="" style="margin-top: 5rpx;">
			<view class="desc" style="padding-bottom: 15rpx;">
				<view class="lg mar">
					店铺评价
				</view>
			</view>
			<view class="desc" style="padding-bottom: 10rpx;padding-top: 10rpx;">
				<view class="base wei mar">
					送货服务
				</view>
				
			
				<uni-rate margin='2' size="20" max='5' :value="star2" color="#7f7f7f" active-color="#ffb540" @change="starchange2()"/>   
				<view class="mar-l base red">
					{{star2==5?'非常好':star2==4?'好':star2==3?'一般':star2==2?'差':star2==1?'非常差':""}}
				</view>
			</view>
			<view class="desc" style="padding-top: 10rpx;">
				<view class="base wei mar">
					服务态度
				</view>
	
				<uni-rate margin='2' size="20" max='5' :value="star3" color="#7f7f7f" active-color="#ffb540" @change="starchange3()"/>   
				<view class="mar-l base red">
					{{star3==5?'非常好':star3==4?'好':star3==3?'一般':star3==2?'差':star3==1?'非常差':""}}
				</view>
			</view>
		</view>
			
			
		<view class="save">
			<view class="save_btn" @click="save()">
				提交申请
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default {
		components: {
			uniRate
		},
		data() {
			return {
				picUrl:this.global.demao.domain.videoUrl,
				options: {},
				star1:5,
				star2:5,
				star3:5,
				pic_list:[],
				pic_list1:[],
				text_desc:"",
				order_detail:{}
			} 
		},
		methods: {
			add(){
				let that=this;
				uni.chooseImage({
					count: 6,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: (res) => {
						that.pic_list=this.pic_list.concat(res.tempFilePaths)
						let pic_box = []
						res.tempFilePaths.forEach((v, index) => {
							uni.uploadFile({
								url: this.global.demao.domain.request + this.global.demao.api.upload,
								filePath: v,
								name: 'file',
								success: (uploadFileRes) => {
									let a = JSON.parse(uploadFileRes.data)
									pic_box.push(a.data.path)
									if (index + 1 == res.tempFilePaths.length) {
										that.pic_list1 = that.pic_list1.concat(pic_box) 
									}
								}
							})
						})
					}
				});
			},
			prev(e){
				uni.previewImage({
					current:e,
				    urls: this.pic_list,
				    longPressActions: {
				        itemList: ['发送给朋友', '保存图片', '收藏'],
				        success: function(data) {
				            console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				        },
				        fail: function(err) {
				            console.log(err.errMsg);
				        }
				    }
				});
			},
			del(e){
				uni.showModal({
					title: '提示',
					content: '确认删除这张图片吗',
					success: (res)=> {
					    if (res.confirm) {
					       this.pic_list.splice(e,1)
						   this.global.utils.showToast_my("删除成功")
					    } else if (res.cancel) {
					        
					    }
					}
				})
				
			},
			starchange1(e){
				this.star1=e.value;
			},
			starchange2(e){
				this.star2=e.value;
			},
			starchange3(e){
				this.star3=e.value;
			},
			save(){
				let data={
					re_order_id:this.options.re_order_id,
					comment:this.text_desc,
					comment_img:this.pic_list1.toString(),
					shop_score:this.star1,
					logistics_score:this.star2,
					re_goods_score:this.star3
				};
				this.global.request.post({
					url: "reseller_order_evaluate",
					data: data,
					success: (res) => {
						console.log(res)
						if(res.code==0){
							this.global.utils.showToast_my(res.msg)
							setTimeout(()=>{
								this.global.utils.jump(5)
							},2000)
						}
					}
				})
			}
		},
		onLoad(options) {
			this.options = options;
			let data={
				re_order_id:options.re_order_id
			};
			this.global.request.post({
				url: "index_reseller_Choose_payment",
				data: data,
				isLoading: true,
				success: (res) => {
					console.log(res)
					this.order_detail = res.data
				}
			})
		}
	}
</script>

<style lang="scss">
	.red {
		color: $any-col;
	}

	.big {
		font-size: 45rpx;
	}

	.lg {
		font-size: $uni-font-size-lg;
	}

	.base {
		font-size: $uni-font-size-base;
	}

	.sm {
		font-size: $uni-font-size-sm;
	}

	.ccc {
		color: #cccccc;
	}

	.gray {
		color: #808080;
	}

	.mul {
		@include multi-row-apostrophe(1);
	}

	.tag {
		padding: 5rpx 20rpx;
		border-radius: 50rpx;
		background: $any-col;
	}

	.mar {
		margin-right: 20rpx;
	}

	.mar-t {
		margin-top: 15rpx;
	}
	
	.mar-l {
		margin-left: 15rpx;
	}

	.wei {
		font-weight: bold;
	}

	.emit {
		width: 100%;
		height: 120rpx;
	}

	.pages {
		width: 100%;
		min-height: 100vh;
		background: #f1f1f1;
		overflow: hidden;
	}
	.green{
		color: #1aad19;
	}
	
	.goods{
		width: 100%;
		background: #ffffff;
		padding: 20rpx 3% 10rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		image{
			width: 120rpx;
			height: 120rpx;
			margin-right: 20rpx;
		}
		.goods_info{
			width: 535rpx;
			height: 120rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;

			.goods_name{
				width: 100%;
				@include multi-row-apostrophe(1);
			}
			.goods_desc{
				width: 100%;
				@include multi-row-apostrophe(1);
			}
		}
	}
	.desc{
		width: 100%;
		padding: 20rpx 3% 20rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		background: #ffffff;
	}
	.text{
		width: 100%;
		background: #ffffff;
		margin-top: 2rpx;
		padding: 20rpx 3% 10rpx;
		box-sizing: border-box;
		textarea{
			width: 100%;
			height: 150rpx;
			font-size: 28rpx;
		}
		.pic-box{
			@extend .any-flex;
			flex-wrap: wrap;
		}
		.addBtn{
			width: 150rpx;
			height:150rpx;
			background: #F2F2F2;
			border-radius: 15rpx;
			text-align: center;
			margin: 0 auto;
			@extend .any-flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			.iconfont{
				font-size: 50rpx;
				color:#585959;
			}
		}
		.pic{
			width: 30%;
			height: 150rpx;
			position: relative;
			margin-right: 5%;
			margin-top: 20rpx;
			box-shadow: 0rpx 0rpx 10rpx #bfbdbd;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.pic:nth-child(3n){
			margin-right: 0;
		}
		.pic.active{
			box-shadow: none;
		}
		.icon-shanchu{
			font-size: 38rpx;
			color: #9A9A9A;
			position: absolute;
			right: 10rpx;
			top: 0;
			padding: 10rpx;
		}
	}
	
	.save{
		width: 100%;
		margin-top: 40rpx;
		margin-bottom: 40rpx;
		.save_btn{
			width: 500rpx;
			height: 75rpx;
			background: red;
			border-radius: 40rpx;
			margin: 0 auto;
			text-align: center;
			line-height: 75rpx;
			letter-spacing: 2rpx;
			font-size: $uni-font-size-lg;
			color: #ffffff;
			box-shadow: 0rpx 7rpx 15rpx #F6B3B3; 
		}
	}
</style>

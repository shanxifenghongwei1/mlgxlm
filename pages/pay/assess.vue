<template>
	<!-- 我要评价页面 -->
	<view class="">
		<view class="order-detail">
			<image :src="picUrl+goods_detail.picture" mode=""></image>
			<view class="right">
				<view class="tit">
					商品名称：<text>{{goods_detail.goods_name}}</text>
				</view>
				<view class="star">
					<text class="star-tit">商品评星：</text>
					<view class="star-con">
						<uni-rate disabled margin='2' size="13" max='5' :value="star" color="#7f7f7f" active-color="#ffb540" />   
					</view>
				</view>
			</view>
		</view>
		<view class="star-box">
			<view class="tip">
				<view class="icon iconfont icon-pingjia2">

				</view>
				<view class="tip-right">
					<view class="top">
						商家服务评价
					</view>
					<view class="bottom">
						服务订单完成三个月有效
					</view>
				</view>
			</view>
			<view class="star-list">
				<text class="star-tit">服务效果</text>
				<view class="star-con">
					<uni-rate :disabled='false' margin='2' size="13" max='5' :value="3" color="#575757" @change="star1()" active-color="#ffb540" />
				</view>
			</view>
			<view class="star-list">
				<text class="star-tit">服务技术</text>
				<view class="star-con">
					<uni-rate :disabled='false' margin='2' size="13" max='5' :value="3" color="#575757" @change="star2()" active-color="#ffb540" />
				</view>
			</view>
			<view class="star-list">
				<text class="star-tit">服务态度</text>
				<view class="star-con">
					<uni-rate :disabled='false' margin='2' size="13" max='5' :value="3" color="#575757" @change="star3()" active-color="#ffb540" />
				</view>
			</view>
			<view class="star-list">
				<text class="star-tit">店铺环境</text>
				<view class="star-con">
					<uni-rate :disabled='false' margin='2' size="13" max='5' :value="3" color="#575757" @change="star4()" active-color="#ffb540" />
				</view>
			</view>
		</view>
		<view class="content">
			<textarea value="" placeholder="输入您对本次服务的评价" maxlength="500" v-model="evaluate_text" auto-height />
			</view>
		<view class="pic-video">
			<view class="title">
				图片
			</view>
	
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
				star:0,
				goods_detail:{},
				dataUrl: "",
				picUrl: this.global.demao.domain.videoUrl,
				pic_list:[],
				pic_list1:[],
				id:'',
				
				effect_start:1,
				skill_start:1,
				attitude_start:1,
				ambient:1,
				evaluate_text:""
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.global.login_state.login_state().then((res) => {
				if (res) {
					this.global.request.post({
						url: 'goods_list_evaluate',
						method:"GET",
						data:{
							id:options.id
						},
						success: res => {
							this.goods_detail=res.data;
							this.star=res.data.star;
						}
					})
				}
			})
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
			star1(e){
				this.effect_start=e.value;
			},
			star2(e){
				this.skill_start=e.value;
			},
			star3(e){
				this.attitude_start=e.value;
			},
			star4(e){
				this.ambient=e.value;
			},
			save(){
				let data={
					id:this.id,
					effect_start:this.effect_start,
					skill_start:this.skill_start,
					attitude_start:this.attitude_start,
					ambient:this.ambient,
					evaluate_text:this.evaluate_text,
					goods_evaluate_img:this.pic_list1.toString()
				};
				this.global.login_state.login_state().then((res) => {
					if (res) {
						this.global.request.post({
							url: 'goods_evaluate',
							data:data,
							method:"GET",
							success: res => {
								console.log(res)
								this.global.utils.showToast_my(res.msg)
								setTimeout(()=>{
									this.global.utils.jump(3,'/pages/pay/order?good_cate=0&cateid=4')
								},2000)
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.red{
		 color: $any-col;
	}
	.zi{
		font-size: $uni-font-size-base;
		color: #9A9A9A;
	}
	.order-detail{
		width: 100%;
		height: 180rpx;
		margin-top: 20rpx;
		box-shadow: 0rpx 0rpx 10rpx #bfbdbd;
		padding:15rpx 3%;
		box-sizing: border-box;
		@extend .any-flex;
		font-size: $uni-font-size-base;
		image{
			width: 140rpx;
			height: 150rpx;
			background: red;		
		}
		.right{
			flex-grow: 1;
			height: 100%;
			padding-left: 10%;
			box-sizing: border-box;
			@extend .any-flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			font-size: $uni-font-size-sm;
			
		}
		.tit{
			padding: 10rpx 0;
		}
		.star{
			display: flex;
			padding: 10rpx 0;
			.star-tit{
			
			}
			.star-con{
				display: flex;
				align-items: center;
			}
		}
	}
	.star-box{
		width: 100%;
		margin-top: 20rpx;
		box-shadow: 0rpx 0rpx 10rpx #bfbdbd;
		padding:15rpx 3%;
		box-sizing: border-box;
		font-size: $uni-font-size-base;
		.tip{
			width: 100%;
			height: 90rpx;
			@extend .any-flex;
			align-items: center;
		}
		.icon-pingjia2{
			font-size: 46rpx;
			color:  $any-col;
		}
		.tip-right{
			flex-grow: 1;
			height: 100%;
			@extend .any-flex;
			padding-left: 15rpx;
			box-sizing: border-box;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			.top{
				font-size: $uni-font-size-lg;
				font-weight: bold;
				color: #303030;
			}
			.bottom{
				font-size: $uni-font-size-sm;
				color: #575757;
			}
		}
		.star-list{
			display: flex;
			padding:10rpx 10%;
			box-sizing: border-box;
			.star-tit{
				margin-right: 20rpx;
			}
			.star-con{
				display: flex;
				align-items: center;
			}
		}
	}
	.content{
		width: 100%;
		height: 200rpx;
		margin-top: 15rpx;
		padding:15rpx 3%;
		box-sizing: border-box;
		font-size: $uni-font-size-base;
		textarea{
			width: 100%;
			height: 100%;
		}
	}
	.pic-video{
		width: 100%;
		margin-top: 20rpx;
		box-shadow: 0rpx 0rpx 10rpx #bfbdbd;
		padding:15rpx 3%;
		box-sizing: border-box;
		font-size: $uni-font-size-lg;
		.title{
			width: 100%;
			font-weight: bold;
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

<template>
	<view class="">
		<view class="cause">
			<view class="title">
				退款原因
			</view>
			<view class="li">
				<view class="left">
					服务问题
				</view>
				<text class='icon iconfont icon-xuanzhong1'></text>
			</view>
			<view class="li">
				<view class="left">
					不想要了 <text class="ccc">（到店未服务可退款）</text>
				</view>
				<text class='icon iconfont icon-weixuanzhong'></text>
			</view>
			<view class="li">
				<view class="left">
					其他原因
				</view>
				<text class='icon iconfont icon-weixuanzhong'></text>
			</view>
			<textarea value="" class="left" placeholder="描述要退货的详细原因" />
			</view>
		
		
		<view class="cause">
			<view class="title">
				上传附件
			</view>
			<view class="pic-box">
				<view class="pic" v-for="(item,index) in pic_list" :key="index" @click="prev(index)">
					<image :src="item" mode="aspectFit" ></image>
					<view class="icon iconfont icon-shanchu" @click="del(index)">
						
					</view>
				</view>
				
				<view class="pic" @click="add">
					<view class="addBtn ccc">
						+
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
	export default{
		data(){
			return{
				pic_list:[],
				pic_list1:["../../static/logo.png","../../static/image/1.jpg"]
			}
		},
		methods:{
			add(){
				uni.chooseImage({
				    count: 6,
				    sizeType: ['original', 'compressed'],
				    sourceType: ['album'],
				    success: (res)=> {
						console.log(res.tempFilePaths)
						uni.uploadFile({
							url: "http://mt.mlgxlm.com/upload",
							filePath: res.tempFilePaths[0],
							name: 'file',
							success: (uploadFileRes) => {
								let a = JSON.parse(uploadFileRes.data)
								this.pic_list.push(a.data.path)
							}
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
			save(){
				uni.navigateTo({
					url:"/pages/pay/refund_success"
				})
			}
		}
	}
</script>

<style lang="scss">
	.left{
		font-size: $uni-font-size-base;
	}
	.icon-xuanzhong1{
		font-size: 30rpx;
		color: $any-col;
	}
	.icon-weixuanzhong{
		font-size: 29rpx;
		color: #9A9A9A;
	}
	.ccc{
		color: #9A9A9A;
	}
	.cause{
		width: 100%;
		margin-top: 20rpx;
		padding: 20rpx 3%;
		box-sizing: border-box;
		box-shadow: 0rpx 0rpx 8rpx #CACACA;
		.title{
			width: 100%;
			height: 35rpx;
			font-size: $uni-font-size-lg;
			padding-bottom: 12rpx;
			font-weight: bold;
		}
		.li{
			width: 100%;
			height: 75rpx;
			border-bottom: 1rpx solid #F2F2F2;
			@extend .any-flex;
			justify-content: space-between;
			align-items: center;
		}
		textarea{
			width: 100%;
			height: 240rpx;
			background: #F2F2F2;
			border-radius: 15rpx;
			margin-top: 20rpx;
			padding: 10rpx 20rpx;
			box-sizing: border-box;
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
			line-height: 150rpx;
			font-size: $uni-font-size-lg;
			margin: 0 auto;
		}
		.pic{
			width: 30%;
			height: 150rpx;
			position: relative;
			margin-right: 5%;
			margin-top: 20rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.pic:nth-child(3n){
			margin-right: 0;
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

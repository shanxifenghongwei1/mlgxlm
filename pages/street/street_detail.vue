<template>
	<view>
		<view class="detail_head">
			<view class="left">
				<image src="/static/image/other/person_nav.png" mode=""></image>
				<text class="tit base wei">冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家</text>
			</view>
			<view class="right base">
				发布时间：11月21日
			</view>
		</view>
		<view class="pic-box" v-if="pic_list.length">
			<block v-if="pic_list.length!=1&&pic_list.length!=4">
				<view class="pic" v-for="(item,index) in pic_list" :key="index" @click="prev(index)">
					<image src="/static/image/other/1.jpg" mode="aspectFill"></image>
				</view>
			</block>
			<block v-if="pic_list.length==1">
				<view class="pic1" @click="prev(index)">
					<image src="/static/image/other/1.jpg" mode="widthFix"></image>
				</view>
			</block>
			<block v-if="pic_list.length==4">
				<block v-for="(item,index) in pic_list" :key="index">
					<block v-if="index+1!=2">
						<view class="pic" @click="prev(index)">
							<image src="/static/image/other/1.jpg" mode="aspectFill"></image>
						</view>
					</block>
					<block v-if="index+1==2">
						<view class="pic" @click="prev(index)">
							<image src="/static/image/other/1.jpg" mode="aspectFill"></image>
						</view>
						<view class="pic">
							<image src="" mode="aspectFill"></image>
						</view>
					</block>
				</block>
				
			</block>
		</view>
		<view class="video-box" v-show="video_url">
			<view class="video-con">
				<video objectFit="cover" class="video" src="http://video.mlgxlm.com/files/wxf97b8045146a0176.o6zAJszImGr1vKcHHbAyRMsB6ACQ.XhdSHO807e8Iff12ba92cf2e233b646b8d329cfbfbe0.mp4" controls></video>
				<cover-view class="icon iconfont icon-shanchu" @click="del()">
						
				</cover-view>
			</view>
		</view>
		
		<view class="article">
			<view class="title lg wei">
				这个是文章的标题
			</view>
			<textarea class="base" value="冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家冯宏伟的家" placeholder=""  auto-height disabled/>
		</view>
		
		<view class="shop-box">
			<view class="shop">
				<image src="/static/image/other/1.jpg" mode=""></image>
				<view class="right">
					<view class="lg wei">
						芳香精油乳腺疏通（爱美世家）
					</view>
					<view class="star">
						<uni-rate :disabled='false' margin='2' size="10" max='5' :value="4" color="#7f7f7f"  active-color="#ffb540" />
					</view>
					<view class="sm">
						小店天鑫花园
					</view>
				</view>
			</view>
		</view>
		
		<view class="eval">
			<view class="title lg">
				<text class="title-con wei">全部商品（99）</text>
			</view>
			
			<view class="li">
				<view class="top">
				
					<image class="canve" src="/static/image/other/person_nav.png" mode=""></image>
				
					<view class="name">
						刁民
					</view>
				</view>
				<view class="con">
					总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕
				</view>
			</view>
			<view class="li">
				<view class="top">
				
					<image class="canve" src="/static/image/other/person_nav.png" mode=""></image>
				
					<view class="name">
						刁民
					</view>
				</view>
				<view class="con">
					总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕总有刁民想杀朕
				</view>
			</view>
			<view class="lg-state">
				<view class="">
					查看更多评论
				</view>
				<image src="/static/image/other/icon-xiala.png" mode="widthFix" :class="state?'tea_arrowDown':'tea_arrowUp'"></image>
			</view>
		</view>
		<view class="emit">
			
		</view>
		<view class="bottom any-flex">
			<view class="bottom-list">
				<text class="icon iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu- big ccc"></text>
			</view>
			<view class="bottom-list">
				<text class="icon iconfont icon-star big ccc"></text>
			</view>
			<view class="bottom-list">
				<text class="icon iconfont icon-xiaoxi1 big ccc"></text>
			</view>
			<view class="bottom-list">
				<text class="icon iconfont icon-fenxiang1 big ccc"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	import evaluate from '@/components/mine/evaluate';
	export default {
		components:{
			uniRate
		},
		data() {
			return {
				dataUrl: "",
				picUrl: "",
				pic_list: [],
				video_url:"123"
			};
		},
		onLoad(options) {
			this.videoContext = uni.createVideoContext('myVideo')
		},
		methods: {
			add() {
				uni.showActionSheet({
					itemList: ['图片', '视频'],
					success: function(res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						if (res.tapIndex == 0) { //上传图片
							uni.chooseImage({
								count: 6,
								sizeType: ['original', 'compressed'],
								sourceType: ['album'],
								success: (res) => {
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
						} else if (res.tapIndex == 1) { //上传视频
							uni.chooseVideo({
								count: 1,
								sourceType: ['camera', 'album'],
								success: function(res) {
									console.log(res)
	
									uni.uploadFile({
										url: "https://mt.mlgxlm.com/vidoes",
										method: "POST",
										filePath: res.tempFilePath,
										name: 'file',
										success: (uploadFileRes) => {
											console.log(res)
										}
									})
								}
							})
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
	
			},
	
			prev(e) {
				uni.previewImage({
					current: e,
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
			save(){
				this.global.utils.showToast_my("发布成功")
				setTimeout(()=>{
					this.global.utils.jump(5,1)
				}, 2000);
				
			}
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
		color: #777777;
	}
	
	.mul {
		@include multi-row-apostrophe(1);
	}
	
	.tag {
		padding: 5rpx 20rpx;
		border-radius: 50rpx;
		background: $any-col;
		;
	}
	.mar{
		margin-right: 10rpx;
	}
	.wei {
		font-weight: bold;
	}
	.emit{
		width: 100%;
		height: 120rpx;
	}
	.detail_head{
		width: 100%;
		height: 75rpx;
		padding: 0 3%;
		box-shadow: 0rpx 0rpx 5rpx #cccccc;
		box-sizing: border-box;
		@extend .any-flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
		.left{
			width: 450rpx;
			height: 100%;
			@extend .any-flex;
			align-items: center;
			.tit{
				width: 380rpx;
				height: 30rpx;
				line-height: 30rpx;
				@include multi-row-apostrophe(1);
			}
			image{
				width:46rpx;
				height: 46rpx;
				margin-right: 15rpx;
			}
		}
	}
	.pic-box{
		width: 100%;
		padding: 0 4%;
		box-sizing: border-box;
		margin-top: 20rpx;
		.pic{
			width: 30%;
			height: 200rpx;
			display: inline-block;
			margin-right: 2%;
			margin-bottom: 10rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.pic:nth-child(3n){
			margin-right: 0%;
		}
		.pic1{
			width: 30%;
			image{
				width: 100%;
			}
		}
	}
	.video-box{
		width: 100%;
		height: 300rpx;
		padding: 0 3%;
		box-sizing: border-box;
	}
	.video-con {
		width: 100%;
		height: 100%;
		margin-top: 20rpx;
		position: relative;
		border-radius: 20rpx;
		overflow: hidden;
		.video {
			width: 100%;
			height: 300rpx;
			background: pink;
		}
	}
	
	.article{
		width: 100%;
		margin-top: 20rpx;
		padding: 0 3%;
		box-sizing: border-box;
		.title{
			text-align: center;
		}
	}
	
	textarea{
		width: 100%;
		margin-top: 15rpx;
		color: #575757;
	}
	
	.shop-box{
		width: 100%;
		height: 170rpx;
		padding: 0 3%;
		box-sizing: border-box;
		margin-top: 20rpx;
		.shop{
			width: 100%;
			height: 100%;
			box-shadow: 0rpx 0rpx 10rpx #cccccc;
			border-radius: 20rpx;
			@extend .any-flex;
			padding: 10rpx 20rpx;
			box-sizing: border-box;
			image{
				width: 140rpx;
				height: 140rpx;
				background: red;
			}
			.right{
				width: 500rpx;
				height: 120rpx;
				@extend .any-flex;
				padding-left: 30rpx;
				box-sizing: border-box;
				justify-content: space-between;
				align-items: flex-start;
				flex-direction: column;
			}
		}
	}
	
	.eval{
		width: 100%;
		height: 500rpx;
		background: #ffffff;
		margin-top: 20rpx;
		box-shadow: 0rpx 0rpx 10rpx #cccccc;
		.title{
			width: 100%;
			height: 100rpx;
			padding: 20rpx 3%;
			box-sizing: border-box;
			@extend  .any-flex;
			align-items: center;
			border-bottom: 1rpx solid #CDCDCD;
		}
		.title-con{
			border-left: 5rpx solid $any-col;
			padding-left: 20rpx;
			box-sizing: border-box;
		}
		.li{
			width: 100%;
			border-bottom: 1rpx solid #CDCDCD;
			padding: 10rpx 3%;
			box-sizing: border-box;
			.top {
				width: 100%;
				height: 70rpx;
				@extend .any-flex;
			}
			
			.canve {
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
			}
			
			.name {
				max-width: 400rpx;
				height: 100%;
				font-size: $uni-font-size-base;
				line-height: 70rpx;
				margin-left: 20rpx;
			}
			
			.con {
				width: 100%;
				word-break: break-all;
				@include multi-row-apostrophe(2);
				font-size: $uni-font-size-base;
				margin: 8rpx 0;
			}
			
			.bottom {
				width: 100%;
				font-size: $uni-font-size-sm;
				@extend .any-flex;
				justify-content: space-between;
				align-items: center;
				color: #8C8C8C;
			
				.left {
					width: 50%;
					height: 100%;
				}
			
				.right {
					height: 100%;
					@extend .any-flex;
			
					view {
						@extend .any-flex;
					}
			
					view:nth-child(2) {
						margin-left: 20rpx;
					}
			
					view:nth-child(2).active {
						color: $any-col;
					}
			
					.iconfont {
						margin-right: 10rpx;
						font-size: 22rpx;
					}
				}
			}
		}
		.lg-state {
			width: 100%;
			@extend .any-flex;
			justify-content: center;
			align-items: center;
			padding: 20rpx;
		}
		
		.lg-state view {
			font-size: $uni-font-size-base;
		}
		
		.lg-state image {
			width: 14rpx;
			margin-left: 15rpx;
			transform: rotateZ(180deg);
		}
	}
	.bottom{
		width: 100%;
		height: 110rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		background: pink;
		background: #ffffff;box-shadow: 0 -2rpx 5rpx #cccccc;
		.bottom-list{
			width: 25%;
			height: 100%;
			@extend .any-flex;
			justify-content: center;
			align-items: center;
		}
	}

</style>

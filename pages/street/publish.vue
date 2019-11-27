<template>
	<!-- 我要评价页面 -->
	<view class="">
		<!-- 		<view class="content">
			<textarea value="" placeholder="输入您对本次服务的评价" maxlength="500" auto-height />
			</view> -->
		<view class="pic-video">
			<view class="pic-video-box">
				<view class="content">
					<textarea value="" placeholder="来这里写下你的心得体会吧" maxlength="500" auto-height v-model="content" /></textarea>
				</view>
				<view class="title base">
					添加视频/图片
				</view>

				<view class="pic-box">
					<block v-show="pic_list.length">
						<view class="pic" v-for="(item,index) in pic_list" :key="index">
							<image :src="item" mode="aspectFit"  @click="prev(index)"></image>
							<view class="icon iconfont icon-shanchu" @click="del(index)">

							</view>
						</view>
					</block>
					<view class="video-box" v-show="video_url">
						<video objectFit="cover" class="video" src="https://media.w3.org/2010/05/sintel/trailer.mp4" controls></video>
						<cover-view class="icon iconfont icon-shanchu" @click="del_v()">

						</cover-view>
					</view>

					<view class="pic active" @click="add">
						<view class="addBtn ccc">
							<image src="/static/image/other/publish_pic.png" class="pic_btn" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="find-title">
			<view class="title-box">
				<view class="tip-btn red base">
					#添加标题
				</view>
				<input type="text" class="base" value="" placeholder="请输入发布标题" v-model="title" />
			</view>
		</view>


		<view class="save">
			<btn font="发布" @save="save()"></btn>
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
				dataUrl: this.global.demao.domain.videoUrl,
				picUrl: "",
				pic_list: [],			//本地预览
				pic_list1:[],			//上传地址
				video_url: "",			
				content: "",
				title: "",
				video: ""
			};
		},
		onLoad(options) {
			this.videoContext = uni.createVideoContext('myVideo')
		},
		methods: {
			add() {
				let that = this;
				let upload_pic = this.global.demao.domain.request + this.global.demao.api.upload;
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
									that.pic_list=res.tempFilePaths
									let pic_box = []
									res.tempFilePaths.forEach((v, index) => {
										uni.uploadFile({
											url: upload_pic,
											filePath: v,
											name: 'file',
											success: (uploadFileRes) => {
												let a = JSON.parse(uploadFileRes.data)
												pic_box.push(a.data.path)
												if (index + 1 == res.tempFilePaths.length) {
													that.pic_list1 = pic_box
													that.video_url="";
													that.video=""
												}
											}
										})
									})
								}
							});
						} else if (res.tapIndex == 1) { //上传视频
							uni.chooseVideo({
								count: 1,
								sourceType: ['camera', 'album'],
								success: function(res) {
									console.log(res)
									that.video_url = res.tempFilePath;
									uni.uploadFile({
										url: "https://mt.mlgxlm.com/vidoes",
										method: "POST",
										filePath: res.tempFilePath,
										name: 'file',
										success: (uploadFileRes) => {
											let address = JSON.parse(uploadFileRes.data).data.address;
											that.video = address.slice(1)
											that.pic_list=[]
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
			del(e) {
				uni.showModal({
					title: '提示',
					content: '确认删除这张图片吗',
					success: (res) => {
						if (res.confirm) {
							this.pic_list.splice(e, 1)
							this.pic_list1.splice(e, 1)
							this.global.utils.showToast_my("删除成功")
						} else if (res.cancel) {

						}
					}
				})

			},
			del_v(e) {
				uni.showModal({
					title: '提示',
					content: '确认删除这个视频吗',
					success: (res) => {
						if (res.confirm) {
							this.video_url = ""
							this.video = ""
							this.global.utils.showToast_my("删除成功")
						} else if (res.cancel) {

						}
					}
				})
			},
			check() {
				switch (true) {
					case !this.content:
						this.global.utils.showToast_my("内容不能为空");
						break;
					case !this.pic_list && !this.video:
						this.showToast_my("图片或视频不能为空")
						break;
					case !this.title:
						this.global.utils.showToast_my("标题不能为空");
						break;
					default:
						return true;
				}
			},
			save(e) {
				if (this.check()) {
					let data = {};
					data.mt_experience = this.content;
					data.mt_title = this.title;
					data.mt_move_url = this.video;
					data.mt_pic_url = this.pic_list1.toString();
					this.global.request.post({
						url: "releaseadd",
						method: "GET",
						data: data,
						success: (res) => {
							if (res.info == 1) {
								this.global.utils.showToast_my("发布成功，快去看看吧")
								setTimeout(() => {
									this.global.utils.jump(5, 1)
								}, 2000);
							} else {
								this.global.utils.showToast_my("发布失败，请稍后重试")
							}
						}
					})
				}
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
		color: #cccccc;
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

	.mar {
		margin-right: 10rpx;
	}

	.wei {
		font-weight: bold;
	}

	.emit {
		width: 100%;
		height: 120rpx;
	}

	.zi {
		font-size: $uni-font-size-base;
		color: #9A9A9A;
	}

	.content {
		width: 100%;
		min-height: 200rpx;
		margin-top: 15rpx;
		box-sizing: border-box;
		font-size: $uni-font-size-base;

		textarea {
			width: 100%;
			min-height: 200rpx;
		}
	}

	.pic-video {
		width: 100%;
		// box-shadow: 0rpx 0rpx 10rpx #bfbdbd;
		padding: 15rpx 3%;
		box-sizing: border-box;
		font-size: $uni-font-size-lg;

		.pic-video-box {
			width: 100%;
			height: 100%;
			padding: 20rpx;
			box-sizing: border-box;
			border-radius: 15rpx;
			background: #F7F7F7;
		}

		.title {
			width: 100%;
			font-weight: bold;
			margin-top: 20rpx;
		}

		.pic-box {
			@extend .any-flex;
			flex-wrap: wrap;
		}

		.addBtn {
			width: 150rpx;
			height: 150rpx;
			background: #F2F2F2;
			border-radius: 15rpx;
			text-align: center;
			margin: 0 auto;
			@extend .any-flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			background: #ffffff;

			.iconfont {
				font-size: 50rpx;
				color: #585959;
			}
		}

		.pic {
			width: 30%;
			height: 150rpx;
			position: relative;
			margin-right: 5%;
			margin-top: 20rpx;
			box-shadow: 0rpx 0rpx 10rpx #bfbdbd;

			image {
				width: 100%;
				height: 100%;
			}

			.pic_btn {
				width: 45rpx;
				height: 35rpx;
			}
		}

		.video-box {
			width: 100%;
			height: 400rpx;
			margin-top: 20rpx;
			position: relative;
			border-radius: 20rpx;
			overflow: hidden;
		}

		.video {
			width: 100%;
			height: 400rpx;
			background: pink;
		}

		.pic:nth-child(3n) {
			margin-right: 0;
		}

		.pic.active {
			box-shadow: none;
		}

		.icon-shanchu {
			font-size: 38rpx;
			color: #9A9A9A;
			position: absolute;
			right: 10rpx;
			top: 0;
			padding: 10rpx;
		}

	}

	.find-title {
		width: 100%;
		height: 100rpx;
		padding: 0 4%;
		box-sizing: border-box;

		.title-box {
			width: 100%;
			height: 100%;
			@extend .any-flex;
			align-items: center;
			border-bottom: 1rpx solid #cccccc;
			box-sizing: border-box;

			.tip-btn {
				width: 171rpx;
				height: 50rpx;
				background: #FFCBCB;
				border-radius: 25rpx;
				text-align: center;
				line-height: 50rpx;
			}

			input {
				width: 500rpx;
				height: 50rpx;
				margin-left: 20rpx;
			}
		}
	}


	.save {
		width: 100%;
		margin-top: 40rpx;
		margin-bottom: 40rpx;

		.save_btn {
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

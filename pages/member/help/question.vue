<template>
	<view class="">
		<view class="list" v-for="(item,index) in questionList" :key="index">
			<view class="question" @click="open(index)">
				<view class="pic">
					{{index+1}}
				</view>
				<view class="title">
					{{item.question}}
				</view>
				<view class="icon iconfont icon-jiantou-copy" :class="!item.isopen?'active':''">
				</view>
			</view>
			<view class="answer" v-show="item.isopen">
				<view class="answer-box">
					{{item.answer}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				questionList:[
					{id:1,question:"这是一个什么样的平台",answer:"这是一个集商铺么你噶水电费gas的打扫房间巴适得很发斯蒂芬阿斯蒂芬把接收到的平台",isopen:true},
					{id:2,question:"这是一个什么样的平台",answer:"这是一个集商铺么你噶水电费gas的打扫房间巴适得很发斯蒂芬阿斯蒂芬把接收到的平台",isopen:false},
					{id:3,question:"这是一个什么样的平台",answer:"这是一个集商铺么你噶水电费gas的打扫房间巴适得很发斯蒂芬阿斯蒂芬把接收到的平台",isopen:false}
				]
			}
		},
		methods: {
			open(e){
				this.questionList[e].isopen=!this.questionList[e].isopen
			}
		},
		onLoad() {
			this.global.utils.sethead("常见问题");
		}
	}
</script>

<style lang="scss">
	.list{
		width: 100%;
		border-bottom: 1rpx solid #cccccc;
		box-sizing: border-box;
		padding: 20rpx 3%;
		box-sizing: border-box;
		font-size: $uni-font-size-base;
		.question{
			width: 100%;
			@extend .any-flex;
			align-items: flex-start;
		}
		.answer{
			width: 100%;
			padding: 10rpx 30rpx 10rpx 75rpx;
			box-sizing: border-box;
		}
		.answer-box{
			width: 100%;
			height: 100%;
			color: #575757;
		}
		.pic{
			width: 68rpx;

			background: url('~@/static/image/other/question_1.png') no-repeat center center;
			background-size: 45rpx 40rpx;
			text-align: center;
			line-height: 40rpx;
		}
		.title{
			width: 600rpx;
			padding: 7rpx 15rpx 7rpx 10rpx;
			box-sizing: border-box;
		}
		.icon-jiantou-copy{
			font-size: 40rpx;
			transform:rotate(-90deg);
		}
		.icon-jiantou-copy.active{
			transform:rotate(90deg);
		}
	}
</style>

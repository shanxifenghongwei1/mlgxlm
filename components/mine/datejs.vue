<template>
	<text>{{a}}</text>
</template>

<script>
	export default {
		data() {
			return {
				a: ""
			};
		},
		props: {
			date: {
				type: String, //商品数据列表
				default: ""
			}
		},
		methods: {
			dateTime: (timestamp) => {
				var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = date.getDate() + ' ';
				var h = date.getHours() + ':';
				var m = date.getMinutes() + ':';
				var s = date.getSeconds();
				return Y+M+D;
			},
			runid(e) {
				this.ids = "a" + e;
				this.menue = true;
				this.$emit('cateid', e)
			}
		},
		created: function() {
			this.a = this.dateTime(this.date)
		}
	}
</script>

<style>
</style>

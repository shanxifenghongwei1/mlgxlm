<script>
	import demo from "@/common/js/demao.js"
	export default {
		onLaunch: function() {


			this.isGetLocation();
			uni.checkSession({
				success: (res) => {
					//1:登录  0：未登录
					if (res.errMsg !== "checkSession:ok") {
						this.global.status.state.login = 0;
					} else {
						this.global.status.state.login = 1;
					}
					console.log(this.global.status.state.login)
				},
				fail: (res) => {
					if (res.errMsg !== "checkSession:ok") {
						this.global.status.state.login = 0;
					} else {
						this.global.status.state.login = 1;
					}
					console.log(this.global.status.state.login)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			getAuthorizeInfo() { //1. uniapp弹窗弹出获取授权（地理，个人微信信息等授权信息）弹窗

				var that = this;
				uni.getLocation({
					type: 'wgs84',
					success(res) {
						console.log("你当前经纬度是：")
						let latitude, longitude;
						latitude = res.latitude.toString();
						longitude = res.longitude.toString();
						console.log(latitude, longitude)


						// var wxMarkerData = [];
						// var BMap = new that.global.bmap.BMapWX({
						// 	ak: 'AXHWyGXEyPgmFWvXIW3bQIrA9v7f991M'
						// });
						// var fail = function(data) {
						// 	console.log(data)
						// };
						// var success = function(data) {
						// 	wxMarkerData = data.wxMarkerData;

						// 	that.global.status.city = wxMarkerData;

						// 	that.latitude = wxMarkerData[0].latitude


						// 	that.longitude = wxMarkerData[0].longitude

						// 	console.log(that.global.status.city)

						// }
						// // 发起regeocoding检索请求 
						// BMap.regeocoding({
						// 	fail: fail,
						// 	success: success,
						// 	iconPath: '../../img/marker_red.png',
						// 	iconTapPath: '../../img/marker_red.png'
						// });










						uni.request({
							header: {
								"Content-Type": "application/text"
							},
							url: "https://api.map.baidu.com/reverse_geocoding/v3?coordtype=gcj02ll&ret_coordtype=gcj02ll&radius=1000&ak=AXHWyGXEyPgmFWvXIW3bQIrA9v7f991M&sn=&output=json&callback=function%20()%20%7B%7D&extensions_poi=1&extensions_road=false&extensions_town=false&language=zh-CN&language_auto=0&location=" +
								latitude + "%2C" + longitude,
							success(re) {
								if (re.statusCode === 200) {
									console.log(re.data.result.addressComponent)
									that.global.utils.showToast_my("获取位置成功！")
								} else {
									that.global.utils.showToast_my("获取信息失败，请稍后重试！")
								}
							}
						});


					}
				});

			},
			getLocationInfo(a = "scope.userLocation") { //2. 获取地理位置
				var _this = this;
				uni.authorize({
					scope: a,
					success() { //1.1 允许授权
						_this.getAuthorizeInfo();
					},
					fail() { //1.2 拒绝授权
						console.log("你拒绝了授权，无法获得周边信息")
					}
				})
			},
			isGetLocation(a = "scope.userLocation") { // 3. 检查当前是否已经授权访问scope属性，参考下截图
				var _this = this;
				uni.getSetting({
					success(res) {
						console.log("获取授权情况")
						console.log(res)
						console.log(res.authSetting[a] == false)
						if (res.authSetting[a] == undefined) { //3.1 每次进入程序判断当前是否获得授权，如果没有就去获得授权，如果获得授权，就直接获取当前地理位置

							_this.getAuthorizeInfo()

						} else if (res.authSetting[a]) {

							_this.getLocationInfo()

						} else if (res.authSetting[a] == false) {
							console.log("打开设置")
							uni.openSetting({
								success(res) {
									console.log(res)
								}
							})
						}
					}
				});
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>

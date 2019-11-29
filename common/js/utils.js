// 修改标题栏文字
let sethead = data => {
	uni.setNavigationBarTitle({
		title: data
	});
}
let showToast_my = e => {
	uni.showToast({
		title: e,
		duration: 2000,
		icon: "none"
	});
	return false;
}



let jump = (e, f) => {
	switch (true) {
		case e == 1:
			{
				wx.navigateTo({
					url: f
				})
				break;
			};
		case e == 2:
			{
				uni.switchTab({
					url: f
				})
				break;
			};
		case e == 3:
			{
				uni.redirectTo({ //关闭当前页面打开新的页面
					url: f
				})
				break;
			};
		case e == 4:
			{
				uni.reLaunch({ //关闭所有页面打开新的页面
					url: f
				})
				break;
			};
		case e == 5:
			{
				uni.navigateBack({ //返回上个页面
					delta: 1
				});
				break;
			};
			return true;
	}
}

let showModel_my = () => {
	uni.showModal({
		title: '提示',
		content: '此功能需要您授权登录,是否前去登录',
		success: (res)=> {
			if (res.confirm) {
				uni.navigateTo({
					url:"/pages/login/login"
				})
			} else if (res.cancel) {
				console.log('用户点击取消');
			}
		}
	});
}

let c = data => {
	console.log(data)
}

module.exports = {
	sethead,
	c,
	showToast_my,
	jump,
	showModel_my
}

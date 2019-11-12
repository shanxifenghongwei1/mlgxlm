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

let c = data => {
	console.log(data)
}

module.exports = {
	sethead,
	c,
	showToast_my
}

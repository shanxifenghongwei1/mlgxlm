// 修改标题栏文字
let sethead = data => {
	uni.setNavigationBarTitle({
	    title: data
	});
}

let c = data =>{
	console.log(data)
}

//将时间戳转化为日期
let dateTime = (timestamp)=>{
	var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var D = date.getDate() + ' ';
	var h = date.getHours() + ':';
	var m = date.getMinutes() + ':';
	var s = date.getSeconds();
	return Y;
}
module.exports = {
	sethead,c,dateTime
}


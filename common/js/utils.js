// 修改标题栏文字
let sethead = data => {
	uni.setNavigationBarTitle({
	    title: data
	});
}

let c = data =>{
	console.log(data)
}

module.exports = {
	sethead,c
}


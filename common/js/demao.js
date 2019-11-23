module.exports={

	domain:{
		//数据请求地址
		request:"https://mt.mlgxlm.com/",
		//图片地址
		picUrl:"https://mt.mlgxlm.com"
	}, 
	api:{
		index:"index"										,//首页
		index_coupon:"index_coupon"							,//优惠券
		assemble:"assemble"									,//拼团
		limited_time:"limited_time"							,//限时抢
		
		
		couponadd:"couponadd"								,//领取优惠券
		
		
		goodsInfo:"goodsInfo"								,//商品详情
		shop_goods:"shop_goods"								,//店铺详情 
		
		add_cart:"add_cart"									,//加购   goods_id
		cartList:"cartList"									,//购物车列表
		
		
		add_collection:"add_collection"						,//商品收藏  goods_id
		collection_list:" collection_list"					,//商品收藏列表
		shop_collection:"shop_collection"					,//店铺收藏  shop_id
		shop_collection_list:"shop_collection_list"			,//店铺收藏列表
		
		collectionaddd:"collectionaddd"						,//查询店铺是否被收藏
		collectionshop:"collectionshop"						,//查询商品是否被收藏
		shop_collection_dele:"shop_collection_dele"			,//取消店铺收藏
		collectiondele:"collectiondele"						,//取消商品收藏
		
		couponlist:"couponlist"								,//店铺优惠券列表
		caselist:"caselist"									,//请求案例数据
		
		user_Address_list:"user_Address_list"				,//用户地址列表
		user_Address:"user_Address"							,//添加地址		
		delete_address:"delete_address"						,//删除地址
		update_address:"update_address"						,//修改地址
		
		
		bankcard_list:"bankcard_list"						,//银行卡列表
		add_bankcard:"add_bankcard"							,//添加银行卡
		add_bankcard_delete:"add_bankcard_delete"			,//删除银行卡
		
		
	}
}
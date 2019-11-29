import Vue from 'vue'
import App from './App'

import demao from "./common/js/demao"
import request from "./common/js/request"
import utils from "./common/js/utils"
import status from "./common/js/status"
import card_info from "./common/js/card_info.js"
import bmap from "./common/js/bmap-wx.js"

import sunblinds from "./components/all/sunblind.vue"
import btn from "./components/all/btn.vue"
Vue.component("sunblind",sunblinds)
Vue.component("btn",btn)

import "./common/css/font.css"
Vue.config.productionTip = false


Vue.prototype.global = {
	request: request,
	utils: utils,
	status: status,
	card_info: card_info,
	demao,
	bmap,
	city: "",
	lat:null,
	lng:null,
	watch: function(method) {									//监听city变化
		var obj = this;
		Object.defineProperty(obj, "city", {
			configurable: true,
			enumerable: true,
			set: function(value) {
				this._city = value;
				method(value);
			},
			get: function() {
				// 可以在这里打印一些东西，然后在其他界面调用getApp().globalData.name的时候，这里就会执行。
				return this._city
			}
		})
	},
	watch1: function(method) {									//监听city变化
		var obj = this;
		Object.defineProperty(obj, "lat", {
			configurable: true,
			enumerable: true,
			set: function(value) {
				this._lat = value;
				method(value);
			},
			get: function() {
				// 可以在这里打印一些东西，然后在其他界面调用getApp().globalData.name的时候，这里就会执行。
				return this._lat
			}
		})
	},
	watch2: function(method) {									//监听city变化
		var obj = this;
		Object.defineProperty(obj, "lng", {
			configurable: true,
			enumerable: true,
			set: function(value) {
				this._lng = value;
				method(value);
			},
			get: function() {
				// 可以在这里打印一些东西，然后在其他界面调用getApp().globalData.name的时候，这里就会执行。
				return this._lng
			}
		})
	}
}
Vue.filter("time", (nS) => {
	return new Date(parseInt(nS) ).toLocaleString().replace(/:\d{1,2}$/, ' ');
})
Vue.filter("isN", (e,f=String) => {
	if(e){
		return e
	}else{
		if(f==String){
			return "";
		}else{
			return 0;
		}
	}
})



App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()

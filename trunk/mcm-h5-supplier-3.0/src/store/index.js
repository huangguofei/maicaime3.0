/*状态管理*/
import Vue from 'vue'
import Vuex from 'vuex'
import Food from './modules/food'
import Order from './modules/order'

Vue.use(Vuex);
export default new Vuex.Store({
  	modules : {
  		Food,
  		Order
  	}
});
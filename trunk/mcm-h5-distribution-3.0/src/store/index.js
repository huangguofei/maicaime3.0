/*状态管理*/
import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import order from './modules/order'

Vue.use(Vuex);
export default new Vuex.Store({
  	modules : {
  		common,
  		order
  	}
});
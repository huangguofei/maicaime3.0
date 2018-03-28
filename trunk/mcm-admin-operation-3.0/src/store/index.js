/*状态管理*/
import Vue from 'vue'
import Vuex from 'vuex'
import editorHome from './modules/editor/home'

Vue.use(Vuex);
export default new Vuex.Store({
  	modules : {
  		editorHome
  	}
});
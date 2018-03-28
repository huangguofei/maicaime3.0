/*状态管理*/
import Vue from 'vue'
import Vuex from 'vuex'
import editorHome from './modules/editor/home'
import editorIndex from './modules/editor/index'

Vue.use(Vuex);
export default new Vuex.Store({
  	modules : {
  		editorHome,
  		editorIndex
  	}
});
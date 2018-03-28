/**
 * hgf 2017年11月1日10:50:03
 */
import { searchAPI } from "../../api/marketing"
export default {
	/*获取热门搜索列表*/
	getSearchList(vm) {
		var paging = vm.pagings;
		var params = {};
		params.pageNum = paging.current;
		searchAPI.searchListAPI((result) => {
			vm.tableData = result;
			paging.total = result.totalCount;
		});
	},
	/*添加修改热门搜索列表*/
	searchHandle(vm, data, type) {
		if(type == "new") {
			searchAPI.searchNewAPI(data, (result) => {
				this.getSearchList(vm);
			});
		} else {
			searchAPI.searchEditAPI(data, (result) => {
				this.getSearchList(vm);
			});
		}
	},
	/*删除热门搜索列表*/
	searchDelete(vm, id) {
		searchAPI.searchDeleteAPI({
			keywordId: id
		}, (result) => {
			this.getSearchList(vm);
			vm.$message({
				type: 'success',
				message: '删除成功!'
			});
		});
	}
}
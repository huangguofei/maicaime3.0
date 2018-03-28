/**
 * hgf 2017年11月1日09:44:01
 */
import {ticketAPI} from "../../api/marketing"
export default{
	/*获取优惠券列表*/
	getTicketList(vm) {
		var paging = vm.pagings;
		ticketAPI.ticketListAPI(paging,(result) => {
			vm.tableData = result.resultList;
			vm.totalCount = result.totalCount;
		});
	}
}
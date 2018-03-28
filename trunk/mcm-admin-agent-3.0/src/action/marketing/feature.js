/**
 * author pzh 
 * day    2017-11-1
 * 特色专区业务接口
 */
import { featureAPI } from "../../api/marketing"
export default {
	saveThemeActivity(vm, info) {
		var _that = this,
			_success = (mes) => {
				vm.$message({
					message: mes,
					type: 'success'
				});
				vm.$router.push({
					name: "marketing.feature.theme"
				});
			}
		if(info.id) {

		} else {
			let params = JSON.stringify(info);
			params = JSON.parse(params);
			if(params.startDate == "") {
				delete params.startDate;
				delete params.endDate;
			}
			if(params.startTime == "") {
				delete params.startTime;
				delete params.endTime;
			}
			featureAPI.mothlySpecialAPI(params, (result) => {
				_success("添加成功");
			})
		}

	},
	/*获取专区列表*/
	getFeatureAreaList(vm) {
		var paging = vm.pagings;
		featureAPI.featureAreaListAPI(paging, (result) => {
			vm.featureList = result.resultList;
			vm.totalCount = result.totalCount;
		})
	},
	/*更改活动状态*/
	changeActionStatus(vm, data) {
		var txt = (data.status == 1 ? "上架" : "下架");
		featureAPI.featureStatusEditAPI(data, (result) => {
			if(result) {
				vm.$message({
					type: 'success',
					message: txt + '成功!'
				});
				this.getFeatureAreaList(vm);
			} else
				vm.$message({
					type: 'error',
					message: txt + '失败!'
				});
		});
	},
	/*活动详情*/
	getActivityDetail(vm) {
		var params = {
			monthlySpecialId : vm.$route.params.fid
		}
		featureAPI.detailAPI(params, (result)=>{
			vm.detailInfo = result;
		});
	}
}
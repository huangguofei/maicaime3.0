<!-- 设置区域 -->
<template>
	<el-dialog :title="areaDialog.title" :visible.sync="areaDialog.dialogShow" size="tiny" :close-on-click-modal="false">
		<span v-if="checkbox">
          <el-checkbox-group v-model="selectArea">
            <el-checkbox :label="a.regionId" :key="a.regionId" v-for="a in areaData">{{a.regionName}}</el-checkbox>
          </el-checkbox-group>
      </span>
		<span v-else>
		  	 <el-radio class="radio" v-model="selectArea" :label="a.regionId" v-for="a in areaData">{{a.regionName}}</el-radio>
		  </span>
		<span slot="footer" class="dialog-footer">
		    <el-button @click="areaDialog.dialogShow = false">取 消</el-button>
		    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
		  </span>
	</el-dialog>
</template>
<script>
	import SETTINGAREA from "action/setting/area"
	export default {
		data() {
			return {
				areaData: [],
				selectArea: [],
			};
		},
		props: ["areaDialog", "submitClick", "checkbox"],
		created() {
			SETTINGAREA.getAllAreaInfo(this);
		},
		methods: {
			submitForm(formName) {
				var _that = this;
				_that.submitClick(_that.selectArea);
			},
			editFormData(formData) {
				this.selectArea=[];
				if(!formData) return false;
				var _that = this;
				if(this.checkbox) {
					this.areaData.forEach((v, k) => {
						formData.suppierRegionItemBOList.forEach((m, i) => {
							if(m.regionId == v.regionId) {
								_that.selectArea.push(v.regionId);
							}
						});

					});
				} else {
					this.selectArea = formData.regionId;
				}

			}

		}
	};
</script>
<!-- 设置基本信息 -->
<template>
	<div class="setting-basic">
		<el-form ref="form"   label-width="80px">
			  <el-form-item label="活动名称">
			    <el-input v-model="formData.specialName"></el-input>
			  </el-form-item>
			  <el-form-item label="活动频率">
			     <el-radio-group v-model="formData.frequencyType">
				    <el-radio-button label="1">一次</el-radio-button>
				    <!-- <el-radio-button label="2">每天</el-radio-button>
				    <el-radio-button label="3">每周</el-radio-button>
				    <el-radio-button label="4">每月</el-radio-button> -->
				  </el-radio-group>
			  </el-form-item>
			  <el-form-item label="有效日期" >
				<el-date-picker
			      v-model="dateVal"
			      type="daterange"
			      range-separator="至"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期"
			      placeholder="选择日期范围"
			      @change="changeDate"
			      value-format="yyyy-MM-dd">
			    </el-date-picker>
			</el-form-item>
		    <el-form-item label="时间段" >
					<el-time-picker
					    is-range
					    arrow-control
					    v-model="timeVal"
					    range-separator="至"
					    start-placeholder="开始时间"
					    end-placeholder="结束时间"
					    placeholder="选择时间范围"
					    value-format="HH:mm:ss"
					    @change="changeTime">
					  </el-time-picker>
				</el-form-item>
			   <el-form-item label="活动规则">
			    <el-input type="textarea" v-model="formData.ruleContent" :rows="5"></el-input>
			  </el-form-item>
			  
		</el-form>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default{
		data() {
			return{
				dateVal : null,
				timeVal : null
			}
		},
		computed : {
	    	...mapGetters([
		      'formData'
		    ])
	    },
	    methods : {
	    	changeTime(val) {
	    		var form = this.form;
	    		if(val) {
	    			if(val.length >= 2) {
						this.formData.startTime = val[0],
						this.formData.endTime = val[1];
					}
	    		} else {
	    			this.formData.startTime = "";
	    			this.formData.endTime = "";
	    		}
				
			},
			changeDate(val) {
				var form = this.form;
				if(val) {
					if(val.length >= 2) {
						this.formData.startDate = val[0],
						this.formData.endDate = val[1];
					}
				} else {
					this.formData.startDate = "";
					this.formData.endDate = "";
				}
				
			},
	    }
		
	}
</script>
<style lang="less" scoped>
@import "../../../../common/less/config.less";
.setting-basic{
	.el-date-editor.el-input{
		width:100%;
	}
	
}
</style>
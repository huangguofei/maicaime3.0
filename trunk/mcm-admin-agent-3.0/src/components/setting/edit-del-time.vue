<!-- 编辑配送时间 -->
<template>
	<el-dialog
		  :title="editInfo.title"
		  :visible.sync="editInfo.dialogShow"
		  size="tiny"
		  :close-on-click-modal="false"
		  >
		  <el-form :model="ruleForm"ref="ruleForm">
				<el-form-item label="配送时间段" label-width="120px" >
					<el-row>
				  		<el-col :span="10">
					  		 <el-select v-model="startTime" placeholder="请选择" @change="changeStartTime">
							    <el-option
							      v-for="item in startTimeOption"
							      :key="(item - 1)"
							      :label="filterStartTime(item)"
							      :value="item">
							    </el-option>
							  </el-select>
						</el-col>
						<el-col :span="2" style="text-align:center;">
							—
						</el-col>
						<el-col :span="10">
							 <el-select v-model="endTime" placeholder="请选择">
							    <el-option
							      v-for="item in endTimeOption"
							      :key="(item + startTime)"
							      :label="filterEndTime(item)"
							      :value="item">
							    </el-option>
							  </el-select>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="排序" label-width="120px">
					 <el-input-number v-model="ruleForm.orderIndex"  :min="0" ></el-input-number>
				</el-form-item>
		  </el-form>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="editInfo.dialogShow = false">取 消</el-button>
		    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
		  </span>
	</el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm : {},
        startTime : "",
        endTime : "",
        startTimeOption : 47,
        endTimeOption : 0,

      };
    },
    props : ["editInfo", "submitClick"],
    created() {
        this.resetForm();
    },
    methods: {
      	submitForm(formName) {
      		var _that = this;
      		var form = _that.ruleForm;
      		if(_that.startTime == "" || _that.endTime == "") {
              _that.$message("请选择配送时间段！");
              return false;
          }
          var form = _that.ruleForm;
          if(_that.startTime < 10) {
              form.deliveryStartTimeSection = "0"+_that.startTime+":00";
              form.startTimeType = 0;
          } else if(_that.startTime >= 10 && _that.startTime <= 23){
              form.deliveryStartTimeSection = _that.startTime+":00";
              form.startTimeType = 0;
          } else if(_that.startTime > 23 && _that.startTime < 33) {
              form.deliveryStartTimeSection = "0"+Math.abs(_that.startTime - 24)+":00";
              form.startTimeType = 1;
          } else {
              form.deliveryStartTimeSection = +Math.abs(_that.startTime - 24)+":00";
              form.startTimeType = 1;
          }
          var endTime = _that.endTime + _that.startTime;
          if(endTime < 10) {
              form.deliveryEndTimeSection = "0"+endTime+":00";
              form.endTimeType = 0;
          } else if(endTime >= 10 && endTime <= 23){
              form.deliveryEndTimeSection = endTime+":00";
              form.endTimeType = 0;
          } else if(endTime > 23 && endTime < 33) {
              form.deliveryEndTimeSection = "0"+Math.abs(endTime - 24)+":00";
              form.endTimeType = 1;
          } else {
              form.deliveryEndTimeSection = +Math.abs(endTime - 24)+":00";
              form.endTimeType = 1;
          }
      		_that.submitClick(_that.ruleForm);
      	},
        resetForm() {
           this.ruleForm = {
              deliveryStartTimeSection : "",
              deliveryEndTimeSection : "",
              orderIndex : 0,
              startTimeType:0,
              endTimeType : 0
          }
          this.startTime = "";
          this.endTime = "";
        },
      	editFormData(formData) {
      		if(!formData) return false;
      		var _that = this;
          if(formData.startTimeType == 0) {
            _that.startTime = parseInt(formData.deliveryStartTimeSection);
          } else {
            _that.startTime = (24 + parseInt(formData.deliveryStartTimeSection));
          }
          this.endTimeOption = this.startTimeOption - _that.startTime;
          setTimeout(function() {
              if(formData.endTimeType == 0) {
                 _that.endTime = parseInt(formData.deliveryEndTimeSection) - _that.startTime;
              } else {
                _that.endTime = (24 + parseInt(formData.deliveryEndTimeSection) - _that.startTime);

              }
              console.log(_that.endTime)
          }, 100);
          
      		_that.ruleForm = formData;
      	},
      	changeStartTime(value) {
              this.endTime = "";
             this.endTimeOption = this.startTimeOption - value;
      	},
        filterTime(val) {
             let timeStr = "";
              if(val < 24) {
                  timeStr += "当日"
                  if(val < 10) {
                     timeStr += "0" + val + ":00" 
                  } else {
                     timeStr += val + ":00" 
                  }
              } else {
                  val = Math.abs(24 - val);
                  timeStr += "次日"
                  if(val < 10) {
                     timeStr += "0" + val + ":00" 
                  } else {
                     timeStr += val + ":00" 
                  }
              }
              return timeStr;
        },
        filterStartTime(val) {
          return this.filterTime(val);
        },
        filterEndTime(val) {
            val = val + this.startTime;
            return this.filterTime(val);
        }
      	
    }
  };
</script>
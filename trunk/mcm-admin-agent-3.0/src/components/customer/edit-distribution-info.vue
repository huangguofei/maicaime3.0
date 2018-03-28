<!-- 编辑配送商 -->
<template>
	<el-dialog
		  :title="editInfo.title"
		  :visible.sync="dialogShow"
		  size="tiny"
		  :close-on-click-modal="false"
		  >
		  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="dis-info">
				<el-form-item label="配送商名称" label-width="120px" prop="deliveryName">
					<el-input v-model="ruleForm.deliveryName" auto-complete="off" placeholder="配送商名称"></el-input>
				</el-form-item>
				<el-form-item label="联系人" label-width="120px" prop="contact">
					<el-input v-model="ruleForm.contact" auto-complete="off" placeholder="联系人"></el-input>
				</el-form-item>
				<el-form-item label="手机号码" label-width="120px" prop="mobile">
					<el-input v-model="ruleForm.mobile" auto-complete="off" placeholder="手机号码" type="tel" :maxlength="11" :minlength="11"></el-input>
				</el-form-item>
				<el-form-item label="地址" label-width="120px" prop="address">
					<el-input v-model="ruleForm.address" auto-complete="off" placeholder="地址"></el-input>
				</el-form-item>
				<el-row>
				    <el-col :span="12">
				  			<el-form-item label="经度" label-width="120px" prop="longitude">
								<el-input v-model="ruleForm.longitude" auto-complete="off" type="number" placeholder="经度"></el-input>
							</el-form-item>
					</el-col>
				    <el-col :span="12">
				  			<el-form-item label="纬度" label-width="120px" prop="dimension">
								<el-input v-model="ruleForm.dimension" auto-complete="off" type="number" placeholder="纬度"></el-input>
							</el-form-item>
					</el-col>
				</el-row>
		  </el-form>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogShow = false">取 消</el-button>
		    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
		  </span>
	</el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm : {},
        dialogShow : false,
        rules: {
        	 deliveryName: [
	            { required: true, message: '请输入配送商名称', trigger: 'blur' }
	         ],
	         address: [
	            { required: true, message: '请输入地址', trigger: 'blur' }
	         ],
	         contact: [
	            { required: true, message: '请输入联系人', trigger: 'blur' }
	         ],
	         mobile: [
	            { required: true, message: '请输入手机号码', trigger: 'blur' }
	         ],
	         longitude: [
	            { required: true, message: '请输入经度', trigger: 'blur' }
	         ],
	         dimension: [
	            { required: true, message: '请输入纬度', trigger: 'blur' }
	         ],
        }
      };
    },
    props : ["editInfo", "submitClick"],
    created() {
    	this.resetForm();
    },
    methods: {
      	submitForm(formName) {
      		var _that = this;
      		_that.$refs[formName].validate((valid) => {
	          if (valid) {
	          		_that.submitClick(_that.ruleForm);
	          } else {
	           		console.log('error submit!!');
	            	return false;
	          }
	        });
      	},
      	resetForm() {
      		this.ruleForm = {
	        	areaId : "440400",
	        	deliveryName : "",
	        	address : "",
	        	contact : "",
	        	mobile : "",
	        	longitude : "",
	        	dimension : "",
	        }
	    },
      	editFormData(formData) {
      		if(!formData) return false;
      		var form = this.ruleForm;
      		form.deliveryName = formData.deliveryDealerName;
      		form.address = formData.address;
      		form.contact = formData.contact;
      		form.mobile = formData.mobile;
      		form.longitude = formData.longitude;
      		form.dimension = formData.dimension;
      		form.deliveryDealerId = formData.deliveryDealerId;
      	},
    }
  };
</script>
<style lang="less">
.dis-info{
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 120px;
	    height: 120px;
	    line-height: 120px;
	    text-align: center;
	  }
	  .avatar {
	    width: 120px;
	    height: 120px;
	    display: block;
	  }
}
	
</style>
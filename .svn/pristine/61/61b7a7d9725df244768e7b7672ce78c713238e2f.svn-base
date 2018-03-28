<!-- 编辑 -->
<template>
	<el-form ref="form" :model="form" label-width="120px">
		   <el-alert
		    title="限制数为-1时对应端注册数不限制"
		    type="error" style="width:300px;margin:0 0 20px 20px;">
		  </el-alert>
		  <slot></slot>
		  <el-form-item label="采购商限制数">
		    <el-input-number v-model="form.purchaserCount"  :min="-1" ></el-input-number>
		  </el-form-item>
		  <el-form-item label="供应商限制数">
		    <el-input-number v-model="form.supplierCount"  :min="-1" ></el-input-number>
		  </el-form-item>
		  <el-form-item label="服务站限制数">
		    <el-input-number v-model="form.agentCount"  :min="-1"></el-input-number>
		  </el-form-item>
		  <el-form-item label="配送商限制数">
		    <el-input-number v-model="form.deliveryDealerCount"  :min="-1" ></el-input-number>
		  </el-form-item>
		  <el-form-item label="驿站限制数">
		    <el-input-number v-model="form.stationCount"  :min="-1" ></el-input-number>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit">保存</el-button>
		  </el-form-item>
		</el-form>
</template>
<script>
	export default{
		data() {
			return{

			}
		},
		props : ["form"],
		methods : {
			onSubmit() {
				this.$emit("onSubmit");
			}
		}
	}
</script>
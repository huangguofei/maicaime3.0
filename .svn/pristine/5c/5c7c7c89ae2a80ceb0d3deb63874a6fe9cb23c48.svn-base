<template>
	<el-dialog :title="dialogData.title" :visible.sync="dialogData.dialogShow" size="tiny" :close-on-click-modal="false">
		<div class="">
			收货地址：
			<el-input v-model="dialogData.adress" placeholder="请输入默认收货地址"></el-input>
		</div>
		<span slot="footer" class="dialog-footer">
		    <el-button @click="dialogData.dialogShow = false">取 消</el-button>
		    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
		  </span>
	</el-dialog>
</template>

<script>
	export default {
		data() {
			return {
				address:""
			}
		},
		props: ["dialogData", "submitClick", "checkbox"],
		created() {

		},
		methods: {
			submitForm(formName) {
				var _that = this;
				_that.submitClick(_that.address);
			},
		},
		components: {
		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
</style>
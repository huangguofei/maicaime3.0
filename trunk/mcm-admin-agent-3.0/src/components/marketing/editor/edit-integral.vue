<template>
	<el-dialog :title="editDialogInfo.title" :visible.sync="editDialogInfo.showDialog">
		<el-steps :active="active" finish-status="success" space="400px">
			<el-step title="步骤 1" description="选择供应商"></el-step>
			<el-step title="步骤 2" description="选择商品"></el-step>
			<el-step title="步骤 3" description="详细信息"></el-step>
		</el-steps>
		<div class="body" style="margin: 20px 0;">
			<el-form ref="form" :model='form' label-width="80px" label-position="right" v-if="active==1">
				<el-form-item label="供应商" prop="supplierId">
					<el-radio v-for="(v,k) in supplierData" v-model="form.supplierId" :label="v.supplierId">{{v.contactName}}</el-radio>
				</el-form-item>
				<el-pagination @current-change="handleCurrentChange1" :current-page.sync="pagings1.current" :page-size="pagings1.size" layout="total, prev, pager, next" :total="pagings1.total">
				</el-pagination>
			</el-form>
			<el-form ref="form" :model='form' label-width="80px" label-position="right" v-else-if="active==2">
				<el-form-item label="商品" prop="productId">
					<el-radio v-for="(v,k) in productData" v-model="form.productId" :label="v.productSkuId">{{v.skuName}}</el-radio>
				</el-form-item>
				<!--<el-pagination @current-change="handleCurrentChange2" :current-page.sync="pagings2.current" :page-size="pagings2.size" layout="total, prev, pager, next" :total="pagings2.total">
				</el-pagination>-->
			</el-form>
			<el-form ref="form" :model='form' :rules="rules" label-width="80px" label-position="right" v-else-if="active==3">
				<el-row>
					<el-col :span="6">
						<el-form-item label="所需积分" prop="integralPrice">
							<el-input v-model="form.integralPrice"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="差价">
							<el-input v-model="form.extraPrice"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-form-item label="口号">
					<el-input v-model="form.slogan"></el-input>
				</el-form-item>
				<el-form-item label="说明">
					<el-input type="textarea" v-model="form.introduce"></el-input>
				</el-form-item>
			</el-form>
		</div>
		<el-button style="margin-top: 12px;" @click="next('top')" v-show="active!=1">上一步</el-button>
		<el-button style="margin-top: 12px;" type="success" @click="next('')" :disabled="disabled">下一步</el-button>

		<div slot="footer hide" class="dialog-footer">
			<el-button>取 消</el-button>
			<el-button type="primary">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
	import requestServer from "action/marketing/integral"
	export default {
		data() {
			return {
				active: 1,
				supplierData: [],
				productData: [],
				form: {
					productId: "",
					supplierId: "",
					integralPrice: "",
					extraPrice: "",
					slogan: "",
					introduce: "",
					orderIndex: ""
				},
				disabled: true,
				pagings1: {
					current: 1,
					size: 10,
					pages: 1,
					total: 0
				},
				pagings2: {
					current: 1,
					size: 10,
					pages: 1,
					total: 0
				},
				rules: {
					integralPrice: [{
						required: true,
						message: '请输入兑换积分',
						trigger: 'blur'
					}]
				}
			}
		},
		watch: {
			'form.supplierId' (val) {
				this.disabled = false;
			},
			'form.productId' (val) {
				this.disabled = false;
			}
		},
		created() {
			requestServer.getSupplierList(this);
		},
		props: ['editDialogInfo'],
		methods: {
			next(type) {
				if(type) {
					this.active--;
					if(this.active == 1) {
						this.disabled = false;
					}
				} else {
					if(this.active ==3) {
						requestServer.integralAdd(this);
						return false;
					}
					this.active++;
					if(this.active == 2) {
						requestServer.getProductList(this);
						if(this.form.productId)
							this.disabled = false;
						else
							this.disabled = true;
					}
				}
			},
			updata() {
				this.$emit("updataTable");
			},
			handleCurrentChange1(value) {
				this.pagings1.current = value;
				requestServer.getSupplierList(this);
			},
			handleCurrentChange2(value) {
				this.pagings2.current = value;
				//				requestServer.getProductList(this);
			},
			watchData(type, val) {
				this.active=1;
				if(type == "new") {
					this.input = "";
					this.id = "";
					this.index = "";
					this.form.productId = "";
					this.form.supplierId = "";
					this.form.integralPrice = "";
					this.form.extraPrice = "";
					this.form.slogan = "";
					this.form.introduce = "";
					return false;
				}
				this.input = val.keywordName;
				this.id = val.keywordId;
				this.index = val.orderIndex;
			}
		}
	}
</script>

<style>

</style>
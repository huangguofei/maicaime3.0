<!-- 活动列表 -->
<template>
	<page-layer :narData="narData" class="">
		<coupon :couponInfo="form"></coupon>
		<div class="edit-body pull-left">
			<div class="edit-content">
				<el-form ref="form" :model="form" :rules="rules"  label-width="100px" class="demo-ruleForm">
					<div class="item back-color">
							<h3 class="title padding">优惠券信息</h3>
							<div class="con">
								<el-form-item label="券的名称" prop="title">
									<el-input v-model="form.title" placeholder="最多支持10个汉字" :maxlength="10"></el-input>
								</el-form-item>
								<el-form-item label="券类型" prop="type">
									<el-col :span="5">
										<el-radio-group v-model="form.type">
											<el-radio class="radio" label="1">现金券</el-radio>
											<!-- <el-radio class="radio" label="2">折扣券</el-radio> -->
										</el-radio-group>
									</el-col>
									<el-col :span="5">
										<el-form-item label="面值" label-width="80px" prop="amount">
											<el-input v-model="form.amount"></el-input>
										</el-form-item>
									</el-col>
								</el-form-item>
								<el-form-item label="使用门槛" >
									<el-col :span="4">
										<el-radio-group v-model="form.preconditionType">
											<el-radio class="radio" label="1">满</el-radio>
											<el-radio class="radio" label="0">不限制</el-radio>
										</el-radio-group>
									</el-col>
									<el-col :span="5" v-show="form.preconditionType == 1">
										<el-form-item label=" " label-width="90px">
											<el-input v-model="form.preconditionAmount"></el-input>
											<span class="form-mark">可使用</span>
										</el-form-item>
									</el-col>
								</el-form-item>
							</div>
					</div>
					<div class="item back-color">
						<h3 class="title padding">优惠券基本规则</h3>
						<div class="con">
							<el-form-item label="优惠"  prop="validDay">
								<el-checkbox v-model="form.isCoexist"  label="1">与其他优惠同时享受</el-checkbox>
							</el-form-item>
							<el-form-item label="有效天数"  prop="validDay">
								<el-input-number v-model="form.validDay" :min="0"  label="描述文字"></el-input-number>
							</el-form-item>
							<el-form-item label="有效日期" >
								<el-date-picker
							      v-model="dateVal"
							      type="daterange"
							      range-separator="至"
							      start-placeholder="开始日期"
							      end-placeholder="结束日期"
							      placeholder="选择日期范围"
							      @change="changeDate">
							    </el-date-picker>
							</el-form-item>
							<el-form-item label="有效时间段" >
								<el-time-picker
								    is-range
								    arrow-control
								    v-model="timeVal"
								    range-separator="至"
								    start-placeholder="开始时间"
								    end-placeholder="结束时间"
								    placeholder="选择时间范围"
								    @change="changeTime">
								  </el-time-picker>
							</el-form-item>
							
							<el-form-item label="用途">
								<el-input type="textarea" v-model="form.purpose"></el-input>
							</el-form-item>
						</div>
					</div>

				</el-form>

			</div>
			<div class="btn">
				<el-button @click="canel">取消</el-button>
				<el-button type="primary" @click="submitForm('form')">保存</el-button>
			</div>
		</div>
	</page-layer>
</template>
<script>
	import pageLayer from "components/common/page-layer"
	import coupon from "components/marketing/coupon/coupon"
	import couponAction from "actionurl/marketing/coupon"
	export default {
		data() {
			 var pricetype = (rule, value, callback) => {
			 	var exp = /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;
		        if (!exp.test(value)) {
		          callback(new Error('请输入正确金额值'));
		        } else {
		            callback();
		        }
		      };
			return {
				narData: [{
					name: "优惠券",
					router: "marketing.coupon.index"
				}, {
					name: "发起优惠券",
					router: "marketing.coupon.new"
				}],
				isShowPage: false,
				form: {
					title: "",
					type: "1",
					preconditionType : "1",
					preconditionAmount : 0,
					amount : 0,
					purpose : "",
					validDay : 0,
					startDate : "",
					endDate : "",
					startTime : "",
					endTime : "",
					isCoexist : 0
				},
				rules: {
					title: [{
							required: true,
							message: '请输入券的名称',
							trigger: 'blur'
						},
						{
							min: 1,
							max: 10,
							message: '长度在 1 到 10个字符',
							trigger: 'blur'
						}
					],
					amount : [
						 { validator: pricetype, trigger: 'blur' }
					],
					preconditionAmount : [
						 { validator: pricetype, trigger: 'blur' }
					]
				},
				dateVal : "",
				timeVal : ""
			}
		},
		components: {
			pageLayer,
			coupon
		},
		methods: {
			submitForm(formName) {
				var _that = this;
				 this.$refs[formName].validate((valid) => {
			          if (valid) {
			            couponAction.saveCouponInfo(_that, _that.form);
			          } else {
			            console.log('error submit!!');
			            return false;
			          }
		        });
			},
			canel() {
				this.$router.push({
					name : "marketing.coupon.index"
				});
			},
			changeDate(val) {
				var form = this.form;
				if(val) {
					var splits = val.split("至");
					if(splits.length >= 2) {
						form.startDate = splits[0],
						form.endDate = splits[1];
					}
				} else {
					form.startDate = "";
					form.endDate = "";
				}
				
			},
			changeTime(val) {
				var form = this.form;
				if(val) {
					var splits = val.split("至");
					if(splits.length >= 2) {
						form.startTime = splits[0],
						form.endTime = splits[1];
					}
				} else {
					form.startTime = "";
					form.endTime = "";
				}
				
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.line {
		text-align: center;
	}
	
	.block {
		margin-bottom: 10px;
	}
	
	.unit {
		position: relative;
		left: -30px;
		font-size: 16px;
		color: #737373;
	}
	
	.form-mark {
		position: relative;
		top: -35px;
		right: -100px;
	}
	
	.edit-body {
		width: calc(~"100% - 700px");
		margin-left: 20px;
		.edit-content {
			border: 1px solid #DFDFDF;
			background:#FFF;
			.item {
				.con{
					padding:20px;
				}
				h3 {
					font-size: 18px;
					height: 48px;
					background: #F4F4F4;
					box-sizing: border-box;
				}
				.price {
					position: relative;
					top: -35px;
					right: -180px;
				}
				.add-group {
					padding-bottom: 20px;
					text-align: center;
					a {
						display: inline-block;
						margin-left: -6%;
						width: 220px;
						border: 1px solid @color-main;
						line-height: 36px;
						height: 36px;
						color: @color-main;
					}
				}
				.el-date-editor--daterange.el-input,
				.el-input-number,
				.el-date-editor.el-input{
					width:300px;
				}
			}
			.kind {
				.clearfix();
				span {
					float: left;
					width: 70px;
					height: 28px;
					line-height: 28px;
					text-align: center;
					font-size: 14px;
					margin-right: 10px;
				}
				.item {
					color: #343434;
					border: 1px solid #DFDFDF;
					position: relative;
					a {
						position: absolute;
						width: 20px;
						height: 20px;
						right: -10px;
						top: -10px;
						background: #FABC05;
						border: 1px solid #F98A0C;
						border-radius: 10px;
						text-align: center;
						img {
							width: 50%;
							margin-bottom: 20%;
						}
					}
				}
				.add-item {
					color: #2CBB59;
					border: 1px dashed #2CBB59;
					background: #F0FFF8;
				}
			}
		}
		.btn {
			margin-top: 20px;
			text-align: center;
		}
	}
</style>
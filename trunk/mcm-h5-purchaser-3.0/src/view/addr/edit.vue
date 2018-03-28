<!-- 新增地址 -->
<template>
	<div class="addr-edit">
		<div class="con">
			<div class="item">
				<span class="title">收货姓名：</span>
				<input type="text" class="f-control" v-model="form.userName" placeholder="请输入收货姓名" />
			</div>
			<div class="item">
				<span class="title">联系方式：</span>
				<input type="tel" class="f-control" maxlength="11" v-model="form.mobile" placeholder="请输入联系方式" />
			</div>
			<div class="item">
				<span class="title">所在地区：</span>
				<span>{{areaInfo.provinceName}}{{areaInfo.cityName}}{{areaInfo.areaName}}</span>
			</div>
			<div class="item">
				<span class="title">详细地址：</span>
				<input type="text" class="f-control" v-model="form.address" placeholder="请输入详细地址" />
			</div>
		</div>
		<div class="footer">
			<div class="wrap">
				<button class="btn btn-save" @click="saveAddr">保存</button>
			</div>
			
		</div>
	</div>
</template>
<script >
import addrAction from "actionurl/addr/addr"
export default{
	data() {
		return{
			form : {
				userName : "",
				mobile : "",
				address : "",
			},
			areaInfo : {}
		}
	},
	created() {
		addrAction.getAddreeArea(this);
		var addrId = this.$route.query.addrId;
		if(addrId) {
			addrAction.getAddrDatail(this, addrId);
		}
	},
	methods : {
		saveAddr() {
			var form = this.form;
			if(form.userName == "") {
				cJs.message("收货姓名不能为空!");
				return false;
			} else if(form.mobile == "") {
				cJs.message("联系方式不能为空!");
				return false;
			} else if(!cJs.checkMobile(form.mobile)) {
				cJs.message("手机号格式不正确！");
				return false;
			} else if(form.address == "") {
				cJs.message("详细地址不能为空！");
				return false;
			} else {
				addrAction.saveAddrInfo(this)
			}
		}
	}
}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.addr-edit{
		.con{
			background: #FFF;
			.prem(20);
			padding:@prem;
			.item{
				border-bottom:1px solid #EEEEEE;
				.pxrem(height, 90);
				.pxrem(line-height, 90);
				.f-control{
					.pxrem(height, 45);
					.pxrem(width, 500);
					.pxrem(font-size,28);
					border:0;
				}
			}
		}
		.footer{
			position: absolute;
			bottom:0;
			width:100%;
			.wrap{
				.prem(20);
				padding:@prem;
				.btn-save{
					width:100%;
					.pxrem(height, 97);
					.pxrem(line-height, 97);
					.pxrem(font-size, 36);
				}
			}
		}
	}
</style>
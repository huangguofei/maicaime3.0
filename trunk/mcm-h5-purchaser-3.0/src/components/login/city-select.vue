<template>
	<section class="showChose" v-show="isShow">
		<section class="address">
			<section class="title">
				<h4>居住地址</h4>
				<span @click="closeAdd()">×</span>
			</section>
			<section class="title select-title" v-if="info[0]">
				<div class="area" @click="provinceSelected()">{{Province?Province:info[province-1].areaName}}</div>
				<div class="area" @click="citySelected()" :class="City?'':'active'">{{City?City:'请选择'}}</div>
				<div class="area" @click="districtSelected()" :class="District?'':'active'" v-show="City">{{District?District:'请选择'}}</div>
			</section>
			<ul>
				<li class="addList" v-for="(v,k) in info" @click="getProvinceId(v.areaId, v.areaName, k)" v-show="showProvince" :class="v.selected ? 'active' : ''">{{v.areaName}}</li>
				<li class="addList" v-for="(v,k) in showCityList" @click="getCityId(v.areaId, v.areaName, k)" v-show="showCity" :class="v.selected ? 'active' : ''">{{v.areaName}}</li>
				<li class="addList" v-for="(v,k) in showDistrictList" @click="getDistrictId(v.areaId, v.areaName, k)" v-show="showDistrict" :class="v.selected ? 'active' : ''">{{v.areaName}}</li>
			</ul>
		</section>
	</section>
</template>
<script>
	import cityData from 'actionurl/login/login'
	export default {
		data() {
			return {
				info: [],
				isShow: false,
				showProvince: true,
				showCity: false,
				showDistrict: false,
				showCityList: false,
				showDistrictList: false,
				province: 1,
				city: 3,
				district: 57,
				GetProvinceId: 2,
				District: false,
				Province: false,
				City: false,
				// v-for循环判断是否为当前
				selected: false,
				selectData: {

				},
			}
		},
		props: ['locationData'],
		created() {
			cityData.getCityData(this);
		},
		methods: {
			choseAdd: function() {
				this.isShow = true;
			},
			closeAdd: function() {
				this.isShow = false;
			},
			_filter(add, name, code) {
				let result = [];
				for(let i = 0; i < add.length; i++) {
					if(code == add[i].areaId) {
						result = add[i][name];
					}
				}
				return result;
			},
			getProvinceId: function(code, input, index) {
				this.province = code;
				this.Province = input;
				this.selectData.provinceId = code;
				this.selectData.provinceName = input;

				this.showProvince = false;
				this.showCity = true;
				this.showDistrict = false;
				this.showCityList = this._filter(this.info, 'subAreas', this.province);
				// 点击选择当前
				this.info.map(a => a.selected = false);
				this.info[index].selected = true;
			},
			provinceSelected: function() {
				// 清除市级和区级列表
				this.showCityList = false;
				this.showDistrictList = false;
				// 清除市级和区级选项
				this.City = false;
				this.District = false;
				// 选项页面的切换
				this.showProvince = true;
				this.showCity = false;
				this.showDistrict = false;
			},
			getCityId: function(code, input, index) {
				this.city = code;
				this.City = input;
				this.selectData.cityId = code;
				this.selectData.cityName = input;
				this.showProvince = false;
				this.showCity = false;
				this.showDistrict = true;
				this.showDistrictList = this._filter(this.showCityList, 'subAreas', this.city);
				// 选择当前添加active
				this.showCityList.map(a => a.selected = false);
				this.showCityList[index].selected = true;
			},
			citySelected: function() {
				this.showProvince = false;
				this.showCity = true;
				this.showDistrict = false;
			},
			getDistrictId: function(code, input, index) {
				this.district = code;
				this.District = input;
				this.selectData.countyId = code;
				this.selectData.countyName = input;
				// 选择当前添加active
				this.showDistrictList.map(a => a.selected = false);
				this.showDistrictList[index].selected = true;
				// 选取市区选项之后关闭弹层
				this.isShow = false;
				this.$emit('citySelect',this.selectData);
			},
			districtSelected: function() {
				this.showProvince = false;
				this.showCity = false;
				this.showDistrict = true;
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.myAddress {
		width: 100%;
		background-color: white;
		border-top: 4px solid rgba(245, 245, 245, 1);
		color: #333;
	}
	
	.myAddress .cont {
		border-bottom: 1px solid rgba(245, 245, 245, 0.8);
	}
	
	.myAddress .cont span {
		display: inline-block;
		font-size: 0.28rem;
		color: #333;
		line-height: 0.88rem;
		margin-left: 0.32rem;
	}
	
	.myAddress .cont section {
		float: left;
	}
	
	.myAddress .cont p {
		display: inline-block;
		font-size: 0.28rem;
		color: #333333;
		line-height: 0.88rem;
		margin-left: 1rem;
	}
	
	.myAddress .cont .pic2 {
		float: right;
		width: 0.14rem;
		height: 0.24rem;
		margin: 0.32rem 0.32rem 0.32rem 0;
	}
	
	.myAddress .cont p.text {
		margin-left: 0.72rem;
	}
	
	.showChose {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 120;
		background: rgba(77, 82, 113, 0.8);
	}
	
	.address {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 121;
		background: #fff;
		width: 100%;
	}
	
	.title {
		position: relative;
	}
	
	.select-title {
		text-align: left;
	}
	
	.title h4 {
		text-align: center;
		font-size: 0.3rem;
		line-height: 0.88rem;
		font-weight: normal;
		color: #999;
	}
	
	.title span {
		font-size: 0.45rem;
		line-height: 0.34rem;
		color: #D8D8D8;
		position: absolute;
		top: .2rem;
		right: .5rem;
	}
	
	.area {
		display: inline-block;
		font-size: 0.24rem;
		line-height: 0.88rem;
		margin-left: 0.42rem;
		color: #333;
	}
	
	.addList {
		width: 100%;
		/*padding-left: 0.32rem;*/
		font-size: 0.25rem;
		line-height: 0.5rem;
		color: #333;
	}
	/* 修改的格式 */
	
	.address ul {
		width: 95%;
		height: 100%;
		max-height: 4.4rem;
		overflow: auto;
		text-align: left;
	}
	
	.address ul li {
		padding-left: 5%;
		box-sizing: border-box;
	}
	
	.address .title .active {
		color: #0071B8;
		border-bottom: 0.02rem solid #0071B8;
	}
	
	.address ul .active {
		color: #0071B8;
	}
</style>
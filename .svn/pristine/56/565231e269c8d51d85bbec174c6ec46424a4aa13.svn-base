/**
 * author pzh
 * day    2017-9-28
 * 食材业务
 */
import {foodAPI} from "apiurl/food"
 export default{
 	/*获取食材分类*/
 	getCategoryList(vm) {
        var _that = this;
        foodAPI.categoryAPI((result) => {
            if(result[0]) {
                 var categoryId = result[0].categoryId;
                 var params = {categoryId : categoryId};
                _that.getProdList(vm,params);
                vm.$store.commit("writeCategoryList", {data : result});
                vm.categoryData = result;
                if(vm.$route.query.skuId && vm.detailInfo.productSkuId) {
                    _that.categorySelect(vm);
                }
            }
        });
 	},
    /*获取商品列表*/
    getProdList(vm, params, callback) {
         foodAPI.categoryProdAPI(params, (result) => {
             vm.load = false;
            if(result && result.length > 0) {
                result.forEach((prods) => {
                    prods.delItem = false;
                    prods.supplierProductItemBOList.forEach((item) => {
                        item.active = false;
                    });
                });
                vm.prodData = result;
                if(vm.pattern == 1) {
                    vm.$refs.prodList ? vm.$refs.prodList.calculateItemHeight() : null;
                } else {
                    vm.$refs.prodListPic ? vm.$refs.prodListPic.calculateItemHeight() : null;
                }   
            }
             callback ? callback() : null; 
            
        },() => {
            vm.load = false;
        });
    },
    /*保存食材信息*/
    saveProductInfo(vm) {
        foodAPI.addProductAPI(vm.form, (result) => {
            cJs.message("提交成功");
            vm.$router.push({
                name : "food.index"
            });
        });
    },
    /*修改商品信息*/
    editProdInfo(vm) {
        foodAPI.editorProdAPI(vm.form, (result) => {
            cJs.message("编辑成功");
            vm.$router.push({
                name : "food.index"
            });
        });
    },
    /*修改商品报价*/
    editorProductPrice(vm, params) {
        foodAPI.offerProductAPI(params, (result) => {});
    },
    /*商品素材搜索*/
    searchProdInfo(vm, params) {
        foodAPI.suggestAPI(params, (result) => {
            try{
                var jsonData = JSON.parse(result);
                if(jsonData.status == "OK") {
                    var items = jsonData.result.items;
                    var len = items.length;
                    if(len > 0) {
                        vm.searchProds = items;
                        vm.searchShow = true;
                    } else {
                        vm.searchShow = false;
                    }
                } else {
                    vm.searchShow = false;
                }
            }catch(e) {
                vm.searchProds = [];
                vm.searchShow = false;
            }
        });
    },
    /*更新商品状态*/
    updateProdStatus(vm, productSkuIds, status, callback) {
        var params = {
            productSkuId : productSkuIds,
            skuStatusId : status
        }
        foodAPI.prodStatusAPI(params, (result) => {
            if(status == 0) {
                cJs.message("下架成功");
            } else if(status == 1) {
                cJs.message("上架成功");
            } else if(status == -1) {
               cJs.message("删除成功");
            }
            callback ? callback() : null;
        });
    },
    /*获取商品信息*/
    getProdInfoById(vm) {
        var params = {
            productSkuId : vm.$route.query.skuId
        }, _that = this;
        foodAPI.prodByIdAPI(params, (result) => {
            vm.detailInfo = result;
            var form = vm.form;
            form.skuName = result.skuName;
            form.skuImage = result.skuImage;
            form.skuPrice = result.skuPrice;
            form.skuUnit = result.skuUnit;
            form.productSkuId = result.productSkuId;
            if(vm.categoryData.length > 0) {
                _that.categorySelect(vm);
            }
        });
    },
    /*初始化食材分类选中*/
    categorySelect(vm) {
        vm.$nextTick(function() {
            var cId = vm.detailInfo.parentCategoryId;
            var len = vm.categoryData.length;
            for(var i = 0; i < len; i++) {
                if(vm.categoryData[i].categoryId == cId) {
                    vm.parentKey = i.toString();
                    break;
                }
            }
            vm.categoryUpdate();
            vm.form.categoryId = vm.detailInfo.categoryId;
        });
    }
 }

<!-- 特色专区 -->
<template>
	<div class="feature-pre">
		<section class="fea-1" v-if="featureData.scheme == 1">
			<div class="num" @click="jumpHref(0)">
				<img :src="feaData[0].picture">
			</div>
		</section>
		<section class="fea-2" v-if="featureData.scheme == 2">
			<div class="left">
				<div class="num"  @click="jumpHref(0)">
					<img :src="feaData[0].picture">
				</div>
			</div>
			<div class="right">
				<div class="num" @click="jumpHref(1)">
					<img :src="feaData[1].picture">
				</div>
			</div>
		</section>
		<section class="fea-3" v-if="featureData.scheme == 3">
			<div class="left">
				<div class="num" @click="jumpHref(0)">
					<img :src="feaData[0].picture">
				</div>
			</div>
			<div class="right">
				<div class="top">
					<div class="num" @click="jumpHref(1)">
						<img :src="feaData[1].picture">
					</div>
				</div>
				<div class="bottom">
					<div class="num" @click="jumpHref(2)">
						<img :src="feaData[2].picture">
					</div>
				</div>
			</div>
		</section>
		<section class="fea-4" v-if="featureData.scheme == 4">
			<div class="left">
				<div class="top">
					<div class="num" @click="jumpHref(0)">
						<img :src="feaData[0].picture">
					</div>
				</div>
				<div class="bottom">
					<div class="num" @click="jumpHref(1)">
						<img :src="feaData[1].picture">
					</div>
				</div>
			</div>
			<div class="right">
				<div class="top">
					<div class="num" @click="jumpHref(2)">
						<img :src="feaData[2].picture">
					</div>
				</div>
				<div class="bottom">
					<div class="num" @click="jumpHref(3)">
						<img :src="feaData[3].picture">
					</div>
				</div>
			</div>
		</section>
		<section class="fea-5" v-if="featureData.scheme == 5">
			<div class="left">
				<div class="top">
					<div class="num" @click="jumpHref(0)">
						<img :src="feaData[0].picture">
					</div>
				</div>
				<div class="bottom">
					<div class="num" @click="jumpHref(1)">
						<img :src="feaData[1].picture">
					</div>
				</div>
			</div>
			<div class="right">
				<div class="top">
					<div class="num" @click="jumpHref(2)">
						<img :src="feaData[2].picture">
					</div>
				</div>
				<div class="middle">
					<div class="num" @click="jumpHref(3)">
						<img :src="feaData[3].picture">
					</div>
				</div>
				<div class="bottom">
					<div class="num" @click="jumpHref(4)">
						<img :src="feaData[4].picture">
					</div>
				</div>
			</div>
		</section>
		<section class="fea-6" v-if="featureData.scheme == 6">
			<div class="left">
				<div class="top">
					<div class="num" @click="jumpHref(0)">
						<img :src="feaData[0].picture">
					</div>
				</div>
				<div class="middle">
					<div class="num" @click="jumpHref(2)">
						<img :src="feaData[2].picture">
					</div>
				</div>
				<div class="bottom">
					<div class="num" @click="jumpHref(4)">
						<img :src="feaData[4].picture">
					</div>
				</div>
			</div>
			<div class="right">
				<div class="top">
					<div class="num" @click="jumpHref(1)">
						<img :src="feaData[1].picture">
					</div>
				</div>
				<div class="middle">
					<div class="num" @click="jumpHref(3)">
						<img :src="feaData[3].picture">
					</div>
				</div>
				<div class="bottom">
					<div class="num" @click="jumpHref(5)">
						<img :src="feaData[5].picture">
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script >
	export default{
		props : ["featureData"],
		computed : {
			feaData : function() {
				return this.featureData.data;
			}
		},
		mounted() {
		},
		methods : {
			jumpHref(index) {
				var feaData = this.feaData[index], router = {};
				if(feaData) {
					if(feaData.action.featureTypeId == 300) {
						router = {
							name : "index.integral"
						}
					} else if(feaData.action.featureTypeId == 400  || feaData.action.featureTypeId == "") {
						window.location.href = "/remaining/"
					} else {
						router = {
							name : "index.prompt",
							params : {
								refId : feaData.action.refId
							}
						}
					}
					this.$router.push(router);
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.feature-pre{
		.h{
			.pxrem(height,455);
		}
		section{
			.prem(20);
			padding:@prem;
			.h;
			.num{
				height:100%;
				overflow: hidden;
			}
			.left{
				display: inline-block;
				width:50%;
				float:left;
				.prem(2);
				margin-left:-@prem;
			}
			.right{
				width:50%;
				float:right;
				display: inline-block;
				.prem(2);
				margin-right:-@prem;
				
			}
			img{
				height:100%;
				width:100%;
			}
		}
		section:after{
			.clearFloat;
		}
		.fea-2{
			.left,.right{
				.h;
			}
		}
		.fea-3,.fea-4{
			.top{
				.pxrem(height,220);
			}
			.bottom{
				.pxrem(height,221);
				.prem(5);
				margin-top:@prem;
			}
		}
		.fea-3{
			.left{
				.num{
					.h;
				}
			}
		}
		.middle{
			.top,.middle,.bottom{
					.pxrem(height,142);
				}
				.middle,.bottom{
					.pxrem(margin-top,10);
				}
		}
		.fea-5{
			.h;
			.left{
				.top{
					.pxrem(height,304);
				}
				.bottom{
					.pxrem(margin-top,10);
					.pxrem(height,142);
				}
			}
			.right{
				.middle;
			}
		}
		.fea-6{
			.middle;
		}
	}
</style>
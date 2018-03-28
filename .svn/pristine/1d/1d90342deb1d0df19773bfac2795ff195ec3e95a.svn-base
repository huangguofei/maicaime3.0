<!-- 特色专区 -->
<template>
	<div class="editor-feature" v-if="featureData.data.length > 0">
		<header>
			<span>特色专区</span>
		</header>
    <div class="con con-1" v-if="featureData.scheme == 1">
        <div class="num">
          <img :src="featureData.data[0].picture" v-if="featureData.data[0].picture" />
          <span v-else>1</span>
        </div>
    </div>
     <div class="con con-2" v-if="featureData.scheme == 2">
        <div class="num left">
            <img :src="featureData.data[0].picture" v-if="featureData.data[0].picture" />
            <span v-else>1</span>
        </div>
        <div class="num right">
            <img :src="featureData.data[1].picture" v-if="featureData.data[1].picture" />
            <span v-else>2</span>
        </div>
    </div>
		<div class="con con-3" v-if="featureData.scheme == 3">
			<div class="left">
        <div class="num">
          <img :src="featureData.data[0].picture" v-if="featureData.data[0].picture" />
          <span v-else>1</span>
        </div>
			</div>
			<div class="right">
				 <div class="num">
            <img :src="featureData.data[1].picture" v-if="featureData.data[1].picture" />
            <span v-else>2</span>
         </div>
          <div class="num">
              <img :src="featureData.data[2].picture" v-if="featureData.data[2].picture" />
              <span v-else>3</span>
          </div>
			</div>
		</div>
     <div class="con con-4" v-if="featureData.scheme == 4">
        <div class="top">
            <div class="num left">
                <img :src="featureData.data[0].picture" v-if="featureData.data[0].picture" />
                <span v-else>1</span>
            </div>
            <div class="num right">
                <img :src="featureData.data[1].picture" v-if="featureData.data[1].picture" />
                <span v-else>2</span>
            </div>
        </div>
        <div class="bottom">
             <div class="num left">
                   <img :src="featureData.data[2].picture" v-if="featureData.data[2].picture" />
                  <span v-else>3</span>
             </div>
             <div class="num right">
                <img :src="featureData.data[3].picture" v-if="featureData.data[3].picture" />
                  <span v-else>4</span>
             </div>
        </div>
    </div>
     <div class="con con-5" v-if="featureData.scheme == 5">
        <div class="left">
            <div class="num">
                <img :src="featureData.data[0].picture" v-if="featureData.data[0].picture" />
                <span v-else>1</span>
            </div>
            <div class="num">
                <img :src="featureData.data[3].picture" v-if="featureData.data[3].picture" />
                  <span v-else>4</span>
            </div>
        </div>
        <div class="right">
            <div class="num ">
                <img :src="featureData.data[1].picture" v-if="featureData.data[1].picture" />
               <span v-else>2</span>
            </div>
             <div class="num ">
                   <img :src="featureData.data[2].picture" v-if="featureData.data[2].picture" />
                   <span v-else>3</span>
             </div>
             <div class="num ">
                <img :src="featureData.data[4].picture" v-if="featureData.data[4].picture" />
                  <span v-else>5</span>
             </div>
        </div>
    </div>
     <div class="con con-6" v-if="featureData.scheme == 6">
        <div class="left">
            <div class="num">
                <img :src="featureData.data[0].picture" v-if="featureData.data[0].picture" />
                <span v-else>1</span>
            </div>
            <div class="num">
                   <img :src="featureData.data[2].picture" v-if="featureData.data[2].picture" />
                   <span v-else>3</span>
            </div>
             <div class="num">
                  <img :src="featureData.data[4].picture" v-if="featureData.data[4].picture" />
                  <span v-else>5</span>
             </div>
        </div>
        <div class="right">
            <div class="num">
                  <img :src="featureData.data[1].picture" v-if="featureData.data[1].picture" />
                  <span v-else>2</span>
            </div>
             <div class="num">
                   <img :src="featureData.data[3].picture" v-if="featureData.data[3].picture" />
                  <span v-else>4</span>
              </div>
             <div class="num">
                 <img :src="featureData.data[5].picture" v-if="featureData.data[5].picture" />
                  <span v-else>6</span>
             </div>
        </div>
    </div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
    computed : {
      ...mapGetters({
          "featureData" : "featureInfo",
      })
    },
}
</script>
<style lang="less" scoped>
	@import "../../../../common/less/config.less";
  .editor-feature{
  		margin-top:10px;
  		background: #FFF;
  		header{
  			height:46px;
  			line-height:46px;
  			font-size:@size-title;
  			text-align: center;
  		}
  		.con{
  			height:220px;
  			padding:0 10px 20px 10px;
        .num{
            text-align: center;
            font-size:36px;
            color:#fff;
            background: #ECEDEF;
            overflow: hidden;
            img{
              width:100%;
              height:100%;
            }
        }
  			.left{
  				float:left;
  			}
  			.right{
  				float:right;
  			}

  			.c-l{
  				width:49%;
  				height:100%;
  				img{
  					width:100%;
  					height:100%;
  				}
  				.top,.bottom{
  					height:48%;
  				}
  				.bottom{
  					margin-top:4%;
  				}
  			}
  		}
      .con-1,.con-2{
          .num{
            line-height:220px;
          }
      }
      .con-2{
          .num{
            width:48%;
          }
      }
      .con-3{
          .left,.right{
            height: 100%;
            width:48%;
          }
          .left{
            .num{
              height:100%;
              line-height:220px;
            }
          }
          .right{
            .num{
              height:48%;
              line-height: 110px;
              &:last-child{
                  margin-top:5%;
              }
            }
          }
      }
      .con-4{
          .top,.bottom{
            height:48%;
          }
          .num{
            height:100%;
            width:48%;
            line-height: 110px;
          }
          .bottom{
            margin-top:4%;
          }
      }
      .num3{
           width:100%;
            height:32%;
            line-height: 70px;
            &:nth-child(2),
            &:last-child{
              margin-top:4%;
            }
      }
      .con-5{
        .num{
          width:100%;
        }
        .left,.right{
          width:48%;
          height: 100%;
        }
        
        .left{
            .num{
              &:first-child{
                height:67%;
                line-height: 160px;
              }
              &:last-child{
                height:32%;
                margin-top:4%;
                line-height: 60px;
              }
            }
        }
        .right{
          .num{
            .num3;
          }
        }
      }
      .con-6{
        .left,.right{
          width:48%;
          height: 100%;
        }
        .num{
          .num3;
        }
      }
  }
  
</style>
<template>
  <div>
    <NaviBar />
    <template>
      <div id="IndexPage">
        <div class="block">
          <el-carousel class="radiusBorderNShadow" height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <el-divider></el-divider>
      <IndexVideoRow v-for="cpMsgs in cpVideoMsgList" :key="cpMsgs[0].name" v-bind:videoMsgs="cpMsgs"/>
    </template>
  </div>
</template>

<script>
  import NaviBar from '@/components/NaviBar'
  import IndexVideoRow from '@/components/IndexVideoRow'  

  export default {
    name: 'IndexPage',
    components: {
      NaviBar,
      IndexVideoRow,
    },
    data() {
      return {
        // 提供数组
        cpVideoMsgList: [
          [
            {
              name: "name1",
              subArea: "sb1",
              url: "//i0.hdslb.com/bfs/videoshot/102253655.jpg@.jpg"
            },
            {
              name: "name2",
              subArea: "sb2",
              url: "//i0.hdslb.com/bfs/videoshot/102253655.jpg@.jpg"
            }
          ]
        ],
      }
    }
  }

</script>

<style scoped>
  #IndexPage {
    margin-top: 70px;
    left: 0;
    width: 100%;
  }

  .radiusBorderNShadow {
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>

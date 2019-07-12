<template>
  
  <el-row style="margin-bottom: 10px">
    <!-- 取消防盗链，拒绝检测访问图片的referrer -->
    <meta name="referrer" content="no-referrer" />
    <el-col :span="11" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <!-- 封面 -->
        <img v-bind:src="videoMsgs[index].pic" class="image">
        <div style="padding: 14px;">
          <!-- 标题 -->
          <div class="videoTitle">{{videoMsgs[index].title}}</div>
          <div class="bottom clearfix">
            <!-- 作者（没有分区） -->
            <span class="author">{{videoMsgs[index].author}}</span>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>

</template>


<style>
  .videoTitle {
    height: 45px;
    overflow: scroll;
  }

  .author {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>

<script>
  export default {
    data() {
      return {
      };
    },
    props:['videoMsgs'],
  }

</script>

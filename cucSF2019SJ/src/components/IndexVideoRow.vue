<template>
  <el-row :gutter="10" style="margin-bottom: 10px">
    <!-- 取消防盗链，拒绝检测访问图片的referrer -->
    <meta name="referrer" content="no-referrer" />

    <el-col :span="12" v-for="(o, index) in 2" :key="o">
      <el-card :body-style="{ padding: '0px' }">
        <!-- 封面 -->
        <img v-bind:src="videoMsgs[index].pic" class="image">
        <div style="padding: 10px;">
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
    height: 36px;
    font-size: smaller;
    overflow: hidden;
  }

  .author {
    font-size: 12px;
    color: #999;
  }

  .bottom {
    margin-top: 5px;
    line-height: 12px;
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

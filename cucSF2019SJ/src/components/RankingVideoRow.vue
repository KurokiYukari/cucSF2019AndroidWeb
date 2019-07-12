<template>
  <div style="margin-bottom: 10px;">
    <!-- 取消防盗链，拒绝检测访问图片的referrer -->
    <meta name="referrer" content="no-referrer" />

    <el-card :body-style="{ padding: '0px' }" style="padding:7px; height:80px">
          <el-col :span="1" class="rank">{{index}}</el-col>
        <!-- 封面 -->
        <el-col :span="9" :offset="1">
          <img v-bind:src="videoMsg.pic" class="image">
        </el-col>
        <el-col :span="12" :offset="1">
          <!-- 标题 -->
          <div class="videoTitle" style="margin-top:3px">{{videoMsg.title}}</div>
          <div class="bottom clearfix">
            <el-row :gutter="10" style="margin-bottom:7px">
                <el-col :span="12" class="el-icon-view author">{{videoMsg.play}}</el-col>
                <el-col :span="12" class="el-icon-star-on author">{{videoMsg.video_review}}</el-col>
            </el-row>
            <el-row>
                <el-col class="el-icon-user-solid author">{{videoMsg.author}}</el-col>
            </el-row>
          </div>
        </el-col>
    </el-card>
  </div>
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

  .rank {
    text-align: center;
    font-size: 1em;
    color: #999;
    line-height: 80px
  }

  .bottom {
    margin-top: 5px;
    line-height: 14px;
  }

  .image {
    width: 100%;
    display: block;
  }

</style>

<script>
  export default {
    data() {
      return {};
    },
    props: [
      'videoMsg',
      'index'
    ],
  }

</script>

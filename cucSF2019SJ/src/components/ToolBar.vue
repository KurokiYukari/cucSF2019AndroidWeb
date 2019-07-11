<template>
  <el-button-group id="ToolBar" class="el-row">
    <el-button v-bind:plain="isHomePlain" @click.native="clickHome()" ref="Home" type="danger" icon="el-icon-house"
      class="el-col-8">首页</el-button>
    <el-button v-bind:plain="isRankingPlain" @click.native="clickRanking()" ref="Ranking" type="danger"
      icon="el-icon-medal-1" class="el-col-8">排行榜</el-button>
    <el-button v-bind:plain="isUserPlain" @click.native="clickUser()" ref="User" :span="8" type="danger" icon="el-icon-user" class="el-col-8">我的
    </el-button>
  </el-button-group>
</template>
<script>
  export default {
    name: "ToolBar",
    data() {
      return {
        isHomePlain: false,
        isRankingPlain: true,
        isUserPlain: true,
      };
    },
    methods: {
      clickHome: function () {
        this.$router.push({path:'/'})
        this.isHomePlain = false;
        this.isRankingPlain = true;
        this.isUserPlain = true;
      },
      clickRanking: function () {
        this.$router.push({path:'/DailyRanking'})
        this.isHomePlain = true;
        this.isRankingPlain = false;
        this.isUserPlain = true;
      },
      clickUser: function () {
        this.$router.push({path:'/UserProfiles'})
        this.isHomePlain = true;
        this.isRankingPlain = true;
        this.isUserPlain = false;
      },
    }

  };

</script>

<style scoped>
  #ToolBar {
    position: fixed;
    bottom: 0px;
    left: 1px;
    width: 100%;
    line-height: 100%;
    z-index: 9999;
  }

</style>

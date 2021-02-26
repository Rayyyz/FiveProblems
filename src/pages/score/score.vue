<template>
  <div class="score-page">
    <div class="score-container">
      <span class="score">{{ score }}分！</span>
      <div class="score-msg">{{ scoreMsg }}</div>
    </div>
    <div class="btn-style btn-share" @click="showPop"></div>
    <div class="share-box">
      <img src="../../assets/images/二维码1.png" alt="" />
    </div>
    <div class="share-pop" v-show="showHide" @click="showPop">
      <img src="../../assets/images/分享文字.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "score",
  data() {
    return {
      showHide: false, //是否显示提示
      score: 0, //分数
      scoreMsg: "", //对应分数的信息
      rightAnswer: [1, 6, 9, 16, 19], //正确答案
      scoreMsgArray: [
        "你的分数已超过0.00%的用户！",
        "你说，是不是把知识都还给小学老师了?",
        "错得有点多，还需要继续加油哦！",
        "加油哦！还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，奖励一朵小红花~✿",
      ],
    };
  },
  computed: mapState(["answerid"]),
  created() {
    this.computedScore();
    this.getScoreMsg();
    var urlPath = require("../../assets/images/背景分数.jpg");
    document.body.style.backgroundImage = "url(" + urlPath + ")";
  },
  methods: {
    //计算总分
    computedScore() {
      this.answerid.forEach((item, index) => {
        if (item == this.rightAnswer[index]) {
          this.score += 20;
        }
      });
    },
    //显示分享
    showPop() {
      this.showHide = !this.showHide;
    },
    //根据分数显示提示
    getScoreMsg() {
      let index = Math.ceil(this.score / 20);
      this.scoreMsg = this.scoreMsgArray[index];
    },
  },
};
</script>

<style scoped>
.score-container {
  width: 10rem;
  height: 10rem;
  background-image: url("../../assets/images/成绩栏.png");
  background-size: 100% 100%;
  margin: 2rem auto 0;
  position: relative;
}

.score-container .score {
  position: absolute;
  width: 100%;
  text-indent: 3.3rem;
  top: 4.7rem;
  font-size: 1.4rem;
  font-weight: 900;
  font-family: "Microsoft YaHei";
  font-family: Tahoma, Helvetica, Arial;
  color: #a51d31;
}

.score-container .score-msg {
  position: absolute;
  top: 7rem;
  width: 9rem;
  left: 0.8rem;
  color: #3e2415;
  font-size: 0.8rem;
  text-align: center;
}

.btn-share {
  width: 6rem;
  height: 2.5rem;
  margin: 0.8rem auto 0;
  background-image: url("../../assets/images/btn分享.png");
  background-size: 100% 100%;
}

.share-box {
  width: 5.3rem;
  margin: 1.5rem auto 0;
}

.share-pop {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url("../../assets/images/背景黑.png") no-repeat;
  background-size: 100% 100%;
  opacity: 0.92;
}

.share-pop img {
  height: 10.975rem;
  width: 11.95rem;
  position: fixed;
  top: 2rem;
  left: 50%;
  margin-left: -5.975rem;
}

.share-box img {
  height: 5rem;
  width: 5rem;
  margin-top: 2rem;
}
</style>
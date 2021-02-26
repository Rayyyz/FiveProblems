<template>
  <section>
    <!--头部：标题/题号-->
    <header class="top">
      <div class="top-title" v-if="fathercomponent == 'home'">{{ title }}</div>
      <div class="top-num" v-if="fathercomponent == 'item'">
        题目{{ itemIndex }}
      </div>
    </header>
    <!--内容部分：首页/答题内容-->
    <div class="content">
      <div class="content-home" v-if="fathercomponent == 'home'">
        <div class="home-logo">
          <img src="../assets/images/首页文字.png" alt="" />
        </div>
        <router-link to="item" class="btn-style btn-start"></router-link>
      </div>
      <!--题目部分-->
      <div class="content-item" v-if="fathercomponent == 'item'">
        <div class="item-title">
          {{ itemDetail[itemIndex - 1].item_name }}
        </div>
        <ul class="item-list">
          <li
            v-for="(item, index) in itemDetail[itemIndex - 1].item_answer"
            :key="index"
            @click="choosed(index, item.answer_id)"
          >
            <span
              class="option-style"
              v-bind:class="{ choosed: choosedIndex == index }"
              >{{ chooseType(index) }}</span
            >
            <span class="option_detail">{{ item.answer_text }}</span>
          </li>
        </ul>
        <div
          class="btn-style btn-next"
          @click="nextItem"
          v-if="itemIndex < itemDetail.length"
        ></div>
        <div class="btn-style btn-submit" @click="submitAnswer" v-else></div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "itemContainer",
  data() {
    return {
      itemId: null, //题目id
      choosedIndex: null, //选中的答案索引
      choosedId: null, //已选的答案id
    };
  },
  props: ["fathercomponent"],
  computed: mapState([
    "title", //小标题
    "itemIndex", //第几题
    "itemDetail", //题目详情
    "timer", //计时器
  ]),
  methods: {
    ...mapActions(["addNum", "initData"]),
    //索引0-3对应答案A-B
    chooseType(index) {
      switch (index) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
        default:
          return "E";
      }
    },
    //点击下一题
    nextItem() {
      if (this.choosedIndex != null) {
        this.choosedIndex = null;
        //保存答案并进入下一题
        this.addNum(this.choosedId);
      } else {
        alert("还没有选择答案！");
      }
    },
    //选中答案
    choosed(index, id) {
      this.choosedIndex = index;
      this.choosedId = id;
    },
    //交卷，清空定时器，页面跳转
    submitAnswer() {
      if (this.choosedIndex != null) {
        this.addNum(this.choosedId);
        clearInterval(this.timer);
        this.$router.push("score");
      } else {
        alert("还没有选择答案！");
      }
    },
  },
  created() {
    //初始化信息
    if (this.fathercomponent == "home") {
      this.initData();
      var urlPath = require("../assets/images/背景首页.jpg");
      document.body.style.backgroundImage = "url(" + urlPath + ")";
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 首页 */
.top {
  position: absolute;
  height: 8.5rem;
  width: 4.5rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url("../assets/images/题目序号.png") no-repeat;
  background-size: 100% 100%;
  z-index: 10;
}

.top .top-title,
.top-num {
  position: absolute;
  left: 0.75rem;
  bottom: 1.15rem;
  height: 1rem;
  width: 3rem;
  text-align: center;
  font-size: 0.9rem;
  font-family: "黑体";
}

.home-logo img {
  width: 16rem;
  height: 16rem;
  position: absolute;
  top: 20%;
  left: 50%;
  margin-left: -8rem;
}

.content .btn-style {
  display: block;
  width: 4.5rem;
  height: 2.2rem;
  background-size: cover;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content .btn-start {
  background-image: url("../assets/images/btn开始.png");
}

.content .btn-next {
  background-image: url("../assets/images/btn下一题.png");
}

.content .btn-submit {
  background-image: url("../assets/images/btn提交.png");
}

/* 题目页 */
.content-item {
  position: absolute;
  height: 100%;
  width: 100%;

  -webkit-font-smoothing: antialiased;
}

.item-title {
  font-size: 1rem;
  color: rgb(252, 249, 249);
  line-height: 1.2rem;
  position: absolute;
  top: 20%;
  left: 20%;
  margin-right: 3rem;
  white-space: pre-wrap;
}

.item-list {
  list-style: none;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-65%);
}

.item-list li {
  margin-top: 0.7rem;
  color: #fff;
}

/*圆角不圆，加了padding*/
.item-list .option-style {
  width: 1rem;
  height: 1rem;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: 0.5rem;
  padding: 0 3px;
  font-size: 1rem;
  font-family: "Arial";

  text-align: center;
}

.item-list .choosed {
  background-color: #ffd400;
  color: black;
}
</style>

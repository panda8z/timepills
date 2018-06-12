<template>
   <div class='content-container clearfix'>
      <div class="content ">
          <ul>
            <li>
              <h4>最新日记</h4>
            </li>
            <li v-for="item in diaries" :key="item.id" class="clearfix">
              <div class="user-icon">
                <img :src="item.user.iconUrl" alt="">
              </div>

              <div class="content-body">
                <div class="title">
                  <span class='username'>{{item.user.name}}</span>
                  <span class='msg'>{{item.created}}</span>
                  <span class="subject msg">《{{item.notebook_subject}}》</span>
                </div>
                <div class="body clearfix">
                  <div><img :src="item.photoThumbUrl" alt=""></div>
                  <div>{{item.content}}</div>
                </div>
              </div>
            </li>
          </ul>
          <pagenation :total='total' @on-change='onPageChange'></pagenation>

      </div>
      <div class="side-bar">
          <div class="time">
             <span class="date">{{date}}</span>
             <span class="year">{{year}}</span>
             <span class="day">{{day}}</span>
          </div>

          <div class="write-diary">写日记</div>

          <div class="pill-t">
            <a href="https://www.wjx.cn/jq/24459423.aspx" target="_blank">👕胶囊T恤，你说了算！</a>
          </div>

          <div class="topic-container">
            <span>话题：关于Root周边退款</span>
            <img src="../../../../assets/images/ad1.jpg" alt="">
            <pre>给大家带来不便，对不起！！！详情移步root日记</pre>
            <span>写话题日记</span>
          </div>

          <div class="ad-container">
            <img src="../../../../assets/images/ad2.jpg" alt="">
            <div class="ad-content">广告投放请联系QQ：372536236</div>
          </div>
          <div class="list">
            <p>寂寞榜<span>（设置）</span></p>

            <ul class="user-list-container clearfix">
              <li>
                <img src="../../../../assets/images/user1.jpg" alt="">
                <span>什么鬼</span>
              </li>

              <li>
                <img src="../../../../assets/images/user2.jpg" alt="">
                <span>拒绝懒惰</span>
              </li>





              <li>
                <img src="../../../../assets/images/user4.jpg" alt="">
                <span>Yaer</span>
              </li>

              <li>
                <img src="../../../../assets/images/user5.jpg" alt="">
                <span>萝卜</span>
              </li>

               <li>
                <img src="../../../../assets/images/user13.jpg" alt="">
                <span>&nbsp;</span>
              </li>

              <li>
                <img src="../../../../assets/images/user6.jpg" alt="">
                <span>曹操又头疼</span>
              </li>

              <li>
                <img src="../../../../assets/images/user7.jpg" alt="">
                <span>孤独少女晚</span>
              </li>

               <li>
                <img src="../../../../assets/images/user3.jpg" alt="">
                <span>Van</span>
              </li>

              <li>
                <img src="../../../../assets/images/user8.jpg" alt="">
                <span>小莉</span>
              </li>

              <li>
                <img src="../../../../assets/images/user9.jpg" alt="">
                <span>陆子桀骜不</span>
              </li>

              <li>
                <img src="../../../../assets/images/user10.jpg" alt="">
                <span>伊子</span>
              </li>

              <li>
                <img src="../../../../assets/images/user11.jpg" alt="">
                <span>无盐</span>
              </li>

              <li>
                <img src="../../../../assets/images/user12.jpg" alt="">
                <span>一二三，木头人</span>
              </li>



              <li>
                <img src="../../../../assets/images/user14.jpg" alt="">
                <span>efakefake</span>
              </li>

              <li>
                <img src="../../../../assets/images/user15.jpg" alt="">
                <span>海阔天空</span>
              </li>

            </ul>
          </div>

          <div class="dead-line"></div>



      </div>
   </div>
</template>

<script>
import pagenation from "./pagenation";

export default {
  components: {
    pagenation
  },

  data() {
    return {
      diaries: [],
      total: 0,
      currentPage: 1,
      date: "",
      day: "",
      year: ""
    };
  },

  created() {
    this.getDiaries();
    this.getDate();
  },

  methods: {
    getDate() {
      let dayMapping = [
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ];
      let date = new Date();
      this.date = `${date.getMonth() + 1}/${date.getDate()}`;
      this.day = dayMapping[date.getDay()];
      this.year = `/${date.getFullYear()}`;
    },

    getDiaries() {
      let params = {
        page: this.currentPage,
        page_size:15
      };
      this.$http.get("api/diaries/today", params).then(res => {
        this.diaries = res.data.diaries;
        this.total = res.data.count;
      });
    },

    onPageChange(page) {
      this.currentPage = page;
      this.getDiaries();
    }
  }
};
</script>

<style lang="less" scoped>
.clearfix {
  &::after {
    content: ".";
    clear: both;
    line-height: 0;
    display: block;
    visibility: hidden;
  }
}
h4{
  color: #555;
  font-weight: normal;
  font-size: 20px;
}
.content-container {
  width: 960px;
  margin: 0 auto;
  .content {
    text-align: left;
    height: 500px;
    width: 690px;
    float: left;
    ul {
      padding: 0;
      list-style: none;
      li {
        &:first-child {
          padding: 0;
        }
        padding: 10px 0;
        border-bottom: 1px dashed #cccccc;
      }
    }
    .user-icon {
      float: left;
      cursor: pointer;
    }
    .content-body {
      margin-left: 90px;
      .title {
        .username {
          color: #2e8bcc;
          font-weight: bold;
          font-size: 13px;
          cursor: pointer;
          &:hover {
            background: #39e;
            color: white;
          }
        }
        .msg {
          font-size: 13px;
          color: #789;
        }
        .subject {
          cursor: pointer;
          &:hover {
            background-color: #39e;
            color: #ffffff;
          }
        }
      }
      .body {
        color: #333;
        padding-top: 10px;
        font-size: 13px;
        display: flex;
        div {
          float: left;
        }
        img {
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
  }
  .side-bar {
    height: 500px;
    width: 220px;
    float: right;
    .time {
      position: relative;
      font-family: Arial, Helvetica, sans-serif;
      .date {
        font-size: 56px;
      }
      .year {
        font-size: 28px;
      }
      .day {
        text-align: left;
        white-space: nowrap;
        position: relative;
        top: -50px;
        left: 70px;
        font-size: 13px;
        font-weight: 900;
      }
    }

    .write-diary {
      width: 100%;
      font-size: 24px;
      line-height: 42px;
      text-align: center;
      background-color: #39e;
      background: -webkit-linear-gradient(#39e, #2389de);
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #28d;
        background: -webkit-linear-gradient(#28d, #1278cd);
      }
    }

    .pill-t {
      background: #fff3cd;
      margin-top: 15px;
      padding: 15px;
      border-radius: 3px;
      a {
        text-decoration: none;
        color: #2e8bcc;
        &:hover {
          background-color: #39e;
          color: #ffffff;
        }
      }
    }

    .topic-container {
      text-align: left;
      margin: 10px 0;
      span:first-child {
        color: #2e8bcc;
        cursor: pointer;
        &:hover {
          background-color: #39e;
          color: #ffffff;
        }
      }
      img {
        margin: 8px 0 0 0;
      }

      pre {
        white-space: pre-wrap;
        font-size: 12px;
        color: #000;
      }

      span:last-child {
        color: #2e8bcc;
        font-size: 13px;
        cursor: pointer;
        &:hover {
          background-color: #39e;
          color: #ffffff;
        }
      }
    }

    .ad-container {
      margin-top: 5px;
      .ad-content {
        font-size: 13px;
        background: #efefef;
        margin-top: 10px;
        padding: 15px;
        border-radius: 3px;
      }
    }

    .list {
      text-align: left;
      .user-list-container {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          text-align: center;
          width: 56px;
          margin: 10px 8px;
          height: 75px;
          cursor: pointer;
          float: left;
          img {
            display: block;
            width: 50px;
            height: 50px;
            border-radius: 5px;
          }
          span {
            margin-top: 5px;
            font-size: 12px;
            display: inline-block;
            max-width: 60px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #39e;
            &:hover {
              background-color: #39e;
              color: #ffffff;
            }
          }
        }
      }
    }

    .dead-line{
      margin-top:15px;
      width: 100%;
      height: 1px;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>



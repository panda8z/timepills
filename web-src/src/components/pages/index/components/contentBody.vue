<template>
   <div class='content-container clearfix' v-loading='loading' element-loading-text="数据加载中">
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
                  <span class='time msg'>{{item.created}}</span>
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
      <div class="side-bar"></div>
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
      total:0,
      currentPage:1,
      loading:false
    };
  },

  created() {
    this.getDiaries();
  },

  methods: {
    getDiaries() {
      this.loading = true;
      let params = {
        page:this.currentPage
      }
      this.$http.get("api/diaries/today",params).then(res => {
        this.loading = false;
        this.diaries = res.data.diaries;
        this.total = res.data.count;
      });
    },

    onPageChange(page){
     this.currentPage = page;
     this.getDiaries();
     this.scrollToTop();
    },

    scrollToTop(){
      let el =  document.querySelector('.content>ul')
      console.log(el.scrollTop)
    },

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
    background-color: yellowgreen;
    float: right;
  }
}
</style>



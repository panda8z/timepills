<template>
   <div class="pagenation clearfix">
     <ul class="clearfix">
       <li>
         <div class="to-first-container page" @click="toFirstPage" title="第一页">&lt;&lt;</div>
       </li>
       <li>
         <div class="pre-container page" @click="onPrePage" title="上一页">上一页</div>
       </li>

       <li v-for="item in pageIndex" :key="item">
           <div
              class="page"
              :class="{active:item===currentIndex}"
              @click="onClickIndex(item)"
              :title="item"
           >
             {{item}}
            </div>
       </li>

        <li>
         <div class="next-container page " @click="onNextPage" title="下一页" >下一页</div>
       </li>
        <li>
         <div class="to-last-container page" @click="toLastPage" title="最后一页">&gt;&gt;</div>
       </li>
     </ul>
   </div>
</template>

<script>
export default {
  props: {
    total: {
      default: 0
    },
    pageSize: {
      default: 15
    }
  },

  data() {
    return {
      pageIndex: [],
      currentIndex: "",
      totalIndex: ""
    };
  },

  watch: {
    total() {
      this.getPageIndex();
    },
    currentIndex() {
      if (this.totalIndex >= this.currentIndex + 2) {
        this.pageIndex = [
          this.currentIndex - 2,
          this.currentIndex - 1,
          this.currentIndex,
          this.currentIndex + 1,
          this.currentIndex + 2
        ];
        this.pageIndex = this.pageIndex.filter(item => item >= 1);
      } else {
        this.pageIndex = [
          this.currentIndex - 2,
          this.currentIndex - 1,
          this.currentIndex,
          this.currentIndex + 1
        ];
        this.pageIndex = this.pageIndex.filter(
          item => item >= 1 && item <= this.totalIndex
        );
      }
    }
  },

  methods: {
    getPageIndex() {
      this.totalIndex = Math.floor(this.total / this.pageSize + 1);
      if (!this.currentIndex) {
        if (this.totalIndex > 3) {
          this.pageIndex = [1, 2, 3];
        } else {
          for (let i = 1; i <= totalIndex; i++) {
            this.pageIndex.push(i);
          }
        }
        this.currentIndex = 1;
      }
    },

    onClickIndex(val) {
      this.currentIndex = val;
      this.$emit("on-change", val);
    },

    onNextPage() {
      if (this.currentIndex < this.totalIndex) {
        this.currentIndex += 1;
      } else {
        this.currentIndex = this.totalIndex;
      }
      this.$emit("on-change", this.currentIndex);
    },

    onPrePage() {
      if (this.currentIndex > 1) {
        this.currentIndex -= 1;
      } else {
        this.currentIndex = 1;
      }
      this.$emit("on-change", this.currentIndex);
    },

    toLastPage() {
      this.currentIndex = this.totalIndex;
      this.$emit("on-change", this.currentIndex);
    },

    toFirstPage() {
      this.currentIndex = 1;
      this.$emit("on-change", this.currentIndex);
    }
  }
};
</script>

<style lang="less" scoped>
.pagenation {
  margin: 0 auto;
  width: fit-content;
}
ul {
  margin: 0;
  list-style: none;
  padding: 0;
  li {
    float: left;
    margin: 2px;
  }
  .page {
    font-family: Microsoft YaHei;
    font-weight: 900;
    border-radius: 2px;
    font-size: 13px;
    color: #fff;
    cursor: pointer;
    text-align: center;
    line-height: 1;
    background-color: #39e;
    padding: 5px 10px;
    &:hover {
      background: #28d;
    }
  }
  .active {
    color: rgb(51, 51, 51);
    background-color: #bbb;
    cursor: text;
    &:hover {
      background: #bbb;
    }
  }
}
</style>



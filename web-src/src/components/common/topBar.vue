<template>
  <div class="top-bar">
    <ul class='header'>
      <li>
        <span class='logo'>胶囊日记</span>
      </li>
      <li>注册</li>
      <li>登录</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.top-bar {
  background-color: #fafafa;
  background-image: linear-gradient(to bottom, #ffffff, #f2f2f2);
  background: -moz-linear-gradient(#ffffff, #f2f2f2);
  background: -webkit-linear-gradient(#ffffff, #f2f2f2);
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffFFFFFF',endColorstr='#ffF2F2F2')";
  filter: alpha(opacity=99);
  -moz-opacity: 0.99;
  opacity: 0.99;
  border-bottom: 1px solid #d3d3d3;
  color: #777;
  font-size: 14px;
  margin-bottom: 25px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 0 5px #ccc;
  overflow: visible;
  .header {
    padding: 0;
    margin: 0 auto;
    width: 960px;
    list-style: none;
    // padding: 10px;
    &::after {
      content: ".";
      line-height: 0;
      visibility: hidden;
      clear: both;
    }
    li {
      cursor: pointer;
      float: right;
      line-height: 38px;
      &:first-child {
        padding: 0 20px 0 45px;
        float: left;
        font-size: 18px;
        background: url('../../assets/images/logo.gif') no-repeat scroll 0px 10px transparent;
        color: #666;
      }
      &:last-child {
        margin-right: 15px;
      }
      &:nth-child(2),
      &:last-child{
        font-weight: 900;
        color:#777;
        &:hover{
          color:#000;
        }
      }
    }
  }
}
</style>



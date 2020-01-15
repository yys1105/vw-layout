<template>
  <app-layout class="home">
    <head-menu class="home-head-menu" :favoriteProd="favoriteProd"></head-menu>
    <div class="home-content-wrap">
      <div class="home-content">
        <div class="card">
          <div class="icon">
            <img src="~assets/images/failure_icon.png">
          </div>
          <div class="title">
            <div>抱歉，注册过程遇到了问题！</div>
          </div>
          <div class="back-link" @click="back">
            &lt; 返回重新注册
          </div>
          <div class="details">
            <div class="details-item">· 非常抱歉，注册失败，可能您的手机号码或者邮箱已提交过申请！ </div>
            <div class="details-item">· 请电话与我们取得联络  <span class="tel">400-903-0328</span>！我们的产品顾问将尽快为您重新开启免费试用！</div>
          </div>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import { getQueryString } from '@/libs/util.js';
export default {
  props: {},
  data() {
    return {
      favoriteProd: getQueryString('favoriteProd')
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    back(){
      // window.location.href = '/';
      window.history.go(-1)
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  &-head-menu {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
  }
  &-content-wrap {
    height: 100%;
    padding-top: 70px;
    box-sizing: border-box;
    .home-content {
      height: 100%;
      overflow: auto;
      position: relative;
      box-sizing: border-box;
    }
  }
}
.card {
  margin: 94px 52px 52px 52px;
  background-color: #ffffff;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.22);
  box-sizing: border-box;
  padding: 94px 37px 130px 37px;
  .icon {
    width: 85px;
    margin: 0 auto;
    & > img {
      width: 100%;
    }
  }
  .title {
    margin-top: 30px;
    text-align: center;
    font-size: 24px;
    line-height: 50px;
    letter-spacing: 1px;
    color: #434343;
  }
  .back-link{
    margin: 30px;
    text-align: center;
    color: #434343;
  }
  .details {
    margin-top: 65px;
    font-size: 17px;
    line-height: 30px;
    letter-spacing: 0px;
    color: #313131;
    .details-item + .details-item {
      margin-top: 28px;
    }
    .tel {
      font-size: 22px;
      color: #20bee9;
    }
  }
}
</style>

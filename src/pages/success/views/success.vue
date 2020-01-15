<template>
  <app-layout class="home">
    <head-menu class="home-head-menu" :favoriteProd="favoriteProd"></head-menu>
    <div class="home-content-wrap">
      <div class="home-content">
        <div class="card">
          <div class="icon">
            <img src="~assets/images/success_icon.png" />
          </div>
          <div class="title">
            <div>您已成功注册</div>
            <div>{{productNameFullName}}！</div>
          </div>
          <div class="details">
            <div class="details-item">· 邮件已经发送到您的邮箱，请立即收取邮件，开始体验{{productName}}！</div>
            <div class="details-item">· 请开启邮件，点击邮件内的链接，即可开启会议！</div>
            <div class="details-item">
              · 没有收到激活邮件？ 请尝试到垃圾邮件里寻找，或电话与我们取得联络
              <span class="tel">400-903-0328</span>
            </div>
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
      favoriteProd: getQueryString('favoriteProd'),
      productList: [
        {
          id: 5,
          value: 'octopus',
          name: '章鱼云会议',
          fullName: '章鱼云会议'
        },
        {
          id: 1,
          value: 'webEx',
          name: 'Webex Meetings',
          fullName: 'Webex Meetings网络视频会议'
        },
        {
          id: 2,
          value: 'KTCC',
          name: '天客云呼叫中心',
          fullName: '天客云呼叫中心系统'
        },
        {
          id: 4,
          value: 'KTVC',
          name: '天视云智能硬件',
          fullName: '天视云智能会议终端'
        }
      ]
    };
  },
  computed: {
    productName() {
      return this.productList.find(item => item.value == this.favoriteProd).name;
    },
    productNameFullName() {
      return this.productList.find(item => item.value == this.favoriteProd).fullName;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
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

<template>
  <div class="main-page">
    <div class="title">
      <div>
        <img class="title-img" src="~assets/images/Webex_meetings.png">
        <span>全球占有率第一的网络视频会议</span>
      </div>
      <div>
        <span>全功能，3方会议，永久免费</span>
      </div>
    </div>
    <div class="form">
      <registration-from :favoriteProd="favoriteProd">
        <div class="tip" slot="topTip">
          <div>· 注册成功之后，系统将为您创建专属会议账号，即可发起会议</div>
          <div>· 参加会议不需要注册账号，点击会议链接即可加入</div>
        </div>
        <div class="bottom-tip" slot="bottomTip">
          或电话与我们取得联络
          <span class="tel">400-903-0328</span>
        </div>
      </registration-from>
    </div>
  </div>
</template>

<script>
import RegistrationFrom from './registration-form';
export default {
  props: {
    favoriteProd: String
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    RegistrationFrom
  }
};
</script>

<style lang="less" scoped>
.main-page {
  box-sizing: border-box;
  padding: 50px;
}
.title {
  line-height: 28px;
  text-align: center;
  letter-spacing: 1px;
  color: #1a1a1a;
  font-size: 24px;
  & > div {
    height: 50px;
    span {
      vertical-align: top;
    }
  }
  &-img {
    height: 46px;
    position: relative;
    top: -9px;
  }
}
.tip,
.bottom-tip {
  font-size: 17px;
  line-height: 32px;
  color: #313131;
  .tel {
    color: #20bee9;
    font-size: 22px;
  }
}
</style>

<template>
  <div class="main-page">
    <div class="title">
      <div>
        <span>天视云智能会议终端</span>
      </div>
      <div>
        <span>丰富会议终端、触屏，原厂配置，灵活组合</span>
      </div>
    </div>
    <div class="form">
      <registration-from :favoriteProd="favoriteProd">
        <div class="bottom-tip" slot="bottomTip">
          <div>请保持手机畅通，我们会在一个工作日内联系您！</div>
          <div>
            或电话与我们取得联络
            <span class="tel">400-903-0328</span>
          </div>
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
  margin-bottom: 20px;
  & > div {
    height: 50px;
    span {
      vertical-align: top;
    }
  }
  &-img {
    height: 46px;
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

<template>
  <div class="main-page">
    <div class="title">
      <div>
        <img class="title-img" src="~assets/images/octopus_logo.png" />
        <span>章鱼云会议</span>
      </div>
      <div>
        <span>100方会议，永久免费试用</span>
      </div>
    </div>
    <div class="form">
      <registration-from :favoriteProd="favoriteProd" :rules="rules">
        <div class="tip" slot="topTip">
          <div>· 注册成功之后，系统将为您创建一个账号，即可发起会议</div>
          <div>· 参加企业会议或加入其他人的会议不需要注册帐号</div>
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
const telValidation = /^\d{11}$/;
const emailValidation = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
const codeVaildation = /^\d{6}$/;
import RegistrationFrom from './registration-form';
export default {
  props: {
    favoriteProd: String
  },
  data() {
    return {
      rules: {
        phone: {
          required: true,
          regular: telValidation,
          message: '请输入正确的手机号',
          trigger: 'blur'
        },
        code: {
          required: true,
          regular: codeVaildation,
          message: '请输入正确的验证码',
          trigger: 'blur'
          //   callback: async () => {
          //     let { error } = await this.$http.get('/reg/verify-sms-code', {
          //       phone: this.form.phoneNumber,
          //       code: this.form.checkCode
          //     });
          //     if (error) {
          //       this.$refs.code.errMessage = '验证码错误';
          //       this.$refs.code.isErr = true;
          //     }
          //   }
        },
        email: {
          // required: true,
          regular: emailValidation,
          message: '请输入正确的工作邮箱',
          trigger: 'blur'
        }
      }
    };
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

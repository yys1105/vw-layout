<template>
  <div class="registration-form">
    <!-- <div class="tip">
      <div>·注册成功之后，系统将为您创建一个账号，即可发起会议</div>
      <div>·参加企业会议或加入其他人的会议不需要注册帐号</div>
    </div>-->
    <slot name="topTip"></slot>
    <div class="registration-form-content">
      <form-input
        ref="phone"
        class="input"
        v-model="form.phoneNumber"
        palceholder="手机号"
        :rule="rules.phone"
        type="number"
        required
      >
        <div slot="expand">
          <div v-if="second==60" class="checkcode-btn" @click="sendcode">获取验证码</div>
          <div v-else class="checkcode-btn">重新获取({{second}})</div>
        </div>
      </form-input>
      <form-input
        ref="code"
        class="input"
        v-model="form.checkCode"
        palceholder="验证码"
        :rule="rules.code"
        type="number"
        required
      />
      <form-input class="input" v-model="form.nickname" palceholder="姓名" required />
      <form-input class="input" v-model="form.company" palceholder="公司名称" required />
      <form-input
        class="input"
        v-model="form.email"
        palceholder="工作邮箱"
        :rule="rules.email"
        type="email"
      />
      <div class="form-item" v-if="contactMeIsShow">
        <div class="label">是否需要马上为您安排一名产品专家？</div>
        <van-radio-group class="radio-group" v-model="contactMe">
          <van-radio class="radio-group-item" :name="true">
            <span class="icon" :class="{'active':props.checked}" slot="icon" slot-scope="props"></span>需要
          </van-radio>
          <van-radio class="radio-group-item" :name="false">
            <span class="icon" :class="{'active':props.checked}" slot="icon" slot-scope="props"></span>不需要
          </van-radio>
        </van-radio-group>
      </div>

      <div class="submit-btn-wrap">
        <div class="submit-btn" @click="submit">立即注册</div>
      </div>
    </div>
    <slot name="bottomTip"></slot>
    <!-- <div class="bottom-tip">
      或电话与我们取得联络
      <span class="tel">400-903-0328</span>
    </div>-->
  </div>
</template>

<script>
const telValidation = /^\d{11}$/;
const emailValidation = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
const codeVaildation = /^\d{6}$/;
import { getQueryString } from "@/libs/util.js";
export default {
  props: {
    favoriteProd: String,
    rules: {
      type: Object,
      default: function() {
        return {
          phone: {
            required: true,
            regular: telValidation,
            message: "请输入正确的手机号",
            trigger: "blur"
          },
          code: {
            required: true,
            regular: codeVaildation,
            message: "请输入正确的验证码",
            trigger: "blur"
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
            required: true,
            regular: emailValidation,
            message: "请输入正确的工作邮箱",
            trigger: "blur"
          }
        };
      }
    }
  },
  data() {
    return {
      form: {
        phoneNumber: "",
        checkCode: "",
        email: "",
        from: getQueryString("from")
          ? getQueryString("from")
          : this.isWx()
          ? "m-wx"
          : "m-web",
        nickname: "",
        company: "",
        referCode: "",
        favoriteProd: this.favoriteProd
      },
      contactMe: true,
      second: 60,
      // rules: {
      //   phone: {
      //     required: true,
      //     regular: telValidation,
      //     message: '请输入正确的手机号',
      //     trigger: 'blur'
      //   },
      //   code: {
      //     required: true,
      //     regular: codeVaildation,
      //     message: '请输入正确的验证码',
      //     trigger: 'blur'
      //     //   callback: async () => {
      //     //     let { error } = await this.$http.get('/reg/verify-sms-code', {
      //     //       phone: this.form.phoneNumber,
      //     //       code: this.form.checkCode
      //     //     });
      //     //     if (error) {
      //     //       this.$refs.code.errMessage = '验证码错误';
      //     //       this.$refs.code.isErr = true;
      //     //     }
      //     //   }
      //   },
      //   email: {
      //     required: true,
      //     regular: emailValidation,
      //     message: '请输入正确的工作邮箱',
      //     trigger: 'blur'
      //   }
      // },
      inputHasErrList: []
    };
  },
  computed: {
    contactMeIsShow() {
      return this.favoriteProd == "octopus" || this.favoriteProd == "webEx";
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    isWx() {
      let ua = navigator.userAgent.toLowerCase();
      let isWeixin = ua.indexOf("micromessenger") !== -1;
      if (isWeixin) {
        return true;
      } else {
        return false;
      }
    },
    sendcode() {
      this.$refs.phone.check();
      if (!this.$refs.phone.isErr) {
        this.sendcheckcode();
        this.startCounting();
      }
    },
    async sendcheckcode() {
      await this.$http.get("/reg/send-check-code", {
        phoneNumber: this.form.phoneNumber
      });
    },
    startCounting() {
      var second = this.second;
      var timer;
      var self = this;
      function change() {
        self.second = --second;
        if (second > -1) {
          timer = setTimeout(change, 1000);
        } else {
          self.codeSent = false;
          self.second = 60;
          clearTimeout(timer);
        }
      }
      timer = setTimeout(change, 1000);
    },
    submit() {
      let isErr = false;
      this.$children.forEach(component => {
        if (component.needCheck) {
          component.check();
          isErr = isErr || component.isErr;
        }
      });
      if (!isErr) {
        this.verifySmsCode();
      }
      //   this.saveReg()
    },
    async verifySmsCode() {
      let { error } = await this.$http.get("/reg/verify-sms-code", {
        phone: this.form.phoneNumber,
        code: this.form.checkCode
      });
      if (error) {
        alert("验证码错误");
      } else {
        this.saveReg();
      }
    },
    async saveReg() {
      // window.location.href = 'failure.html?favoriteProd='+this.favoriteProd;
      if(this.contactMeIsShow) this.form.contactMe = this.contactMe
      let { error, message } = await this.$http.get("/reg/save-reg", this.form);
      if (!error) {
        window.location.href = "success.html?favoriteProd=" + this.favoriteProd;
      } else {
        if (
          message == "手机验证码不正确！" ||
          message == "该手机已经注册试用过！"
        ) {
          alert(message);
        } else {
          window.location.href =
            "failure.html?favoriteProd=" +
            this.favoriteProd +
            "&from=" +
            getQueryString("from");
        }
      }
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.registration-form {
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  padding: 35px 35px;

  &-content {
    padding-top: 23px;
    .input + .input {
      margin-top: 20px;
    }
  }
}
.checkcode-btn {
  font-size: 19px;
  color: #20bee9;
  line-height: 30px;
}
.submit-btn-wrap {
  .submit-btn {
    width: 188px;
    line-height: 59px;
    background-color: #20bee9;
    border-radius: 16px;
    text-align: center;
    color: #fff;
    margin: 23px auto;
  }
}
.form-item {
  margin-top: 20px;
  .label {
    margin-bottom: 10px;
  }
}
.radio-group {
  display: flex;
  align-items: center;
  .radio-group-item {
    height: 40px;
    & + .radio-group-item {
      margin-left: 20px;
    }
  }
}
.icon {
  box-sizing: border-box;
  display: inline-block;
  background-color: #fff;
  border-radius: 100%;
  border: 1px solid #ccc;
  position: relative;
  width: 30px;
  height: 30px;
  top: 1px;

  &::after {
    content: " ";
    border-radius: 100%;
    top: 8px;
    left: 7px;
    position: absolute;
    width: 12px;
    height: 12px;
    -webkit-transition: -webkit-transform 0.2s;
    transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    transition: transform 0.2s, -webkit-transform 0.2s;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  &.active {
    background-color: #26a2ff;
    border-color: #26a2ff;
    &::after {
      background-color: #fff;
      transform: scale(1);
    }
  }
}
</style>

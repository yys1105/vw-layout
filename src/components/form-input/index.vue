<template>
  <div>
    <div class="form-input">
      <input :type="type" :placeholder="palceholder" :value="value" @input="inputChange" @focus="focus" @blur="blur" />
      <div v-if="$slots['expand']" class="expand">
        <slot name="expand"></slot>
      </div>
    </div>
    <div class="err-message" v-if="isErr">{{errMessage}}</div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'form-input',
  props: {
    palceholder: String,
    rule: {
      type: Object,
      default: function() {
        return {
          required: false,
          regular: null,
          message: null,
          trigger: '',
          callback: null
        };
      }
    },
    required: Boolean,
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      value: '',
      errMessage: '',
      isErr: false
    };
  },
  computed: {
    needCheck() {
      return this.required || this.rule.required || this.rule.regular;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    inputChange(event) {
      this.$emit('input', event.target.value);
      this.value = event.target.value;
      this.isErr = false;
    },
    focus(event) {
      let target = event.target;
      setTimeout(() => {
        target.scrollIntoView(true);
      }, 100);
    },
    blur(event) {
      this.check();
    },
    check() {
      // debugger
      if (this.required||this.rule.required) {
        if (this.value == '') {
          this.errMessage = '该项不能为空';
          this.isErr = true;
          return;
        }
        if (this.rule.regular && !this.rule.regular.test(this.value)) {
          this.errMessage = this.rule.message;
          this.isErr = true;
          return;
        }
      } else {
        if (this.value != '' && this.rule.regular && !this.rule.regular.test(this.value)) {
          this.errMessage = this.rule.message;
          this.isErr = true;
          return;
        }
      }

      // if (this.required && this.value == '') {
      //   this.errMessage = '该项不能为空';
      //   this.isErr = true;
      //   return;
      // }
      // if (this.rule.trigger == 'blur') {
      //   if (this.rule.required && this.value == '') {
      //     this.errMessage = '该项不能为空';
      //     this.isErr = true;
      //     return;
      //   }
      //   if (this.rule.regular && !this.rule.regular.test(this.value)) {
      //     this.errMessage = this.rule.message;
      //     this.isErr = true;
      //     return;
      //   }
      // }
      this.isErr = false;
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.form-input {
  height: 65px;
  background-color: #ffffff;
  box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: solid 1px #e2e2e2;
  box-sizing: border-box;
  padding: 0 26px;
  position: relative;
  display: flex;
  align-items: center;
  input {
    font-size: 19px;
    line-height: 30px;
    flex: 1;
    border-style: none;
    outline: none;
    &::-webkit-input-placeholder {
      color: #000;
    }
    &:-moz-placeholder {
      /* Firefox 18- */
      color: #000;
    }
    &::-moz-placeholder {
      /* Firefox 19+ */
      color: #000;
    }
    &:-ms-input-placeholder {
      color: #000;
    }
  }
  .expand {
    min-width: 140px;
    position: relative;
    text-align: center;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 3px;
      height: 24px;
      width: 1px;
      background-color: #1b1b1b;
    }
  }
}
.err-message {
  line-height: 30px;
  padding: 0 10px;
  color: red;
}
</style>



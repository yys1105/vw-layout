<template>
  <div class="head-nav">
    <a class="home-icon" href="https://m.ketianyun.com">
      <img src="~assets/images/home_icon.png">
    </a>
    <a class="main-icon" href="https://www.ketianyun.com/cmsweb/">
      <img src="~assets/images/new_logo.png">
    </a>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>
<style lang="less" scoped>
.head-nav {
  height: 90px;
  line-height: 90px;
  position: relative;
  background-color: rgb(210, 210, 210);
  .home-icon {
    position: absolute;
    left: 40px;
    top: 20px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 0;
    & > img {
      width: 37px;
      vertical-align: middle;
    }
  }
  .main-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 280px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 0;
    & > img {
      height: 100%;
      vertical-align: middle;
    }
  }
}
</style>

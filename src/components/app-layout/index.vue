<template>
  <div class="app-layout">
    <div class="header">
      <head-nav/>
    </div>
    <div class="content-wrap">
      <div class="content">
        <slot/>
      </div>
    </div>
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

<style scoped lang="less">
.app-layout {
  width: 100%;
  height: 100%;
  position: relative;
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 90px;
  }
  .content-wrap {
    height: 100%;
    padding-top: 90px;
    box-sizing: border-box;
    .content {
      height: 100%;
      overflow: auto;
      position: relative;
    }
  }
}
</style>
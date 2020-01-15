<template>
  <app-layout class="home">
    <head-menu class="head-menu" :favoriteProd="favoriteProd" @type="(val)=>type=val"></head-menu>
    <div class="content-wrap">
      <div class="content">
        <component :is="components[type]" :favoriteProd="favoriteProds[type]"></component>
      </div>
    </div>
  </app-layout>
</template>

<script>
import webex from './components/webex';
import tiankeyun from './components/tiankeyun';
import tianshiyun from './components/tianshiyun';
import octopus from './components/octopus'
import { getQueryString } from '@/libs/util.js';
export default {
  props: {},
  data() {
    return {
      type: '',
      components: {
        1: 'webex',
        2: 'tiankeyun',
        4: 'tianshiyun',
        5: 'octopus'
      },
      favoriteProds: {
        1: 'webEx',
        2: 'KTCC',
        4: 'KTVC',
        5: 'octopus'
      },
      favoriteProd: getQueryString('favoriteProd')
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    webex,
    tiankeyun,
    tianshiyun,
    octopus
  }
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  .head-menu {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
  }
  .content-wrap {
    height: 100%;
    padding-top: 70px;
    box-sizing: border-box;
    .content {
      height: 100%;
      overflow: auto;
      position: relative;
      box-sizing: border-box;
    }
  }
}
</style>

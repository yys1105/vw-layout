<template>
  <div class="head-menu">
    <div class="current-menu" :class="{'active':dropDownShow}" @click="dropDownShow=!dropDownShow">
      <span>{{currentMenu.name}}</span>
      <div class="icon">
        <img src="~assets/images/down_arrow.png">
      </div>
    </div>
    <div v-if="dropDownShow" class="drop-down">
      <div class="drop-down-item" v-for="(item,index) in menuList" :key="index" @click="selectMenuOne(item)">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favoriteProd: String
  },
  data() {
    return {
      currentMenu: {
        id: 0,
        name: ''
      },
      menuList: [
        {
          id: 5,
          value: 'octopus',
          name: '章鱼云会议'
        },
        {
          id: 1,
          value: 'webEx',
          name: 'Webex Meetings'
        },
        {
          id: 2,
          value: 'KTCC',
          name: '天客云呼叫中心'
        },
        {
          id: 4,
          value: 'KTVC',
          name: '天视云智能硬件'
        }
      ],
      dropDownShow: false
    };
  },
  computed: {},
  created() {
    if (this.favoriteProd == undefined) {
      this.currentMenu = this.menuList[0];
    } else {
      let currentMenu = this.menuList.find(item => item.value == this.favoriteProd);
      this.currentMenu = currentMenu ? currentMenu : this.menuList[0];
    }
  },
  mounted() {},
  watch: {
    'currentMenu.id': function(value) {
      this.$emit('type', value);
    }
  },
  methods: {
    selectMenuOne(obj) {
      this.currentMenu = obj;
      this.dropDownShow = !this.dropDownShow;
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
@head-menu-height: 70px;
.head-menu {
  width: 100%;
  background-color: rgb(65, 70, 89);
  color: #fff;
  display: table;
  table-layout: fixed;
  padding: 0 0;
  height: @head-menu-height;
  .current-menu {
    text-align: center;
    height: @head-menu-height;
    line-height: @head-menu-height;
    color: #fff;
    font-size: 25px;
    .icon {
      height: @head-menu-height;
      line-height: @head-menu-height;
      position: absolute;
      right: 60px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0;
      & > img {
        height: 28px;
        vertical-align: middle;
      }
    }
    &.active .icon > img {
      transform: rotate(180deg);
    }
  }
  .drop-down {
    position: absolute;
    top: @head-menu-height;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: #414659;
    -webkit-box-shadow: 2px 3px 25px 2px rgba(4, 0, 0, 0.41);
    box-shadow: 2px 3px 25px 2px rgba(4, 0, 0, 0.41);
    opacity: 0.88;
    &-item {
      font-size: 25px;
      height: @head-menu-height;
      line-height: @head-menu-height;
      text-align: center;
    }
  }
}
</style>

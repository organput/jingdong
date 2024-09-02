<template>
  <div class="docker">
    <div v-for="( item, index ) in dockerList"
    :class="{ 'docker__item': true, 'docker__item--active': index === dockerIndex }"
    :key="item.icon"
    >
      <router-link :to='item.to'>
        <div class="iconfont" v-html="item.icon"></div>
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DockerPage',
  props: ['dockerIndex'],
  setup () {
    const dockerList = [
      { icon: '&#xe92d;', text: '首页', to: { name: 'Home' } },
      { icon: '&#xe616;', text: '购物车', to: { name: 'CartList' } },
      { icon: '&#xe604;', text: '订单', to: { name: 'OrderList' } },
      { icon: '&#xe600;', text: '我的', to: { name: 'Home' } }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.docker {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.49rem;
  width: 100%;
  border-top: .01rem solid $content-bgColor;;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      font-size: .2rem;
      margin-top: .07rem;
      margin-bottom: .02rem;
    }
    a {
      color: $content-fontColor;
      text-decoration: none;
    }
    &--active {
      a {
        color: #1fa4fc;
      }
    }
  }
  &__title {
    font-size: .1rem;
  }
  color: $content-fontColor;
}
</style>

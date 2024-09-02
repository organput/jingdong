<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <div class="order"
      v-for="(item, index) in orderlists"
      :key="index">
        <div class="order__title">
          {{ item.shopName }}
          <span class="order__status">{{ item.isCancel ? '已取消' : '已下单' }}</span>
        </div>
        <div class="order__content">
          <div class="order__content__imgs">
            <template
            v-for="(itemInner, innerIndex) in item.productList"
            :key="innerIndex">
              <img class="order__content__img" :src="itemInner.imgUrl"
              v-if="innerIndex <= 4"
              >
            </template>
          </div>
          <div class="order__content__info">
            <div class="order__content__price">&yen;{{ calculateTotals(item.productList).price }}</div>
            <div class="order__content__count">共{{ calculateTotals(item.productList).total }}件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DockerPage :dockerIndex="2"/>
</template>

<script>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
import DockerPage from '../../components/Docker'

const useOrderListEffect = () => {
  const store = useStore()
  const { orderlists } = toRefs(store.state)
  const calculateTotals = (productList) => {
    let total = 0
    let price = 0
    if (productList) {
      for (const i in productList) {
        total += productList[i].count
        if (productList[i].check) {
          price += (productList[i].count * productList[i].price)
        }
      }
    }
    price = price.toFixed(2)
    return { total, price }
  }
  return { calculateTotals, orderlists }
}

export default {
  name: 'OrderList',
  components: { DockerPage },
  setup () {
    const { calculateTotals, orderlists } = useOrderListEffect()
    return { orderlists, calculateTotals }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/viriables.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: .5rem;
  background: rgb(248, 248, 248);
}
.title {
  font-size: .16rem;
  height: .44rem;
  @include centerText;
  background: $bgColor;
  color: $content-fontColor;
}
.order {
  margin: .16rem .18rem;
  padding: .16rem;
  background: $bgColor;
  &__title {
    margin-bottom: .16rem;
    display: flex;
    height: .22rem;
    align-items: center;
    font-size: .16rem;
    color: $content-fontColor;
  }
  &__status {
    margin-left: auto;
    font-size: .14rem;
    color: $lightColor;
  }
  &__content {
    display: flex;
    &__imgs {
      flex: 1;
    }
    &__img {
      width: .4rem;
      height: .4rem;
      margin-right: .12rem;
    }
    &__info {
      width: .7rem;
    }
    &__price {
      font-size: .14rem;
      color: $hightlight-color;
      line-height: .2rem;
      text-align: right;
      margin-bottom: .04rem;
    }
    &__count {
      line-height: .14rem;
      font-size: .12rem;
      color: $content-fontColor;
      text-align: right;
    }
  }
}
</style>

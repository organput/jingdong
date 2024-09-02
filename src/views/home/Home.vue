<template>
  <div class="wrapper">
    <StaticPart />
    <NearbyPage />
  </div>
  <DockerPage :dockerIndex="0"/>
</template>

<script>
import StaticPart from './StaticPart'
import NearbyPage from './Nearby'
import DockerPage from '../../components/Docker'
export default {
  name: 'HomePage',
  components: { StaticPart, NearbyPage, DockerPage }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: .5rem;
  padding: 0 .18rem .1rem .18rem;
}
</style>

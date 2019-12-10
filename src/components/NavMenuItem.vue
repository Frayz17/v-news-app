<template>
  <li class="nav-menu__item">{{ item.title }}</li>
</template>

<script>
export default {
  name: 'NavMenuItem',
  props: ['item']
};
</script>

<style scoped>
.nav-menu__item {
  display: block;
  width: 100%;
  text-align: center;
  line-height: 30px;
  border-bottom: 1px solid grey;
}
</style>

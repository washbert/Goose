<style scoped lang="scss" src="./default.scss">

</style>
<script lang="ts" src="./default.ts">
</script>
<template>
  <div class="[ default ][ grid ]">
    <!-- Header -->
    <div class="[ h-12 ]">
      <p>This is default</p>
    </div>

    <!-- Body -->
    <div class="[ grid ] grid-cols-1">
      <transition name="fade">
        <router-view />
      </transition>
    </div>

    <!-- Footer -->
    <div class="[ h-12 ]">
      <AppFooter customProp="Footer" />
    </div>
  </div>
</template>
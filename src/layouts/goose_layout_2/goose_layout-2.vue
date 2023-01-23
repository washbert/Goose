<style scoped lang="scss" src="./goose_layout-2.scss">

</style>
<script lang="ts" src="./goose_layout-2.ts">
</script>
<template>
  <div class="[ goose_layout_2 ][ grid ]">
    <!-- Header -->
    <div class="[ h-12 ]">
      <p>This is Goose 2</p>
    </div>

    <!-- Body -->
    <div class="[ grid ]">
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
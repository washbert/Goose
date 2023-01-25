<style scoped lang="scss" src="./goose_layout.scss">

</style>
<script lang="ts" src="./goose_layout.ts">
</script>
<template>
  <div class="[ goose_layout ][ grid ]">
    <!-- Header -->
    <div class="[ h-12 ]">
    </div>

    <!-- Body -->
    <div class="[ grid ][ place-content-center ][ mb-24 ] ">
      <transition name="fade">
        <router-view />
      </transition>
    </div>

    <!-- Footer -->
    <div class="[ h-48 ][ w-full ]">
      <AppFooter customProp="Footer" />
    </div>
  </div>
</template>
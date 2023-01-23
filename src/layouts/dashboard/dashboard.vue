
import { MenuBar } from '@/components/menu-bar/menu-bar';


import { MenuBar } from '@/components/menu-bar/menu-bar';

<style scoped lang="scss" src="./dashboard.scss">

</style>
<script lang="ts" src="./dashboard.ts">
</script>
<template>
  <div class="[ dashboard ][ grid ][ bg-login-form-background ]">
    <!-- Header -->
    <div class="[ h-20 ][ grid grid-cols-3 ]">
      <TitleBar />
      <div class="[ py-5 ]">
        <h3 class="[ grid col-start-2 ]">Home</h3>
      </div>
      <div class="[ grid col-start-3 ] [ my-3 ]  ">
        <input placeholder="Search Twitter"
          class=" w-3/4 h-12 [ rounded-full ] px-5 bg-grey-500 focus-within:border-teal-500 " />
      </div>
    </div>

    <!-- Body -->
    <div class="[ grid ] [ grid-cols-3 ]">
      <div class="grid">
        <MenuBar />
      </div>
      <div class="grid mt-6">
        <transition name="fade">

          <router-view />
        </transition>
      </div>
      <div class="grid mt-6">
        <p>This is for below Search bar</p>
      </div>
    </div>

    <!-- Footer -->
    <div class="[ h-12 ]">
      <AppFooter customProp="Footer" />
    </div>
  </div>
</template>

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
      <div class="[ grid col-start-3 ] [ my-3 ]     ">
        <input placeholder="Search Goose"
          class=" h-12 w-1/2 [ rounded-full ] bg-gray-200 px-5 pb-1 focus:outline-none focus:border-blue-600 " />
      </div>
    </div>

    <!-- Body -->
    <div class="[ grid ] [ grid-cols-3 ]">
      <div class="grid grid-cols-sidebar">
        <MenuBar />
      </div>
      <div class="grid mt-2">
        <transition name="fade">

          <router-view />
        </transition>
      </div>
      <div class="grid grid-cols-3  ">
        <div class="grid col-start-1 col-span-2 p-4 bg-typography-background rounded-xl m-4">
          <div class="">
          <p class="grid  text-left text-xl font-black h-10">Trends for you</p>
        
        <div>
          <ul ref="sideTable" id="side_table" class="grid grid-flow-row text-xs">
            <li>
              <p>Business & Finanace . Trending </p>
              <h4>Amazon</h4>
              <p>1.13M Tweets</p>
            </li>
            <li>
              <p>Business & Finanace . Trending </p>
              <h4>Amazon</h4>
              <p>1.13M Tweets</p>
            </li>
          </ul>
          <a @click="addToTrends">Click to Add to Trends!</a>
        </div>
      </div>
      </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="[ h-12 ]">
      <AppFooter customProp="Footer" />
    </div>
  </div>
</template>
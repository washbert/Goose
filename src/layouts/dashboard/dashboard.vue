
import { MenuBar } from '@/components/menu-bar/menu-bar';


import { MenuBar } from '@/components/menu-bar/menu-bar';

<style scoped lang="scss" src="./dashboard.scss">

</style>
<script lang="ts" src="./dashboard.ts">
</script>
<template>
  <div class="[ dashboard ][ grid ][ bg-login-form-background ]">
    <!-- Header -->
    <div class="[ h-20 ] grid-cols-2 [ grid lg:grid-cols-3 ]">
      <TitleBar />
      <div class="[ py-5 px-5 border-r border-l border-gray-200 ]">
        <h3 class="[ grid col-start-2 ]">Home</h3>
      </div>
      <div class="[ hidden lg:grid col-start-3 ] [ my-3 ]     ">
        <input placeholder="Search Goose"
          class=" h-12 w-1/2 ml-3 [ rounded-full ] bg-gray-200 px-5 pb-1 focus:outline-none focus:border-blue-600 " />
      </div>
    </div>

    <!-- Body -->
    <div class=" flex flex-row  [ lg:grid ][ lg:grid-cols-3 ]">
      <div class="flex lg:grid lg:place-items-end ">
        <MenuBar />
      </div>
      <div class="flex flex-grow lg:grid mt-2 border-r border-l border-gray-200 p-1">
        <transition name="fade">

          <router-view />
        </transition>
      </div>
      <div class="lg:grid hidden   ">
        <div class="grid  md:w-1/2 p-4 bg-typography-background rounded-xl m-4">
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
              <div>
                <button @click="addToTrends"
                  class=" mt-5 button is-medium is-twitter is-fullwidth is-rounded bg-blue-700">Show More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="[ h-12 ]">

    </div>
  </div>
</template>
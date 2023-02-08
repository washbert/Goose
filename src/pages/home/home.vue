<style scoped lang="scss" src="./home.scss">

</style>
<script lang="ts" src="./home.ts"></script>
<template>
  <div>
    <!--Heading Section of Center Pane-->
    <div class="grid grid-cols-2 mb-3">
      <div class=" h-12 hover:bg-typography-background grid place-items-center ">
        <p class="text-center text-lg ">For you</p>
      </div>
      <div class=" h-12 hover:bg-typography-background grid place-items-center ">
        <p class="text-center text-lg ">Following</p>
      </div>
    </div>
    <!--Tweet Section-->
    <div class="flex flex-row px-5">
      <!--Profile Image-->
      <div class="flex h-12 mr-3">
        <img class="rounded-full" src="./assets/profile_image.jpg" />
      </div>
      <!--Textbox-->
      <div class="flex">
        <input class=" mb-2 w-full border-0 py-3 px-1 focus:outline-none focus:border-border-dark text-xl" v-model="newHonk" type="text"
          placeholder="What's Happening?" />
      </div>

    </div>

    <div class="flex flex-row justify-between px-5 ">
      <span class="text-blue-500 py-3 ">
        <i class=" pr-3 fa-regular  fa-image"></i>
        <i class=" pr-3 fa-solid  fa-list"></i>
        <i class=" pr-3 fa-regular  fa-face-smile"></i>
        <i class=" pr-3 fa-regular  fa-calendar"></i>
        <i class=" pr-3 fa-solid  fa-location-dot"></i>
      </span>
      <button
        class=" text-center col-start-3 rounded-full bg-blue-300 w-20 h-10 text-lg text-white font-medium " @click="addToGooseTables()">Honk</button>
    </div>
    <div class="hover:bg-typography-background grid place-items-center h-12 mt-3 border-typography-background border"
      @click="addToGooseTables()">
      <a class="text-center text-blue-500 no-underline hover:text-blue-500">Show 2 Honks</a>
    </div>

    <section>

      <b-table :data="gooseDataSets" ref="table" detailed :opened-detailed="defaultOpenedDetails" :per-page="fizzBuzz"
        detail-key="id">


        <template #detail="props">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img class="rounded-full" src="./assets/profile_image.jpg" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ props.row.firstName }} {{ props.row.lastName }}</strong>
                  <small>@{{ props.row.firstName }}</small>
                  <small>31m</small>
                  <br>
                  {{ props.row.honk }}
                </p>
                <button class="button" @click="removeHonk(props.row.id)">Delete This Honk</button>
              </div>
              <div class="flex flex-row text-gray-500">
                <i class="flex pr-2 fa-regular fa-comment">
                  <p class="pl-1">5</p>
                </i>
                <i class="flex pr-2 fa-solid fa-repeat">
                  <p class="pl-1">4</p>
                </i>
                <i class="flex pr-2 fa-regular fa-heart">
                  <p class="pl-1">1</p>
                </i>
                <i class="flex pr-2 fa-solid fa-chart-simple">
                  <p class="pl-1">2</p>
                </i>
                <i class="flex fa-solid fa-upload">
                  <p class="pl-1">3</p>
                </i>
              </div>
            </div>
          </article>
        </template>
      </b-table>

    </section>

    <button @click="removeFromTable()">Remove From Table</button>
  </div>


</template>
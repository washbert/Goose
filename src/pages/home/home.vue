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
  <div class="flex flex-row">
    <!--Profile Image-->
    <div class="flex h-12 mr-3">
        <img class="rounded-full" src="./assets/profile_image.jpg" />
    </div>
    <!--Textbox-->
    <div class="flex">
      <input
          class=" mb-2 w-full border-0 py-3 px-1 focus:outline-none focus:border-border-dark text-xl"
          type="text" placeholder="What's Happening?" />
    </div>

  </div>
 
  <div class="flex flex-row ">
<span class="text-blue-500 py-3 ">
    <i class=" pr-3 fa-regular  fa-image"></i>
    <i class=" pr-3 fa-solid  fa-list"></i>
    <i class=" pr-3 fa-regular  fa-face-smile"></i>
    <i class=" pr-3 fa-regular  fa-calendar"></i>
    <i class=" pr-3 fa-solid  fa-location-dot"></i>
  </span>
      <button class="float-right text-center col-start-3 rounded-full bg-blue-300 w-20 h-10 text-lg text-white font-medium ">Honk</button>
    </div>
  <div class="hover:bg-typography-background grid place-items-center h-12 mt-3 border-typography-background border" @click="addToTable">
    <a class="text-center text-blue-500 no-underline hover:text-blue-500" >Show 2 Honks</a>
  </div>

  <section>

<b-table
    :data="gooseDataSets"
    ref="table"
    detailed
    :per-page="fizzBuzz"
    :show-detail-icon="true"
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
    <strong>{{ props.row.user.first_name }} {{ props.row.user.last_name }}</strong>
    <small>@{{ props.row.user.first_name }}</small>
    <small>31m</small>
    <br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
</div>
</div>
        </article>
    </template>
</b-table>

</section>

    <button @click="removeFromTable">Remove From Table</button>
</div>


</template>
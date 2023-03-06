<style scoped lang="scss" src="./home.scss"></style>
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
        <input class=" mb-2 w-full border-0 py-3 px-1 focus:outline-none focus:border-border-dark text-xl"
          v-model="newHonk" type="text" placeholder="What's Happening?" />
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
      <button class=" text-center col-start-3 rounded-full bg-blue-300 w-20 h-10 text-lg text-white font-medium "
        @click="addHonk">Honk</button>
    </div>


    <section>

      <b-table :data="gooseDataSets" ref="table" detailed :opened-detailed="defaultOpenedDetails" :per-page="fizzBuzz"
        detail-key="id">


        <template #detail="props">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img class="rounded-full image is-64x64 w-auto inline-block"
                  :src="require(`./assets/${props.row.displayPic}.jpg`)" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content" :id="`Honk #${props.row.id}`">
                <p :id="`Honk${props.row.id}`">
                  <strong>{{ props.row.firstName }} {{ props.row.lastName }}{{
                    props.row.replies[0].firstName
                  }}</strong>
                  <small>@{{ props.row.firstName }}</small>
                  <small>31m</small>
                  <br>
                  {{ props.row.honk }}
                <p v-if="(props.row.honkImage)" class="">
                  <img class="image is-128x128" :src="require(`./assets/RandomImages/${props.row.honkImage}.jpg`)" />
                </p>
                </p>
                <input class="w-1/2 mb-3 border" :id="`Edit_Honk_Input${props.row.id}`" v-model="editHonk">
                <br />
                <button class="button" :id="`Edit_Honk${props.row.id}`" @click="editUser(props.row.id)">Edit This
                  Honk</button>
                <button class="button ml-10" :id="`Delete_Honk${props.row.id}`" @click="deleteUser(props.row.id)">Delete
                  This
                  Honk</button>
                <b-modal v-model="isActive">
                  <template #default="props3">
                    <!--This is the Nested Table -->
                    <div class="flex">
                      <p class="">
                        <img class="rounded-full image is-64x64" :src="require(`./assets/${loggedInPic}.jpg`)" />
                      </p>
                      <input
                        class=" ml-4 pl-4 mb-2 w-full rounded-full border-0 py-3 px-1 focus:outline-none focus:border-border-dark text-xl"
                        v-model="newHonk" type="text" placeholder="Honk your reply" />
                    </div>
                    <b-table :data="reply" ref="table" detailed :opened-detailed="defaultOpenedDetails"
                      :per-page="fizzBuzz" detail-key="id">
                      <template #detail="props2">
                        <div class="flex">
                          <figure class="media-left">
                            <p class="">
                              <img class="rounded-full image is-64x64"
                                :src="require(`./assets/${props2.row.displayPic}.jpg`)" />
                            </p>
                          </figure>
                          <p>
                            <strong>{{ props2.row.firstName }} {{ props2.row.lastName }}</strong>
                            <small>@{{ props2.row.firstName }}</small>
                            <small>31m</small>
                            <br>
                            {{ props2.row.honk }}
                          </p>
                        </div>
                      </template>
                    </b-table>


                    <!--This is the End of the Nested-->
                    <button @click="props3.close">close</button>
                  </template>
                </b-modal>

              </div>
              <div class="flex flex-row text-gray-500">
                <i class="flex pr-2 fa-regular fa-comment" @click="(isActive = true, showMessages(props.row.id))">
                  <p class="pl-1">{{ replyCounter(props.row.replies) }}</p>

                </i>
                <i class="flex pr-2 fa-solid fa-repeat">
                  <p class="pl-1">{{ props.row.rehonks }}</p>
                </i>
                <i class="flex pr-2 fa-regular fa-heart">
                  <p class="pl-1">{{ props.row.likes }}</p>
                </i>
                <i class="flex pr-2 fa-solid fa-chart-simple">
                  <p class="pl-1">2</p>
                </i>
              </div>
            </div>
          </article>
        </template>
      </b-table>

    </section>
  </div>
</template>
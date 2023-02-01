<style scoped lang="scss" src="./menu-bar.scss">

</style>
<script lang="ts" src="./menu-bar.ts"></script>
<template>
        <aside class=" menu w-full lg:w-1/2 h-full pr-1 sm:pl-5 sm:pr-5 pt-4 ">
                <div class="lg:flex flex-col">
                        <div>
                                <router-link class="no-underline" :to="{ name: 'home' }">
                                        <button
                                                class="flex rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-bold text-black "><i
                                                        class="fa fa-home pt-1 pr-4 inline-grid "></i>
                                                <p class="hidden lg:flex">Home</p>
                                        </button>
                                </router-link>
                        </div>
                        <div>
                                <router-link class="no-underline" :to="{ name: 'explore' }">
                                        <button
                                                class="flex rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-normal text-black "><i
                                                        class="fa-regular fa-hashtag pt-1 pr-4"></i>
                                                <p class="hidden lg:flex">Explore</p>
                                        </button>
                                </router-link>
                        </div>
                        <div>
                                <router-link class="no-underline" :to="{ name: 'notifications' }">
                                        <button
                                                class="flex rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-normal text-black "><i
                                                        class="fa-regular fa-bell pt-1 pr-4"></i>
                                                <p class="hidden lg:flex">Notifications</p>
                                        </button>
                                </router-link>
                        </div>
                        <div>
                                <router-link class="no-underline" :to="{ name: 'messages' }">
                                        <button
                                                class="flex rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-normal text-black "><i
                                                        class="fa-regular fa-envelope pt-1 pr-4"></i>
                                                <p class="hidden lg:flex">Messages</p>
                                        </button>
                                </router-link>
                        </div>
                        <div>
                                <router-link class="no-underline" :to="{ name: 'bookmarks' }">
                                        <button
                                                class="flex rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-normal text-black "><i
                                                        class="fa-regular fa-bookmark pt-1 pr-4"></i>
                                                <p class="hidden lg:flex">Bookmarks</p>
                                        </button>
                                </router-link>
                        </div>
                        <div>
                                <router-link class="no-underline" :to="{ name: 'lists' }">

                                        <button
                                                class="flex rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-normal text-black "><i
                                                        class="fa-solid fa-rectangle-list pt-1 pr-4"></i>
                                                <p class="hidden lg:flex">Lists</p>
                                        </button>
                                </router-link>
                        </div>
                        <div>
                                <router-link class="no-underline" :to="{ name: 'profile' }">
                                        <button
                                                class="flex rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-normal text-black "><i
                                                        class="fa-regular fa-user pt-1 pr-4"></i>
                                                <p class="hidden lg:flex">Profile</p>
                                        </button>
                                </router-link>
                        </div>
                        <div>
                                <router-link class="no-underline" :to="{ name: 'explore' }">
                                        <button
                                                class="flex rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-normal text-black "><i
                                                        class="fa-solid fa-ellipsis pt-1 pr-4"></i>
                                                <p class="hidden lg:flex">More</p>
                                        </button>
                                </router-link>
                        </div>
                        <div>
                                <router-link class="no-underline" :to="{ name: 'explore' }">
                                        <button
                                                class=" lg:mt-5 button sm:is-small lg:is-large is-twitter is-fullwidth is-rounded bg-blue-700"><i
                                                        class="fa-solid fa-feather-pointed"></i>
                                                <p class="hidden lg:flex">Quack</p>
                                        </button>
                                </router-link>
                        </div>
                </div>
        </aside>
</template>
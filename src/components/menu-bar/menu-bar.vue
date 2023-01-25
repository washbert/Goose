<style scoped lang="scss" src="./menu-bar.scss">

</style>
<script lang="ts" src="./menu-bar.ts"></script>
<template>
    <aside class=" col-start-2 menu w-3/4 h-full pl-5 pt-4 grid-flow-row ">
        <div>
               <button class=" rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-bold text-black "><i class="fa fa-home pr-4 inline-grid "></i>Home</button>
        </div>
        <div>
                <button class=" rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-normal text-black "><i class="fa-regular fa-hashtag pr-4"></i>Explore</button>
        </div>
        <div>
                <button class=" rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-normal text-black "><i class="fa-regular fa-bell pr-4"></i>Notifications</button>
        </div>
        <div>
                <button class=" rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-normal text-black "><i class="fa-regular fa-envelope pr-4"></i>Messages</button>
        </div>
        <div>
                <button class=" rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-normal text-black "><i class="fa-regular fa-bookmark pr-4"></i>Bookmarks</button>
        </div>
        <div>
                <button class=" rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-normal text-black "><i class="fa-solid fa-rectangle-list pr-4"></i>Lists</button>
        </div>
        <div>
                <button class=" rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-normal text-black "><i class="fa-regular fa-user pr-4"></i>Profile</button>
        </div>
        <div>
                <button class=" rounded-full py-3 pl-2 pr-5 text-xl hover:bg-gray-300 font-normal text-black "><i class="fa-solid fa-ellipsis pr-4"></i>More</button>
        </div>
        <div>
                <button class=" mt-5 button is-large is-twitter is-fullwidth is-rounded bg-blue-700">Quack</button>
        </div>
    </aside>
</template>
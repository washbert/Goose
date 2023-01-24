<style scoped lang="scss" src="./home.scss">

</style>
<script lang="ts" src="./home.ts"></script>
<template>
  <div>
    <button class="button" @click="addToTable">Show more Honks</button>
    <b-table :data="dataSets" :columns="dataColumn"></b-table>

    <button @click="removeFromTable">Remove From Table</button>
  </div>

</template>
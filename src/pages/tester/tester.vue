<style scoped lang="scss" src="./tester.scss">

</style>
<script lang="ts" src="./tester.ts">
</script>
<template>
  <div>
    {{ profile[1].user }}
    <form>
      <input type="number" v-model="formIdData">
      <input type="text" v-model="formNameData">
      <input type="number" v-model="formAgeData">
      <input type="number" v-model="deleteSelector">
      <button @click.prevent="editUser"> Add Names</button>
      <button class="button" @click.prevent="deleteUser">Delete User</button>
    </form>
    <input type="text" v-model="state">
    <button class="button" @click="onIncreament" id="increment">Increment</button>
    <button class="button" id="decrement" @click="onDecreament">Decrement</button>

  </div>
</template>
<style>
.p-1 {
  padding: 1em;
}
</style>
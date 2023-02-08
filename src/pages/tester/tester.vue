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
      <button @click.prevent="deleteUser"> Add Names</button>
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
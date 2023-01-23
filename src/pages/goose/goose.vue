<style scoped lang="scss" src="./goose.scss">

</style>
<script lang="ts" src="./goose.ts"></script>
<template>
  <div class=" flex flex-col items-center md:content-center md:flex-row md:justify-center">
    <div class="  sm:w-400 self-start text-center md:text-left mb-4 ">
      <h1 class=" text-typography-secondary hover:text-typography-primary mb-0 ">
        Goose
      </h1>
      <h3 class=" text-typography-primary ">
        Connect with other Geese around the world to find the best way forward.
      </h3>
    </div>

    <div class="  mx-5 w-396 justify-center bg-login-form-background rounded-lg pt-5 pb-8 px-3 shadow-xl ">
      <form class="w-full mb-3 ">
        <input
          class=" mb-2 w-full rounded border-border-light border py-3 px-1 focus:outline-none focus:border-border-dark"
          type="text" name="email" placeholder="Email or phone number" />
        <input
          class=" mb-2 w-full rounded border-border-light border py-3 px-1 focus:outline-none focus:border-border-dark"
          type="password" placeholder="Password" />

        <input
          class="w-full py-2 border-1 bg-button-background-main text-2xl font-semibold text-button-text-color rounded-lg hover:bg-button-background-hover hover:text-button-text-color"
          type="submit" value="Log In" />
      </form>
      <div class=" mt-5 text-center ">
        <a href="#" class="no-underline hover:underline">Forgot password?</a>
      </div>
      <div class="mx-auto text-center">
        <button
          class="w-28 rounded-md mt-5 p-3 bg-button-success text-lg font-semibold text-button-text-color hover:text-button-text-color hover:bg-button-success-secondary ">
          Create new account
        </button>
      </div>
    </div>
  </div>
</template>
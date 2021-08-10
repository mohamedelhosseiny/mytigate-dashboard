<template>
  <div class="bg-deep-blue h-full pt-20 pl-10 pr-10">
    <img class="mb-30" src="@/assets/images/logo.png" alt="Mytigate" />
    <ul>
      <li>
        <svg-component icon="home" />
        <nuxt-link class="text-white" to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link class="text-white" to="/dashboard">Dashboard</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>

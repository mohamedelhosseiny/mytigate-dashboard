<template>
  <div
    class="
      sidebar
      relative
      bg-deep-blue
      h-full
      pt-20
      px-section
      md:px-section-md
      lg:px-section-lg
    "
  >
    <img class="mb-30" src="@/assets/images/logo.png" alt="Mytigate" />
    <ul>
      <li class="flex items-center mb-15">
        <svg-component class="mr-5" icon="home" />
        <nuxt-link class="text-white" to="/">Home</nuxt-link>
      </li>
      <li class="flex items-center mb-15">
        <svg-component class="mr-5" icon="dashboard" />
        <nuxt-link class="text-white" to="/dashboard">Dashboard</nuxt-link>
      </li>
    </ul>
    <div class="sidebar_burger">
      <div class="sidebar_burger_bar mb-5"></div>
      <div class="sidebar_burger_bar"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
  font-weight: bold;
}
.sidebar {
  &_burger {
    position: absolute;
    top: 40px;
    right: 0px;
    padding: 10px;
    background-color: var(--deep-blue);
    transform: translateX(100%);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    &_bar {
      height: 2px;
      width: 15px;
      background-color: white;
      &:last-of-type() {
        margin-bottom: 0px;
      }
    }
  }
}
</style>

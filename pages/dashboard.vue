<template>
  <div class="flex">
    <div class="relative w-full search">
      <input
        placeholder="Search..."
        class="rounded-l pr-15 py-10 border w-full"
        type="text"
      />
      <svg-component class="search_icon" icon="search" />
    </div>
    <button class="bg-blue text-white rounded py-10 px-15">Search</button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.search {
  input {
    padding-left: 35px;
    &:focus {
      outline-color: rgba(0, 0, 0, 0.2);
    }
  }
  &_icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
  }
}
</style>

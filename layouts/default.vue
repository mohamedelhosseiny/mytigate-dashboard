<template>
  <div class="flex max-h-screen h-screen max-w-screen w-screen">
    <aside>
      <mytigate-sidebar />
    </aside>
    <main class="flex-grow flex flex-col">
      <mytigate-navbar />
      <div
        class="
          mt-20
          md:mt-30
          px-section
          md:px-section-md
          lg:px-section-lg
          flex-grow
        "
      >
        <nuxt />
      </div>
      <mytigate-footer />
    </main>
  </div>
</template>

<script>
import mytigateNavbar from '@/components/layout/mytigateNavbar.vue'
import mytigateFooter from '@/components/layout/mytigateFooter.vue'
import mytigateSidebar from '@/components/layout/mytigateSidebar.vue'

export default {
  components: {
    mytigateFooter,
    mytigateNavbar,
    mytigateSidebar,
  },
}
</script>

<style lang="scss" scoped></style>

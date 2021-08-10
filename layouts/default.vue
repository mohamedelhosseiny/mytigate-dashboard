<template>
  <div class="flex">
    <aside>
      <mytigate-sidebar />
    </aside>
    <main>
      <mytigate-navbar />
      <nuxt />
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

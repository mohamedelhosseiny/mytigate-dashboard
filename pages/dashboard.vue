<template>
  <div>
    <h1 class="sr-only">Dashboard</h1>
    <search-form />
    <search-results />
  </div>
</template>

<script>
import searchForm from '@/components/dashboard/searchForm.vue'
import searchResults from '@/components/dashboard/searchResults.vue'

export default {
  head: {
    title: 'Dashboard',
  },
  components: {
    searchResults,
    searchForm,
  },
}
</script>

<style lang="scss" scoped></style>

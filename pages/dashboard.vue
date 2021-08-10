<template>
  <div>
    <search-form />
    <search-results />
  </div>
</template>

<script>
import searchForm from '@/components/dashboard/searchForm.vue'
import searchResults from '@/components/dashboard/searchResults.vue'

export default {
  components: {
    searchResults,
    searchForm,
  },
}
</script>

<style lang="scss" scoped></style>

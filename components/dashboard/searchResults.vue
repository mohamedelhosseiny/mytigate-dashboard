<template>
  <div class="results my-20">
    <div>
      <div v-if="$store.state.isLoading" class="flex justify-center w-full">
        <div class="loading"></div>
      </div>
      <div
        class="results flex flex-wrap"
        v-if="$store.state.searchResults.length > 0"
      >
        <card
          class="w-one-third"
          v-for="country in $store.state.searchResults"
          :key="country._id"
          :country="country"
        />
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/utils/card.vue'

export default {
  components: {
    card,
  },
}
</script>

<style lang="scss" scoped>
.results {
  .card {
  }
}

.loading {
  text-align: center;
  z-index: 99;
  width: 40px;
  height: 40px;
  border-top: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 0px solid gray;
  border-radius: 50%;
  background-color: white;
  animation: spin 0.8s infinite forwards 0s ease-in;
  @keyframes spin {
    0% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
}
</style>

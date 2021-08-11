<template>
  <div class="p-5">
    <nuxt-link
      :to="`/countries/${country.country}`"
      class="card rounded flex items-center flex-col p-20 bg-white"
    >
      <h2 class="text-center font-bold mb-10 text-black text-1">
        {{ country.country }}
      </h2>
      <img
        class="card_image"
        :src="country.countryInfo.flag"
        :alt="country.country"
      />
      <p class="text-center text-black text-1 mt-20 mb-10">
        Total cases:
        <strong>{{ new Intl.NumberFormat().format(country.cases) }}</strong>
      </p>
      <p class="text-center text-blue text-1 mt-20 mb-10">
        Recovered:
        <strong>{{ new Intl.NumberFormat().format(country.recovered) }}</strong>
      </p>
      <p class="text-center text-red text-1 mt-20 mb-10">
        Deaths:
        <strong>{{ new Intl.NumberFormat().format(country.deaths) }}</strong>
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.3);
  &_image {
    box-shadow: 1px 1px 10px -3px black;
    height: 100px;
    width: auto;
  }
}
</style>

<template>
  <div>
    <div class="flex">
      <div class="relative w-full search">
        <input
          placeholder="Search..."
          class="rounded-l pr-15 py-10 border w-full"
          type="text"
          @keyup="isCountryChosen = false"
          v-model="query"
        />
        <svg-component class="search_icon" icon="search" />
      </div>
      <button class="bg-blue text-white rounded py-10 px-15">Search</button>
    </div>
    <template v-if="query">
      <div v-for="(country, index) in filteredCountries" class="autocomplete">
        <p
          @click="chooseCountry(country)"
          v-if="!isCountryChosen && index < 10"
        >
          <strong>{{ country.substr(0, query.length) }}</strong
          >{{ country.substr(query.length) }}
        </p>
      </div>
    </template>
  </div>
</template>

<script>
import countries from '@/api/countries'

export default {
  computed: {
    filteredCountries() {
      let countries = this.countries.filter((country) => {
        return (
          country.substr(0, this.query.length).toLowerCase() ==
          this.query.toLowerCase()
        )
      })
      return countries
    },
  },
  methods: {
    chooseCountry(country) {
      this.query = country
      this.isCountryChosen = true
    },
  },
  data() {
    return {
      query: '',
      countries,
      isCountryChosen: false,
    }
  },
}
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

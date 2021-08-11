<template>
  <div>
    <form id="search_form" @submit.prevent="fetchCountriesInfo" class="flex">
      <div class="relative w-full search">
        <input
          placeholder="Search..."
          class="
            rounded-l
            pr-15
            py-10
            border border-opacity-20 border-black
            w-full
          "
          type="text"
          @keyup="isCountryChosen = false"
          v-model="query"
          ref="searchInput"
        />
        <svg-component class="search_icon" icon="search" />
        <div v-if="query" class="list border z-10 bg-white">
          <p
            v-for="(country, index) in filteredCountries"
            @click="chooseCountry(country)"
            v-if="!isCountryChosen && index < 10"
            class="py-10 border-b border-pearl cursor-pointer"
          >
            <strong>{{ country.substr(0, query.length) }}</strong
            >{{ country.substr(query.length) }}
            <span class="float-right text-gray mr-10 italic text-3"
              >Click to choose</span
            >
          </p>
        </div>
      </div>
      <button type="submit" class="bg-blue text-white rounded py-10 px-15">
        Search
      </button>
    </form>
    <div class="mt-10">
      <span
        v-for="country in chosenCountries"
        class="bg-gray mr-5 rounded py-5 px-10 text-white"
        >{{ country }}
        <span
          class="font-bold ml-5 cursor-pointer"
          @click="unselectCountry(country)"
          >x</span
        >
      </span>
    </div>
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
  watch: {
    chosenCountries(value) {
      this.$store.commit('updateChosenCountries', value)
    },
  },
  methods: {
    fetchCountriesInfo() {
      if (this.chosenCountries.length > 0) {
        this.$store.dispatch('fetchCountriesInfo')
      }
    },
    unselectCountry(country) {
      let filteredArray = this.chosenCountries.filter((arrayCountry) => {
        return arrayCountry !== country
      })
      this.chosenCountries = filteredArray
    },
    chooseCountry(country) {
      this.query = ''
      if (!this.chosenCountries.includes(country)) {
        this.chosenCountries.push(country)
      }
      this.isCountryChosen = true
      this.$refs.searchInput.focus()
    },
  },
  data() {
    return {
      query: '',
      countries,
      chosenCountries: [],
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
      outline-color: rgba(0, 0, 0, 0.3);
    }
  }
  .list {
    position: absolute;
    top: 100%;
    padding-left: 35px;
    width: 100%;
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

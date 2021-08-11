export const strict = false

export const state = () => ({
  chosenCountries: [],
  searchResults: [],
  isLoading: false,
})

export const mutations = {
  updateChosenCountries(state, payload) {
    state.chosenCountries = payload
  },
  setSearchResults(state, countries) {
    // the api returns an object if only one result retruned
    console.log(countries)
    if (Array.isArray(countries)) {
      state.searchResults = countries
    } else {
      state.searchResults.push(countries)
    }
  },
}

export const actions = {
  async fetchCountriesInfo({ commit, state }) {
    state.searchResults = []
    state.isLoading = true
    let formattedCountriesList = state.chosenCountries.join(',')
    const data = await this.$axios.get(`/countries/${formattedCountriesList}`)
    if (data) {
      state.isLoading = false
    }
    commit('setSearchResults', data.data)
  },
}

export const strict = false

export const state = () => ({
  chosenCountries: [],
  searchResults: [],
})

export const mutations = {
  updateChosenCountries(state, payload) {
    state.chosenCountries = payload
  },
  setSearchResults(state, countries) {
    searchResults = countries
  },
}

export const actions = {
  async fetchCountriesInfo({ commit, state }) {
    console.log(state.chosenCountries)
    let formattedCountriesList = state.chosenCountries.join(',')
    console.log(formattedCountriesList)
    const data = await this.$axios.get(`/countries/${formattedCountriesList}`)
    commit('setSearchResults', data.data)
  },
}

export const strict = false

export const state = () => ({
  chosenCountries: [],
})

export const mutations = {
  updateChosenCountries(state, payload) {
    state.chosenCountries = payload
  },
}

export const actions = {
  async fetchContactInfo({ commit }) {
    const data = await this.$axios.get(
      `/singletons/get/contact_info?token=${process.env.token}`
    )
    commit('fetchContactInfo', data.data)
  },
}

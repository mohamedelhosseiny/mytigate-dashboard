<template>
  <div class="results my-20">
    <div class="flex flex-wrap">
      <div v-if="$store.state.isLoading" class="flex justify-center w-full">
        <div class="loading"></div>
      </div>
      <div
        v-if="$store.state.searchResults.length > 0"
        class="
          card
          rounded
          border border-pearl
          flex
          items-center
          flex-col
          p-20
          w-one-third
          bg-white
        "
        v-for="country in $store.state.searchResults"
      >
        <!-- {{ country }} -->
        <h2 class="text-center font-bold text-black text-1">
          {{ country.country }}
        </h2>
        <img :src="country.countryInfo.flag" :alt="country.country" />
        <h2 class="text-center font-bold text-black text-1">
          Total cases: {{ country.cases }}
        </h2>
        <!-- { "updated": 1628607707617, "country": "France", "countryInfo": { "_id":
        250, "iso2": "FR", "iso3": "FRA", "lat": 46, "long": 2, "flag":
        "https://disease.sh/assets/img/flags/fr.png" }, "cases": 6310933,
        "todayCases": 0, "deaths": 112288, "todayDeaths": 0, "recovered":
        5777774, "todayRecovered": 0, "active": 420871, "critical": 1667,
        "casesPerOneMillion": 96449, "deathsPerOneMillion": 1716, "tests":
        110018641, "testsPerOneMillion": 1681391, "population": 65433111,
        "continent": "Europe", "oneCasePerPeople": 10, "oneDeathPerPeople": 583,
        "oneTestPerPeople": 1, "activePerOneMillion": 6432.08,
        "recoveredPerOneMillion": 88300.46, "criticalPerOneMillion": 25.48 } -->
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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

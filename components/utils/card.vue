<template>
  <div class="p-5">
    <div class="card rounded flex items-center flex-col p-20 bg-white">
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

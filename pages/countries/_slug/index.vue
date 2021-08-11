<template>
  <div>
    <h1 class="font-bold text-center">{{ country.country }}</h1>
    <div class="canvas_wrapper mb-40">
      <canvas id="cases"></canvas>
    </div>
    <div class="canvas_wrapper mb-40">
      <canvas id="deaths"></canvas>
    </div>
    <div class="canvas_wrapper mb-40">
      <canvas id="recoveries"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  async asyncData({ $axios, params }) {
    const result = await $axios.get(`/historical/${params.slug}?lastdays=30`)
    return {
      country: result.data,
    }
  },
  mounted() {
    this.generateChart('cases', 'cases')
    this.generateChart('deaths', 'deaths')
    this.generateChart('recoveries', 'recovered')
  },
  methods: {
    generateChart(elementId, chartData) {
      var canvas = document.getElementById(elementId)

      new Chart(canvas, {
        type: 'line',
        data: {
          labels: Object.keys(this.country.timeline[chartData]),
          datasets: [
            {
              label: chartData,
              data: Object.values(this.country.timeline[chartData]),
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.canvas_wrapper {
  width: 95%;
  margin: 0 auto 50px auto;
  // height: 400px;
  position: relative;
}
h1 {
  font-size: 40px;
}
canvas {
  // width: 100%;
  // height: 300px;
  // border: 1px solid black;
}
</style>

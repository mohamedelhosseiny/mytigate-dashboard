<template>
  <div>
    {{ $route.params.slug }}
    <div class="canvas_wrapper">
      <canvas id="chart"></canvas>
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
    var canvas = document.getElementById('chart')

    var chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: Object.keys(this.country.timeline.cases),
        datasets: [
          {
            data: Object.values(this.country.timeline.cases),
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    })
  },
}
</script>

<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 300px;
  border: 1px solid black;
}
</style>

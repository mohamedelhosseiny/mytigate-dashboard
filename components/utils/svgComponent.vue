<template>
  <component :is="`${icon}Svg`"></component>
</template>

<script>
import homeSvg from '@/components/svgs/homeSvg.vue'
import notificationSvg from '@/components/svgs/notificationSvg.vue'
import dashboardSvg from '@/components/svgs/dashboardSvg.vue'
import personSvg from '@/components/svgs/personSvg.vue'
import searchSvg from '@/components/svgs/searchSvg.vue'

export default {
  components: {
    homeSvg,
    notificationSvg,
    dashboardSvg,
    searchSvg,
    personSvg,
  },
  props: {
    icon: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped></style>

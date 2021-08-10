<template>
  <component :is="`${icon}Svg`"></component>
</template>

<script>
import homeSvg from '@/components/svgs/homeSvg.vue'
import notificationSvg from '@/components/svgs/notificationSvg.vue'
import dashboardSvg from '@/components/svgs/dashboardSvg.vue'
import personSvg from '@/components/svgs/personSvg.vue'

export default {
  components: {
    homeSvg,
    notificationSvg,
    dashboardSvg,
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

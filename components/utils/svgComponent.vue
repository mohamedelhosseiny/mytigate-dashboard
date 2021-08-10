<template>
  <component :is="`${icon}Svg`"></component>
</template>

<script>
import homeSvg from '@/components/svgs/homeSvg.vue'
import notificationSvg from '@/components/svgs/notificationSvg.vue'

export default {
  components: {
    homeSvg,
    notificationSvg,
  },
  props: {
    icon: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped></style>

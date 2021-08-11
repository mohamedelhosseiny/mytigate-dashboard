<template>
  <footer
    class="
      bg-pearl
      w-full
      sm:flex-row
      flex flex-col
      md:px-section-md
      lg:px-section-lg
      px-section
      py-20
    "
  >
    <div class="mb-20 mr-30 md:mr-75">
      <ul class="text-deep-blue">
        <li>Version 1.1.0</li>
        <li><a href="mailto:support@mytigate.com">Support@mytigate.com</a></li>
        <li>Technical Documentation</li>
      </ul>
    </div>
    <div>
      <ul class="text-deep-blue">
        <li>&copy; Copyright 2019 - {{ new Date().getFullYear() }}</li>
        <li><a href="mailto:support@mytigate.com">Mytigate Gmbh</a></li>
        <li>All rights reserved</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>

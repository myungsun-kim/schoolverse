<template>
  <div class="main-wrapper">
    <section>
      <SearchBar />
      <router-view />
    </section>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue"

export default {
  name: "HomeLayout",
  components: { SearchBar },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  // background-color: #f0e5de;
  background-image: url('../assets/classroom1.jpg');
  background-size: 100%;

  section {
    // @apply w-full h-auto min-h-screen mx-auto shadow-2xl sm:w-full lg:w-2/5;
    @apply w-full h-full min-h-screen mx-auto;
  }
}
</style>


<template>
  <div class="accounts-wrapper">
    <section>
      <SearchBar />
      <router-view />
      <!-- <Footer v-if="$route.fullPath.includes('sign')" /> -->
    </section>
  </div>
</template>

<script>
// import Footer from "@/components/Footer.vue"
import SearchBar from "@/components/SearchBar.vue"

export default {
  name: "AccountsLayout",
  components: { SearchBar },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.accounts-wrapper {
  background-image: url('../assets/classroom.png');
  background-size:100%;
  // opacity:0.5!important;
  background-color: #f0e5de;

  section {
    @apply w-full h-full min-h-screen mx-auto;
  }
}
</style>

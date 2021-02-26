<template>
  <div class="home-container">
    <itemcontainer fathercomponent="home"></itemcontainer>
  </div>
</template>

<script>
import itemcontainer from "@/components/itemContainer";

export default {
  name: "home",
  components: {
    itemcontainer,
  },
};
</script>

<style>
</style>
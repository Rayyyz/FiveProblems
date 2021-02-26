<template>
  <div class="item-container">
    <itemcontainer fathercomponent="item"></itemcontainer>
  </div>
</template>

<script>
import itemcontainer from "@/components/itemContainer";

export default {
  name: "item",
  components: {
    itemcontainer,
  },
};
</script>

<style>
</style>
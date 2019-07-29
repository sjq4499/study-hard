<template>
  <div>
    home page
    <div class="item"
         v-for="item in list"
         :key="item.id">
      <myList :item="item"></myList>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import myList from "@/components/List";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    myList
  },
  methods: {
    ...mapActions({
      getlist: "home/getlist"
    })
  },
  computed: {
    ...mapState({
      list: state => state.home.list
    })
  },
  mounted() {
    this.getlist();
  }
};
</script>

<style>
</style>

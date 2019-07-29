<template>
  <div class="item-i">
    <h4 @click="detail(item)">{{item.name}}</h4>
    <div>价格：{{item.moneny}}</div>
    <div class="count">
      <button @click="count('+',item.id,item.num)">+</button>
      <div v-if="item.num>0">
        <span>{{item.num}}</span>
        <button @click="count('-',item.id,item.num)">-</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "list",
  props: ["item"],
  methods: {
    ...mapMutations({
      Count: "home/count"
    }),
    count(type, id, num) {
      let newnum = num;
      console.log(newnum);
      if (type === "+") {
        newnum++;
        // console.log("+");
      } else {
        // console.log("-");
        newnum--;
      }
      this.Count({ id, num: newnum });
    },
    //跳详情
    detail(item) {
      this.$router.push({ path: "detail/0", query: { item } });
    }
  }
};
</script>

<style>
.item-i {
  height: 100px;
  padding: 4px;
  border-bottom: solid 1px #ccc;
  margin-top: 5px;
}
.count {
  display: flex;
}
.count button {
  border: none;
  width: 40px;
  height: 20px;
}
</style>

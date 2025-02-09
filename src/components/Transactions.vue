<template>
  <div class="container">
    <h2>Transactions: </h2>
    <div v-for="(transaction, i) in transactions" :key="i">
        <TransactionElement class="tx-el" :transaction="transaction"/>
    </div>
  </div>
</template>

<script>
import TransactionElement from './TransactionElement.vue';

import { getTransactions } from "@/services/txService";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Transactions",
  components: {
    TransactionElement
  },
  data() {
    return {
      transactions: Array,
    };
  },
  async mounted() {
    const key = process.env.VUE_APP_ETHERSCAN_API_KEY;
    const txns = await getTransactions(key);

    this.transactions = txns;
  },
};
</script>

<style scoped>
h2 {
    color: #ea23dd;
    margin-bottom: 50px;
}
.container {
  margin-bottom: 150px;
}

@media screen and (max-width: 575px) {
  .container {
    margin-bottom: 100px;
  }
}

</style>
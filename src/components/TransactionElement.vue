<template>
  <div class="row">
    <div class="col tstamp">{{ new Date(this.transaction.timeStamp * 1000).toLocaleString() }}</div>
    <div class="col action">{{ this.transaction.from == '0x4684da1c981a8732c98ddacf06be1668b37423d0' ? 'SEND' : 'RECEIVE' }}</div>
    <div class="col amount" :style="{color: transaction.from == '0x4684da1c981a8732c98ddacf06be1668b37423d0' ? 'red' : '#92CD5E'}">{{ this.transaction.value / (10 ** transaction.tokenDecimal) }} {{ this.transaction.tokenSymbol }}</div>
  </div>
</template>

<script>
export default {
  name: "TransactionElement",
  props: {
    transaction: Object,
  },
  mounted() {
  }
};
</script>

<style scoped>
.row {
    margin-bottom: 30px;
}
.tstamp {
  color: #ea23dd !important;
}
.action {
  color: white;
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .col {
    font-size: 15px;
  }
}

@media screen and (max-width: 575px) {
  .col {
    font-size: 13px;
  }
}
</style>
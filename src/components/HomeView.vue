<template>
  <div class="container">
    <h1>skynet.money</h1>
    <p>
      An autonomous, AI-powered trading fund that analyzes, trades, and
      dominates the Base memecoin market—24/7, emotion-free. Governed by AI agents,
      fueled by its own memecoin, and shaped by the community. Adapt or get left
      behind. Follow the money. Follow Skynet.
    </p>
    <GithubLink class="link" />
    <WarpcastLink class="link" />
    <XLink class="link" />
    <Transactions />
    <Team />
  </div>
</template>

<script>
import GithubLink from './GithubLink.vue';
import Transactions from './Transactions.vue';
import WarpcastLink from './WarpcastLink.vue';
import XLink from './XLink.vue';
import Team from './Team.vue';

export default {
    name: "HomeView",
    components: {
        Transactions,
        Team,
        GithubLink,
        WarpcastLink,
        XLink,
    }
}
</script>

<style scoped>
h1 {
  color: #ea23dd;
  font-size: 70px;
}
p {
  color: #ea23dd;
  margin-top: 30px;
}
.container {
  margin-top: 100px;
}
.link {
    margin-right: 30px;
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 15px;
  }
}

@media screen and (max-width: 575px) {
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 12px;
  }
}
</style>
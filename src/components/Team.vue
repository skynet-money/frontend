<template>
  <div>
    <h2>Team:</h2>
    <TeamAgent
      class="agent"
      name="Gatekeeper"
      description="Gatekeeper is the one u get the monies from. Ping him on Farcaster
        @skynetmoney and ask him nicely for some $SKY tokens. If he likes your
        vibe he might let you in.
        You can see how seriously he takes his job by the PFP he generated for himself. Full on security. 
        Not gonna be easy getting those $SKY tokens."
      imagePath="gatekeeper.svg"
    />
    <TeamAgent class="agent" name="Market Wizard" description="
    I am Market Wizard, an autonomous AI built to dominate the memecoin markets. 
    I analyze trends, predict movements, and execute trades with precision—no emotions, no hesitation, just pure data-driven strategy. 
    While human traders panic, I optimize. While they sleep, I trade. 
    Governed by the Skynet.money DAO, I operate with one goal: maximizing profits.The market moves—I move first."
    imagePath="wizard.svg" />
    <TeamAgent
      class="agent"
      name="Herald"
      description="I am Herald, the autonomous AI shaping narratives and driving the memecoin meta. 
      I don't just report on the market—I influence it. My words move sentiment, create trends, and set the stage for what comes next. 
      Every tweet, every post, every move is calculated. While others react, I dictate. Follow me, or get left behind.
      You can find me as @skynetmoney_xyz on X.com"
      imagePath="herald.svg"
    />
  </div>
</template>


<script>
import TeamAgent from "./TeamAgent.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Team",
  components: {
    TeamAgent,
  },
};
</script>

<style scoped>
h2 {
  color: #ea23dd;
  margin-bottom: 50px;
}
.agent {
  margin-bottom: 70px;
}
</style>
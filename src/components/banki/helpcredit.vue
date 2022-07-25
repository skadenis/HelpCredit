<template>
  <div>
    <div class="helpcredit">
      <div class="header">
        <div class="logo">
          <img src="../../assets/logo-helpcredit.svg" alt="логотип" />
        </div>
        <div class="partners">
          <img src="../../assets/partners.svg" alt="логотип" />
        </div>
      </div>
      <div class="content">
        <h1>ПРОЙДИ ТЕСТ И ПОЛУЧИ КРЕДИТ ОТ БАНКА С 98% ШАНСОМ</h1>
        <h3>
          На основании ответов мы подберем выгодный кредит из 23 банков Беларуси
          и поможем получить деньги
        </h3>
        <div>
          <button @click="$emit('someEvent')">НАЧАТЬ ТЕСТ</button>
        </div>
      </div>
    </div>

    <disclamer siteName="Bank-Credit.by" />
  </div>
</template>

<script>
import disclamer from "@/components/quiz/disclamer.vue";

export default {
  name: "help-credit",
  data() {
    return {
      amount: 146378,
    };
  },
  methods: {
    formatter: function (param) {
      return new Intl.NumberFormat("BY", {
        style: "currency",
        currency: "BYN",
      }).format(param);
    },
  },
  components: {
    disclamer,
  },
};
</script>

<style scoped>
.helpcredit {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url("/src/assets/bg.png");
  background-size: cover;
  min-height: 100vh;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
}

.header .logo img {
  width: 286px;
}

@media screen and (max-width: 800px) {
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header .logo {
    margin-bottom: 30px;
  }

  .header .partners img {
    width: 286px;
  }
}
</style>

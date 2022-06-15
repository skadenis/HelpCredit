<template>
  <div class="header">
    <div class="partners">
      <img src="../../assets/partners.svg" alt="логотип" />
    </div>
    <div class="logo">
      <img src="../../assets/logo-helpcredit.svg" alt="логотип" />
    </div>

    <div class="today_credit_block">
      <p class="today_credit">Cегодня одобрено кредитов на:</p>
      <p class="today_credit_amount">{{ formatter(amount) }}</p>
    </div>
  </div>
  <div class="content">
    <h1>ПРОЙДИ ТЕСТ И ПОЛУЧИ КРЕДИТ ОТ БАНКА С 98% ШАНСОМ</h1>
    <h3>
      На основании ответов мы подберем выгодный кредит из 23 банков Беларуси и
      поможем получить деньги
    </h3>
    <div>
      <button @click="$emit('someEvent')">НАЧАТЬ ТЕСТ</button>
    </div>
  </div>
  <disclamer siteName="BankCredit.by" />
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
footer {
  background: #fff;
  width: 100%;
}
</style>

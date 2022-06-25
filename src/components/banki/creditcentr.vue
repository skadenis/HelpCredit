<template>
  <div>
    <div class="wrapper">
      <div class="header-block">
        <partnerslogo />
        <span class="header"
          ><span>20</span> банков готовы одобрить <br />кредит по сниженной
          ставке</span
        >
      </div>
      <div class="statistics">
        <p>
          {{ clients }}
          <span
            >благодарных<br />
            клиента</span
          >
        </p>
        <p>{{ approval }} <span>одобрения</span></p>
        <p>
          {{ rating }}
          <span
            >звезды средняя<br />
            оценка сервиса</span
          >
        </p>
      </div>
      <div class="button-block">
        <button @click="$emit('someEvent')" class="button">Начать тест</button>
        <p>Пройди тест и получи кредит от банка с 98% шансом</p>
      </div>
    </div>
    <div class="statistics-bottom">
      <p>
        {{ clients }}
        <span>благодарных клиента</span>
      </p>
      <p>{{ approval }} <span>одобрения</span></p>
      <p>
        {{ rating }}
        <span>звезды средняя оценка сервиса</span>
      </p>
    </div>
    <disclamer siteName="CreditCentr.by" />
  </div>
</template>

<script>
import disclamer from "@/components/quiz/disclamer.vue";
import partnerslogo from "@/components/banki/partnerslogo.vue";

export default {
  name: "credit-centr",
  data() {
    return {
      clients: 10315,
      approval: "92,7%",
      rating: "4,8",
    };
  },
  components: {
    disclamer,
    partnerslogo,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap");

* {
  font-family: "Inter", sans-serif;
}

.wrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  padding: 40px 75px 50px 75px;

  background-color: #fff;
  background-image: url(../../assets/creditcentr.jpg);
  background-size: cover;
  background-position: top;
}

.header {
  margin-top: 50px;
  display: block;

  font-size: 46px;
  font-weight: 900;
  color: #000;
  line-height: 55.67px;

  text-shadow: 0px 0px 24px rgba(225, 225, 225, 0.7);
}

.header span {
  color: rgba(0, 194, 89, 1);
  font-size: 1.2em;
}

.statistics {
  margin: 50px 0;
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;
  width: 646px;
  background-color: #fff;
  border: 1px solid #ececec;
  border-radius: 10px;
}

.statistics p {
  padding: 0 15px;
  width: 33%;
  margin-block: 0;
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  color: rgba(0, 194, 89, 1);
  font-weight: 900;
  font-size: 28px;
  line-height: 34.13px;
}

.statistics p:nth-child(2) {
  border-left: 1px solid rgba(236, 236, 236, 1);
  border-right: 1px solid rgba(236, 236, 236, 1);
}

.statistics p span {
  margin-left: 12px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 400;
  color: rgba(57, 57, 57, 1);
}

.button-block {
  margin-top: 20px;
  width: 317px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-block p {
  font-size: 12px;
  line-height: 16.8px;
  color: rgba(120, 120, 120, 1);
  text-align: center;
}

.button {
  margin-bottom: 34px;
  width: 283px;
  height: 73px;

  font-size: 18px;
  font-weight: 700;
  color: rgb(255, 255, 255);

  border: none;
  background: linear-gradient(
      180deg,
      rgba(132, 235, 155, 0.6) 5.48%,
      rgba(30, 184, 64, 0.6) 96.58%
    ),
    #1eb940;
  box-shadow: 0px 22px 25px -15px rgba(0, 194, 89, 0.4);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:hover,
.button:active {
  transform: scale(105%);
  background: linear-gradient(
      90deg,
      rgba(132, 235, 155, 0.6) 5.48%,
      rgba(30, 184, 64, 0.6) 96.58%
    ),
    #1eb940;
}

.button:active {
  box-shadow: inset 2px 2px 10px 2px #1eb940;
}

.statistics-bottom {
  background-color: #fff;
  display: none;
}
.statistics-bottom p {
  margin: 0 50px;
  margin-block: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100px;
  font-family: "Montserrat", sans-serif;
  color: rgba(0, 194, 89, 1);
  font-weight: 900;
  font-size: 28px;
  line-height: 34.13px;
}

.statistics-bottom p:nth-child(2) {
  border-top: 1px solid rgba(236, 236, 236, 1);
  border-bottom: 1px solid rgba(236, 236, 236, 1);
}
.statistics-bottom p span {
  margin-top: 6px;
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 400;
  color: rgba(57, 57, 57, 1);
}

/* от 1600px */
@media screen and (min-width: 1600px) {
  .wrapper {
    display: block;
    padding: 50px 150px 150px 150px;

    background-size: cover;
  }

  .button {
    width: 339.6px;
    height: 87.6px;

    font-size: 22px;
    font-weight: 700;
    border-radius: 6px;
  }

  .header {
    margin: 150px 0;
    font-size: 58px;
  }

  .statistics {
    margin-bottom: 100px;
    width: 846px;
  }

  .statistics p {
    font-size: 36px;
    line-height: 42.13px;
  }

  .statistics p span {
    font-size: 18px;
    line-height: 20.8px;
  }
}

/* от 600px до 800px*/
@media screen and (min-width: 600px) and (max-width: 800px) {
  .wrapper {
    padding: 20px 50px 90px 50px;

    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.5),
        transparent
      ),
      url(../../assets/creditcentr_mobile_bg.jpg);
    background-position: top;
  }

  .header {
    font-size: 36px;
    font-weight: 900;

    line-height: 39.1px;
    text-shadow: none;
  }

  .header-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70vh;
  }

  .button-block p {
    color: rgb(73, 73, 73);
  }

  .statistics {
    display: none;
  }

  .button {
    margin-bottom: 16px;
  }

  .statistics-bottom {
    display: block;
  }
}

/* меньше 600px */
@media screen and (max-width: 600px) {
  .wrapper {
    padding: 20px 15px 90px 15px;
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.5),
        transparent
      ),
      url(../../assets/creditcentr_mobile_bg.jpg);
  }

  .header-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70vh;
  }

  .header {
    font-size: 25px;
    font-weight: 900;
    line-height: 28.84px;
    text-align: center;
    text-shadow: none;
  }
  .button-block p {
    color: rgb(73, 73, 73);
  }

  .statistics {
    display: none;
  }

  .button {
    margin-bottom: 16px;
  }

  .statistics-bottom {
    display: block;
  }

  .statistics-bottom p {
    margin: 0 15px;
  }

  .button-block {
    width: 100%;
  }
}

@media screen and (max-width: 400px) {
  .header {
    font-size: 23px;

    line-height: 27.84px;
  }

  .button-block p {
    font-size: 10px;
    line-height: 12.8px;
  }
}
</style>

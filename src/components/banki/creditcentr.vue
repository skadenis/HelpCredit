<template>
  <div>
    <div class="wrapper">
      <div class="wrapper-block">
        <div>
          <span class="header"
            >Оформи любой кредит<br />
            в Минске по ставке <br /><span
              >от <span class="percent">12,9%</span></span
            ></span
          >
        </div>
        <div class="button-block">
          <button @click="$emit('someEvent')" class="button">
            Подобрать кредит
          </button>
          <div class="statistics">
            <p>
              Осталось всего <span>{{ remainder }}</span>
            </p>
            <p>
              Сегодня одобрено <span>{{ quantity }}</span>
            </p>
          </div>
          <p class="date">
            Пройдите тест и получите самое <br />
            выгодное предложение на {{ today }}
          </p>
        </div>
      </div>
      <partnerslogo />
    </div>
    <disclamer siteName="BankHelp.by" />
  </div>
</template>

<script>
import disclamer from "@/components/quiz/disclamer.vue";
import partnerslogo from "@/components/banki/partnerslogo.vue";

export default {
  name: "bank-help",
  data() {
    return {
      remainder: "9 кредитов",
      quantity: 37,
      today: undefined,
    };
  },
  mounted() {
    this.getDate();
  },
  methods: {
    getDate() {
      this.today = new Date();
      let dd = String(this.today.getDate()).padStart(2, "0");
      let mm = String(this.today.getMonth() + 1).padStart(2, "0");
      this.today = dd + "." + mm;
    },
  },
  components: {
    disclamer,
    partnerslogo,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}

.wrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  padding: 75px 100px 25px 100px;

  background-color: rgb(80, 120, 180);
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent),
    url(../../assets/creditcentr_bg.jpg);
  background-size: cover;
  background-position: center;
}

.wrapper-block {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-bottom: 20px; */
}

.header {
  display: block;

  font-size: 46px;
  font-weight: 900;
  color: rgb(255, 255, 255);
  line-height: 55.67px;
  margin-bottom: 50px;
}

.header span {
  font-size: 76.47px;
  line-height: 93.2px;
}

.header .percent {
  font-size: 109.72px;
  line-height: 133.75px;
  color: rgba(255, 220, 98, 1);
  text-shadow: 0px 0px 24px rgba(255, 220, 98, 0.25);
}

.button-block {
  display: grid;
  grid-template-areas:
    "button statistics"
    "date date";
  grid-template-rows: 81px 1fr;
  grid-template-columns: 309px 1fr;
  column-gap: 30px;
  row-gap: 20px;
}

.button {
  grid-area: button;
  width: 309px;
  height: 81px;

  font-size: 18px;
  font-weight: 600;
  color: rgb(255, 255, 255);

  border-radius: 10px;
  border: none;
  background-color: rgba(0, 194, 89, 1);
  box-shadow: 0px 22px 25px -15px rgba(0, 194, 89, 0.55);
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:hover {
  transform: scale(105%);
}

.statistics,
.date {
  font-size: 16px;
  color: #dfdfdf;
}

.statistics {
  grid-area: statistics;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
}

.statistics p {
  display: block;
  margin-block: 0;
  line-height: 19.36px;
}

.statistics p:first-child {
  margin-bottom: 10px;
}

.statistics p span {
  color: #fff;
}

.date {
  max-width: 309px;
  grid-area: date;
  margin-block: 0;
  line-height: 22.4px;

  text-align: center;
}

/* от 1600px */
@media screen and (min-width: 1600px) {
  .wrapper {
    padding: 200px 200px 25px 200px;

    background-size: cover;
  }

  .header {
    margin-bottom: 150px;
  }
}

/* от 600px до 800px*/
@media screen and (min-width: 600px) and (max-width: 800px) {
  .wrapper {
    padding: 0 50px 0 50px;

    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent),
      url(../../assets/creditcentr_bg_mobile.jpg);
  }

  .wrapper-block {
    padding-top: 100px;
    padding-bottom: 150px;
    min-height: 100vh;
  }

  .header {
    font-size: 32px;
    font-weight: 900;

    line-height: 39.1px;

    margin-bottom: 100px;
  }

  .header span {
    font-size: 35px;
    line-height: 41.57px;
    margin-top: 15px;
  }

  .header .percent {
    font-size: 95px;
    line-height: 114.71px;
    margin-top: 0;
  }
}

/* меньше 600px */
@media screen and (max-width: 600px) {
  .wrapper {
    padding: 0 15px 0 15px;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent),
      url(../../assets/creditcentr_bg_mobile.jpg);
  }

  .wrapper-block {
    padding-top: 70px;
    min-height: 100vh;
    padding-bottom: 50px;
  }

  .header {
    font-size: 29px;
    font-weight: 900;
    line-height: 35.1px;
    text-align: center;
  }

  .header span {
    display: block;
    font-size: 30px;
    line-height: 36.57px;
    margin-top: 15px;
  }

  .header .percent {
    font-size: 90px;
    line-height: 109.71px;
    margin-top: 0;
  }

  .button-block {
    width: 100%;
    grid-template-areas:
      "date date"
      "button button"
      "statistics statistics";
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    row-gap: 30px;
  }

  .button {
    margin: 0 auto;
  }

  .statistics {
    grid-area: statistics;
    width: 100%;

    align-items: center;
  }

  .statistics p:first-child {
    margin-bottom: 10px;
  }

  .statistics p span {
    color: #fff;
  }

  .date {
    margin: 0 auto;
    grid-area: date;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 19.6px;

    text-align: center;
  }
}

@media screen and (max-width: 400px) {
  .button {
    width: calc(100% - 15px);
  }
}
</style>

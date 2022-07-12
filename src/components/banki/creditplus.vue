<template>
  <div>
    <div class="credit">
      <div class="wrapper">
        <a href="tel:+375297456442" class="phone">
          <svg
            class="phone-icon"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="46" height="46" rx="23" fill="white" />
            <path
              d="M15.4941 21.7408C17.5844 26.2936 21.3039 29.9132 25.9283 31.8755L26.6695 32.2058C28.3655 32.9614 30.3591 32.3874 31.3935 30.8456L32.3622 29.4017C32.6772 28.9323 32.5813 28.3 32.1413 27.9451L28.8561 25.2947C28.3736 24.9055 27.664 24.9961 27.2949 25.4942L26.2786 26.8656C23.6708 25.5792 21.5536 23.462 20.2672 20.8542L21.6385 19.8379C22.1366 19.4688 22.2273 18.7592 21.838 18.2767L19.1876 14.9914C18.8327 14.5515 18.2006 14.4556 17.7312 14.7703L16.2774 15.7451C14.726 16.7854 14.1551 18.7955 14.9281 20.4959L15.4933 21.739L15.4941 21.7408Z"
              fill="#00C259"
            />
          </svg>
          <div>
            <p class="phone-disc">Телефон для справки:</p>
            <p class="phone-number">+375 29 <span>745-64-42</span></p>
          </div>
        </a>
        <span class="header"
          >Автокредит по <span>льготной ставке</span> от
          <span>8,5%</span> годовых в белорусских рублях</span
        >
        <div class="terms">
          <p><span>Без </span>залогов и каско</p>
          <p><span>От </span>2500 до 200 000 BYN</p>
          <p><span>До </span>7 лет</p>
          <p><span>Без </span>поручителей</p>
        </div>
        <div>
          <p class="partners">Более <span>20 </span>банков-партнеров:</p>
          <partnerslogo />
        </div>
        <div class="button-block">
          <p>
            Пройдите тест за 2 минуты и рассчитайте, на какую сумму вы можете
            получить кредит от банков РБ на {{ today }}
          </p>
          <button @click="$emit('someEvent')" class="button">
            Подобрать кредит
          </button>
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
            8
            <span
              >лет на рынке<br />
              автокредитования</span
            >
          </p>
        </div>
      </div>
      <div class="statistics-bottom">
        <p>
          {{ clients }}
          <span>благодарных клиента</span>
        </p>
        <p>{{ approval }} <span>одобрения</span></p>
        <p>
          8
          <span>лет на рынке автокредитования</span>
        </p>
      </div>
    </div>
    <disclamer siteName="Credit-plus.by" />
  </div>
</template>

<script>
import disclamer from "@/components/quiz/disclamer.vue";
import partnerslogo from "@/components/banki/partnerslogo.vue";

export default {
  name: "credit-plus",
  data() {
    return {
      clients: 10315,
      approval: "92,7%",
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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap");

* {
  font-family: "Monserrat", sans-serif;
}

.credit {
  background-color: #e7e7e4;
}

.wrapper {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;
  padding: 40px 0 0 75px;

  background-color: #f5f5f5;
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.9),
      transparent
    ),
    url(../../assets/avto-credit_bg.jpg);
  background-size: cover;
  background-position: center;
}

.phone {
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 20px;
}

.phone-icon {
  margin-right: 20px;
}

.phone-disc {
  margin-block: 0;
  margin-bottom: 5px;
  font-size: 12px;
  line-height: 14.63px;
  color: rgba(125, 125, 125, 1);
}

.phone-number {
  margin-block: 0;
  font-size: 24px;
  font-weight: 400;
  line-height: 29.26px;
  color: #000;
}

.phone-number span {
  font-weight: 800;
  color: rgba(0, 194, 89, 1);
}

.header {
  width: 50%;
  display: block;

  font-size: 36px;
  font-weight: 700;
  color: #000;
  line-height: 43.88px;
  margin-bottom: 20px;

  text-shadow: 0px 0px 24px rgba(225, 225, 225, 0.7);
}

.header span {
  color: rgba(0, 194, 89, 1);
}

.terms {
  width: 40%;
  min-width: 400px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.terms p {
  width: 49%;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #000;
  margin-block: 0;
  margin-bottom: 10px;
}

.terms p span {
  color: rgba(0, 194, 89, 1);
}

.partners {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #000;
  margin-block: 0;
  margin-bottom: 20px;
}

.partners span {
  color: rgba(0, 194, 89, 1);
}

.statistics {
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 696px;
  height: 82px;
  background-color: rgba(0, 194, 89, 1);
  border-radius: 34px 0 0 0;
}

.statistics p {
  padding: 0 15px;
  width: 33%;

  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  color: #fff;
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

  font-size: 14px;
  line-height: 16.8px;
  font-weight: 400;
  color: #fff;
}

.button-block {
  width: 389px;
  margin-bottom: 20px;
}

.button-block p {
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: #000;
  margin-block: 0;
  margin-bottom: 22px;
}

.button {
  width: 283px;
  height: 73px;

  font-family: "Inter", sans-serif;
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
  border-radius: 20px 0 0px 0px;
  background-color: rgba(0, 194, 89, 1);
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
  color: #fff;
  font-weight: 900;
  font-size: 28px;
  line-height: 34.13px;
}

.statistics-bottom p:nth-child(2) {
  border-top: 1px solid rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 1);
}
.statistics-bottom p span {
  margin-top: 6px;
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 400;
  color: #fff;
}

@media screen and (max-height: 800px) {
  .statistics {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .button-block p {
    line-height: 19.2px;
  }
}

@media screen and (max-height: 600px) {
  .header {
    width: 80%;
  }
}

/* от 1600px */
@media screen and (min-width: 1600px) {
  .wrapper {
    padding: 100px 0 0 150px;
  }

  .header {
    font-size: 46px;

    line-height: 54.26px;
  }

  .terms p {
    font-size: 24px;
    line-height: 32px;
  }

  .partners {
    font-size: 24px;
    line-height: 32px;
  }

  .button-block {
    width: 520px;
  }

  .button-block p {
    font-size: 24px;
    line-height: 32px;

    margin-bottom: 26px;
  }

  .button {
    width: 396.2px;
    height: 102.2px;

    font-size: 26px;
    font-weight: 700;

    border-radius: 6px;
  }

  .statistics {
    width: 896px;
    height: 112px;
  }

  .statistics p {
    font-size: 36px;
    line-height: 42.13px;
  }

  .statistics p span {
    font-size: 18px;
    line-height: 22.8px;
  }
}

/* до 1200px */
@media screen and (max-width: 1200px) {
  .statistics {
    width: 596px;
    height: 82px;
  }
}

/* до 1000px */
@media screen and (min-width: 800px) and (max-width: 1000px) {
  .statistics {
    display: none;
  }

  .statistics-bottom {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 194, 89, 1);
    border-radius: 34px 0 0 0;
  }

  .statistics-bottom p {
    margin: 0;
    width: 33%;
    height: auto;

    display: flex;
    align-items: center;

    color: #fff;
    font-weight: 900;
    font-size: 28px;
    line-height: 34.13px;
  }

  .statistics-bottom p:nth-child(2) {
    border-left: 1px solid rgba(236, 236, 236, 1);
    border-right: 1px solid rgba(236, 236, 236, 1);
    border-top: none;
    border-bottom: none;
  }

  .statistics-bottom p span {
    font-size: 14px;
    line-height: 16.8px;
    font-weight: 400;
    color: #fff;
  }
}

/* от 600px до 800px*/
@media screen and (min-width: 600px) and (max-width: 800px) {
  .credit {
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.9),
        transparent
      ),
      url(../../assets/avto-credit_mobile.jpg);
    background-size: cover;
    background-position: center;
  }

  .wrapper {
    background: transparent;
    padding: 35px 15px 70px 15px;
  }

  .phone {
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .header {
    width: 80%;
  }
  .statistics {
    display: none;
  }
  .statistics-bottom {
    display: block;
    border-radius: 34px 34px 0 0;
  }
}

/* меньше 600px */
@media screen and (max-width: 600px) {
  .credit {
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.9),
        transparent
      ),
      url(../../assets/avto-credit_mobile.jpg);
    background-size: cover;
    background-position-x: 50%;
  }
  .wrapper {
    padding: 15px 15px 90px 15px;
    background: transparent;
  }

  .header {
    width: 80%;
    font-size: 24px;
    line-height: 29.26px;
  }

  .phone {
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .phone-icon {
    margin-right: 10px;
  }

  .phone-disc {
    font-size: 10px;
    line-height: 12.19px;
  }

  .phone-number {
    font-size: 14px;

    line-height: 17.07px;
  }

  .terms {
    width: 100%;
    min-width: 290px;
    margin: 0 auto 20px auto;
    text-align: center;
  }

  .button-block {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .button-block p {
    text-align: center;
    font-size: 12px;
    line-height: 14.2px;

    margin-bottom: 12px;
  }

  .statistics {
    display: none;
  }
  .statistics-bottom {
    display: block;
    border-radius: 34px 34px 0 0;
  }
}

@media screen and (max-width: 400px) {
  .header {
    width: 100%;
  }
}
</style>

<template>
  <div>
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
          <rect width="46" height="46" rx="23" fill="#EFEFEF" />
          <path
            d="M15.4941 21.7408C17.5844 26.2936 21.3039 29.9132 25.9283 31.8755L26.6695 32.2058C28.3655 32.9614 30.3591 32.3874 31.3935 30.8456L32.3622 29.4017C32.6772 28.9323 32.5813 28.3 32.1413 27.9451L28.8561 25.2947C28.3736 24.9055 27.664 24.9961 27.2949 25.4942L26.2786 26.8656C23.6708 25.5792 21.5536 23.462 20.2672 20.8542L21.6385 19.8379C22.1366 19.4688 22.2273 18.7592 21.838 18.2767L19.1876 14.9914C18.8327 14.5515 18.2006 14.4556 17.7312 14.7703L16.2774 15.7451C14.726 16.7854 14.1551 18.7955 14.9281 20.4959L15.4933 21.739L15.4941 21.7408Z"
            fill="#0083CA"
          />
        </svg>
        <div>
          <p class="phone-disc">Телефон для справки:</p>
          <p class="phone-number">+375 29 <span>745-64-42</span></p>
        </div>
      </a>
      <partnerslogo />
      <p class="header">Получите кредит уже сегодня</p>
      <p class="sub-title">
        Ускорим процесс и посчитаем для Вас оптимальное предложение
      </p>
      <div class="stat">
        <div class="clock">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="42" height="42" rx="21" fill="#EFEFEF" />
            <path
              d="M23.5 28L25.5 30L30 25.5M30.9851 21.5499C30.995 21.3678 31 21.1845 31 21C31 15.4772 26.5228 11 21 11C15.4772 11 11 15.4772 11 21C11 26.4354 15.3365 30.858 20.7385 30.9966M21 15V21L24.7384 22.8692"
              stroke="#0083CA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Самый быстрый кредит</span>
        </div>
        <div class="smile">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="42" height="42" rx="21" fill="#EFEFEF" />
            <path
              d="M17 23C17 23 18.5 25 21 25C23.5 25 25 23 25 23M24 18H24.01M18 18H18.01M31 21C31 26.5228 26.5228 31 21 31C15.4772 31 11 26.5228 11 21C11 15.4772 15.4772 11 21 11C26.5228 11 31 15.4772 31 21ZM24.5 18C24.5 18.2761 24.2761 18.5 24 18.5C23.7239 18.5 23.5 18.2761 23.5 18C23.5 17.7239 23.7239 17.5 24 17.5C24.2761 17.5 24.5 17.7239 24.5 18ZM18.5 18C18.5 18.2761 18.2761 18.5 18 18.5C17.7239 18.5 17.5 18.2761 17.5 18C17.5 17.7239 17.7239 17.5 18 17.5C18.2761 17.5 18.5 17.7239 18.5 18Z"
              stroke="#0083CA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{{ approval }} процент одобрения</span>
        </div>
        <div class="percent">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="42" height="42" rx="21" fill="#EFEFEF" />
            <path
              d="M18 18H18.01M24 24H24.01M25 17L17 25M18.5 18C18.5 18.2761 18.2761 18.5 18 18.5C17.7239 18.5 17.5 18.2761 17.5 18C17.5 17.7239 17.7239 17.5 18 17.5C18.2761 17.5 18.5 17.7239 18.5 18ZM24.5 24C24.5 24.2761 24.2761 24.5 24 24.5C23.7239 24.5 23.5 24.2761 23.5 24C23.5 23.7239 23.7239 23.5 24 23.5C24.2761 23.5 24.5 23.7239 24.5 24ZM31 21C31 26.5228 26.5228 31 21 31C15.4772 31 11 26.5228 11 21C11 15.4772 15.4772 11 21 11C26.5228 11 31 15.4772 31 21Z"
              stroke="#0083CA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>От {{ percent }} годовых </span>
        </div>
        <div class="fast">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="42" height="42" rx="21" fill="#EFEFEF" />
            <path
              d="M18 26.5H12.5M15.5 21H11M18 15.5H13M26 12L19.4036 21.235C19.1116 21.6438 18.9656 21.8481 18.9719 22.0185C18.9774 22.1669 19.0486 22.3051 19.1661 22.3958C19.3011 22.5 19.5522 22.5 20.0546 22.5H25L24 30L30.5964 20.765C30.8884 20.3562 31.0344 20.1519 31.0281 19.9815C31.0226 19.8331 30.9514 19.6949 30.8339 19.6042C30.6989 19.5 30.4478 19.5 29.9454 19.5H25L26 12Z"
              stroke="#0083CA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Деньги сегодня</span>
        </div>
      </div>
      <button @click="$emit('someEvent')" class="button">
        Получить расчет
      </button>
      <div class="stat-bottom">
        <div class="clock">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="42" height="42" rx="21" fill="#EFEFEF" />
            <path
              d="M23.5 28L25.5 30L30 25.5M30.9851 21.5499C30.995 21.3678 31 21.1845 31 21C31 15.4772 26.5228 11 21 11C15.4772 11 11 15.4772 11 21C11 26.4354 15.3365 30.858 20.7385 30.9966M21 15V21L24.7384 22.8692"
              stroke="#0083CA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Самый быстрый кредит</span>
        </div>
        <div class="smile">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="42" height="42" rx="21" fill="#EFEFEF" />
            <path
              d="M17 23C17 23 18.5 25 21 25C23.5 25 25 23 25 23M24 18H24.01M18 18H18.01M31 21C31 26.5228 26.5228 31 21 31C15.4772 31 11 26.5228 11 21C11 15.4772 15.4772 11 21 11C26.5228 11 31 15.4772 31 21ZM24.5 18C24.5 18.2761 24.2761 18.5 24 18.5C23.7239 18.5 23.5 18.2761 23.5 18C23.5 17.7239 23.7239 17.5 24 17.5C24.2761 17.5 24.5 17.7239 24.5 18ZM18.5 18C18.5 18.2761 18.2761 18.5 18 18.5C17.7239 18.5 17.5 18.2761 17.5 18C17.5 17.7239 17.7239 17.5 18 17.5C18.2761 17.5 18.5 17.7239 18.5 18Z"
              stroke="#0083CA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{{ approval }} процент одобрения</span>
        </div>
        <div class="percent">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="42" height="42" rx="21" fill="#EFEFEF" />
            <path
              d="M18 18H18.01M24 24H24.01M25 17L17 25M18.5 18C18.5 18.2761 18.2761 18.5 18 18.5C17.7239 18.5 17.5 18.2761 17.5 18C17.5 17.7239 17.7239 17.5 18 17.5C18.2761 17.5 18.5 17.7239 18.5 18ZM24.5 24C24.5 24.2761 24.2761 24.5 24 24.5C23.7239 24.5 23.5 24.2761 23.5 24C23.5 23.7239 23.7239 23.5 24 23.5C24.2761 23.5 24.5 23.7239 24.5 24ZM31 21C31 26.5228 26.5228 31 21 31C15.4772 31 11 26.5228 11 21C11 15.4772 15.4772 11 21 11C26.5228 11 31 15.4772 31 21Z"
              stroke="#0083CA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>От {{ percent }} годовых </span>
        </div>
        <div class="fast">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="42" height="42" rx="21" fill="#EFEFEF" />
            <path
              d="M18 26.5H12.5M15.5 21H11M18 15.5H13M26 12L19.4036 21.235C19.1116 21.6438 18.9656 21.8481 18.9719 22.0185C18.9774 22.1669 19.0486 22.3051 19.1661 22.3958C19.3011 22.5 19.5522 22.5 20.0546 22.5H25L24 30L30.5964 20.765C30.8884 20.3562 31.0344 20.1519 31.0281 19.9815C31.0226 19.8331 30.9514 19.6949 30.8339 19.6042C30.6989 19.5 30.4478 19.5 29.9454 19.5H25L26 12Z"
              stroke="#0083CA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Деньги сегодня</span>
        </div>
      </div>
    </div>

    <disclamer siteName="MTB-Credit.by" />
  </div>
</template>

<script>
import disclamer from "@/components/quiz/disclamer.vue";
import partnerslogo from "@/components/banki/partnerslogo.vue";

export default {
  name: "mtb-credit",
  data() {
    return {
      percent: "12,9%",
      approval: "92,7",
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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap");

* {
  font-family: "Inter", sans-serif;
}

.wrapper {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;
  padding: 60px 80px 90px 80px;
  background-color: #fff;
  background: url(../../assets/site-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
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
  font-weight: 900;
}

.header {
  width: 55%;
  text-transform: uppercase;
  font-size: 56px;
  font-weight: 900;
  color: rgba(0, 131, 202, 1);
  line-height: 67.77px;
  margin-block: 0;
  margin-bottom: 20px;
}

.sub-title {
  width: 50%;
  margin-block: 0;
  font-size: 26px;
  line-height: 36.4px;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 20px;
}

.stat {
  width: 535px;
  display: grid;
  grid-template-areas:
    "clock smile"
    "percent fast";
  gap: 14px 34px;
  margin-bottom: 20px;
}

.stat-bottom {
  width: 100%;
  display: none;
  grid-template-areas:
    "clock smile"
    "percent fast";
  gap: 14px 10px;
  margin-bottom: 20px;
}

.stat-bottom div span {
  display: block;
  margin-top: 16px;
  font-size: 12px;
  line-height: 14.52px;
  text-transform: uppercase;
  text-align: center;
}

.stat-bottom div {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.clock {
  grid-area: clock;
}

.smile {
  grid-area: smile;
}

.percent {
  grid-area: percent;
}

.fast {
  grid-area: fast;
}

.stat div {
  display: flex;
  align-items: center;
}

.stat div span {
  margin-left: 16px;
  font-size: 14px;
  line-height: 16.94px;
  text-transform: uppercase;
}

.button {
  width: 262px;
  height: 65px;

  font-size: 18px;
  font-weight: 600;
  color: rgb(255, 255, 255);

  border: none;
  background: #007cc2;
  box-shadow: 0px 8px 0px #006399, 0px 22px 25px -15px rgba(0, 124, 194, 0.2);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 20px;
}

.button:hover,
.button:focus {
  box-shadow: 0px 2px 0px #006399;
  transform: translateY(6px);
}

.button:active {
  background: #006399;
}

@media screen and (min-width: 1600px) {
  .wrapper {
    padding: 160px 180px 190px 180px;
  }
}

@media screen and (max-width: 1200px) {
  .header {
    font-size: 52px;

    line-height: 60.77px;
  }
  .sub-title {
    font-size: 22px;
    line-height: 30.4px;
  }

  .stat {
    width: 450px;

    gap: 12px 17px;
  }

  .stat div span {
    margin-left: 12px;
    font-size: 12px;
    line-height: 14.94px;
  }
}

@media screen and (max-width: 1000px) {
  .stat {
    width: 400px;
  }

  .header {
    font-size: 46px;

    line-height: 50.77px;
  }
  .sub-title {
    font-size: 17px;
    line-height: 23.8px;
  }
}

@media screen and (max-width: 800px) {
  .stat {
    width: 300px;

    gap: 10px 12px;
  }

  .stat div span {
    margin-left: 10px;
    font-size: 10px;
    line-height: 12px;
  }

  .header {
    font-size: 40px;

    line-height: 42.77px;
  }
  .sub-title {
    font-size: 17px;
    line-height: 23.8px;
  }
  .wrapper {
    padding: 30px 30px 50px 30px;
    background-position-x: 60%;
  }
}

@media screen and (max-width: 600px) {
  .wrapper {
    padding: 25px 15px 20px 15px;
    background: url(../../assets/site-bg_mobile.jpg);
    background-repeat: no-repeat;
    background-color: #fff;
    background-position: top;
    background-size: 100% 70%;
  }

  .phone-icon {
    margin-right: 10px;
  }

  .phone-disc {
    font-size: 10px;
    line-height: 12.19px;
    color: rgba(255, 255, 255, 1);
  }

  .phone-number {
    font-size: 16px;

    line-height: 19.5px;
    color: #fff;
  }
  .header {
    margin-top: 30px;
    width: 100%;
    text-align: center;
    font-size: 32px;
    line-height: 38.73px;
    margin-bottom: 20px;
  }

  .sub-title {
    width: 100%;
    text-align: center;
    font-size: 17px;
    line-height: 23.8px;
  }

  .stat {
    display: none;
  }

  .stat-bottom {
    display: grid;
  }

  .button {
    margin: 0 auto 20px auto;
  }
}
</style>

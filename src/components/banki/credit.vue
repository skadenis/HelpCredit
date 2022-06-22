<template>
  <div>
    <div class="best-wrapper">
      <div>
        <div class="image_partners">
          <img src="@/assets/partners.svg" alt="" class="partners" />
        </div>
        <span class="header"
          >ПРОЙДИТЕ ТЕСТ И МЫ НАЙДЕМ КРЕДИТ,<br />
          КОТОРЫЙ
          <span class="pro-red">ВЫ ТОЧНО ПОЛУЧИТЕ</span></span
        >
      </div>
      <div class="button-padding-position">
        <p class="analis">Проанализируем более 200 банковских предложений.</p>
        <button @click="$emit('someEvent')" class="btn-red">
          ПОЛУЧИТЬ КРЕДИТ
        </button>
      </div>
    </div>
    <disclamer siteName="BankHelp.by" />
  </div>
</template>

<script>
import disclamer from "@/components/quiz/disclamer.vue";

export default {
  name: "bank-help",
  components: {
    disclamer,
  },
};
</script>

<style scoped>
* {
  font-family: sans-serif;
}

.best-wrapper {
  min-height: 100vh;
  padding: 0 50px;
  height: 100%;
}

.image_partners .partners {
  margin: 30px 0;
  max-width: 500px;
  max-height: 49px;
}

.header {
  margin-bottom: 10px;
  line-height: 42px;
  font-size: 32px;
  font-weight: bold;
  display: block;
  color: #fff;
  background: inherit;
}

.header .pro-red {
  color: #d4253e;
  font-size: 110%;
}

.button-padding-position {
  margin-top: 18%;
  margin-bottom: 10px;
}

.button-padding-position .analis {
  font-size: 20px;
  font-weight: bold;
  color: rgb(40, 40, 40);
  padding: 0;
  margin: 0 0 40px 0;
  transform: translateX(-100%);
  animation: slide 0.7s ease-in-out forwards;
}

.button-padding-position .rasschet {
  font-size: 14px;
  color: #d4253e;
  font-weight: bold;
  transform: translateX(-100%);
  animation: slide 1s ease-in-out 0.3s forwards;
}

@keyframes slide {
  to {
    transform: translateX(0);
  }
}

.btn-red {
  min-width: 420px;
  width: 30%;
  margin: 0;
  font-size: 25px;
  color: #ffffff;
  background-image: -webkit-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  background-image: -ms-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  background-image: -moz-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  background: linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  border: none;
  -webkit-border-radius: 30px;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 700;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
}

.btn-red:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2em;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  animation: moveLight 2s;
  animation-iteration-count: infinite;
}
@keyframes moveLight {
  from {
    transform: translateX(-15em) skewX(-45deg);
  }
  to {
    transform: translateX(45em) skewX(-45deg);
  }
}
.btn-red:hover {
  background: #930c0c;
}

/* от 1400*/
@media screen and (min-width: 1400px) {
  .best-wrapper {
    padding: 20px 150px;
  }

  .image_partners .partners {
    max-width: none;
    max-height: none;

    width: calc(376px + 5%);
    height: calc(142px + 5%);
  }

  .header {
    font-size: 42px;
    line-height: 48px;
  }

  .button-padding-position .analis {
    font-size: 28px;
  }

  .button-padding-position .rasschet {
    font-size: 22px;
  }
}

/* от 1200 до 1400*/
@media screen and (min-width: 1200px) and (max-width: 1400px) {
  .best-wrapper {
    padding: 20px 100px;
  }

  .header {
    font-size: 37px;
    line-height: 50px;
  }
}

/* от 1000 до 1200 */
@media screen and (min-width: 1000px) and (max-width: 1200px) {
}

/* от 800 до 1000 */
@media screen and (min-width: 800px) and (max-width: 1000px) {
  .best-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .image_partners .partners {
    margin: 15px 0;
    max-width: 500px;
    max-height: 49px;
  }

  .header {
    font-size: 28px;
    line-height: 35px;
  }

  .button-padding-position .analis {
    text-align: center;
    font-size: 16px;
    margin: 0 0 20px 0;
  }

  .button-padding-position .rasschet {
    text-align: center;
    font-size: 12px;
    margin: 0;
  }

  .btn-red {
    width: calc(100% - 30px);
    min-width: 250px;
  }
}

/* от 600 до 800 */
@media screen and (min-width: 600px) and (max-width: 800px) {
  .best-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 15px;
  }

  .image_partners .partners {
    margin: 15px 0;
    max-width: 500px;
    max-height: 49px;
  }

  .btn-red {
    width: calc(100% - 30px);
    min-width: 250px;
  }

  .button-padding-position .analis {
    text-align: center;
    font-size: 16px;
    margin: 0 0 20px 0;
  }

  .button-padding-position .rasschet {
    text-align: center;
    font-size: 12px;
    margin: 0;
  }
}

@media screen and (max-width: 600px) {
  .best-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 15px;
  }

  .image_partners .partners {
    margin: 15px 0;
    max-width: 500px;
    max-height: 49px;
  }

  .header {
    font-size: 24px;
    line-height: 30px;
  }

  .btn-red {
    width: calc(100% - 30px);
    min-width: 250px;
    font-size: 12px;
  }

  .button-padding-position .analis {
    text-align: center;
    font-size: 16px;
    margin: 0 0 20px 0;
  }

  .button-padding-position .rasschet {
    text-align: center;
    font-size: 12px;
    margin: 0;
  }
}
</style>

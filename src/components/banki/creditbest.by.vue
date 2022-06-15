<template>
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
      <p class="rasschet">
        + расчет % одобрения кредита после прохождения теста
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "credit-best",
};
</script>

<style scoped>
* {
  font-family: sans-serif;
}

.best-wrapper {
  padding: 0 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.image_partners .partners {
  padding: 30px 0;
  max-width: 500px;
  max-height: 49px;
}

.header {
  margin: 30px 0 15px 0;
  line-height: 42px;
  font-size: 35px;
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
  position: static;
  bottom: 0;
  z-index: 1;
  padding-bottom: 60px;
}

.button-padding-position .analis {
  font-size: 22px;
  font-weight: bold;
  color: rgb(40, 40, 40);
  padding: 0;
  margin: 0 0 40px 0;
  transform: translateX(-100%);
  animation: slide 0.7s ease-in-out forwards;
}

.button-padding-position .rasschet {
  font-size: 16px;
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
  min-width: 320px;
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

@media (max-width: 950px) {
  .header {
    font-size: 28px;
    line-height: 35px;
  }

  .button-padding-position .analis {
    text-align: center;
    font-size: 16px;
  }

  .button-padding-position .rasschet {
    text-align: center;
    font-size: 12px;
  }

  .btn-red {
    width: 100%;
  }
}

/* от 1200 до 1400 */
@media screen and (min-width: 1200px) and (max-width: 1400px) {
}

/* от 1000 до 1200 */
@media screen and (min-width: 1000px) and (max-width: 1200px) {
}

/* от 800 до 1000 */
@media screen and (min-width: 800px) and (max-width: 1000px) {
}

/* от 800 до 1000 */
@media screen and (min-width: 600px) and (max-width: 800px) {
}

@media screen and (max-width: 600px) {
}
</style>

<template>
  <div>
    <div class="page home_page" :class="site" v-if="show_page === 0">
      <div>
        <div v-if="site === 'help'" class="default-page">
          <helpcredit @some-event="this.show_page++"></helpcredit>
        </div>
        <div v-if="site === 'best'" class="main creditbest">
          <creditbest @some-event="this.show_page++"></creditbest>
        </div>
        <div v-if="site === 'alfabank'" class="alfabank">
          <alfabank @some-event="this.show_page++"></alfabank>
        </div>
        <div v-if="site === 'belarusbank'" class="belarusbank">
          <belarusbank @some-event="this.show_page++"></belarusbank>
        </div>
        <div v-if="site === 'mtbank'" class="mtbank">
          <mtbank @some-event="this.show_page++"></mtbank>
        </div>
        <div v-if="site === 'bankdabrabyt'" class="bankdabrabyt">
          <bankdabrabyt @some-event="this.show_page++"></bankdabrabyt>
        </div>
        <div v-if="site === 'creditcentr'" class="creditcentr">
          <creditcentr @some-event="this.show_page++"></creditcentr>
        </div>
        <div v-if="site === 'bankhelp'" class="bankhelp">
          <bankhelp @some-event="this.show_page++"></bankhelp>
        </div>
        <div v-if="site === 'creditplus'" class="creditplus">
          <creditplus @some-event="this.show_page++"></creditplus>
        </div>
        <div v-if="site === 'mtbcredit'" class="mtbcredit">
          <mtbcredit @some-event="this.show_page++"></mtbcredit>
        </div>
      </div>
    </div>

    <div v-if="show_page > 0 && show_page <= questions.length + 1">
      <div v-for="(item, itemKey) in questions" :key="itemKey">
        <interviewForm
          v-if="itemKey + 1 === show_page"
          v-bind:data="{
            page_id: itemKey,
            all_pages_count: questions.length,
            question: item.question,
            variants: item.variants,
          }"
          @nextPage="show_page++"
          :initial-result="quiz[show_page]"
          @change-result="changeResult"
        />
      </div>
    </div>

    <div class="page" v-if="show_page === questions.length + 1">
      <wrapper_quiz_final
        @nextPage="this.show_page++"
        @makeError="make_error"
        @sendForm="sendFormComponent"
        :initialData="form"
        :color="color"
        :error="error"
      />
    </div>
    <div class="page" v-if="show_page === questions.length + 2">
      <thank-you-page />
    </div>
  </div>
</template>

<script>
import { maska } from "maska";
import Basic from "../../api/Basic";
import alfabank from "../components/banki/alfabank";
import mtbank from "../components/banki/mtbank";
import belarusbank from "../components/banki/belarusbank";
import bankdabrabyt from "../components/banki/bankdabrabyt";
import bankhelp from "../components/banki/bankhelp";
import creditcentr from "../components/banki/creditcentr.vue";
import creditbest from "@/components/banki/creditbest.by";
import helpcredit from "../components/banki/helpcredit.vue";
import interviewForm from "@/components/quiz/interview-form";
import wrapper_quiz_final from "@/components/quiz/wrapper_quiz_final";
import ThankYouPage from "@/components/quiz/thank-you-page";
import creditplus from "./banki/creditplus.vue";
import mtbcredit from "./banki/mtbcredit.vue";

export default {
  data() {
    return {
      site: "mtbcredit",
      error: null,
      color: "white",
      show_popup: false,
      show_page: 0,
      questions: [
        {
          question: "Какая сумма нужна?",
          variants: [
            { id: 1, name: "до 1000 BYN" },
            { id: 2, name: "до 5000 BYN" },
            { id: 3, name: "до 15000 BYN" },
            { id: 4, name: "более 15000 BYN" },
          ],
        },
        {
          question: "На какой срок?",
          variants: [
            { id: 1, name: "до 1 года" },
            { id: 2, name: "от 1 года до 2 лет" },
            { id: 3, name: "от 2 до 3 лет" },
            { id: 4, name: "от 3 до 5 лет" },
            { id: 5, name: "более 5 лет" },
          ],
        },
        {
          question: "Цель кредита?",
          variants: [
            { id: 1, name: "потребительский кредит" },
            { id: 2, name: "рефинансирование текущего кредита" },
            { id: 3, name: "авто" },
            { id: 4, name: "на рефинансирование" },
            { id: 5, name: "другое" },
          ],
        },
        {
          question: "Работаете ли вы сейчас?",
          variants: [
            { id: 1, name: "да, более 3 месяцев" },
            { id: 2, name: "да, менее 3 месяцев" },
            { id: 3, name: "нет" },
            { id: 4, name: "пенсионер / студент" },
            { id: 5, name: "в декрете" },
            { id: 6, name: "предприниматель" },
          ],
        },
        {
          question:
            "Есть ли у вас сейчас непогашенные задолженности по кредитам?",
          variants: [
            { id: 1, name: "Да" },
            { id: 2, name: "Нет" },
          ],
        },
        {
          question: "Где вы находитесь?",
          variants: [
            { id: 1, name: "Минск или Минская область" },
            { id: 2, name: "Брест или Брестская область" },
            { id: 3, name: "Витебск или Витебская область" },
            { id: 4, name: "Гомель или Гомельская область" },
            { id: 5, name: "Гродно или Гродненская область" },
            { id: 6, name: "Могилев или Могилевская область" },
          ],
        },
      ],
      quiz: {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
      },
      form: {
        phone: "",
        utm: {
          utm_campaign: "",
          utm_content: "",
          utm_medium: "",
          utm_source: "",
          utm_term: "",
        },
      },
    };
  },
  directives: { maska },
  components: {
    ThankYouPage,
    alfabank,
    mtbank,
    belarusbank,
    bankdabrabyt,
    bankhelp,
    creditbest,
    interviewForm,
    wrapper_quiz_final,
    helpcredit,
    creditcentr,
    creditplus,
    mtbcredit,
  },
  mounted() {
    let uri = window.location.href.split("?");
    if (uri.length === 2) {
      let vars = uri[1].split("&");
      let getVars = {};
      let tmp = "";
      vars.forEach(function (v) {
        tmp = v.split("=");
        if (tmp.length === 2) getVars[tmp[0]] = tmp[1];
      });

      this.form.utm.utm_campaign = getVars.utm_campaign;
      this.form.utm.utm_content = getVars.utm_content;
      this.form.utm.utm_medium = getVars.utm_medium;
      this.form.utm.utm_source = getVars.utm_source;
      this.form.utm.utm_term = getVars.utm_term;
    }

    switch (window.location.pathname) {
      case "/thank-you":
        this.show_page = 8;
        break;
      default:
        this.show_page = 0;
        this.error = null;
        break;
    }
  },
  methods: {
    addSum() {
      this.amount += this.randomInteger(100, 1000);
    },
    randomInteger(min, max) {
      // получить случайное число от (min-0.5) до (max+0.5)
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },

    sendForm() {
      if (this.form.phone.length === 17) {
        let data = this.form;
        data.quiz = this.quiz;
        Basic.sendLead(data).then(function () {
          window.location.href = "/thank-you";
        });
        this.show_page++;
      } else {
        this.color = "red";
      }
    },
    make_error() {
      this.error = "Неверный номер телефона!";
    },
    changeResult(data) {
      this.quiz[data.index] = data.id;
    },
    sendFormComponent(data) {
      this.form.phone = data.phone;
      this.sendForm();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  font-family: sans-serif;
}
button.back {
  margin-right: 10px;
  display: none;
}
.page {
  min-width: 320px;
  width: 100%;
  height: 100%;
  /* position: fixed; */
  top: 0;
  left: 0;
  background: #f1f1f1;
  /* overflow: auto; */
}

.wrapper_quiz {
  max-width: 600px;
  width: calc(100% - 50px);
  margin: 0 auto;
  padding: 25px;
  background: #f2f2f2a8;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.wrapper_quiz button {
  padding: 0;
  left: 0;
  background-image: -webkit-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  background-image: -ms-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  background-image: -moz-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  background: linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  width: 200px;
  height: 48px;
  color: #fff;
  border: none;
  -webkit-border-radius: 30px;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  z-index: 1;
  margin-top: 20px;
  margin-bottom: 20px;
}
.wrapper_quiz button:before {
  content: ""; /* отображает псевдоэлемент */
  position: absolute; /* абсолютное позиционирование */
  top: 0; /* верхняя координата */
  left: 0; /* левая координата */
  width: 2em; /* относительная ширина */
  height: 100%; /* высота как у оригинала */
  background-color: rgba(
    255,
    255,
    255,
    0.7
  ); /* белый цвет с полупрозрачностью */
  animation: moveLight 2s;
  animation-iteration-count: infinite;
}
@keyframes moveLight {
  from {
    transform: translateX(-15em) skewX(-45deg);
  }
  to {
    transform: translateX(25em) skewX(-45deg);
  }
}

.wrapper_quiz button.back.disabled {
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  opacity: 0.5;
  pointer-events: initial;
  cursor: pointer;
}
.wrapper_quiz button.disabled {
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}

.wrapper_quiz button.disabled:before {
  opacity: 0;
}

.home_page.best {
  min-width: 100%;
  width: 100%;
  min-height: 100%;
  height: 100%;
  /*background-image: url('//b-allcredit.by/assets/image/bg2.jpg');*/
  background-image: url("//creditonline.by/assets/image/main-fon.jpg");
  background-size: cover !important;

  background-position: center !important;
}

@media (max-width: 1000px) {
  .home_page.best {
    background: url(//creditonline.by/assets/image/mobil-fon.jpg) no-repeat;
  }
}

.home_page .main {
  height: 100vh;
  position: relative;
}
.home_page .main .logo {
  max-width: 200px;
  margin-bottom: 0;
}
.home_page .main button {
  min-height: 60px;
  padding: 20px;
  font-family: "Nunito", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, #ac1714 0%, #e20f39 100%);
  border: none;
  border-radius: 1000px;
  transition: 1s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  animation-duration: 0.8s;
  animation-name: btn-red;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  font-size: 27px;
  max-width: 100%;
}

.home_page > div {
  margin-right: auto;
  margin-left: auto;
}

.home_page.help {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url("/src/assets/bg.png");
  background-size: cover;
}

.default-page {
  width: 100%;
  /*min-width: 400px;*/
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  color: #fff;
}

/* .header > div {
  width: 100%;
}
.header .partners {
  margin-top: 15px;
}
.header .logo {
  margin: 0 auto;
  display: block;
}
.header .logo img {
  margin: 0 auto;
  display: block;
} */

.header .today_credit_block .today_credit {
  font-family: sans-serif;
  font-style: italic;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 16px;
  text-align: right;
}
.header .today_credit_block .today_credit_amount {
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  margin-top: 0;
  text-align: right;
}
.content {
  max-width: 1100px;
  margin: 0 auto;
  display: block;
}
.content h1 {
  font-family: sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 84px;
  text-align: center;
  color: #ffffff;
}
.content h3 {
  font-family: sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #ffffff;
}
.content .form {
  display: flex;
}
.content .form > div {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.content .form > div:nth-child(2) {
  margin-left: 50px;
}
.content .form > div > label {
  font-family: sans-serif;
  font-weight: 800;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 10px;
}
.content .form > div > input {
  height: 50px;
  font-size: 19px;
  padding-left: 20px;
}
.content button {
  padding: 36px 20px;
  font-size: 25px;
  color: #ffffff;
  /*font-weight: bold;*/
  /*background-image: -webkit-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);*/
  /*background-image: -ms-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);*/
  /*background-image: -moz-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);*/
  /*background: linear-gradient(90deg, #d4253e 0%, #de1f25 100%);*/
  /*border: 0;*/
  /*cursor: pointer;*/
  margin: 90px auto 20px;
  /*display: block;*/
  background-image: -webkit-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  background-image: -ms-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  background-image: -moz-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  background: linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  width: 100%;
  /*height: 48px;*/
  color: #fff;
  border: none;
  -webkit-border-radius: 30px;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 700;
  /*font-size: 15px;*/
  overflow: hidden;
  position: relative;
  cursor: pointer;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  /*margin-top: 20px;*/
  /*margin-bottom: 20px;*/
}
.content button:before {
  content: ""; /* отображает псевдоэлемент */
  position: absolute; /* абсолютное позиционирование */
  top: 0; /* верхняя координата */
  left: 0; /* левая координата */
  width: 2em; /* относительная ширина */
  height: 100%; /* высота как у оригинала */
  background-color: rgba(
    255,
    255,
    255,
    0.7
  ); /* белый цвет с полупрозрачностью */
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
.content button:hover {
  background: #930c0c;
}
.footer {
  bottom: 0;
  position: absolute;
  opacity: 0.2;
}

/* от 1200 до 1400 */
@media screen and (min-width: 1200px) and (max-width: 1400px) {
  /* .header {
    flex-flow: row-reverse;
  }
  .header .logo img {
    margin: 15px 0;
    height: 80px;
  } */
  .today_credit_block {
    display: none;
  }
  .content {
    max-width: calc(100% - 50px);
  }
  .content > h1,
  .content > h3 {
    text-align: left;
    width: 100%;
  }
  .content > h1 {
    font-size: 60px;
    line-height: 60px;
    max-width: 1000px;
  }
}

/* от 1000 до 1200 */
@media screen and (min-width: 1000px) and (max-width: 1200px) {
  /* .header {
    flex-flow: row-reverse;
  }
  .header .logo img {
    margin: 15px 0;
    height: 80px;
  } */
  .today_credit_block {
    display: none;
  }
  .content {
    max-width: calc(100% - 50px);
  }
  .content > h1,
  .content > h3 {
    text-align: left;
    width: 100%;
  }
  .content > h1 {
    font-size: 60px;
    line-height: 60px;
    max-width: 1000px;
  }
}

/* от 800 до 1000 */
@media screen and (min-width: 800px) and (max-width: 1000px) {
  /* .header {
    flex-flow: row-reverse;
  }
  .header .logo img {
    margin: 15px 0;
    height: 80px;
  } */
  .today_credit_block {
    display: none;
  }
  .content {
    max-width: calc(100% - 50px);
  }
  .content > h1,
  .content > h3 {
    text-align: left;
    width: 100%;
  }
  .content > h1 {
    font-size: 60px;
    line-height: 60px;
    max-width: 1000px;
  }
  .content > .form {
    flex-direction: column;
  }
  .content > .form > div:nth-child(2) {
    margin-left: 0;
  }
}

/* от 800 до 1000 */
@media screen and (min-width: 600px) and (max-width: 800px) {
  /* .header {
    flex-flow: row-reverse;
    max-width: 100%;
  }
  .header img {
    width: calc(100% - 40px);
    padding: 20px;
  }
  .header .logo img {
    margin: 15px 0;
  } */
  .today_credit_block {
    display: none;
  }
  .content {
    max-width: calc(100% - 50px);
  }
  .content > h1,
  .content > h3 {
    text-align: left;
    width: 100%;
  }
  .content > h1 {
    font-size: 45px;
    line-height: 45px;
    max-width: 100%;
  }
  .content h3 {
    font-size: 20px;
    line-height: 20px;
  }
  .content > .form {
    flex-direction: column;
  }
  .content > .form > div:nth-child(2) {
    margin-left: 0;
  }
  .content .form > div > label {
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 7px;
  }

  .content button {
    padding: 36px 20px;
    font-size: 20px;
  }
}

@media screen and (max-width: 600px) {
  .home_page .main button {
    letter-spacing: 1px;
    padding: 10px;
    font-size: 22px;
  }

  /* .header {
    flex-flow: column-reverse;
    width: calc(100% - 50px);
    display: flex;
    flex-direction: row-reverse;
  }
  .header > * {
    flex: 1;
  }

  .header img {
    width: calc(100%);
    padding: 10px;
  }
  .header .logo img {
    margin: 15px 0;
    width: 75%;
  } */
  .today_credit_block {
    display: none;
  }
  .content {
    max-width: calc(100% - 50px);
  }
  .content > h1,
  .content > h3 {
    text-align: center;
    width: 100%;
  }
  .content > h1 {
    font-size: 30px;
    line-height: inherit;
    max-width: 100%;
  }
  .content h3 {
    font-size: 20px;
    line-height: inherit;
  }
  .content > .form {
    flex-direction: column;
  }
  .content > .form > div {
    margin-top: 30px;
  }
  .content > .form > div:nth-child(2) {
    margin-left: 0;
  }
  .content .form > div > label {
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 7px;
  }

  .content button {
    padding: 35px;
    font-size: 34px;
    bottom: 20px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 20px;
    width: calc(100% - 40px);
  }
  .footer span {
    font-size: 12px;
  }
}

.popup {
  background: #fff;
  max-width: 500px;
  position: absolute;
  width: calc(95% - 50px);
  top: 50%;
  left: 50%;
  color: #000;
  height: 70vh;
  padding: 25px;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
}
.popup .form {
  margin-top: 40px;
}
.popup button {
  width: 100%;
  padding: 10px;
  background: #930c0c;
  margin-top: 20px;
  color: #fff;
  font-weight: bold;
}
.popup .form input {
  width: calc(100% - 30px);
  padding: 15px;
  border: 1px solid #ccc;
}
.popup button {
  color: #ffffff;
  font-weight: bold;
  background: #bd2424;
  border: 0;
  cursor: pointer;
  display: block;
}
.popup .form label {
  color: black;
}

.page.home_page.alfabank {
  color: #fff;
  background: url(https://www.alfabank.by/upload/resize_cache/webp/img/main/mega-main-alfawork2.webp),
    linear-gradient(0deg, #f03225, #f03225);
  background-position-x: right;
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

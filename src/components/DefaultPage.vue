<template>
  <div>
    <div class="page home_page" v-if="show_page === 0">
      <div class="main">
        <div class="image_partners">
<!--          <img src="../assets/CreditBest.svg" alt="">-->
          <img src="../assets/partners.svg" alt="" class="partners" >
        </div>
        <span class="header">ПРОЙДИТЕ ТЕСТ И МЫ НАЙДЕМ КРЕДИТ,<br> КОТОРЫЙ <br> <span class="pro-red">ВЫ ТОЧНО ПОЛУЧИТЕ</span></span>
        <div class="button-padding-position">
          <p class="analis">Проанализируем более 200 банковских предложений.</p>
          <button @click="show_page++;" onclick="ym(88151664,'reachGoal','Открытие опроса')" class="btn-red">ПОЛУЧИТЬ КРЕДИТ</button>
          <p class="rasschet">+ расчет % одобрения кредита после прохождения теста</p>
        </div>
      </div>
      <div class="disclamer">
        Вы можете оформить кредит если:
        Вы старше 18 лет;
        Ваш официальный доход более 190 руб.;
        Вы официально трудоустроены;
        Вы не в декретном отпуске;
        Отсутствие непогашенных судимостей;
        Удовлетворительная кредитная история за последние 2 года.

        Преимущества работы с нами:

        Широкая линейка кредитных продуктов;
        Кредит предоставляется на всю сумму по запросу клиента;
        Учитываем все получаемые доходы;
        С нашей помощью вы получите отсрочку до 3-х месяцев первого платежа;
        Нужные и дорогие подарки постоянным клиентам.
        Отсутствуют все виды комиссий
        Условия кредитования:

        Сумма кредита — от 100 до 50 000 бел. рублей;
        Процентная cтавка — от 13,99% до 28% годовых;
        Срок кредитования — от 61 дня до 84 мес;
        Время рассмотрения заявки — 1 час.
        Примеры расчета:

        Сумма 5000 рублей, сроком на три года, 13,99% годовых
        180,14 рублей первый платеж.

        Итоговая переплата: 1485,04 рублей

        Сумма 1500 рублей на два года, 18,2% годовых
        106,08 рублей первый платеж.

        Итоговая переплата: 1045,92 рублей.

        Штрафные санкции
        Продукт  Максимальные штрафные санкции  Выплата в 1-й день просрочки  Ежедневные выплаты в последующие дни
        Долгосрочный кредит
        Сумма просроченной задолженности выплачивается по ставке кредита с коэффициентом 1,3
        плюс 0,1% пени в день.
        17,5 рублей  21 рубль
        Краткосрочный кредит
        Проценты при выходе на просрочку считаются формуле x*2+0,1*x, где x - проценты ежедневные.
        23 рубля  28 рублей
      </div>

    </div>
    <div class="page" v-if="show_page === 1">
      <div class="wrapper_quiz">
        <p class="question">Какая сумма нужна?</p>
        <p class="page_num">Вопрос {{ show_page }} из 5</p>
        <div class="answers">
          <div class="variant" @click="quiz['1'] = 1;" :class="quiz['1'] === 1 ? 'active' : ''">до 1000 BYN</div>
          <div class="variant" @click="quiz['1'] = 2;" :class="quiz['1'] === 2 ? 'active' : ''">до 5000 BYN</div>
          <div class="variant" @click="quiz['1'] = 3;" :class="quiz['1'] === 3 ? 'active' : ''">до 15000 BYN</div>
          <div class="variant" @click="quiz['1'] = 4;" :class="quiz['1'] === 4 ? 'active' : ''">свыше 15000 BYN</div>
        </div>
        <button class="next" :onclick="(quiz[show_page] === null ? 'ym(88151664,\'reachGoal\',\'переход на вопрос 2\')' : '')" @click="quiz['1'] === null ? '' : show_page++;" :class="quiz['1'] === null ? 'disabled' : ''">Далее</button>
      </div>
    </div>

    <div class="page" v-if="show_page === 2">
      <div class="wrapper_quiz">
        <p class="question">На какой срок?</p>
        <p class="page_num">Вопрос {{ show_page }} из 5</p>
        <div class="answers">
          <div class="variant" @click="quiz[show_page] = 1;" :class="quiz[show_page] === 1 ? 'active' : ''">до 1 года</div>
          <div class="variant" @click="quiz[show_page] = 2;" :class="quiz[show_page] === 2 ? 'active' : ''">от 1 года до 2 лет</div>
          <div class="variant" @click="quiz[show_page] = 3;" :class="quiz[show_page] === 3 ? 'active' : ''">от 2 до 3 лет</div>
          <div class="variant" @click="quiz[show_page] = 4;" :class="quiz[show_page] === 4 ? 'active' : ''">от 3 до 5 лет</div>
          <div class="variant" @click="quiz[show_page] = 5;" :class="quiz[show_page] === 5 ? 'active' : ''">более 5 лет</div>
        </div>
        <button @click="show_page--;" class="disabled back">Назад</button>
        <button class="next" :onclick="(quiz[show_page] != null ? 'ym(88151664,\'reachGoal\',\'переход на вопрос 3\')' : '')" @click="quiz[show_page] === null ? '' : show_page++;" :class="quiz[show_page] === null ? 'disabled' : ''">Далее</button>
      </div>
    </div>

    <div class="page" v-if="show_page === 3">
      <div class="wrapper_quiz">
        <p class="question">На какие цели?</p>
        <p class="page_num">Вопрос {{ show_page }} из 5</p>
        <div class="answers">
          <div class="variant" @click="quiz[show_page] = 1;" :class="quiz[show_page] === 1 ? 'active' : ''">потребительский кредит</div>
          <div class="variant" @click="quiz[show_page] = 2;" :class="quiz[show_page] === 2 ? 'active' : ''">рефинансирование текущего кредита</div>
          <div class="variant" @click="quiz[show_page] = 3;" :class="quiz[show_page] === 3 ? 'active' : ''">авто</div>
          <div class="variant" @click="quiz[show_page] = 4;" :class="quiz[show_page] === 4 ? 'active' : ''">на рефинансирование</div>
          <div class="variant" @click="quiz[show_page] = 5;" :class="quiz[show_page] === 5 ? 'active' : ''">другое</div>
        </div>
        <button @click="show_page--;" class="disabled back">Назад</button>
        <button class="next" :onclick="(quiz[show_page] != null ? 'ym(88151664,\'reachGoal\',\'переход на вопрос 4\')' : '')" @click="quiz[show_page] === null ? '' : show_page++;" :class="quiz[show_page] === null ? 'disabled' : ''">Далее</button>
      </div>
    </div>

    <div class="page" v-if="show_page === 4">
      <div class="wrapper_quiz">
        <p class="question">Работаете ли вы сейчас?</p>
        <p class="page_num">Вопрос {{ show_page }} из 5</p>
        <div class="answers">
          <div class="variant" @click="quiz[show_page] = 1;" :class="quiz[show_page] === 1 ? 'active' : ''">да, более 3 месяцев</div>
          <div class="variant" @click="quiz[show_page] = 2;" :class="quiz[show_page] === 2 ? 'active' : ''">да, менее 3 месяцев</div>
          <div class="variant" @click="quiz[show_page] = 3;" :class="quiz[show_page] === 3 ? 'active' : ''">нет</div>
          <div class="variant" @click="quiz[show_page] = 4;" :class="quiz[show_page] === 4 ? 'active' : ''">пенсионер / студент</div>
          <div class="variant" @click="quiz[show_page] = 5;" :class="quiz[show_page] === 5 ? 'active' : ''">в декрете</div>
          <div class="variant" @click="quiz[show_page] = 6;" :class="quiz[show_page] === 6 ? 'active' : ''">предприниматель</div>
        </div>
        <button @click="show_page--;" class="disabled back">Назад</button>
        <button class="next" :onclick="(quiz[show_page] != null ? 'ym(88151664,\'reachGoal\',\'переход на вопрос 5\')' : '')" @click="quiz[show_page] === null ? '' : show_page++;" :class="quiz[show_page] === null ? 'disabled' : ''">Далее</button>
      </div>
    </div>

    <div class="page" v-if="show_page === 5">
      <div class="wrapper_quiz">
        <p class="question">Есть ли у вас сейчас непогашенные задолженности по кредитам?</p>
        <p class="page_num">Вопрос {{ show_page }} из 5</p>
        <div class="answers">
          <div class="variant" @click="quiz[show_page] = 1;" :class="quiz[show_page] === 1 ? 'active' : ''">Да</div>
          <div class="variant" @click="quiz[show_page] = 2;" :class="quiz[show_page] === 2 ? 'active' : ''">Нет</div>
        </div>
        <button @click="show_page--;" class="disabled back">Назад</button>
        <button class="next" :onclick="(quiz[show_page] != null ? 'ym(88151664,\'reachGoal\',\'Переход на форму\')' : '')" @click="quiz[show_page] === null ? '' : show_page++;" :class="quiz[show_page] === null ? 'disabled' : ''">Далее</button>
      </div>
    </div>

    <div class="page" v-if="show_page === 6">
      <div class="wrapper_quiz final">
        <p class="header">Мы подобрали для вас <span class="pro-red">3</span> варианта финансирования от <span class="pro-red">15%</span> годовых</p>
        <p><i>Заполните данные для получения рассчёта</i></p>

        <p class="label">Ваш номер телефона:</p>
        <input type="text" v-model="form.phone" v-maska="'+375(##)###-##-##'" placeholder="+375(__)___-__-__" :style="'border: 3px solid '+this.color">
        <button class="next" :onclick="((form.phone).length === 17 ? 'ym(88151664,\'reachGoal\',\'Отправка формы\')' : '')" @click="(form.phone).length === 17 ? sendForm() : '';" :class="(form.phone).length !== 17 ? 'disabled' : ''">ПОЛУЧИТЬ РАССЧЕТ</button>
      </div>
    </div>


    <div class="page" v-if="show_page === 7">
      <div class="wrapper_quiz ">
        <b>Ваша заявка успешна отправлена, в ближайшее время с вами свяжется наш менеджер</b>

      </div>
    </div>






  </div>

</template>

<script>

import { maska } from 'maska'
import Basic from "../../api/Basic";

export default {
  data() {
    return {
      amount: 146378,
      formStatus: false,
      color: 'white',
      show_popup: false,
      show_page: 0,
      quiz: {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
      },
      form: {
        phone: ''
      }
    }
  },
  directives: { maska },
  mounted() {
    // setInterval(this.addSum, 5000)
    switch (window.location.pathname){
      case '/':
        this.show_page = 0
        this.formStatus = false
        break;
      case '/thank-you':
        this.show_page = 7
        this.formStatus = true
        break;
      default:
        this.show_page = 0
        this.formStatus = false
        break;

    }

  },
  methods: {
    addSum(){
      this.amount += this.randomInteger(100, 1000)

    },
    randomInteger(min, max) {
      // получить случайное число от (min-0.5) до (max+0.5)
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },
    formatter: function (param) {
      return (new Intl.NumberFormat('BY', {
        style: 'currency',
        currency: 'BYN'
      })).format(param);
    },
    sendForm(){
      if (this.form.phone.length ===  17){
        Basic.sendLead(this.form)
            .then(function (){
              window.location.href = "/thank-you";
            })
        // this.formStatus = true;
        this.show_page++;
        // this.show_popup = false;
      }else{
        this.color = 'red';
      }


    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-family: sans-serif;
}
button.back{
  margin-right: 10px;
  display: none;
}
.page{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
}
.wrapper_quiz{
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
.wrapper_quiz .question{
  font-weight: bold;
  font-size: 120%;
  margin-bottom: 0;
  margin-left: 10px;
  padding: 0;
}
.wrapper_quiz .page_num{
  padding: 0;
  margin: 0;
  margin-left: 10px;
  margin-bottom: 30px;

}

.wrapper_quiz .answers{
  margin: 15px 0;
}

.wrapper_quiz .answers .variant{
  background-color: #e7e7e7;
  font-size: 18px;
  /*font-weight: 300;*/
  display: block;
  -webkit-border-radius: 5px;
  color: #000;
  border-radius: 15px;
  padding: 15px 19px;
  margin-bottom: 18px;
  /*text-transform: uppercase;*/
  font-weight: 300;
  cursor: pointer;
}

.wrapper_quiz .answers .variant.active{
  background: -webkit-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  color: #fff;
}

.wrapper_quiz .answers .variant.active:hover{
  background: -webkit-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  color: #fff;

}

.wrapper_quiz .answers .variant:hover{
  background-color: #d9d9d9;
}
.pro-red{
  color: #d4253e;
  font-size: 110%;
}

.wrapper_quiz button{
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
  -webkit-transition: .2s;
  -o-transition: .2s;
  transition: .2s;
  z-index: 1;
  margin-top: 20px;
  margin-bottom: 20px;
}
.wrapper_quiz button:before{
  content: ""; /* отображает псевдоэлемент */
  position: absolute; /* абсолютное позиционирование */
  top: 0; /* верхняя координата */
  left: 0; /* левая координата */
  width: 2em; /* относительная ширина */
  height: 100%; /* высота как у оригинала */
  background-color: rgba(255, 255, 255, 0.7); /* белый цвет с полупрозрачностью */
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


.wrapper_quiz button.back.disabled{
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  opacity: .5;
  pointer-events: initial;
  cursor: pointer;
}
.wrapper_quiz button.disabled{
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  opacity: .5;
  pointer-events: none;
  cursor: not-allowed;
}

.wrapper_quiz button.disabled:before{
  opacity: 0;
}

.wrapper_quiz.final .header{
  font-size: 150%;
  font-weight: bold;
  text-align: center;
}

.wrapper_quiz.final p{
  text-align: center;
}

.wrapper_quiz.final input{
  width: 100%;
  border: 1px solid #d7d7d7;
  -webkit-border-radius: 5px;
  border-radius: 20px;
  width: 100%;
  height: 54px;
  font-size: 18px;
  text-align: center;
  padding-left: 0;
}

.wrapper_quiz.final .label{
  margin-top: 35px;
  text-align: left;
  margin-left: 10px;
}

.wrapper_quiz.final button{
  width: 100%;
}

.wrapper_quiz.final button:before{
  content: ""; /* отображает псевдоэлемент */
  position: absolute; /* абсолютное позиционирование */
  top: 0; /* верхняя координата */
  left: 0; /* левая координата */
  width: 2em; /* относительная ширина */
  height: 100%; /* высота как у оригинала */
  background-color: rgba(255, 255, 255, 0.7); /* белый цвет с полупрозрачностью */
  animation: moveLightBig 3s;
  animation-iteration-count: infinite;
}
@keyframes moveLightBig {
  from {
    transform: translateX(-25em) skewX(-45deg);
  }
  to {
    transform: translateX(65em) skewX(-45deg);
  }
}
.disclamer{
  background: #fff;
  position: relative;
  padding: 15px;
}


.home_page {
  min-width: 100%;
  width: 100%;
  min-height: 100%;
  height: 100%;
  /*background-image: url('//b-allcredit.by/assets/image/bg2.jpg');*/
  background-image: url('//creditonline.by/assets/image/main-fon.jpg');
  background-size: cover !important;
  background-position: center !important;
}
.button-padding-position {
  position: static;
  bottom: 0;
  padding-bottom: 10%;
  z-index: 1;
}
@media (max-width: 950px) {
  .home_page {
    background: url(//creditonline.by/assets/image/mobil-fon.jpg) no-repeat;
    overflow: auto;
  }
  .button-padding-position {
    position: fixed;
    padding-bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
  }
  .button-padding-position .analis {
    display: block;
    position: relative;
    top: 27px;
    font-size: 14px;
    text-align: center;
    margin: 0;
  }
  .btn-red {
    top: 33px;
    font-size: 27px;
    min-width: 82%;
  }
  .rasschet{
    padding-top: 2.4rem;
    color: #b01717;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    margin: 0;
    margin-bottom: 10px;
  }
}
.rasschet{
  font-size: 12px;
}

.home_page .header{
  margin-top: 10px;
  line-height: 32px;
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: bold;
  display: block;
  color: #fff;
  background: #e0c784;
}

.home_page .main {
  height: 100vh;
  position: relative;
}
.home_page .main .logo{
  max-width: 200px;
  margin-bottom: 0;
}
.home_page .main button{
  min-height: 60px;
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #fff;
  background: #4FD1C5;
  background: linear-gradient(90deg, #ac1714 0%, #e20f39 100%);
  border: none;
  border-radius: 1000px;
  transition: 1s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  animation-duration: .8s;
  animation-name: btn-red;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  font-size: 27px;
  max-width: 100%;
}

.home_page .disclamer{
  background: #ffff;
  z-index: 9999;
}

.home_page > div{
  width: calc(100% - 30px);
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.image_partners{

}
.image_partners .partners{
  padding: 15px 0;
  /*width: calc(100% - 30px);*/
  max-width: 500px;
  max-height: 49px;
}
</style>

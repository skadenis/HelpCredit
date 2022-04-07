<template>
<!--  <div class="default-page">-->
<!--    <div class="header">-->
<!--      <div class="partners">-->
<!--        <img src="../assets/partners.svg" alt="логотип helpcredit.by">-->
<!--      </div>-->
<!--      <div class="logo">-->
<!--        <img src="../assets/logo-helpcredit.svg" alt="логотип helpcredit.by">-->
<!--      </div>-->

<!--      <div class="today_credit_block">-->
<!--        <p class="today_credit">Cегодня одобрено кредитов на:</p>-->
<!--        <p class="today_credit_amount">{{ formatter(amount) }}</p>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="content" v-if="!formStatus">-->
<!--      <h1>Оформи любой кредит по ставке от 1,16%!</h1>-->
<!--      <h3>Оставь номер телефона и получи кредит через нас по сниженной ставке</h3>-->
<!--      <div class="form">-->
<!--&lt;!&ndash;        <div>&ndash;&gt;-->
<!--&lt;!&ndash;          <label>Желаемая сумма:</label>&ndash;&gt;-->
<!--&lt;!&ndash;          <input type="text">&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--        <div>-->
<!--          <label :style="'color:'+this.color">Номер телефона:</label>-->
<!--          <input type="text" v-model="form.phone" v-maska="'+375(##)###-##-##'" placeholder="+375(__)___-__-__" :style="'border: 3px solid '+this.color">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <button @click="sendForm();">ПОЛУЧИТЬ СНИЖЕННУЮ СТАВКУ</button>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="content" v-else>-->
<!--      <h1>Ваша заявка сформированна, ожидайте с вами свяжуться в ближайшее время</h1>-->
<!--    </div>-->
<!--    <div class="footer">-->
<!--      <span @click="show_popup = !show_popup" style="cursor: pointer">Дополнительная информация</span>-->
<!--    </div>-->
<!--    <div class="popup" v-if="show_popup">-->
<!--      Вы можете оформить кредит если:-->
<!--      <br>Вы старше 18 лет;-->
<!--      <br>Ваш официальный доход более 190 руб.;-->
<!--      <br>Вы официально трудоустроены;-->
<!--      <br>Вы не в декретном отпуске;-->
<!--      <br>Отсутствие непогашенных судимостей;-->
<!--      <br>Удовлетворительная кредитная история за последние 2 года.-->

<!--      <br>Преимущества работы с нами:-->

<!--      <br>Широкая линейка кредитных продуктов;-->
<!--      <br>Кредит предоставляется на всю сумму по запросу клиента;-->
<!--      <br>Учитываем все получаемые доходы;-->
<!--      <br>С нашей помощью вы получите отсрочку до 3-х месяцев первого платежа;-->
<!--      <br>Нужные и дорогие подарки постоянным клиентам.-->
<!--      <br>Отсутствуют все виды комиссий-->
<!--      <br>Условия кредитования:-->

<!--      <br>Сумма кредита — от 100 до 50 000 бел. рублей;-->
<!--      <br>Процентная cтавка — от 13,99% до 28% годовых;-->
<!--      <br>Срок кредитования — от 61 дня до 84 мес;-->
<!--      <br>Время рассмотрения заявки — 1 час.-->
<!--      <br>Примеры расчета:-->

<!--      <br>Сумма 5000 рублей, сроком на три года, 13,99% годовых-->
<!--      <br>180,14 рублей первый платеж.-->

<!--      <br>Итоговая переплата: 1485,04 рублей-->

<!--      <br>Сумма 1500 рублей на два года, 18,2% годовых-->
<!--      <br>106,08 рублей первый платеж.-->

<!--      <br>Итоговая переплата: 1045,92 рублей.-->

<!--      <br>Штрафные санкции-->
<!--      <br>Продукт  Максимальные штрафные санкции  Выплата в 1-й день просрочки  Ежедневные выплаты в последующие дни-->
<!--      <br>Долгосрочный кредит-->
<!--      <br>Сумма просроченной задолженности выплачивается по ставке кредита с коэффициентом 1,3-->
<!--      <br>плюс 0,1% пени в день.-->
<!--      <br>17,5 рублей  21 рубль-->
<!--      <br>Краткосрочный кредит-->
<!--      <br>Проценты при выходе на просрочку считаются формуле x*2+0,1*x, где x - проценты ежедневные.-->
<!--      <br>23 рубля  28 рублей-->
<!--      <br>-->


<!--      <div>-->
<!--        <div class="form">-->
<!--          <div>-->
<!--            <label>Номер телефона:</label>-->
<!--            <input type="text" v-model="form.phone" v-maska="'+375(##)###-##-##'" placeholder="+375(__)___-__-__" >-->
<!--          </div>-->
<!--        </div>-->
<!--        <div>-->
<!--          <button @click="sendForm();">ПОЛУЧИТЬ СНИЖЕННУЮ СТАВКУ</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  <div>
<!--    <section class="home_page" v-if="show_page === 43">-->
<!--      <div class="container block-fix">-->
<!--        <div class="col-12 top-lead-text">-->
<!--          <div class="inner mb-md-3">-->
<!--            <a href="/">-->
<!--              <img src="/assets/image/logo-new.png" class="logo-home-page">-->
<!--            </a>-->
<!--          </div>-->
<!--          <div class="lead">-->
<!--            <div>ПРОЙДИТЕ ТЕСТ И МЫ НАЙДЕМ КРЕДИТ,</div> КОТОРЫЙ <span class="text-color-company">ВЫ ТОЧНО ПОЛУЧИТЕ!</span>-->
<!--          </div>-->
<!--          <p class="pt-1 text-for-lead mobi-hidden">Проанализируем более 200 банковских предложений.</p>-->
<!--        </div>-->
<!--        <div class="col-12 justify-content-start button-padding-position">-->
<!--          <div class="wrap">-->
<!--            <p class="pt-1 text-for-lead mobi-only">Проанализируем более 200 банковских предложений.</p>-->
<!--            <div class="button-position">-->
<!--              <button class="button activation-hide btn-red">Начать тест</button>-->
<!--            </div>-->
<!--            <div class="text-button">-->
<!--              + расчет % одобрения кредита после прохождения теста-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="container">-->
<!--        <div class="row">-->
<!--          <div class="col-12 mobile-fix-block">-->
<!--            <div id="footer">-->
<!--              <div class="container">-->
<!--                <div class="row">-->
<!--                  <div class="col-12">-->
<!--                    <div class="card border-danger card-procredit" style="border: 0;background-color: #fff">-->
<!--                      <div class="card-header" id="headingOne" style="background-color: white;border: none">-->
<!--                        Creditonline.by не оказывает услуг по оформлению и предоставлению населению-->
<!--                        микрозаймов, кредитов и других финансовых услуг,-->
<!--                        регулируемых Указом Президента №325 "О привлечении и предоставлении-->
<!--                        займов, деятельности микрофинансовых организаций". ООО "Прокредит Плюс" (УНП 192824694, адрес: 220069, Беларусь, г. Минск, пр. Победителей 7а, 2 этаж)-->
<!--                        оставляет за собой право отправлять заявки в зависимости от-->
<!--                        территориальности и иных критериев в компании-партнеры (банки и-->
<!--                        лизинговые организации), в том числе ООО "Ювилс Лизинг" (Свидетельство о-->
<!--                        включении в реестр лизинговых организаций №160 от 25.09.2019г). Условия-->
<!--                        кредитования: cумма кредита — от 500 до 200 000 бел. рублей; минимальная-->
<!--                        процентная cтавка 7%, максимальная процентная ставка 25,4% годовых;-->
<!--                        минимальный срок кредитования 63 дня, максимальный срок кредитования 240-->
<!--                        мес. Примеры расчета: сумма 2000 рублей на два года, 13,7% годовых-->
<!--                        106,17 рублей первый платеж. Итоговая переплата: 285,42 рублей.-->
<!--                        Досрочное погашение без штрафов. При неуплате в срок процентов за-->
<!--                        пользование кредитом, насчитывается пеня в размере 1% от суммы не-->
<!--                        уплаченных процентов за каждый день просрочки. Ваша заявка в зависимости-->
<!--                        от условий будет отправлена в один из следующих банков: АБСОЛЮТБАНК,-->
<!--                        Альфа-Банк, Белагропромбанк, АСБ Беларусбанк, Банк БелВЭБ,-->
<!--                        Белгазпромбанк, Белинвестбанк, БПС-Сбербанк, БТА Банк, Банк ВТБ,-->
<!--                        Белгазпромбанк, Идея Банк, Паритетбанк, Приорбанк, РРБ-Банк, Технобанк,-->
<!--                        Франсабанк, Цептер Банк. Узнать подробности вы можете по телефону <a href="tel:+375297733661">+375297733661</a> . Компания вправе взымать комиссию за свои услуги.-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
    <div class="page home_page" v-if="show_page === 0">
      <div class="main">
<!--        <img src="../assets/logo-helpcredit.svg" class="logo" alt="">-->
        <span class="header">ПРОЙДИТЕ ТЕСТ И МЫ НАЙДЕМ КРЕДИТ,<br> КОТОРЫЙ <br> <span class="pro-red">ВЫ ТОЧНО ПОЛУЧИТЕ</span></span>
        <div class="button-padding-position">
          <p class="analis">Проанализируем более 200 банковских предложений.</p>
          <button @click="show_page++;" class="btn-red">НАЧАТЬ ТЕСТ</button>
          <p class="rasschet">+ расчет % одобрения кредита после прохождения теста</p>
        </div>
      </div>
      <div class="disclamer">
        Creditonline.by не оказывает услуг по оформлению и предоставлению населению микрозаймов, кредитов и других финансовых услуг, регулируемых Указом Президента №325 "О привлечении и предоставлении займов, деятельности микрофинансовых организаций". ООО "Прокредит Плюс" (УНП 192824694, адрес: 220069, Беларусь, г. Минск, пр. Победителей 7а, 2 этаж) оставляет за собой право отправлять заявки в зависимости от территориальности и иных критериев в компании-партнеры (банки и лизинговые организации), в том числе ООО "Ювилс Лизинг" (Свидетельство о включении в реестр лизинговых организаций №160 от 25.09.2019г). Условия кредитования: cумма кредита — от 500 до 200 000 бел. рублей; минимальная процентная cтавка 7%, максимальная процентная ставка 25,4% годовых; минимальный срок кредитования 63 дня, максимальный срок кредитования 240 мес. Примеры расчета: сумма 2000 рублей на два года, 13,7% годовых 106,17 рублей первый платеж. Итоговая переплата: 285,42 рублей. Досрочное погашение без штрафов. При неуплате в срок процентов за пользование кредитом, насчитывается пеня в размере 1% от суммы не уплаченных процентов за каждый день просрочки. Ваша заявка в зависимости от условий будет отправлена в один из следующих банков: АБСОЛЮТБАНК, Альфа-Банк, Белагропромбанк, АСБ Беларусбанк, Банк БелВЭБ, Белгазпромбанк, Белинвестбанк, БПС-Сбербанк, БТА Банк, Банк ВТБ, Белгазпромбанк, Идея Банк, Паритетбанк, Приорбанк, РРБ-Банк, Технобанк, Франсабанк, Цептер Банк. Узнать подробности вы можете по телефону <a href="tel:+375297733661">+375297733661</a> . Компания вправе взымать комиссию за свои услуги.
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
        <button class="next" @click="quiz['1'] === null ? '' : show_page++;" :class="quiz['1'] === null ? 'disabled' : ''">Далее</button>
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
        <button class="next" @click="quiz[show_page] === null ? '' : show_page++;" :class="quiz[show_page] === null ? 'disabled' : ''">Далее</button>
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
        <button class="next" @click="quiz[show_page] === null ? '' : show_page++;" :class="quiz[show_page] === null ? 'disabled' : ''">Далее</button>
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
        <button class="next" @click="quiz[show_page] === null ? '' : show_page++;" :class="quiz[show_page] === null ? 'disabled' : ''">Далее</button>
      </div>
    </div>

    <div class="page" v-if="show_page === 5">
      <div class="wrapper_quiz">
        <p class="question">Есть ли у вас сейчас непогашенные задолженности по кредитам?</p>
        <p class="page_num">Вопрос {{ show_page }} из 6</p>
        <div class="answers">
          <div class="variant" @click="quiz[show_page] = 1;" :class="quiz[show_page] === 1 ? 'active' : ''">Да</div>
          <div class="variant" @click="quiz[show_page] = 2;" :class="quiz[show_page] === 2 ? 'active' : ''">Нет</div>
        </div>
        <button @click="show_page--;" class="disabled back">Назад</button>
        <button class="next" @click="quiz[show_page] === null ? '' : show_page++;" :class="quiz[show_page] === null ? 'disabled' : ''">Далее</button>
      </div>
    </div>

    <div class="page" v-if="show_page === 6">
      <div class="wrapper_quiz final">
        <p class="header">Мы подобрали для вас <span class="pro-red">3</span> варианта финансирования от <span class="pro-red">15%</span> годовых</p>
        <p><i>Заполните данные для получения рассчёта</i></p>

        <p class="label">Ваш номер телефона:</p>
        <input type="text" v-model="form.phone" v-maska="'+375(##)###-##-##'" placeholder="+375(__)___-__-__" :style="'border: 3px solid '+this.color">
        <button class="next" @click="(form.phone).length === 17 ? sendForm() : '';" :class="(form.phone).length !== 17 ? 'disabled' : ''">ПОЛУЧИТЬ РАССЧЕТ</button>
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
      show_page: 6,
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
            .then(function (res){
              console.log(res);
            })
        // this.formStatus = true;
        // window.location.href = "/thank-you";
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
/*.default-page{*/
/*  width: 100%;*/
/*  !*min-width: 400px;*!*/
/*  min-height: 100vh;*/
/*  padding: 0;*/
/*  margin: 0;*/
/*  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/src/assets/bg.png');*/
/*  background-repeat: no-repeat;*/
/*  background-size: cover;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  color: #fff;*/
/*}*/
/*.header{*/
/*  margin: 15px 25px;*/
/*  display: flex;*/
/*}*/
/*.header > div{*/
/*  width: 100%;*/
/*}*/
/*.header .partners{*/
/*  margin-top: 15px;*/
/*}*/
/*.header .logo{*/
/*  margin: 0 auto;*/
/*  display: block;*/
/*}*/
/*.header .logo img{*/
/*  margin: 0 auto;*/
/*  display: block;*/
/*}*/

/*.header .today_credit_block .today_credit{*/
/*  font-family: sans-serif;*/
/*  font-style: italic;*/
/*  margin-bottom: 0;*/
/*  font-weight: 400;*/
/*  font-size: 16px;*/
/*  text-align: right;*/
/*}*/
/*.header .today_credit_block .today_credit_amount{*/
/*  font-family: sans-serif;*/
/*  font-style: normal;*/
/*  font-weight: bold;*/
/*  font-size: 45px;*/
/*  margin-top: 0;*/
/*  text-align: right;*/

/*}*/
/*.content{*/
/*  max-width: 1100px;*/
/*  margin: 0 auto;*/
/*  display: block;*/
/*}*/
/*.content h1{*/
/*  font-family: sans-serif;*/
/*  font-style: normal;*/
/*  font-weight: 800;*/
/*  font-size: 72px;*/
/*  line-height: 84px;*/
/*  text-align: center;*/
/*  color: #FFFFFF;*/
/*}*/
/*.content h3{*/
/*  font-family: sans-serif;*/
/*  font-style: normal;*/
/*  font-weight: 800;*/
/*  font-size: 24px;*/
/*  line-height: 28px;*/
/*  text-align: center;*/

/*  color: #FFFFFF;*/
/*}*/
/*.content .form{*/
/*  display: flex;*/
/*}*/
/*.content .form > div {*/
/*  margin-top: 50px;*/
/*  width: 100%;*/
/*  display: flex;*/
/*  flex-direction: column*/
/*}*/
/*.content .form > div:nth-child(2) {*/
/*  margin-left: 50px;*/
/*}*/
/*.content .form > div > label{*/
/*  font-family: sans-serif;*/
/*  font-weight: 800;*/
/*  font-size: 18px;*/
/*  line-height: 18px;*/
/*  margin-bottom: 10px;*/
/*}*/
/*.content .form > div > input{*/
/*  height: 50px;*/
/*  font-size: 19px;*/
/*  padding-left: 20px;*/
/*}*/
/*.content button{*/
/*  padding: 36px 20px;*/
/*  font-size: 25px;*/
/*  color: #FFFFFF;*/
/*  font-weight: bold;*/
/*  background: #bd2424;*/
/*  border: 0;*/
/*  cursor: pointer;*/
/*  margin: 90px auto 20px;*/
/*  display: block;*/
/*}*/
/*.content button:hover{*/
/*  background: #930c0c;*/
/*}*/
/*.footer{*/
/*  bottom: 0;*/
/*  position: absolute;*/
/*}*/

/*!* от 1200 до 1400 *!*/
/*@media screen and (min-width: 1200px) and (max-width: 1400px){*/
/*  .header{*/
/*    flex-flow: row-reverse;*/
/*  }*/
/*  .header .logo img{*/
/*    margin: 15px 0;*/
/*    height: 80px;*/
/*  }*/
/*  .today_credit_block{*/
/*    display: none;*/
/*  }*/
/*  .content{*/
/*    max-width: calc(100% - 50px);*/
/*  }*/
/*  .content > h1,*/
/*  .content > h3{*/
/*    text-align: left;*/
/*    width: 100%;*/
/*  }*/
/*  .content > h1{*/
/*    font-size: 60px;*/
/*    line-height: 60px;*/
/*    max-width: 1000px;*/
/*  }*/

/*}*/

/*!* от 1000 до 1200 *!*/
/*@media screen and (min-width: 1000px) and (max-width: 1200px){*/
/*  .header{*/
/*    flex-flow: row-reverse;*/
/*  }*/
/*  .header .logo img{*/
/*    margin: 15px 0;*/
/*    height: 80px;*/
/*  }*/
/*  .today_credit_block{*/
/*    display: none;*/
/*  }*/
/*  .content{*/
/*    max-width: calc(100% - 50px);*/
/*  }*/
/*  .content > h1,*/
/*  .content > h3{*/
/*    text-align: left;*/
/*    width: 100%;*/
/*  }*/
/*  .content > h1{*/
/*    font-size: 60px;*/
/*    line-height: 60px;*/
/*    max-width: 1000px;*/
/*  }*/
/*}*/

/*!* от 800 до 1000 *!*/
/*@media screen and (min-width: 800px) and (max-width: 1000px){*/
/*  .header{*/
/*    flex-flow: row-reverse;*/
/*  }*/
/*  .header .logo img{*/
/*    margin: 15px 0;*/
/*    height: 80px;*/
/*  }*/
/*  .today_credit_block{*/
/*    display: none;*/
/*  }*/
/*  .content{*/
/*    max-width: calc(100% - 50px);*/
/*  }*/
/*  .content > h1,*/
/*  .content > h3{*/
/*    text-align: left;*/
/*    width: 100%;*/
/*  }*/
/*  .content > h1{*/
/*    font-size: 60px;*/
/*    line-height: 60px;*/
/*    max-width: 1000px;*/
/*  }*/
/*  .content > .form {*/
/*    flex-direction: column;*/
/*  }*/
/*  .content > .form > div:nth-child(2){*/
/*    margin-left: 0;*/
/*  }*/

/*}*/

/*!* от 800 до 1000 *!*/
/*@media screen and (min-width: 600px) and (max-width: 800px){*/
/*  .header{*/
/*    flex-flow: row-reverse;*/
/*    max-width: 100%;*/
/*  }*/
/*  .header img{*/
/*    width: calc(100% - 40px);*/
/*    padding: 20px;*/
/*  }*/
/*  .header .logo img{*/
/*    margin: 15px 0;*/
/*  }*/
/*  .today_credit_block{*/
/*    display: none;*/
/*  }*/
/*  .content{*/
/*    max-width: calc(100% - 50px);*/
/*  }*/
/*  .content > h1,*/
/*  .content > h3{*/
/*    text-align: left;*/
/*    width: 100%;*/
/*  }*/
/*  .content > h1{*/
/*    font-size: 45px;*/
/*    line-height: 45px;*/
/*    max-width: 100%;*/
/*  }*/
/*  .content h3{*/
/*    font-size: 20px;*/
/*    line-height: 20px;*/
/*  }*/
/*  .content > .form {*/
/*    flex-direction: column;*/
/*  }*/
/*  .content > .form > div:nth-child(2){*/
/*    margin-left: 0;*/
/*  }*/
/*  .content .form > div > label{*/
/*    font-size: 14px;*/
/*    line-height: 14px;*/
/*    margin-bottom: 7px;*/
/*  }*/

/*  .content button{*/
/*    padding: 36px 20px;*/
/*    font-size: 20px;*/
/*  }*/

/*}*/

/*@media screen and (max-width: 600px){*/
/*  .header{*/
/*    flex-flow: column-reverse;*/
/*    width: calc(100% - 50px);*/
/*    display: flex;*/
/*    flex-direction: row-reverse;*/
/*  }*/
/*  .header > * {*/
/*    flex: 1;*/
/*  }*/

/*  .header img{*/
/*    width: calc(100%);*/
/*    padding: 10px;*/
/*  }*/
/*  .header .logo img{*/
/*    margin: 15px 0;*/
/*    width: 75%;*/
/*  }*/
/*  .today_credit_block{*/
/*    display: none;*/
/*  }*/
/*  .content{*/
/*    max-width: calc(100% - 50px);*/
/*  }*/
/*  .content > h1,*/
/*  .content > h3{*/
/*    text-align: left;*/
/*    width: 100%;*/
/*  }*/
/*  .content > h1{*/
/*    font-size: 30px;*/
/*    line-height: 30px;*/
/*    max-width: 100%;*/
/*  }*/
/*  .content h3{*/
/*    font-size: 20px;*/
/*    line-height: 20px;*/
/*  }*/
/*  .content > .form {*/
/*    flex-direction: column;*/
/*  }*/
/*  .content > .form > div{*/
/*    margin-top: 30px;*/
/*  }*/
/*  .content > .form > div:nth-child(2){*/
/*    margin-left: 0;*/
/*  }*/
/*  .content .form > div > label{*/
/*    font-size: 14px;*/
/*    line-height: 14px;*/
/*    margin-bottom: 7px;*/
/*  }*/

/*  .content button{*/
/*    padding: 20px;*/
/*    font-size: 16px;*/
/*    margin-top: 50px;*/
/*  }*/
/*  .footer span{*/
/*    font-size: 12px;*/
/*  }*/
/*}*/

/*.popup{*/
/*  background: #fff;*/
/*  max-width: 500px;*/
/*  position: absolute;*/
/*  width: calc(95% - 50px);*/
/*  top: 50%;*/
/*  left: 50%;*/
/*  color: #000;*/
/*  height: 70vh;*/
/*  padding: 25px;*/
/*  transform: translate(-50%, -50%);*/
/*  overflow-y: scroll;*/
/*}*/
/*.popup .form{*/
/*  margin-top: 40px;*/
/*}*/
/*.popup button{*/
/*  width: 100%;*/
/*  padding: 10px;*/
/*  background: #930c0c;*/
/*  margin-top: 20px;*/
/*  color: #fff;*/
/*  font-weight: bold;*/
/*}*/
/*.popup .form input{*/
/*  width: calc(100% - 30px);*/
/*  padding: 15px;*/
/*  border: 1px solid #ccc;*/
/*}*/
/*.popup button{*/
/*  color: #FFFFFF;*/
/*  font-weight: bold;*/
/*  background: #bd2424;*/
/*  border: 0;*/
/*  cursor: pointer;*/
/*  display: block;*/
/*}*/
/*.popup .form label{*/
/*  color: black;*/
/*}*/

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
  margin-top: 40px;
  line-height: 32px;
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: bold;
  display: block;

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
  min-width: 350px;
  min-height: 60px;
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
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
  min-width: 350px;
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


</style>

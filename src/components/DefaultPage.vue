<template>
  <div class="default-page">
    <div class="header">
      <div class="partners">
        <img src="../assets/partners.svg" alt="логотип helpcredit.by">
      </div>
      <div class="logo">
        <img src="../assets/CreditBest.svg" alt="логотип helpcredit.by">
      </div>

      <div class="today_credit_block">
        <p class="today_credit">Cегодня одобрено кредитов на:</p>
        <p class="today_credit_amount">{{ formatter(amount) }}</p>
      </div>
    </div>
    <div class="content" v-if="!formStatus">
      <h1>Оформи любой кредит по ставке от 13,99% годовых!</h1>
      <h3>Оставь номер телефона и получи кредит через нас по сниженной ставке</h3>
      <div class="form">
<!--        <div>-->
<!--          <label>Желаемая сумма:</label>-->
<!--          <input type="text">-->
<!--        </div>-->
        <div>
          <label :style="'color:'+this.color">Номер телефона:</label>
          <input type="text" v-model="form.phone" v-maska="'+375(##)###-##-##'" placeholder="+375(__)___-__-__" :style="'border: 3px solid '+this.color">
        </div>
      </div>
      <div>
        <button @click="sendForm();">ПОЛУЧИТЬ СНИЖЕННУЮ СТАВКУ</button>
      </div>
    </div>
    <div class="content" v-else>
      <h1>Ваша заявка сформированна, ожидайте с вами свяжуться в ближайшее время</h1>
    </div>
    <div class="footer">
      <span @click="show_popup = !show_popup" style="cursor: pointer">Дополнительная информация</span>
    </div>
    <div class="popup" v-if="show_popup">
      Вы можете оформить кредит если:
      <br>Вы старше 18 лет;
      <br>Ваш официальный доход более 190 руб.;
      <br>Вы официально трудоустроены;
      <br>Вы не в декретном отпуске;
      <br>Отсутствие непогашенных судимостей;
      <br>Удовлетворительная кредитная история за последние 2 года.

      <br>Преимущества работы с нами:

      <br>Широкая линейка кредитных продуктов;
      <br>Кредит предоставляется на всю сумму по запросу клиента;
      <br>Учитываем все получаемые доходы;
      <br>С нашей помощью вы получите отсрочку до 3-х месяцев первого платежа;
      <br>Нужные и дорогие подарки постоянным клиентам.
      <br>Отсутствуют все виды комиссий
      <br>Условия кредитования:

      <br>Сумма кредита — от 100 до 50 000 бел. рублей;
      <br>Процентная cтавка — от 13,99% до 28% годовых;
      <br>Срок кредитования — от 61 дня до 84 мес;
      <br>Время рассмотрения заявки — 1 час.
      <br>Примеры расчета:

      <br>Сумма 5000 рублей, сроком на три года, 13,99% годовых
      <br>180,14 рублей первый платеж.

      <br>Итоговая переплата: 1485,04 рублей

      <br>Сумма 1500 рублей на два года, 18,2% годовых
      <br>106,08 рублей первый платеж.

      <br>Итоговая переплата: 1045,92 рублей.

      <br>Штрафные санкции
      <br>Продукт  Максимальные штрафные санкции  Выплата в 1-й день просрочки  Ежедневные выплаты в последующие дни
      <br>Долгосрочный кредит
      <br>Сумма просроченной задолженности выплачивается по ставке кредита с коэффициентом 1,3
      <br>плюс 0,1% пени в день.
      <br>17,5 рублей  21 рубль
      <br>Краткосрочный кредит
      <br>Проценты при выходе на просрочку считаются формуле x*2+0,1*x, где x - проценты ежедневные.
      <br>23 рубля  28 рублей
      <br>


      <div>
        <div class="form">
          <div>
            <label>Номер телефона:</label>
            <input type="text" v-model="form.phone" v-maska="'+375(##)###-##-##'" placeholder="+375(__)___-__-__" >
          </div>
        </div>
        <div>
          <button @click="sendForm();">ПОЛУЧИТЬ СНИЖЕННУЮ СТАВКУ</button>
        </div>
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
      form: {
        phone: ''
      }
    }
  },
  directives: { maska },
  mounted() {
    setInterval(this.addSum, 5000)
    if(window.location.pathname === '/'){
      this.formStatus = false
    }else {
      this.formStatus = true
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
      if (this.form.phone.length === 17){
        Basic.sendLead(this.form)
            .then(function (res){
              console.log(res);
            })
        this.formStatus = true;
        // window.location.href = "/thank-you";
        this.show_popup = false;
      }else{
        this.color = 'red';
      }


    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.default-page{
  width: 100%;
  /*min-width: 400px;*/
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/src/assets/kredit_dengi_dolg.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  color: #fff;
}
.header{
  margin: 15px 25px;
  display: flex;
}
.header > div{
  width: 100%;
}
.header .partners{
  margin-top: 15px;
}
.header .logo{
  margin: 0 auto;
  display: block;
}
.header .logo img{
  margin: 0 auto;
  display: block;
}

.header .today_credit_block .today_credit{
  font-family: sans-serif;
  font-style: italic;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 16px;
  text-align: right;
}
.header .today_credit_block .today_credit_amount{
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  margin-top: 0;
  text-align: right;

}
.content{
  max-width: 1100px;
  margin: 0 auto;
  display: block;
}
.content h1{
  font-family: sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 84px;
  text-align: center;
  color: #FFFFFF;
}
.content h3{
  font-family: sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #FFFFFF;
}
.content .form{
  display: flex;
}
.content .form > div {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column
}
.content .form > div:nth-child(2) {
  margin-left: 50px;
}
.content .form > div > label{
  font-family: sans-serif;
  font-weight: 800;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 10px;
}
.content .form > div > input{
  height: 50px;
  font-size: 19px;
  padding-left: 20px;
}
.content button{
  padding: 36px 20px;
  font-size: 25px;
  color: #FFFFFF;
  font-weight: bold;
  background: #4abd24;
  border: 0;
  cursor: pointer;
  margin: 90px auto 20px;
  display: block;
}
.content button:hover{
  background: #52a236;
}
.footer{
  bottom: 0;
  position: absolute;
}

/* от 1200 до 1400 */
@media screen and (min-width: 1200px) and (max-width: 1400px){
  .header{
    flex-flow: row-reverse;
  }
  .header .logo img{
    margin: 15px 0;
    height: 80px;
  }
  .today_credit_block{
    display: none;
  }
  .content{
    max-width: calc(100% - 50px);
  }
  .content > h1,
  .content > h3{
    text-align: left;
    width: 100%;
  }
  .content > h1{
    font-size: 60px;
    line-height: 60px;
    max-width: 1000px;
  }

}

/* от 1000 до 1200 */
@media screen and (min-width: 1000px) and (max-width: 1200px){
  .header{
    flex-flow: row-reverse;
  }
  .header .logo img{
    margin: 15px 0;
    height: 80px;
  }
  .today_credit_block{
    display: none;
  }
  .content{
    max-width: calc(100% - 50px);
  }
  .content > h1,
  .content > h3{
    text-align: left;
    width: 100%;
  }
  .content > h1{
    font-size: 60px;
    line-height: 60px;
    max-width: 1000px;
  }
}

/* от 800 до 1000 */
@media screen and (min-width: 800px) and (max-width: 1000px){
  .header{
    flex-flow: row-reverse;
  }
  .header .logo img{
    margin: 15px 0;
    height: 80px;
  }
  .today_credit_block{
    display: none;
  }
  .content{
    max-width: calc(100% - 50px);
  }
  .content > h1,
  .content > h3{
    text-align: left;
    width: 100%;
  }
  .content > h1{
    font-size: 60px;
    line-height: 60px;
    max-width: 1000px;
  }
  .content > .form {
    flex-direction: column;
  }
  .content > .form > div:nth-child(2){
    margin-left: 0;
  }

}

/* от 800 до 1000 */
@media screen and (min-width: 600px) and (max-width: 800px){
  .header{
    flex-flow: row-reverse;
    max-width: 100%;
  }
  .header img{
    width: calc(100% - 40px);
    padding: 20px;
  }
  .header .logo img{
    margin: 15px 0;
  }
  .today_credit_block{
    display: none;
  }
  .content{
    max-width: calc(100% - 50px);
  }
  .content > h1,
  .content > h3{
    text-align: left;
    width: 100%;
  }
  .content > h1{
    font-size: 45px;
    line-height: 45px;
    max-width: 100%;
  }
  .content h3{
    font-size: 20px;
    line-height: 20px;
  }
  .content > .form {
    flex-direction: column;
  }
  .content > .form > div:nth-child(2){
    margin-left: 0;
  }
  .content .form > div > label{
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 7px;
  }

  .content button{
    padding: 36px 20px;
    font-size: 20px;
  }

}

@media screen and (max-width: 600px){
  .header{
    flex-flow: column-reverse;
    width: calc(100% - 50px);
    display: flex;
    flex-direction: row-reverse;
  }
  .header > * {
    flex: 1;
  }

  .header img{
    width: calc(100%);
    padding: 10px;
  }
  .header .logo img{
    margin: 15px 0;
    width: 75%;
  }
  .today_credit_block{
    display: none;
  }
  .content{
    max-width: calc(100% - 50px);
  }
  .content > h1,
  .content > h3{
    text-align: left;
    width: 100%;
  }
  .content > h1{
    font-size: 30px;
    line-height: 30px;
    max-width: 100%;
  }
  .content h3{
    font-size: 20px;
    line-height: 20px;
  }
  .content > .form {
    flex-direction: column;
  }
  .content > .form > div{
    margin-top: 30px;
  }
  .content > .form > div:nth-child(2){
    margin-left: 0;
  }
  .content .form > div > label{
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 7px;
  }

  .content button{
    padding: 20px;
    font-size: 16px;
    margin-top: 50px;
  }
  .footer span{
    font-size: 12px;
  }
}

.popup{
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
.popup .form{
  margin-top: 40px;
}
.popup button{
  width: 100%;
  padding: 10px;
  background: #930c0c;
  margin-top: 20px;
  color: #fff;
  font-weight: bold;
}
.popup .form input{
  width: calc(100% - 30px);
  padding: 15px;
  border: 1px solid #ccc;
}
.popup button{
  color: #FFFFFF;
  font-weight: bold;
  background: #bd2424;
  border: 0;
  cursor: pointer;
  display: block;
}
.popup .form label{
  color: black;
}
</style>

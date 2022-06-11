<template>
  <div class="wrapper_quiz">
    <p class="question">{{ data.question }}</p>
    <p class="page_num">Вопрос {{ data.page_id }} из 6</p>
    <div class="answers">
      <div class="variant" @click="setResult(1)" :class="result === 1 ? 'active' : ''">до 1000 BYN</div>
      <div class="variant" @click="setResult(2)" :class="result === 2 ? 'active' : ''">до 1000 BYN</div>
      <div class="variant" @click="setResult(3)" :class="result === 3 ? 'active' : ''">до 1000 BYN</div>
      <div class="variant" @click="setResult(4)" :class="result === 4 ? 'active' : ''">до 1000 BYN</div>

      <!--      <div class="variant" @click="quiz[show_page] = 2;" :class="quiz[show_page] === 2 ? 'active' : ''">до 5000 BYN</div>-->
<!--      <div class="variant" @click="quiz[show_page] = 3;" :class="quiz[show_page] === 3 ? 'active' : ''">до 15000 BYN</div>-->
<!--      <div class="variant" @click="quiz[show_page] = 4;" :class="quiz[show_page] === 4 ? 'active' : ''">свыше 15000 BYN</div>-->
    </div>
<!--    <button class="next"  @click="quiz[show_page] === null ? '' : show_page++;" :class="quiz[show_page] === null ? 'disabled' : ''">Далее</button>-->
  </div>
</template>

<script>
export default {
  props: ['data', 'initialResult'],
  mounted() {
    console.log(this.data);
  },
  methods: {
    setResult(id){
      this.$emit('changeResult', {id, index: this.data.page_id});
    }
  },
  watch: {
    initialResult: function (newVal){this.result = newVal}
  },
  data() {
    return {
      result: this.initialResult
    }
  },
  name: "interview-form"
}
</script>

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
  background: #f1f1f1;
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
  margin-top: 45px;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 5px;
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


.home_page.best {
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
  .home_page.best {
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

.home_page .creditbest .header{
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
.lock{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 20px auto;
}
.lock > p {
  padding: 0;
  margin: 2px 0 0 10px;
}
button.sendForm{
  padding: 30px;
  height: auto;
  font-size: 20px;
}
.remark_form{
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 12px;
  margin-top: 15px;
  display: block;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  color: #000000;
}
.form_error{
  max-width: 300px;
  margin: 0 auto;
  display: block;
  font-weight: bold;
  color: red;
  font-size: 16px;
}





.home_page.help{
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/src/assets/bg.png');
}


.default-page{
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
  -webkit-transition: .2s;
  -o-transition: .2s;
  transition: .2s;
  /*margin-top: 20px;*/
  /*margin-bottom: 20px;*/
}
.content button:before{
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
    transform: translateX(45em) skewX(-45deg);
  }
}
.content button:hover{
  background: #930c0c;
}
.footer{
  bottom: 0;
  position: absolute;
  opacity: 0.2;
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
    text-align: center;
    width: 100%;
  }
  .content > h1{
    font-size: 30px;
    line-height: inherit;
    max-width: 100%;
  }
  .content h3{
    font-size: 20px;
    line-height: inherit;
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
    padding: 35px;
    font-size: 34px;
    bottom: 20px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 20px;
    width: calc(100% - 40px);
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


.page.home_page.alfabank{
  color: #fff;
  background: url(https://www.alfabank.by/upload/resize_cache/webp/img/main/mega-main-alfawork2.webp),linear-gradient(0deg, #f03225, #f03225);
  background-position-x: right;
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
}


</style>

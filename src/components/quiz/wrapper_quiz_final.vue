<template>
  <div class="wrapper_quiz final">
    <p class="header">
      Куда отправить расчет условий получения выгодного кредита?
    </p>
    <p class="form_error" v-if="error !== null">{{ error }}</p>
    <p class="label">Ваш телефон:</p>
    <input
      type="text"
      v-model="form.phone"
      v-maska="'+375(##)###-##-##'"
      placeholder="+375(__)___-__-__"
      :style="'border: 3px solid ' + this.color"
    />
    <p class="remark_form">
      <i
        >* на основании ответов мы подберем подходящие варианты и отправим
        варианты и условия для получения кредита</i
      >
    </p>
    <div class="lock-block">
      <div class="lock">
        <svg
          width="17"
          height="21"
          viewBox="0 0 17 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.8332 10.4999C16.8332 9.35096 15.8988 8.41659 14.7498 8.41659H13.7082V5.29159C13.7082 2.41971 11.3717 0.083252 8.49984 0.083252C5.62796 0.083252 3.2915 2.41971 3.2915 5.29159V8.41659H2.24984C1.10088 8.41659 0.166504 9.35096 0.166504 10.4999V18.8333C0.166504 19.9822 1.10088 20.9166 2.24984 20.9166H14.7498C15.8988 20.9166 16.8332 19.9822 16.8332 18.8333V10.4999ZM5.37484 5.29159C5.37484 3.56867 6.77692 2.16659 8.49984 2.16659C10.2228 2.16659 11.6248 3.56867 11.6248 5.29159V8.41659H5.37484V5.29159Z"
            fill="#03A626"
          ></path>
        </svg>
        <p>Все данные защищены</p>
      </div>
    </div>
    <button
      class="next sendForm"
      @click="form.phone.length === 17 ? sendForm() : make_error()"
    >
      ПОДОБРАТЬ КРЕДИТ
    </button>
  </div>
</template>

<script>
import { maska } from "maska";

export default {
  directives: { maska },
  name: "wrapper_quiz_final",
  props: ["initialData", "error", "color"],
  data() {
    return {
      form: {},
    };
  },
  watch: {
    initialData: function (newVal) {
      this.form = newVal;
    },
  },
  methods: {
    nextPage() {
      this.$emit("nextPage");
    },
    sendForm() {
      this.$emit("sendForm", { phone: this.form.phone });
    },
    make_error() {
      this.$emit("makeError");
    },
  },
};
</script>

<style scoped>
.wrapper_quiz.final .header {
  font-size: 150%;
  font-weight: bold;
  text-align: center;
}

.wrapper_quiz.final p {
  text-align: center;
}

.wrapper_quiz.final input {
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

.wrapper_quiz.final .label {
  margin-top: 45px;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 5px;
}

.wrapper_quiz.final button {
  width: 100%;
}

.wrapper_quiz.final button:before {
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

.lock {
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
button.sendForm {
  padding: 30px;
  height: auto;
  font-size: 20px;
}
.remark_form {
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
.form_error {
  max-width: 300px;
  margin: 0 auto;
  display: block;
  font-weight: bold;
  color: red;
  font-size: 16px;
}
</style>

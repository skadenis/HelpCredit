<template>
  <div class="wrapper_quiz final">
    <p class="header">Куда отправить расчет условий получения выгодного кредита?</p>
    <p class="form_error" v-if="error !== null">{{ error }}</p>
    <p class="label">Ваш телефон:</p>
    <input type="text" v-model="form.phone" v-maska="'+375(##)###-##-##'" placeholder="+375(__)___-__-__" :style="'border: 3px solid '+this.color">
    <p class="remark_form"><i>* на основании ответов мы подберем подходящие варианты и отправим варианты и условия для получения кредита</i></p>
    <div class="lock-block">
      <div class="lock">
        <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.8332 10.4999C16.8332 9.35096 15.8988 8.41659 14.7498 8.41659H13.7082V5.29159C13.7082 2.41971 11.3717 0.083252 8.49984 0.083252C5.62796 0.083252 3.2915 2.41971 3.2915 5.29159V8.41659H2.24984C1.10088 8.41659 0.166504 9.35096 0.166504 10.4999V18.8333C0.166504 19.9822 1.10088 20.9166 2.24984 20.9166H14.7498C15.8988 20.9166 16.8332 19.9822 16.8332 18.8333V10.4999ZM5.37484 5.29159C5.37484 3.56867 6.77692 2.16659 8.49984 2.16659C10.2228 2.16659 11.6248 3.56867 11.6248 5.29159V8.41659H5.37484V5.29159Z" fill="#03A626"></path>
        </svg>
        <p>
          Все данные защищены
        </p>
      </div>
    </div>
    <button class="next sendForm"  @click="(form.phone).length === 17 ? sendForm() : make_error();">ПОДОБРАТЬ КРЕДИТ</button>
  </div>
</template>

<script>
import {maska} from "maska";

export default {
  directives: { maska },
  name: "wrapper_quiz_final",
  props: ['initialData', 'error', 'color'],
  data(){
    return {
      form: {
      }
    }
  },
  watch: {
    initialData: function (newVal){this.form = newVal}
  },
  methods: {
    nextPage(){
      this.$emit('nextPage');
    },
    sendForm(){
      this.$emit('sendForm', {phone: this.form.phone});
    },
    make_error(){
      this.$emit('makeError');
    }
  }
}
</script>

<style scoped>

</style>
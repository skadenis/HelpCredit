<template>
  <div class="alfabank_main_page">
    <div>
      <svg class="svg-icon main-logo"><use xlink:href="#alfabank_logo"></use></svg>
      <svg class="svg-icon logo-text"><use xlink:href="#logo_text"></use></svg>
    </div>
    <h1>Пройди тест из 6 вопросов и получи прогноз получения кредита в Альфе</h1>
    <button @click="$emit('someEvent')">
      ПРОЙТИ ТЕСТ
    </button>
  </div>
</template>

<script>
export default {
  name: 'ALFA_Main',
  methods: {
    openForm: function (){
      this.$parent.$emit('ShowNewPage');
    }
  }
}
</script>

<style>
button{
  position: fixed;
  bottom: 15px;
  left: 15px;
  right: 15px;
  width: calc(100% - 30px);
  padding: 25px;
  font-size: 25px;
}
</style>
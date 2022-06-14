<template>
  <div class="">
    <h1>Про</h1>
    <button @click="$emit('someEvent')">
      ПРОЙТИ ТЕСТ
    </button>
  </div>
</template>

<script>
export default {
  name: 'bankHelp',
  methods: {

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
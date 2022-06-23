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

.button {
  grid-area: button;
  width: 309px;
  height: 81px;

  font-size: 18px;
  font-weight: 600;
  color: rgb(255, 255, 255);

  border-radius: 10px;
  border: none;
  background-color: rgba(0, 194, 89, 1);
  box-shadow: 0px 22px 25px -15px rgba(0, 194, 89, 0.55);
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:hover {
  transform: scale(105%);
}

.statistics,
.date {
  font-size: 16px;
  color: #dfdfdf;
}

.statistics {
  grid-area: statistics;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
}

.statistics p {
  display: block;
  margin-block: 0;
  line-height: 19.36px;
}

.statistics p:first-child {
  margin-bottom: 10px;
}

.statistics p span {
  color: #fff;
}

.date {
  max-width: 309px;
  grid-area: date;
  margin-block: 0;
  line-height: 22.4px;

  text-align: center;
}

/* от 1600px */
@media screen and (min-width: 1600px) {
  .wrapper {
    padding: 200px 200px 25px 200px;
  }

  .header {
    margin-bottom: 150px;
  }
}

/* от 600px до 800px*/
@media screen and (min-width: 600px) and (max-width: 800px) {
  .wrapper {
    padding: 0 50px 0 50px;
  }

  .wrapper-block {
    padding-top: 100px;
    padding-bottom: 150px;
    min-height: 100vh;
  }

  .header {
    font-size: 32px;
    font-weight: 900;

    line-height: 39.1px;

    margin-bottom: 100px;
  }

  .header span {
    font-size: 35px;
    line-height: 41.57px;
    margin-top: 15px;
  }

  .header .percent {
    font-size: 95px;
    line-height: 114.71px;
    margin-top: 0;
  }
}

/* меньше 600px */
@media screen and (max-width: 600px) {
  .wrapper {
    padding: 0 15px 0 15px;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent),
      url(../../assets/creditcentr_bg_mobile.jpg);
    background-position: right;
  }

  .wrapper-block {
    padding-top: 70px;
    min-height: 100vh;
    padding-bottom: 50px;
  }

  .header {
    font-size: 29px;
    font-weight: 900;
    line-height: 35.1px;
    text-align: center;
  }

  .header span {
    display: block;
    font-size: 30px;
    line-height: 36.57px;
    margin-top: 15px;
  }

  .header .percent {
    font-size: 90px;
    line-height: 109.71px;
    margin-top: 0;
  }

  .button-block {
    width: 100%;
    grid-template-areas:
      "date date"
      "button button"
      "statistics statistics";
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    row-gap: 30px;
  }

  .button {
    margin: 0 auto;
  }

  .statistics {
    grid-area: statistics;
    width: 100%;

    align-items: center;
  }

  .statistics p:first-child {
    margin-bottom: 10px;
  }

  .statistics p span {
    color: #fff;
  }

  .date {
    margin: 0 auto;
    grid-area: date;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 19.6px;

    text-align: center;
  }
}

@media screen and (max-width: 400px) {
  .button {
    width: calc(100% - 15px);
  }
}
</style>
<template>
  <div class="wrapper_quiz">
    <p class="question">{{ data.question }}</p>
    <p class="page_num">
      Вопрос {{ data.page_id + 1 }} из {{ data.all_pages_count }}
    </p>
    <div class="answers">
      <div
        v-for="item in data.variants"
        :key="item.id"
        class="variant"
        @click="setResult(item.id)"
        :class="result === item.id ? 'active' : ''"
      >
        {{ item.name }}
      </div>
    </div>
    <button
      class="next"
      @click="result === null ? '' : nextPage()"
      :class="result === null ? 'disabled' : ''"
    >
      Далее
    </button>
  </div>
</template>

<script>
export default {
  props: ["data", "initialResult"],
  methods: {
    setResult(id) {
      this.$emit("changeResult", { id, index: this.data.page_id + 1 });
    },
    nextPage() {
      this.$emit("nextPage");
    },
  },
  watch: {
    initialResult: function (newVal) {
      this.result = newVal;
    },
  },
  data() {
    return {
      result: this.initialResult,
    };
  },
  name: "interview-form",
};
</script>

<style scoped>
.wrapper_quiz .question {
  font-weight: bold;
  font-size: 120%;
  margin-bottom: 0;
  margin-left: 10px;
  padding: 0;
}

.wrapper_quiz .page_num {
  padding: 0;
  margin: 0;
  margin-left: 10px;
  margin-bottom: 30px;
}

.wrapper_quiz .answers {
  margin: 15px 0;
}

.wrapper_quiz button {
  background: linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
}

.wrapper_quiz .answers .variant {
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

.wrapper_quiz .answers .variant.active {
  background: -webkit-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  color: #fff;
}

.wrapper_quiz .answers .variant.active:hover {
  background: -webkit-linear-gradient(90deg, #d4253e 0%, #de1f25 100%);
  color: #fff;
}

.wrapper_quiz .answers .variant:hover {
  background-color: #d9d9d9;
}
</style>

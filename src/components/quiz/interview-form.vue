<template>
  <div class="wrapper_quiz">
    <p class="question">{{ data.question }}</p>
    <p class="page_num">Вопрос {{ data.page_id + 1 }} из {{ data.all_pages_count}}</p>
    <div class="answers">
      <div v-for="item in data.variants" :key="item.id" class="variant" @click="setResult(item.id)" :class="result === item.id ? 'active' : ''">
        {{ item.name }}
      </div>
    </div>
    <button class="next"  @click="result === null ? '' : nextPage();" :class="result === null ? 'disabled' : ''">Далее</button>
  </div>
</template>

<script>
export default {
  props: ['data', 'initialResult'],
  methods: {
    setResult(id){
      this.$emit('changeResult', {id, index: this.data.page_id + 1});
    },
    nextPage(){
      this.$emit('nextPage');
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
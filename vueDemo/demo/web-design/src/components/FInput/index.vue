<template>
  <label :label="labelName"
                :style="styles">
    <input v-model="result"></input>
  </label>
</template>

<script>
//import Editor from './editor'
export default {
  name: 'FInput',
  data () {
    return {
      result: '',
      labelName: '名称',
      validator: [], // 验证规则
      styles: []
    }
  },
  methods: {
    /*getEditor () {
      return Editor
    }*/
  }
}
</script>

<style scoped>
</style>

<template>
	<div class="form-item">
  <label :label="labelName" :style="styles">
  	<span>{{labelName}}</span>
    <input v-model="result" />
  </label>
  </div>
</template>

<script>
import Editor from './editor'
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
    getEditor () {
      return Editor
    }
  }
}
</script>

<style scoped>
	.form-item{
		width: 100%;
		height: 30px;
		position: relative;
	}
</style>

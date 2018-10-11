<template>
  <div ref="form"
           :model="source"
           label-width="80px">
    <label label="名称">
      <input v-model="source.name"></input>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FInputEditor',
  data () {
    return {
      source: {
        name: '名称',
        isMust: false,
        mustTip: '',
        charLength: 50,
        charLengthTip: ''
      }
    }
  },
  methods: {
    generateResult () {
      var result = {
        labelName: '名称',
        validator: [], // 验证规则
        styles: {}
      }
      result.labelName = this.source.name
      if (this.isMust) {
        result.validator.push({ required: true, message: this.mustTip, trigger: 'blur' })
      }
      result.validator.push({ min: 0, max: this.charLength ? 10000 : this.charLength, message: `不能超过${this.charLength}个字符`, trigger: 'blur' })
      return result
    }
  },
  watch: {
    source: {
      handler: function (n, o) {
        var result = this.generateResult()
        this.$emit('dataChange', result)
      },
      deep: true
    }
  }
}
</script>

<style scoped>
</style>

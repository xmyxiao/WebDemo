<template>
  <div label="按钮">
    <button type="primary" @click="onSubmit">立即创建</button>
    <button>取消</button>
  </div>
</template>
<script>
export default {
  name: 'FButton',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSubmit () { }
  }
}
</script>

<style scoped>
</style>

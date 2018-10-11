import masking from './masking'
const install = function (Vue) {
  Vue.directive('masking', masking)
}
if (window.Vue) {
  window.masking = masking
  window.Vue.use(install)
}
masking.install = install
export default masking

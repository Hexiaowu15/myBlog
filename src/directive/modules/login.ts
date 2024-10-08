import type { Directive, DirectiveBinding } from 'vue'
import { useLoginDialogStore } from '@/stores/modules/loginDialog'
import { getToken } from '@/utils/token'
const directive: Directive = {
  mounted(el, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') {
      throw 'callback must be a function'
    }

    el.addEventListener('click', () => {
      const loginDialogStore = useLoginDialogStore()
      const token = getToken()
      if (token) {
        binding.value()
        return
      } else {
        loginDialogStore.show()
      }
    })
  },
  beforeUnmount(el) {
    el.removeEventListener('click', () => {})
  }
}

export default directive

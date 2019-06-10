import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Loading from '@/components/Loading.vue'

describe('Loading.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = mount(Loading, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})

import { describe, it, expect } from 'vitest'

import { flushPromises, mount, shallowMount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'

describe('Calculator', () => {
  it('renders properly', () => {
    const wrapper = mount(Calculator);
    // flushPromises();
    // expect(wrapper.exists()).toBe(true)
    // setTimeout(() => {
    
    expect(wrapper.find('input').exists()).toBeTruthy()
    // }, 2000);
  })
})

import { shallowMount } from '@vue/test-utils';
import LoginBox from './login-box.vue';

describe('LoginBox.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(LoginBox);

    expect(wrapper.exists()).toEqual(true);
  });
});

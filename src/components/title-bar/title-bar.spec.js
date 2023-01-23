import { shallowMount } from '@vue/test-utils';
import TitleBar from './title-bar.vue';

describe('TitleBar.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(TitleBar);

    expect(wrapper.exists()).toEqual(true);
  });
});

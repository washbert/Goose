import { shallowMount } from '@vue/test-utils';
import MenuBar from './menu-bar.vue';

describe('MenuBar.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(MenuBar);

    expect(wrapper.exists()).toEqual(true);
  });
});

const example = {
  data() {
    return {
      open: false,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false
    };
  }
};


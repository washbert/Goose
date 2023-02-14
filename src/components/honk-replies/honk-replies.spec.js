import { shallowMount } from '@vue/test-utils';
import HonkReplies from './honk-replies.vue';

describe('HonkReplies.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(HonkReplies);

    expect(wrapper.exists()).toEqual(true);
  });
});

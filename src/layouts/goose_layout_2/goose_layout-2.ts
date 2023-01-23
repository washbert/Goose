import { Component, Vue } from 'vue-property-decorator';
import { Dictionary } from 'vue-router/types/router';
import AppFooter from '@/components/app-footer';
import MenuBar from '@/components/menu-bar';

@Component({
  components: {
    AppFooter,
    MenuBar,
  },
  name: 'goose_layout_2',
})
class Goose_Layout_2 extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------

  public async navigate(path: string, params?: Dictionary<string>) {
    await this.$router.push({ path, params });
  }

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Lifecycle Hooks
  // --------------------------------------------------------------------------

  private mounted() {
    // TODO: stuff to do when this component loads.

  }
}

export {
  Goose_Layout_2 as default,
  Goose_Layout_2,
};

import { Component, Vue } from 'vue-property-decorator';
import { Dictionary } from 'vue-router/types/router';
import AppFooter from '@/components/app-footer';
import MenuBar from '@/components/menu-bar';
import TitleBar from '@/components/title-bar';

@Component({
  components: {
    AppFooter,
    MenuBar,
    TitleBar,
  },
  name: 'dashboard',
})
class Dashboard extends Vue {
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
  Dashboard as default,
  Dashboard,
};

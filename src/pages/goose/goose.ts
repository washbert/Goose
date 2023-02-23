import { AppStore } from '@/store/app';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  name: 'goose',
})
class Goose extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  public username = '';
  public password = '';
  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------
  public async validateForm() {

    if (this.username == "" || this.password == '') {
      alert("Name and Password must be filled");

    } else {
      let result = await AppStore.loginUser(this.username, this.password);
      let loginFormSet = document.getElementById('loginForm');
      loginFormSet.onsubmit();

    }
  }

  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Lifecycle Hooks
  // --------------------------------------------------------------------------
  public mounted() {
    // TODO: stuff to do when this component loads.
  }
}

export {
  Goose as default,
  Goose,
};

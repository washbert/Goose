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
      let loginStatus = await AppStore.loginUser(this.username, this.password);
      if (loginStatus) {
        let loginButton = document.getElementById('submitButton');
        // loginButton?.click();
        console.log("Login Is True")
      } else {
        alert("Login details are incorrect. Please enter correct username or password to continue");
      }


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

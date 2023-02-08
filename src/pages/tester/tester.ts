import { AppStore } from '@/store/app';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  name: 'tester',
})
class Tester extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  public open = false;
  public overlay = false;
  public fullheight = false;
  public fullwidth = false;
  public right = false;
  public profile = [{}];
  public formIdData = 0;
  public formNameData = '';
  public formAgeData = 0;
  public state = 0;

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
  public saveUser() {
    const storeUser = JSON.stringify(this.profile);
    localStorage.setItem('userStore', storeUser);
  };

  public editUser() {
    for (let i = 0; i < this.profile.length; i++) {
      if (this.profile[i].id == this.formIdData) {
        this.profile[i].name = this.formNameData;
        this.profile[i].age = this.formAgeData;
        this.formIdData = 0;
        this.formNameData = '';
        this.formAgeData = 0;
        this.saveUser();
        break;
      }
    }
  }

  public deleteUser() {
    for (let i = 0; i < this.profile.length; i++) {
      if (this.profile[i].id == this.formIdData) {
        this.profile.splice(i, 1);
        this.saveUser();
      }
    }
  }


  public addUser() {
    let user = {
      id: 0,
      name: '',
      age: 0,
    };
    user.id = this.formIdData;
    user.name = this.formNameData;
    user.age = this.formAgeData;

    this.profile.push(user);
    this.formIdData = 0;
    this.formNameData = '';
    this.formAgeData = 0;
    this.saveUser();

  };
  public onIncreament() {
    this.state++;
  }
  public onDecreament() {
    this.state--;
  }
  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Lifecycle Hooks
  // --------------------------------------------------------------------------
  public mounted() {
    // TODO: stuff to do when this component loads.
    AppStore.fetchDataTable();
    const userProfiles = localStorage.getItem('userStore');
    if (userProfiles) {
      this.profile = JSON.parse(userProfiles);
    }
  }
}
export {
  Tester as default,
  Tester,
};

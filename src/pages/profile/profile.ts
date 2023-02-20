import { Component, Vue } from 'vue-property-decorator';
import { AppStore } from '@/store/app';

@Component({
  components: {},
  name: 'profile',
})
class Profile extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  public profile = [{}];
  public currentProfile = [{}]
  public idNum = 0;
  public fizzBuzz = 5;
  public defaultOpenedDetails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  public reply = [{}];

  public newHonk: string = '';

  public editHonk: string = '';

  public isActive: boolean = false;

  public loggedInPic: string = "profile_image";
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

  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Lifecycle Hooks
  // --------------------------------------------------------------------------
  public mounted() {
    // TODO: stuff to do when this component loads.
    AppStore.fetchDataTable();
    this.idNum = AppStore.userIdNum;
    const userProfiles = localStorage.getItem('userStore');
    if (userProfiles) {
      this.profile = JSON.parse(userProfiles);
      for (let i = 0; i < this.profile.length; i++) {
        if (this.profile[i].firstName == "Bryan") {
          this.currentProfile.push(this.profile[i]);
        }
      }
    }
  }
}

export {
  Profile as default,
  Profile,
};

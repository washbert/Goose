import { Honk } from '@/entities/people';
import { AppStore } from '@/store/app';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  name: 'home',
})
class Home extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  public fizzBuzz = 5;
  public defaultOpenedDetails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  public dataSetting = [
    { "id": 4, "user": { "first_name": "Clarence", "last_name": "Flores" }, "date": "2016/04/10 10:28:46", "gender": "Male", "Honk": "This is Jesse, and He is a person." },
    { "id": 5, "user": { "first_name": "Anne", "last_name": "Lee" }, "date": "2016/12/06 14:38:38", "gender": "Female", "Honk": "This is Jesse, and He is a person." },
    { "id": 6, "user": { "first_name": "Sara", "last_name": "Armstrong" }, "date": "2016/09/23 18:50:04", "gender": "Female", "Honk": "This is Jesse, and He is a person." },
  ];

  public profile = [{}];

  public newHonk: string = '';
  public editHonk: string = '';

  public isActive: boolean = false;


  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // Accessors
  // --------------------------------------------------------------------------

  get dataSets() {
    return AppStore.dataSets;
  }

  get gooseDataSets() {
    return AppStore.gooseDatas;
  }

  public removeHonk(value: number) {
    AppStore.removeHonk(value);
  }

  public addToGooseTables() {
    this.newHonkData[0].honk = this.newHonk;
    console.table(this.newHonkData);
    AppStore.addToGooseTable(this.newHonkData);
    this.newHonk = '';
  }

  public addToTable() {
    AppStore.addToTable();
  }

  public removeFromTable() {
    AppStore.removeFromTable();
  }


  public saveUser() {
    const storeUser = JSON.stringify(this.profile);
    localStorage.setItem('userStore', storeUser);
  };

  public editUser(value: number) {
    for (let i = 0; i < this.profile.length; i++) {
      if (this.profile[i].id == value) {
        this.profile[i].honk = this.editHonk;
        this.editHonk = '';
        this.saveUser();
        break;
      }
    }
  }

  public deleteUser(value: number) {
    for (let i = 0; i < this.profile.length; i++) {
      if (this.profile[i].id == value) {
        this.profile.splice(i, 1);
        this.saveUser();
      }
    }
  }


  public addHonk() {
    let newHonkData: Honk =
    {
      id: 0,
      displayPic: 'profile_image',
      gooseHandle: 'bhayehome',
      firstName: 'Bryan',
      lastName: 'Haye',
      honk: '',
      date: '07/02/23'
    };
    newHonkData.id = (this.profile.length) + 1;
    newHonkData.honk = this.newHonk;

    this.profile.unshift(newHonkData);
    this.newHonk = '';
    this.saveUser();

  };

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------
  public addToDataTable(value: any[]) {
    AppStore.postData(value);
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
  Home as default,
  Home,
};

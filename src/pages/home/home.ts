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
  public fizzBuzz = 3;
  public defaultOpenedDetails = [1, 2, 3, 4, 5, 6];
  public dataSetting = [
    { "id": 4, "user": { "first_name": "Clarence", "last_name": "Flores" }, "date": "2016/04/10 10:28:46", "gender": "Male", "Honk": "This is Jesse, and He is a person." },
    { "id": 5, "user": { "first_name": "Anne", "last_name": "Lee" }, "date": "2016/12/06 14:38:38", "gender": "Female", "Honk": "This is Jesse, and He is a person." },
    { "id": 6, "user": { "first_name": "Sara", "last_name": "Armstrong" }, "date": "2016/09/23 18:50:04", "gender": "Female", "Honk": "This is Jesse, and He is a person." },
  ];

  public newHonk:string = '';

  public newHonkData: Honk[] = [
    { 
    id: 1, 
    displayPic: './assets/profile_image.jpg', 
    gooseHandle: 'bhayehome', 
    firstName: 'Bryan', 
    lastName: 'Haye', 
    honk: '', 
    date: '07/02/23' }
  ];

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
    AppStore.addToGooseTable(this.newHonkData);
    this.newHonk = '';
  }

  public addToTable() {
    AppStore.addToTable();
  }

  public removeFromTable() {
    AppStore.removeFromTable();
  }

  public createNewHonk(){
    
  }


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
  }
}

export {
  Home as default,
  Home,
};

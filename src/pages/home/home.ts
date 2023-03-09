import { Honk } from '@/entities/people';
import { AppStore } from '@/store/app';
import { Component, Vue } from 'vue-property-decorator';
import honkReplies from '@/components/honk-replies';
@Component({
  components: {
    honkReplies,
  },
  name: 'home',
  metaInfo: {
    title: 'Home Dashboard',
    titleTemplate: '%s | Home Dashboard',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Home Dashboard for all Honks' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
})
  



class Home extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  public fizzBuzz = 5;
  public defaultOpenedDetails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  public reply: Honk[] = [];

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

  public get gooseDataSets() {
    return AppStore.gooseDatas;
  }

  public removeHonk(value: number) {
    AppStore.removeHonk(value);
  }

  public addReply() {

  }

  public saveUser() {
    const storeUser = JSON.stringify(this.gooseDataSets);
    localStorage.setItem('userStore', storeUser);
  };

  public editUser(value: number) {
    for (let i = 0; i < this.gooseDataSets.length; i++) {
      if (this.gooseDataSets[i].id == value) {
        this.gooseDataSets[i].honk = this.editHonk;
        this.editHonk = '';
        this.saveUser();
        break;
      }
    }
  }

  public showMessages(value: number) {
    for (let i = 0; i < this.gooseDataSets.length; i++) {
      if (this.gooseDataSets[i].id == value) {
        this.reply = this.gooseDataSets[i].replies;
      }
    }
  }

  public replyCounter(value: []) {
    return value.length;
  }

  public deleteUser(value: number) {
    for (let i = 0; i < this.gooseDataSets.length; i++) {
      if (this.gooseDataSets[i].id == value) {
        this.gooseDataSets.splice(i, 1);
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
      date: '07/02/23',
      likes: 3,
      rehonks: 0,
      views: 1,
      replies: [{}],
    };
    newHonkData.id = (this.gooseDataSets.length) + 1;
    newHonkData.honk = this.newHonk;

    this.gooseDataSets.unshift(newHonkData);
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
  }
}

export {
  Home as default,
  Home,
  
};

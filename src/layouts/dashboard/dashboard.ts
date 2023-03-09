import { Component, Vue } from 'vue-property-decorator';
import { Dictionary } from 'vue-router/types/router';
import MenuBar from '@/components/menu-bar';
import TitleBar from '@/components/title-bar';
import { AppStore } from '@/store/app';

@Component({
  components: {
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

  public async addToTrends() {
    for (let i = 0; i < AppStore.trendDatas.length; i++){
      let list = document.createElement('li');
      for (let i2 = 0; i2 < AppStore.trendDatas[i].length; i2++){
        if(i2 == 1){
          let trendHeading = document.createElement('h4');
          trendHeading.innerText=AppStore.trendDatas[i][i2];
          list.appendChild(trendHeading);
        }else{
        let trendText = document.createElement('p');
      trendText.innerText=AppStore.trendDatas[i][i2];
      list.appendChild(trendText);
    }
    }
    await document.querySelector('#side_table').appendChild(list);
    }
  }

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

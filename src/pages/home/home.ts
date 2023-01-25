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
  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // Accessors
  // --------------------------------------------------------------------------
  get fooBar() {
    return AppStore.fooBar;
  }

  get dataSets() {
    return AppStore.dataSets;
  }

  get gooseDataSets() {
    return AppStore.gooseDatas;
  }

  get dataColumn() {
    return AppStore.dataColumns;
  }

  public addToGooseTables() {
    AppStore.addToGooseTable();
  }

  public addToTable() {
    AppStore.addToTable();
  }

  public removeFromTable() {
    AppStore.removeFromTable();
  }

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
  }
}

export {
  Home as default,
  Home,
};

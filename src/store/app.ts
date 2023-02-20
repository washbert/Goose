import { Honk, Person } from '@/entities/people';
import { getMultiParamModule, MultiParamAction } from '@/modules/core';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from './index';
import { TransactionService } from '@/services/transaction-service';
import { debug } from 'console';

const MODULE_NAME = 'App';

@Module({ namespaced: true, name: MODULE_NAME, dynamic: true, store })
class Store extends VuexModule {

  private _trendData = [
    ["Technology . Trending", "Apple", "367k Tweets"],
    ["Gaming . Trending", "#Forspoken", "1.32M Tweets"],
  ];

  private _honk: Honk[] = [];

  private _newHonk =
    {
      id: 10,
      displayPic: "profile_image",
      gooseHandle: 'bhayehome',
      firstName: 'Bryan',
      lastName: 'Haye',
      honk: '',
      date: '07/02/23',
      replies: [],
      rehonks: 0,
      likes: 0,
      views: 1
    };

  private userId: number = 0;

  private _loginCheck: boolean = false;

  private _gooseData: Honk[] = [];

  private _addGooseData = [
    { "id": 4, "user": { "first_name": "Clarence", "last_name": "Flores" }, "date": "2016/04/10 10:28:46", "gender": "Male" },
    { "id": 5, "user": { "first_name": "Anne", "last_name": "Lee" }, "date": "2016/12/06 14:38:38", "gender": "Female" },
    { "id": 6, "user": { "first_name": "Sara", "last_name": "Armstrong" }, "date": "2016/09/23 18:50:04", "gender": "Female" },
  ];
  // ------------------------------------------------------------------------
  // Getters
  // ------------------------------------------------------------------------
  public get userIdNum() {
    return this.userId;
  }

  public get loginCheck() {
    return this._loginCheck;
  }
  // ------------------------------------------------------------------------
  // Honk Getters
  //------------------------------------------------------------------------
  public get honkData() {
    return this._honk;
  }

  public get newHonk() {
    return this._newHonk;
  }


  // ------------------------------------------------------------------------
  // Goose Getters
  // ------------------------------------------------------------------------

  public get addGooseData() {
    return this._addGooseData;
  }

  public get gooseDatas() {
    return this._gooseData;
  }

  // ------------------------------------------------------------------------
  //  Trend Data Getters
  // ------------------------------------------------------------------------

  public get trendDatas() {
    return this._trendData;
  }

  // ------------------------------------------------------------------------
  // Actions
  // ------------------------------------------------------------------------

  @MultiParamAction()
  public async fetchDataTable(): Promise<void> {
    const result = await TransactionService.getData();
    this.setOriginData(result.data);
    const userProfiles = localStorage.getItem('userStore');
    if (!userProfiles) {
      localStorage.setItem('userStore', JSON.stringify(result.data));
    }
  }

  @MultiParamAction()
  public async loginUser(username: string, password: string): Promise<void> {
    const result = await TransactionService.login();
    console.log(result.data);
    console.log(username, password);
    this.checkLoginCredentials(result.data, username, password);
    console.log(username, password);

    const userIdLogin = localStorage.getItem('userId');
    if (!userIdLogin) {
      localStorage.setItem('userId', JSON.stringify(this.userId));
    }
  }

  @MultiParamAction()
  public async postData(value: Honk[]): Promise<{
    success: boolean;
    errorMessage: string | undefined;
  }> {
    const { success, errorMessage } = await TransactionService.postData(value);
    if (success) {
      await this.fetchDataTable();
      this.pushToGoose(value);
    }
    return { success, errorMessage };
  }

  @MultiParamAction()
  public async deleteData(value: Honk[], id: number): Promise<{
    success: boolean;
    errorMessage: string | undefined;
  }> {
    const { success, errorMessage } = await TransactionService.deleteData(id);
    if (success) {
      await this.fetchDataTable();
    }
    return { success, errorMessage };
  }

  @MultiParamAction()
  public async putData(value: Honk[], id: number): Promise<{
    success: boolean;
    errorMessage: string | undefined;
  }> {
    const { success, errorMessage } = await TransactionService.putData(value, id);
    if (success) {
      await this.fetchDataTable();
    }
    return { success, errorMessage };
  }

  @MultiParamAction()
  public addToGooseTable(value: Honk[]) {
    this.pushToGoose(value);
  }

  @MultiParamAction()
  public setCustomFooBar(value: string) {
    return value;
  }

  @MultiParamAction()
  public removeHonk(value: number) {
    this.removeGooseHonk(value);
  }

  @MultiParamAction()
  public setGooseData(value: any[]) {
    this.setOriginData(value);
  }

  // ------------------------------------------------------------------------
  // Mutations
  // ------------------------------------------------------------------------

  @Mutation
  private setOriginData(value: Honk[]) {
    this._gooseData = value;
  }

  @Mutation
  private setUserId(value: number) {
    this.userId = value;
  }

  @MultiParamAction()
  private checkLoginCredentials(value: any[], user: string, pass: string) {
    console.log(value[0].username);
    console.log(user, pass);
    if (value[0].username == user && value[0].password == pass) {
      this.setUserId(value[0].userId);
    }
  }

  @Mutation
  private pushToGoose(value: Honk[]) {
    console.log(value);
    this._gooseData.unshift.apply(this._gooseData, value);
  }

  @Mutation
  private removeGooseHonk(value: number) {
    this._gooseData.splice((value - 1), 1);
  }
}

const app = getMultiParamModule<Store>(Store, MODULE_NAME, store);

export {
  app as AppStore,
};


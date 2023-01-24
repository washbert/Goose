import { Person } from '@/entities/people';
import { getMultiParamModule, MultiParamAction } from '@/modules/core';
import { Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from './index';

const MODULE_NAME = 'App';

@Module({ namespaced: true, name: MODULE_NAME, dynamic: true, store })
class Store extends VuexModule {
  private fooBarVal = 'Testing FooBar';
  private _dataSet = [
    { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
    { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
    { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
  ];
  private _dataSetsAdd = [
    { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
    { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' },
  ];
  private _dataColumn = [
    {
      field: 'id',
      label: 'ID',
      width: '40',
      numeric: true
    },
    {
      field: 'first_name',
      label: 'First Name',
    },
    {
      field: 'last_name',
      label: 'Last Name',
    },
    {
      field: 'date',
      label: 'Date',
      centered: true
    },
    {
      field: 'gender',
      label: 'Gender',
    }
  ];
  // ------------------------------------------------------------------------
  // Getters
  // ------------------------------------------------------------------------

  public get fooBar() {
    return this.fooBarVal;
  }

  public get dataColumns() {
    return this._dataColumn;
  }

  public get dataSets() {
    return this._dataSet;
  }

  public get dataSetsAdd() {
    return this._dataSetsAdd;
  }

  // ------------------------------------------------------------------------
  // Actions
  // ------------------------------------------------------------------------

  @MultiParamAction()
  public initializeFooBar() {
    this.setFooBar('Hello World');
  }

  @MultiParamAction()
  public resetFooBar() {
    return null;
  }

  @MultiParamAction()
  public addToTable() {
    this.pushToData(this._dataSetsAdd);
  }

  @MultiParamAction()
  public removeFromTable() {
    this.popFromData();
  }

  @MultiParamAction()
  public setCustomFooBar(value: string) {
    return value;
  }

  // ------------------------------------------------------------------------
  // Mutations
  // ------------------------------------------------------------------------

  @Mutation
  private setFooBar(value: string) {
    this.fooBarVal = value;
  }

  @Mutation
  private pushToData(dataPerson: any[]) {
    this._dataSet.unshift.apply(this._dataSet, dataPerson);
  }

  @Mutation
  private popFromData() {
    this._dataSet.pop();
  }
}

const app = getMultiParamModule<Store>(Store, MODULE_NAME, store);

export {
  app as AppStore,
};


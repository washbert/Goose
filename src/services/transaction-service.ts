import { AxiosResponse } from 'axios';
import { BaseService } from './_base';
import API_URL from '@/config/env.dev';

type ServiceResult = {
  success: boolean;
  // tslint:disable-next-line: no-any
  data?: any;
  errorMessage?: string;
};

enum StatusCode {
  OK = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

class TransactionService extends BaseService {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super({
      baseURL: API_URL.API_URL
    });
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------
  public async postData(payload: any[]): Promise<ServiceResult> {
    // define custom request options [NB: default config found in @/services/base]
    const options = {};
    const result: ServiceResult = { success: false };

    return this.api
      .post(`/generaterandomhonks`, payload, options)
      .then((response: AxiosResponse) => {
        // handle response here
        const { status, data } = response;
        result.success = status === StatusCode.OK;
        result.data = data;

        return result;
      })
      .catch((err) => {
        return result;
      });
  }

  public async getData(): Promise<ServiceResult> {
    // define custom request options [NB: default config found in @/services/base]
    const options = {};
    const result: ServiceResult = { success: false };

    return this.api
      .get(`/generaterandomhonks`, options)
      .then((response: AxiosResponse) => {
        // handle response here
        const { status, data } = response;
        result.success = status === StatusCode.OK;
        result.data = data;

        return result;
      })
      .catch((err) => {
        return result;
      });
  }
  public async deleteData(id: number): Promise<ServiceResult> {
    // define custom request options [NB: default config found in @/services/base]
    const options = {};
    const result: ServiceResult = { success: false };

    return this.api
      .delete(`generateradomhonks/${id}`, options)
      .then((response: AxiosResponse) => {
        // handle response here
        const { status, data } = response;
        result.success = status === StatusCode.OK;
        result.data = data;

        return result;
      })
      .catch((err) => {
        return result;
      });
  }

  public async putData(payload: any[]): Promise<ServiceResult> {
    // define custom request options [NB: default config found in @/services/base]
    const options = {};
    const result: ServiceResult = { success: false };

    return this.api
      .put(``, payload, options)
      .then((response: AxiosResponse) => {
        // handle response here
        const { status, data } = response;
        result.success = status === StatusCode.OK;
        result.data = data;

        return result;
      })
      .catch((err) => {
        return result;
      });
  }


  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

}

// ----------------------------------------------------------------------------
// Module Exports
// ----------------------------------------------------------------------------

const service = new TransactionService();

export {
  service as default,
  service as TransactionService,
};

import {PARTNER_ID} from 'assets/config';
import HttpClient from 'http/HttpClient';
import {UrlApi} from 'http/UrlApi';
// import moment from 'moment';

class ProductController {
  getProductMenu = async body => {
    try {
      const {data} = await HttpClient.post(UrlApi.internalMenuShop, body);
      return {
        success: data ? true : false,
        categories: data ? data : [],
      };
    } catch (error) {
      return {success: false, status: 400, products: [], categories: []};
    }
  };
  getVoucher = async body => {
    console.log('body controller::', UrlApi.getVoucher);
    try {
      const {data} = await HttpClient.post(UrlApi.getVoucher, body);
      console.log('GET VOUCHER DATA:::', data);
      return {success: true, data: data};
    } catch (error) {
      return {success: false};
    }
  };
}

export default new ProductController();

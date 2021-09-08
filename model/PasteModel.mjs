import AppConfig from '../configs/AppConfig';

import axios from "axios";

class PasteModel {

    static async postPastePlainData(data) {
        try {
            return await axios.post(AppConfig.baseUrl,
                'api_dev_key=067f9dbb11a1a801239b06b695a4102c' +
                '&api_paste_code=test' +
                '&api_option=paste');
        } catch (e) {
            console.log(`Request [${AppConfig.baseUrl} with data ${data}] returned: `);
            console.log(e.response.data);
        }
    }

    static async postPaste(data) {
        //TODO: develop the method to be able to get data in object format
        // and define HTTP POST options
        // ...
    }

}

export default PasteModel;

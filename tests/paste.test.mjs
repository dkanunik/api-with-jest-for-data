import PasteModel from '../model/PasteModel';
import InputTestDataProvider from "../lib/InputTestDataProvider";

describe('As a Paste API user', () => {
    describe('I need to be able to create Paste and get', () => {
        xtest('200 for a valid data', async () => {
            let {outData} = await PasteModel.postPastePlainData('test');
            // TODO: received data contains URL of created Paste: "https://pastebin.com/C3ZZxfm7"
            // put your verifications here
            // ...
        });
    });

    describe('I need to be able to create Paste with', () => {
        test('10 min expiration time', async () => {
            // TODO: Develop "getTestData" method to extract file content from files located on "<projectDir>/data/post_data" directory
            // to be able to define POST body dynamically
            const testData = InputTestDataProvider.getTestData('case1');
            let {outData} = await PasteModel.postPaste(testData);

            // put your verifications here. You need to verify that the created Paste has been created with 10 min
            // expiration timeout
            // ...

        });
    });
});

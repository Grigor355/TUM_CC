module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);

    function productURL(msg, respond) {
        for (i=0, i < mockData.length, ++i){
            if (mockData[i].product_id == msg.productId){
                respond(null, { productURL: mockData[i].product_url });
            }
        }
    }

    function productName(msg, respond) {
        for (i=0, i < mockData.length, ++i){
            if (mockData[i].product_id == msg.productId){
                respond(null, { productName: mockData[i].product_name});
            }
        }
    }
    //To DO: add the pattern functions and describe the logic inside the function

}
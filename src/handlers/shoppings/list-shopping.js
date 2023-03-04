const { scan } = require('../../utils/dynamoDB');
const { headers } = require('../../utils/http-utils');

module.exports.handler = async (event, _context, _callback) => {
    console.log("[DEBUG - List Shippings]", event);

    const response = await scan({ TableName: `Shoppings-${process.env.ENV}` });

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
            error: false,
            body: JSON.stringify(response)
        })
    }
}
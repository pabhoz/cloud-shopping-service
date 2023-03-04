const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const write = async (item, table) => {
    const params = {
        Item: item,
        TableName: table
    };
    console.log({params});
    return documentClient.put(params).promise();
}

module.exports = {
    write,
}
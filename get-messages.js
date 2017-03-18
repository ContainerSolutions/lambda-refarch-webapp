'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();


module.exports.getMessages = (event, context, callback) => {
    dynamo.scan({
        TableName: "messages",
        Limit: 50
    }, callback);
};

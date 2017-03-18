'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();


module.exports.storeMessage = (event, context, callback) => {
    const data = event.body;
    console.log("store-message invoked with data" + JSON.stringify(data));

    const params = {
        TableName : 'messages',
        Item: {
            msg_id: Math.random().toString(36).substring(7),
            content: data.content,
            name: data.name,
            email: data.email
        }
    };
    dynamo.put(params, callback);
};

'use strict';

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const params = {
	TableName: 'recipe'
}

module.exports.list = (event, context, callback) => {


	dynamoDB.scan(params, (error, result) => {
		if (error) {
			console.error(error);
			callback(new Error('Couldn\'t fetch the recipe item.'));
			return;
		}

		const response = {
			statusCode: 200,
			// results or result
			body: JSON.stringify(result.Items)
		}
		callback(null, response);
	})
}
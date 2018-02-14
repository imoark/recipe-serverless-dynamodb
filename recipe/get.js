'use strict';

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();


module.exports.get = (event, context, callback) => {

	const params = {
		TableName: 'recipe',
		Key: {
			id: event.pathParameters.id
		}
	};

	dynamoDB.get(params, (error, result) => {
		if (error) {
			console.error(error);
			callback(new Error('Couldn\'t fetch the recipe item.'));
			return;
		}

		const response = {
			statusCode: 200,
			// results or result
			body: JSON.stringify(result.Item)
		}
		callback(null, response);
	})
}
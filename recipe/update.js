'use strict';

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();


module.exports.update = (event, context, callback) => {

	const timestamp = new Date().getTime();
	const data = JSON.parse(event.body);

	if (typeof data.text !== 'string') {
		console.error('Validation Failed');
		callback(new Error('Couldn\'t update the recipe item.'));
	}

	const params = {
		TableName: 'recipe',
		Key: {
			id: event.pathParameters.id,
			title: data.text,
			ingredient: data.ingredient,
			updatedAt: timestamp
		}
	};

	dynamoDB.put(params, (error, result) => {
		if (error) {
			console.error(error);
			callback(new Error('Couldn\'t update the recipe item.'));
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
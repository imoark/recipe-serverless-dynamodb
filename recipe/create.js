'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
	// can be just Date() or Date().getTime()
	const timestamp = new Date().getTime();
	const data = JSON.parse(event.body);

	if (typeof data.title !== 'string' || typeof data.ingredient !== 'string' ) {
		console.error('Validation Failed');
		callback(new Error('Couldn\'t create the recipe item.'));
	}


	const params = {
		TableName: 'recipe',
		Item: {
			id: uuid.v1(),
			title: data.title,
			ingredient: data.ingredient,
			createdAt: timestamp,
			updatedAt: timestamp
		}
	}

	dynamoDB.put(params, (error, result) => {
		if (error) {
			console.error(error);
			callback(new Error('Couldn\'t create the recipe item.'));
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
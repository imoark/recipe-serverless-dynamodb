# Recipe REST API AWS DynamoDB

Using serverless framework

### Example Body

```body
{ 
	"title" : "Bread",
	"ingredient" : "Flour"
}
```

### Service Information

```service
service: recipe-serverless
stage: dev
region: us-west-2
stack: recipe-serverless-dev
api keys:
  None
endpoints:
  POST - https://3tlv0azmne.execute-api.us-west-2.amazonaws.com/dev/recipe
  GET - https://3tlv0azmne.execute-api.us-west-2.amazonaws.com/dev/recipe
  GET - https://3tlv0azmne.execute-api.us-west-2.amazonaws.com/dev/recipe/{id}
  PUT - https://3tlv0azmne.execute-api.us-west-2.amazonaws.com/dev/recipe/{id}
  DELETE - https://3tlv0azmne.execute-api.us-west-2.amazonaws.com/dev/recipe/{id}
functions:
  create: recipe-serverless-dev-create
  list: recipe-serverless-dev-list
  get: recipe-serverless-dev-get
  update: recipe-serverless-dev-update
  delete: recipe-serverless-dev-delete
```
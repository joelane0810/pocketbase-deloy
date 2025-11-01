/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1797191527")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = user",
    "deleteRule": "@request.auth.id = user",
    "listRule": "@request.auth.id = user",
    "updateRule": "@request.auth.id = user",
    "viewRule": "@request.auth.id = user"
  }, collection)

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation2375276105",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number250609176",
    "max": null,
    "min": 0,
    "name": "costUSD",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text930877462",
    "max": 0,
    "min": 0,
    "name": "sourceAssetId",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select3835482992",
    "maxSelect": 1,
    "name": "sourceAssetType",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "paymentPlatform",
      "bank",
      "cashSource"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1797191527")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  // remove field
  collection.fields.removeById("relation2375276105")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number250609176",
    "max": null,
    "min": 0,
    "name": "costUSD",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text930877462",
    "max": 0,
    "min": 0,
    "name": "sourceAssetId",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select3835482992",
    "maxSelect": 1,
    "name": "sourceAssetType",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "paymentPlatform",
      "bank",
      "cashSource"
    ]
  }))

  return app.save(collection)
})

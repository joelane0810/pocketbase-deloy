/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

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
    "hidden": false,
    "id": "json3016365137",
    "maxSize": 0,
    "name": "participantIds",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(8, new Field({
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
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select961728715",
    "maxSelect": 1,
    "name": "platform",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Google Ads",
      "Youtube Ads",
      "Facebook Ads",
      "Tiktok Ads"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  // remove field
  collection.fields.removeById("json3016365137")

  // remove field
  collection.fields.removeById("relation2375276105")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select961728715",
    "maxSelect": 1,
    "name": "platform",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Google Ads",
      "Youtube Ads",
      "Facebook Ads",
      "Tiktok Ads"
    ]
  }))

  return app.save(collection)
})

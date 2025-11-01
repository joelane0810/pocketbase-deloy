/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1904578057")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = user",
    "deleteRule": "@request.auth.id = user",
    "listRule": "@request.auth.id = user",
    "updateRule": "@request.auth.id = user",
    "viewRule": "@request.auth.id = user"
  }, collection)

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2496717809",
    "max": 0,
    "min": 0,
    "name": "relatedDebtPaymentId",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(12, new Field({
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
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select3568996939",
    "maxSelect": 1,
    "name": "autoCreateDebtTerm",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "monthly",
      "short-term",
      "long-term"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1904578057")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  // remove field
  collection.fields.removeById("text2496717809")

  // remove field
  collection.fields.removeById("relation2375276105")

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select3568996939",
    "maxSelect": 1,
    "name": "autoCreateDebtTerm",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "monthly",
      "short-term",
      "long-term"
    ]
  }))

  return app.save(collection)
})

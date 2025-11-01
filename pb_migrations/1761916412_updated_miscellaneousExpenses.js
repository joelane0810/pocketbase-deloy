/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1904578057")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "date2862495610",
    "max": "",
    "min": "",
    "name": "date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select2363381545",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Định phí",
      "Biến Phí"
    ]
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select1767278655",
    "maxSelect": 1,
    "name": "currency",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "VND",
      "USD"
    ]
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number2413817175",
    "max": null,
    "min": null,
    "name": "exchangeRate",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

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

  // update field
  collection.fields.addAt(9, new Field({
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
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select3835482992",
    "maxSelect": 1,
    "name": "sourceAssetType",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "bank",
      "short-term",
      "long-term"
    ]
  }))

  // update field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation2375276105",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1904578057")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "date2862495610",
    "max": "",
    "min": "",
    "name": "date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select2363381545",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Định phí",
      "Biến Phí"
    ]
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select1767278655",
    "maxSelect": 1,
    "name": "currency",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "VND",
      "USD"
    ]
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number2413817175",
    "max": null,
    "min": null,
    "name": "exchangeRate",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
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

  // update field
  collection.fields.addAt(9, new Field({
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
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select3835482992",
    "maxSelect": 1,
    "name": "sourceAssetType",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "bank",
      "short-term",
      "long-term"
    ]
  }))

  // update field
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

  return app.save(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4146352180")

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
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2296450559",
    "max": null,
    "min": null,
    "name": "amountUSD",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number1047620539",
    "max": null,
    "min": null,
    "name": "myShareUSD",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(4, new Field({
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
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3997145074",
    "max": 0,
    "min": 0,
    "name": "sourcePlatformId",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3207869692",
    "max": 0,
    "min": 0,
    "name": "destinationId",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select2081334415",
    "maxSelect": 1,
    "name": "destinationType",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "cashSource",
      "bank",
      "paymentPlatform"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4146352180")

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
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2296450559",
    "max": null,
    "min": null,
    "name": "amountUSD",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number1047620539",
    "max": null,
    "min": null,
    "name": "myShareUSD",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(4, new Field({
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
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3997145074",
    "max": 0,
    "min": 0,
    "name": "sourcePlatformId",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3207869692",
    "max": 0,
    "min": 0,
    "name": "destinationId",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select2081334415",
    "maxSelect": 1,
    "name": "destinationType",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "cashSource",
      "bank",
      "paymentPlatform"
    ]
  }))

  return app.save(collection)
})

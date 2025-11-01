/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "date2862495610",
        "max": "",
        "min": "",
        "name": "date",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "date"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_484305853",
        "hidden": false,
        "id": "relation1821597943",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "projectId",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_1797191527",
    "indexes": [],
    "listRule": null,
    "name": "dailyAdCosts",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return Dao(app).saveCollection(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1797191527");

  return app.delete(collection);
})

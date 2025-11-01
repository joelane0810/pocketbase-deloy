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
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1843675174",
        "max": 0,
        "min": 0,
        "name": "description",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
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
      },
      {
        "hidden": false,
        "id": "number2392944706",
        "max": null,
        "min": null,
        "name": "amount",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
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
        "id": "text2734952365",
        "max": 0,
        "min": 0,
        "name": "participantId",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
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
          "bank",
          "short-term",
          "long-term"
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
    "id": "pbc_1904578057",
    "indexes": [],
    "listRule": null,
    "name": "miscellaneousExpenses",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1904578057");

  return app.delete(collection);
})

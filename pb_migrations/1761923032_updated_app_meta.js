/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2048389213")

  // update collection data
  unmarshal({
    "createRule": "owner = @request.auth.id && @collection.app_meta.owner:length = 0",
    "deleteRule": "owner = @request.auth.id",
    "listRule": "owner = @request.auth.id",
    "updateRule": "owner = @request.auth.id",
    "viewRule": "owner = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2048389213")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
})

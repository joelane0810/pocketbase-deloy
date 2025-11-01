/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2048389213")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "json3846545605",
    "maxSize": 0,
    "name": "settings",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "json3944022865",
    "maxSize": 0,
    "name": "archivedData",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2048389213")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "json3846545605",
    "maxSize": 0,
    "name": "settings",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "json"
  }))

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "json3944022865",
    "maxSize": 0,
    "name": "archivedData",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
})

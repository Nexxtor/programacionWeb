const express = require("express"),
    router = express.Router(),
    PersonController = require("../controller/api/PersonController");

router.get("/person/:username", PersonController.getId)
router.get("/person", PersonController.getId)

router.post("/person", PersonController.create);

router.put("/person/:username", PersonController.update);
router.delete("/person/:username", PersonController.delete);

module.exports = router;
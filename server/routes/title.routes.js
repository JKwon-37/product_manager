const Title = require("../controllers/titleControllers");

module.exports = (app) => {
    app.get("/api/title", Title.findAll)
    app.post("/api/title", Title.createTitle)
    app.get("/api/title/:id", Title.findeOne)
    app.put("/api/title/:id", Title.updateOneTitle);
    app.delete("/api/title/:id", Title.deleteTitleByID)
}
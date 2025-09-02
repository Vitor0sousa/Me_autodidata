const { Router } = require("express");
const router = Router()



router.get("/atendimentos", (req, res) => {
    res.send('teste belezinha');

});
router.post("/atendimentos", (req, res) => {
    res.send("teste post");

});
router.put("/atendimentos/:id", (req, res) => {
    res.send(`ele esta alterando o teste ${id}..`);

});
router.delete("/atendimentos/:id", (req, res) => {
    const { id } = req.params;
    res.send(`chegou aqui e a conta vai ser banida hehe id: ${id}`);

});

module.exports = router;


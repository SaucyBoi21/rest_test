const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'tshirt',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const
});
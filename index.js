const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const users = [
    { id: 1, name: 'Rasik', email: 'rasik@gmail.com' },
    { id: 2, name: 'Enan', email: 'enan@gmail.com' },
    { id: 3, name: 'Fahad', email: 'fahad@gmail.com' },
    { id: 4, name: 'Salman', email: 'salman@gmail.com' },
];

app.get('/', (req, res) => {
    res.send("Users Management Server Running")
});

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
});

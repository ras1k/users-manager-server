const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const users = [
    { id: 1, name: 'Rasik', email: 'rasik@gmail.com' },
    { id: 2, name: 'Enan', email: 'enan@gmail.com' },
    { id: 3, name: 'Fahad', email: 'fahad@gmail.com' },
    { id: 4, name: 'Salman', email: 'salman@gmail.com' },
];

app.get('/', (req, res) => {
    res.send("Users Management Server Running");
});

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) =>{
    console.log(req.body);
    const newUsers = req.body;
    newUsers.id = users.length + 1;
    users.push(newUsers);
    res.send(newUsers);
})

app.listen(port, () => {
    console.log('hit post api')
    console.log(`server is running on port: ${port}`);
});

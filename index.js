let express = require('express');
let cors = require('cors');

let app = express();
app.use(cors());
app.use(express.json()); 


app.get('/fact', (req, res) => {
    let num = parseInt(req.query.number);

    if (isNaN(num) || num < 0) {
        return res.status(400).send('Please provide a valid non-negative number');
    }

    let fact = 1;
    for (let i = 2; i <= num; i++) 
        {
              fact *= i;
        }

    res.send(`Factorial of ${num} is ${fact}`);
});

app.listen(3000, () =>
     {
            console.log('Server is running on port 3000');
    });


// backend cmd : npm i express cors
// To run this server, use the command : node index.js
// SERVER USING EXPRESS AND CORS



// to install nodemon : npm i -g nodemon
// nodemon index.js 
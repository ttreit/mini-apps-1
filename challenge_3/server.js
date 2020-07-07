const express = require('express');
const app = express();
const port = process.env.port || 3300;






app.listen(port, () => console.log(`Server up and listening on ${port}` ));


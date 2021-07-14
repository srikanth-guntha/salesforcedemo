const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({name: 'sri'});
})

app.listen(process.env.PORT || 4444, () => {
    console.log(`server running on port ${process.env.PORT || 4444} `);
})
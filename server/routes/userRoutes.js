import express from "express";

const router = express.Router();

router.post('/run', (req, res) => {
    if (req.langugage === 'C')
    {
        executeC();    
    }
    else if (req.langugage === 'Python')
    {
        executePython();
    }
    else if (req.langugage === 'C++')
    {
        executeCpp();
    }
})
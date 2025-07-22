const express = require('express');
const router = express.Router();
const {
    createCRE, getAllCREs,getCREById,updateCRE, deleteCRE
} = require('../controller/creController');
 const  verifyToken = require('../middleware/verifyToken');


 router.post('/',verifyToken,createCRE);
 router.get('/',verifyToken,getAllCREs);
 router.get('/',verifyToken,getCREById);
 router.patch('/',verifyToken,updateCRE);
 router.delete('/', verifyToken,deleteCRE);

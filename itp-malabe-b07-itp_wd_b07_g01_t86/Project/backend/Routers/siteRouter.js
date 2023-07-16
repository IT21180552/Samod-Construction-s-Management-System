import express from 'express'

import { deleteSite, getAllSites } from '../controllers/siteController.js'

const siteRouter =  express.Router()
siteRouter.get("/",getAllSites)
siteRouter.delete("/:id",deleteSite)

export default siteRouter
import {Router} from 'express';
import { createContact } from '../controllers/contacts.controller.js';
const websiteRoute = Router()


websiteRoute.post('/contact',createContact)

export default websiteRoute
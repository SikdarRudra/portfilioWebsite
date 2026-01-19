import {Router} from 'express'
import { addProject, deleteProject, getProjects, updateProject } from '../controllers/projects.controller.js'
import { getAllContactsForAdmin } from '../controllers/contacts.controller.js'
import { addCertificate, deleteCertificate, getCertificateById, getCertificates, updateCertificate } from '../controllers/certificate.controller.js'
export const adminRoutes = Router()

adminRoutes.post('/addProject',addProject)
adminRoutes.patch('/updateProject/:id',updateProject)
adminRoutes.get('/getallProjects',getProjects)
adminRoutes.delete('/deleteProject/:id',deleteProject)

adminRoutes.get('/allContacts',getAllContactsForAdmin)

adminRoutes.post('/addCertificate', addCertificate);
adminRoutes.get('/getAllCertificates', getCertificates);
adminRoutes.get('/getCertificate/:id', getCertificateById);
adminRoutes.patch('/updateCertificate/:id', updateCertificate);
adminRoutes.delete('/deleteCertificate/:id', deleteCertificate);

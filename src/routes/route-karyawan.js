const router = require('express').Router()
const { karyawan } = require('../controllers')

//get semua
router.get('/karyawan', karyawan.getDataKaryawan);

//get satuan
//router.get('karyawan/:id', karyawan.getDataKaryawanById)

//add
//router.post('/karyawan/add', karyawan.addDataKaryawan)

//edit
//router.post('/karyawan/edit', karyawan.editDataKaryawan)

//delete
//router.post('/karyawan/delete', karyawan.deleteDatakaryawan)

module.exports = router
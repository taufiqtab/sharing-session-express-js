const config = require('../configs/database')
const mysql = require('mysql')
const pool = mysql.createPool(config)

pool.on('error' , (err) =>{
    console.error(err);
})

module.exports = {

    getDataKaryawan(req, res){
        pool.getConnection(
            function(err, connection){
                if(err) throw err;
                connection.query('SELECT * FROM karyawan', function(error, result){
                    if(error) throw error
                    res.send({
                        success : true,
                        message : "berhasil ambil data !",
                        data : result
                    })
                } )
                connection.release();
            }
        )
    }

}




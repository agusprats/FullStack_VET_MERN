const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function() {
    

    //Agrega nuevos pacientes via Post
    router.post('/pacientes', 
     pacienteController.nuevoCliente
    );

    //Obtiene todos los registros de pacientes de la db
    router.get('/pacientes',
     pacienteController.obtenerPacientes
    );

    //Obtiene un paciente específico (ID)
    router.get('/pacientes/:id',
    pacienteController.obtenerPaciente
    );

    //Actualiza un registro con un ID específico 
    router.put('/pacientes/:id',
    pacienteController.actualizarPaciente
    );

    //Eliminar un registro con un ID específico 
    router.delete('/pacientes/:id',
    pacienteController.eliminarPaciente
    );

    return router;
}
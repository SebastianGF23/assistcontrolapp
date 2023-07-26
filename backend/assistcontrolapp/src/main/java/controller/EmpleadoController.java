package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import model.Empleado;
import repository.EmpleadoRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmpleadoController {

	@Autowired
	private EmpleadoRepository empleadoRepository;
	
	@PostMapping("/empleado")
	Empleado newEmpleado(@RequestBody Empleado newEmpleado) {
		return empleadoRepository.save(newEmpleado);
	}
	
	@GetMapping("/empleados")
	List<Empleado> getAllEmpleados(){
		return empleadoRepository.findAll();
	}
	
}

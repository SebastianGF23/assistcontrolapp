package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import model.Cargo;
import repository.CargoRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class CargoController {
	@Autowired
	private CargoRepository cargoRepository;
	@PostMapping("/cargo")
	Cargo newCargo(@RequestBody Cargo newCargo) {
		return cargoRepository.save(newCargo);
	}
}

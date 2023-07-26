package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import model.Contrato;
import repository.ContratoRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class ContratoController {
	@Autowired
	private ContratoRepository contratoRepository;
	@PostMapping("/contrato")
	Contrato newContrato(@RequestBody Contrato newContrato) {
		return contratoRepository.save(newContrato);
	}
}

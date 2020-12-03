package com.denuncia.api.controller;


import java.time.LocalDate;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denuncia.api.domain.model.Denuncia;
import com.denuncia.api.domain.repository.DenunciaRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/denuncias")

public class DenunciaController {
	
	@Autowired
	private DenunciaRepository denunciaRepository;	
	
	@GetMapping
	private List<Denuncia> listar(){
		return denunciaRepository.findAll();
	}
	
	@PostMapping
	private Denuncia add(@RequestBody Denuncia denuncia) {
		denuncia.setDate(LocalDate.now());
		return this.denunciaRepository.save(denuncia);
		
	}
	
} 

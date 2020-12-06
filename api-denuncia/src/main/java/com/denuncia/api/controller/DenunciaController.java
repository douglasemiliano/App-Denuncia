package com.denuncia.api.controller;


import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denuncia.api.domain.model.Denuncia;
import com.denuncia.api.domain.service.DenunciaService;
import com.denuncia.api.dto.DenunciaDTO;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/denuncias")

public class DenunciaController {
	
	@Autowired
	private DenunciaService denunciaService;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping
	public List<DenunciaDTO> listar(){
		return toCollectionDTO(denunciaService.listar());
	}
	
	@PostMapping
	public ResponseEntity<DenunciaDTO> add(@RequestBody Denuncia denuncia) {
		denuncia.setDate(LocalDate.now());
		DenunciaDTO d = toDTO(this.denunciaService.add(denuncia));
		return new ResponseEntity<>(d, HttpStatus.CREATED);
		
	}
	
	@GetMapping("/{denunciaId}")
	public  ResponseEntity<DenunciaDTO> buscar (@PathVariable Long denunciaId){
		DenunciaDTO dto = toDTO(denunciaService.buscar(denunciaId));
		return ResponseEntity.ok(dto);
	}
	
	
	private DenunciaDTO toDTO (Denuncia denuncia) {
		return modelMapper.map(denuncia, DenunciaDTO.class);
	}
	
	private List<DenunciaDTO> toCollectionDTO(List<Denuncia> denuncias){
		return denuncias.stream()
				.map(denuncia -> toDTO(denuncia))
				.collect(Collectors.toList());
	}
	
	
} 

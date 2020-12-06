package com.denuncia.api.domain.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.denuncia.api.domain.model.Denuncia;
import com.denuncia.api.domain.repository.DenunciaRepository;


@Service
public class DenunciaService {

	@Autowired
	public DenunciaRepository denunciaRepository;	
	
	
	public List<Denuncia> listar(){
		return denunciaRepository.findAll();
	}
	
	
	public Denuncia add(Denuncia denuncia) {
		denuncia.setDate(LocalDate.now());
		return this.denunciaRepository.save(denuncia);
	}
	
	public  Denuncia buscar (Long denunciaId){
		Optional<Denuncia> denuncia = denunciaRepository.findById(denunciaId);
		return denuncia.get();
	}
}

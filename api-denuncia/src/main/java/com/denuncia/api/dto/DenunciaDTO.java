package com.denuncia.api.dto;

import java.time.LocalDate;


public class DenunciaDTO {
	


	private String name;

	private Integer age;
	
	private String phone;

	private String assediotype;

	private String description;

	private String local;

	private boolean incontact;
	
	private LocalDate date;
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAssediotype() {
		return assediotype;
	}

	public void setAssediotype(String assediotype) {
		this.assediotype = assediotype;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocal() {
		return local;
	}

	public void setLocal(String local) {
		this.local = local;
	}

	public boolean isIncontact() {
		return incontact;
	}

	public void setIncontact(boolean incontact) {
		this.incontact = incontact;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	

}

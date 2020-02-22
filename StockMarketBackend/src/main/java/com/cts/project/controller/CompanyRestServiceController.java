package com.cts.project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.models.Company;
import com.cts.project.repo.CompanyRepo;

@CrossOrigin(origins = "*")
@RestController
public class CompanyRestServiceController {

	@Autowired
	CompanyRepo cr;
	
	@GetMapping("/company")
	public List<Company> findAll(){
		return cr.findAll();
	}
	
	@GetMapping("/company/{id}")
	public Company findOne(@PathVariable int id) {
		Optional<Company> cmy = cr.findById(id);
		Company cm = cmy.get();
		return cm;
	}
	
	@PostMapping("/company")
	public Company save(@RequestBody Company cmy) {
		Company cm = cr.save(cmy);
		return cm;
	}
	
	@DeleteMapping("/company/{id}")
	public void delete(@PathVariable int id) {
		cr.deleteById(id);
	}
	
	@PutMapping("/company")
	public Company update(@RequestBody Company cmy) {
		Company cm = cr.save(cmy);
		return cm;
	}
	
}

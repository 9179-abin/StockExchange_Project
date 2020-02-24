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

import com.cts.project.models.StockExchange;
import com.cts.project.repo.StockExchangeRepo;

@CrossOrigin(origins = "*")
@RestController
public class StockExchangeRestServiceController {
	
	@Autowired
	StockExchangeRepo sr;
	
	@GetMapping("/stocks")
	public List<StockExchange> findAll(){
		return sr.findAll();
	}
	
	@GetMapping("/stocks/{id}")
	public StockExchange findOne(@PathVariable int id) {
		Optional<StockExchange> se = sr.findById(id);
		StockExchange str = se.get();
		return str;
	}
	
	@PostMapping("/stocks")
	public StockExchange save(@RequestBody StockExchange str) {
		
		StockExchange se = sr.save(str);
		return se;
	}
	
	@DeleteMapping("/stocks/{id}")
	public void delete(@PathVariable int id) {
		sr.deleteById(id);
	}
	
	@PutMapping("/stocks")
	public StockExchange update(@RequestBody StockExchange se) {
		StockExchange str = sr.save(se);
		return str;
	}
	

}

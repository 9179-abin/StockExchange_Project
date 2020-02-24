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

import com.cts.project.models.StockPrice;
import com.cts.project.repo.StockPriceRepo;

@CrossOrigin(origins = "*")
@RestController
public class StockPriceRestServiceController {
	
	@Autowired
	StockPriceRepo spr;
	
	@GetMapping("/stockprice")
	public List<StockPrice> findAll() {
		return spr.findAll();
	}
	
	@GetMapping("/stockprice/{id}")
	public StockPrice findOne(@PathVariable int id) {
		Optional<StockPrice> sp = spr.findById(id);
		StockPrice sep = sp.get();
		return sep;
	}
	
	@PostMapping("/stockprice")
	public StockPrice save(@RequestBody StockPrice sp) {
		StockPrice sep = spr.save(sp);
		return sep;
	}
	
	@DeleteMapping("/stockprice/{id}")
	public void delete(@PathVariable int id) {
		spr.deleteById(id);
	}
	
	@PutMapping("/stockprice")
	public StockPrice update(@RequestBody StockPrice sp) {
		StockPrice sep = spr.save(sp);
		return sep;
	}
	

}

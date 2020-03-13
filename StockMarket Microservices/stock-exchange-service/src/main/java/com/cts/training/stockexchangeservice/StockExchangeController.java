package com.cts.training.stockexchangeservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class StockExchangeController {
	
	@Autowired
	StockExchangeRepo stockExchangeRepo;
	
	@Autowired
	StockExchangeService stockExchangeServices;
	
//	@GetMapping("/stocks")
//	public List<StockExchange> findAll(){
//		return sr.findAll(); 
//	}
	
	@GetMapping("/stocks")
	public List<StockExchange> findAll(){
		return stockExchangeServices.getAll();
	}
	
	@GetMapping("/stocks/{id}")
	public StockExchange findOne(@PathVariable int id) {
		StockExchange str = stockExchangeServices.getOne(id);
		return str;
	}
	
//	@GetMapping("/stocks/{id}")
//	public StockExchange findOne(@PathVariable int id) {
//		Optional<StockExchange> se = sr.findById(id);
//		StockExchange str = se.get();
//		return str;
//	}
	
	@PostMapping("/stocks")
	public String save(@RequestBody StockExchangeDTO stockExchangeDTO) {
		String b;
		b = stockExchangeServices.insert(stockExchangeDTO);
		return b;
	}
	
	
//	@PostMapping("/stocks")
//	public StockExchange save(@RequestBody StockExchange str) {
//		
//		StockExchange se = sr.save(str);
//		return se;
//	}
	
	@DeleteMapping("/stocks/{id}")
	public void delete(@PathVariable int id) {
		stockExchangeServices.remove(id);
	}
	
	
//	@DeleteMapping("/stocks/{id}")
//	public void delete(@PathVariable int id) {
//		sr.deleteById(id);
//	}
	
	@PutMapping("/stocks")
	public String update(@RequestBody StockExchangeDTO stockExchangeDTO) {
		String c;
		c=stockExchangeServices.alter(stockExchangeDTO);
		return c;
	}
	

}

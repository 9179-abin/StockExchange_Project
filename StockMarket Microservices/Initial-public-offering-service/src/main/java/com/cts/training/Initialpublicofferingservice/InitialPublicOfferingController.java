package com.cts.training.Initialpublicofferingservice;

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
public class InitialPublicOfferingController {
//	@Autowired
//	InitialPublicOffering ipor;
	 
	@Autowired
	InitialPublicOfferingService ipoServices;
	
	@GetMapping("/ipo")
	public List<InitialPublicOffering> findAll(){
		return ipoServices.getAll();
	}
	
//	@GetMapping("/ipo")
//	public List<IPO> findAll(){
//		return ipor.findAll();
//	}
	
	@GetMapping("/ipo/{id}")
	public InitialPublicOffering findOne(@PathVariable int id) {
		InitialPublicOffering ipo = ipoServices.getOne(id);
		return ipo;
	}
	
	
//	@GetMapping("/ipo/{id}")
//	public IPO findOne(@PathVariable int id) {
//		Optional<IPO> ip = ipor.findById(id);
//		IPO ipos = ip.get();
//		return ipos;
//	}

	@PostMapping("/ipo")
	public String save(@RequestBody InitialPublicOfferingDTO ipoDTO) {
		String b;
		b=ipoServices.insert(ipoDTO);
		return b;
	}
	
	
//	@PostMapping("/ipo")
//	public IPO save(@RequestBody IPO ip) {
//		
//		IPO ipos = ipor.save(ip);
//		return ipos;
//	}
	
	
	@DeleteMapping("/ipo/{id}")
	public void delete(@PathVariable int id) {
		ipoServices.remove(id);
	}
	
//	@DeleteMapping("/ipo/{id}")
//	public void delete(@PathVariable int id) {
//		ipor.deleteById(id);
//	}
	
	@PutMapping("/ipo")
	public String update(@RequestBody InitialPublicOfferingDTO ipoDTO) {
		String c;
		c = ipoServices.alter(ipoDTO);
		return c;
	}
	
//	@PutMapping("/ipo")
//	public IPO update(@RequestBody IPO ip) {
//		IPO ipos = ipor.save(ip);
//		return ipos;
//	}
}

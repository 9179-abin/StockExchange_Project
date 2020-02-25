package com.cts.project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.models.Users;
import com.cts.project.repo.UsersRepo;

@CrossOrigin(origins = "*")
@RestController
public class UsersRestServiceController {
	
	@Autowired
	UsersRepo ur;
	
	@Autowired
	JavaMailSender jms;
	
	@GetMapping("/users")
	public List<Users> findAll() {
		return ur.findAll();
	}
	
	@GetMapping("/users/{id}")
	public Users findOne(@PathVariable int id) {
		Optional<Users> usr = ur.findById(id);
		Users us = usr.get();
		return us;
	}
	
	@PostMapping("/users")
	public Users save(@RequestBody Users usr) {
		Users us = ur.save(usr);
		try {
			SimpleMailMessage sm = new SimpleMailMessage();
			sm.setFrom("abinjoshy002@gmail.com");
			sm.setTo(us.getEmail());
//			sm.setTo("abinjoshy002@gmail.com");
			sm.setSubject("Testing Mail");
//			sm.setText("This is testing mail");
//			jms.send(sm);
			sm.setText("Account created click on 'http://localhost:5400/activate?"+us.getEmail()+"'");
			jms.send(sm);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return us;
		
	}
	
	@DeleteMapping("/users/{id}")
	public void delete(@PathVariable int id) {
		ur.deleteById(id);
	}
	
	@PutMapping("/users")
	public Users update(@RequestBody Users usr) {
		Users us = ur.save(usr);
		return us;
	}
}

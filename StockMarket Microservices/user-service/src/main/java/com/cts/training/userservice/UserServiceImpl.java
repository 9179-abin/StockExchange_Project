package com.cts.training.userservice;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;



@Service
public class UserServiceImpl implements UserServices {
	
	@Autowired
	UserRepo userRepo;
	
	@Autowired
	JavaMailSender jms;
	
	@Override
	public String insert(UserDTO userDTO) {
		Users us = new Users();
		String b;
		try {
			SimpleMailMessage sm = new SimpleMailMessage();
			sm.setFrom("abinjoshy002@gmail.com");
			sm.setTo(userDTO.getEmail());

			b=userDTO.getEmail();
			if(userRepo.findByEmail(b) != null) {
				return"{\"res\":\"0\"}";
			}
			else {
				BeanUtils.copyProperties(userDTO, us);
				userRepo.save(us);
				sm.setSubject("Testing Mail");
				sm.setText("Account created click on 'http://localhost:5400/activate?" + us.getEmail()+ "'");
				jms.send(sm);
				return "{\"res\":\"1\"}";
			}
			
		}
		catch(Exception e) {
			e.printStackTrace();
			return"{\"res\":\"2\"}";
		}

	}
	
	@Override
	public void remove(int id) {
		userRepo.deleteById(id);
	}

	@Override
	public List<Users> getAll() {
		return userRepo.findAll();
	}

	@Override
	public Users getOne(int id) {
		Optional<Users> usr = userRepo.findById(id);
		Users us = usr.get();
		return us;
	}

	@Override
	public String alter(UserDTO userDTO) {
		Users us = new Users();
		
		if(getOne(userDTO.getId()).isEnabled()) {
			userDTO.setEnabled(true);
		}
		BeanUtils.copyProperties(userDTO, us);
		us=userRepo.save(us);
		if(us!=null) {
		return "{\"res\":\"1\"}";}
		else {
			return "{\"res\":\"0\"}";
		}
	}

	@Override
	public String userActivate(String email) {
		String str=email.substring(email.indexOf(":")+2,email.lastIndexOf("\""));
		System.out.println("emil ::"+str);
		Users u =userRepo.findByEmail(str);
		System.out.println("uname :"+u.getUsername());
		if(!u.isEnabled()) {
			u.setEnabled(true);
			System.out.println(userRepo.save(u));
			return "{\"result\":\"1\"}";
		}
		else 
		{
			return "{\"result\":\"0\"}";
		}
	}

	@Override
	public UserDTO getUserByUsernameAndPassword(String username, String password) throws NoSuchElementException {
		Users user = userRepo.findByUsernameAndPassword(username, password).get();
		UserDTO userDTO = new UserDTO();
		BeanUtils.copyProperties(user, userDTO);
		return userDTO;
	}
}

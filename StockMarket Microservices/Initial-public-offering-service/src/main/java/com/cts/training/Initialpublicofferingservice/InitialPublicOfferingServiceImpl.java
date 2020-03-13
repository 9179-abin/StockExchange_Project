package com.cts.training.Initialpublicofferingservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class InitialPublicOfferingServiceImpl implements InitialPublicOfferingService {
	@Autowired
	InitialPublicOfferingRepo ipor;

	@Override
	public String insert(InitialPublicOfferingDTO ipo) {
		InitialPublicOffering ps = new InitialPublicOffering();
		BeanUtils.copyProperties(ipo, ps);
		ps=ipor.save(ps);
		if(ps!=null) {
			return "{\"res\":\"1\"}";
		}
		else {
			return "{\"res\":\"0\"}";
		}
	}

	@Override
	public InitialPublicOffering getOne(int id) {
		Optional<InitialPublicOffering> ipy = ipor.findById(id);
		InitialPublicOffering pm = ipy.get();
		return pm;
	}

	@Override
	public List<InitialPublicOffering> getAll() {
		return ipor.findAll();
	}

	@Override
	public String alter(InitialPublicOfferingDTO ipo) {
		InitialPublicOffering ps = new InitialPublicOffering();
		BeanUtils.copyProperties(ipo, ps);
		ps=ipor.save(ps);
		if(ps!=null) {
			return "{\"res\":\"1\"}";
		}
		else {
			return "{\"res\":\"0\"}";
		}
	}

	@Override
	public void remove(int id) {
		ipor.deleteById(id);
		
	}

}

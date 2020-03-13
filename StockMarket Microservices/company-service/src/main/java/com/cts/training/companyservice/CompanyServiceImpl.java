package com.cts.training.companyservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CompanyServiceImpl implements CompanyServices{
	
	@Autowired
	CompanyRepo cr;

	@Override
	public String insert(CompanyDTO company) {
		Company cs = new Company();
		BeanUtils.copyProperties(company, cs);
		cs=cr.save(cs);
		if(cs!=null) {
			return "{\"res\":\"1\"}";
		}
		else {
			return "{\"res\":\"0\"}";
		}
	}

	@Override
	public Company getOne(int id) {
		Optional<Company> cmy = cr.findById(id);
		Company cm = cmy.get();
		return cm;
	}

	@Override
	public List<Company> getAll() {
		return cr.findAll();
	}

	@Override
	public String alter(CompanyDTO company) {
		Company cs = new Company();
		BeanUtils.copyProperties(company, cs);
		cs=cr.save(cs);
		if(cs!=null) {
			return "{\"res\":\"1\"}";
		}
		else {
			return "{\"res\":\"0\"}";
		}
	}

	@Override
	public void remove(int id) {
		cr.deleteById(id);
		
	}

}

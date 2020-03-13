package com.cts.training.companyservice;

import java.util.List;

public interface CompanyServices {
	
	public String insert(CompanyDTO company);
	public Company getOne(int id);
	public List<Company> getAll();
	public String alter(CompanyDTO company);
	public void remove(int id);

}

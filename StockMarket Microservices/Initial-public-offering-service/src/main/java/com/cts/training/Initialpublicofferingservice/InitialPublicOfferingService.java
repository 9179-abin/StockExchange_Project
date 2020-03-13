package com.cts.training.Initialpublicofferingservice;

import java.util.List;



public interface InitialPublicOfferingService {
	public String insert(InitialPublicOfferingDTO dto);
	public InitialPublicOffering getOne(int id);
	public List<InitialPublicOffering> getAll();
	public String alter(InitialPublicOfferingDTO dto);
	public void remove(int id);
}
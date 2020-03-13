package com.cts.training.stockexchangeservice;

import java.util.List;



public interface StockExchangeService {
	
	public String insert(StockExchangeDTO stockExchangeDTO);
	public StockExchange getOne(int id);
	public List<StockExchange> getAll();
	public String alter(StockExchangeDTO stockExchangeDTO);
	public void remove(int id);

}
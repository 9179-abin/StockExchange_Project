package com.cts.training.stockexchangeservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class StockExchangeServiceImpl implements StockExchangeService {

	@Autowired
	StockExchangeRepo stockExchangeRepo;
	
	@Override
	public String insert(StockExchangeDTO stockExchangeDTO) {
		StockExchange stockExchange = new StockExchange();
		BeanUtils.copyProperties(stockExchangeDTO, stockExchange);
		stockExchange=stockExchangeRepo.save(stockExchange);
		if(stockExchange!=null) {
			return "{\"res\":\"1\"}";
		}
		else {
			return "{\"res\":\"0\"}";
		}
	}

	@Override
	public StockExchange getOne(int id) {
		Optional<StockExchange> optional = stockExchangeRepo.findById(id);
		StockExchange stockExchange = optional.get();
		return stockExchange;
	}

	@Override
	public List<StockExchange> getAll() {
		return stockExchangeRepo.findAll();
	}

	@Override
	public String alter(StockExchangeDTO stockExchangeDTO) {
		StockExchange stockExchange = new StockExchange();
		BeanUtils.copyProperties(stockExchangeDTO, stockExchange);
		stockExchange=stockExchangeRepo.save(stockExchange);
		if(stockExchange!=null) {
			return "{\"res\":\"1\"}";
		}
		else {
			return "{\"res\":\"0\"}";
		}
	}

	@Override
	public void remove(int id) {
		stockExchangeRepo.deleteById(id);
		
	}

}


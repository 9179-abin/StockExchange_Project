package com.cts.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.models.StockExchange;

public interface StockExchangeRepo extends JpaRepository<StockExchange, Integer> {

}

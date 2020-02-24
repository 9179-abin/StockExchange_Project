package com.cts.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.models.StockPrice;

public interface StockPriceRepo extends JpaRepository<StockPrice, Integer> {

}

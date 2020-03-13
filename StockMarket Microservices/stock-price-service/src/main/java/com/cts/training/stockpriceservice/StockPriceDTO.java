package com.cts.training.stockpriceservice;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Id;

public class StockPriceDTO {

	private String stockExchange;
	private long currentPrice;
	private LocalDate date;
	private LocalTime time;
	
	public StockPriceDTO() {}





	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	public long getCurrentPrice() {
		return currentPrice;
	}

	public void setCurrentPrice(long currentPrice) {
		this.currentPrice = currentPrice;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	public StockPriceDTO(int cid, String stockExchange, long currentPrice, LocalDate date, LocalTime time) {
		super();

		this.stockExchange = stockExchange;
		this.currentPrice = currentPrice;
		this.date = date;
		this.time = time;
	}
	
	
}

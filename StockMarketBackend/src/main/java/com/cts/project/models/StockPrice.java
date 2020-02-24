package com.cts.project.models;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "stockprice")
@XmlRootElement(name = "stockpricelist")
public class StockPrice {
	
	@Id
	private int cid;
	private String stockExchange;
	private long currentPrice;
	private LocalDate date;
	private LocalTime time;
	
	public StockPrice() {}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

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

	public StockPrice(int cid, String stockExchange, long currentPrice, LocalDate date, LocalTime time) {
		super();
		this.cid = cid;
		this.stockExchange = stockExchange;
		this.currentPrice = currentPrice;
		this.date = date;
		this.time = time;
	}
	
	

}

package com.cts.training.stockpriceservice;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "stockprices")
public class StockPrice {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String companyCode;
	private String stockExchange;
	private Long stockPrice;
	private LocalDate date;
	private LocalTime time;

	public StockPrice() {
	}

	public StockPrice(String companyCode, String stockExchange, Long stockPrice, LocalDate date, LocalTime time) {
		super();
		this.companyCode = companyCode;
		this.stockExchange = stockExchange;
		this.stockPrice = stockPrice;
		this.date = date;
		this.time = time;
	}

	public String getCompanyCode() {
		return companyCode;
	}

	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}

	public String getStockExchangeName() {
		return stockExchange;
	}

	public void setStockExchangeName(String stockExchangeName) {
		this.stockExchange = stockExchangeName;
	}

	public Long getStockPrice() {
		return stockPrice;
	}

	public void setStockPrice(Long stockPrice) {
		this.stockPrice = stockPrice;
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

//	private String stockExchange;
//	private long currentPrice;
//	private LocalDate date;
//	private LocalTime time;
//	
//	public StockPrice() {}
//
//	public int getCid() {
//		return cid;
//	}
//
//	public void setCid(int cid) {
//		this.cid = cid;
//	}
//
//	public String getStockExchange() {
//		return stockExchange;
//	}
//
//	public void setStockExchange(String stockExchange) {
//		this.stockExchange = stockExchange;
//	}
//
//	public long getCurrentPrice() {
//		return currentPrice;
//	}
//
//	public void setCurrentPrice(long currentPrice) {
//		this.currentPrice = currentPrice;
//	}
//
//	public LocalDate getDate() {
//		return date;
//	}
//
//	public void setDate(LocalDate date) {
//		this.date = date;
//	}
//
//	public LocalTime getTime() {
//		return time;
//	}
//
//	public void setTime(LocalTime time) {
//		this.time = time;
//	}
//
//	public StockPrice(int cid, String stockExchange, long currentPrice, LocalDate date, LocalTime time) {
//		super();
//		this.cid = cid;
//		this.stockExchange = stockExchange;
//		this.currentPrice = currentPrice;
//		this.date = date;
//		this.time = time;
//	}

}

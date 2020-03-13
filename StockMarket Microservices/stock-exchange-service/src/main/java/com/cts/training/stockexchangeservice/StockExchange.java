package com.cts.training.stockexchangeservice;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "stocks")
@XmlRootElement(name = "stockslist")
public class StockExchange {
	
	@Id
	@GeneratedValue
	private int id;
	private String stockExchanges;
	private String aboutSE;
	private String address;
	
	public StockExchange() {}

	
	
	public StockExchange(int id, String stockExchanges, String aboutSE, String address) {
		super();
		this.id = id;
		this.stockExchanges = stockExchanges;
		this.aboutSE = aboutSE;
		this.address = address;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStockExchanges() {
		return stockExchanges;
	}

	public void setStockExchanges(String stockExchanges) {
		this.stockExchanges = stockExchanges;
	}

	public String getAboutSE() {
		return aboutSE;
	}

	public void setAboutSE(String aboutSE) {
		this.aboutSE = aboutSE;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	

}

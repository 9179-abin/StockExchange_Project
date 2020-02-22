package com.cts.project.models;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "ipo")
@XmlRootElement(name = "ipolist")
public class IPO {

	@Id
	@GeneratedValue
	private int id;
	private String companyName;
	private String stockExchange;
	private double priceShare;
	private long noOfShares;
	private String address;
	private String city;
	private String state;
	private long pincode;
	private LocalDate date;
	
	public IPO() {}
	
	

	public IPO(int id, String companyName, String stockExchange, double priceShare, long noOfShares, String address,
			String city, String state, long pincode, LocalDate date) {
		super();
		this.id = id;
		this.companyName = companyName;
		this.stockExchange = stockExchange;
		this.priceShare = priceShare;
		this.noOfShares = noOfShares;
		this.address = address;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.date = date;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	public double getPriceShare() {
		return priceShare;
	}

	public void setPriceShare(double priceShare) {
		this.priceShare = priceShare;
	}

	public long getNoOfShares() {
		return noOfShares;
	}

	public void setNoOfShares(long noOfShares) {
		this.noOfShares = noOfShares;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public long getPincode() {
		return pincode;
	}

	public void setPincode(long pincode) {
		this.pincode = pincode;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	
}

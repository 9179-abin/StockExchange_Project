package com.cts.training.stockpriceservice;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;



public interface StockPriceService {

	public String insert(StockPriceDTO stockPriceDTO);
	public StockPrice getOne(int id);
	public List<StockPrice> getAll();
	public String alter(StockPriceDTO stockPriceDTO);
	public void remove(int id);
	public List<StockPriceOnPeriod> getCompanyStockPriceBetween(String companyCode, String stockExchange, LocalDate startDate,LocalDate endDate);
	public ImportSummary addStockPricesFromExcelSheet(MultipartFile file) throws Exception;
	
}

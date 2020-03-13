package com.cts.training.stockpriceservice;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "*")
@RestController
public class StockPriceController {

	@Autowired
	StockPriceRepo stockPriceRepo;

	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	StockPriceService stockPriceServices;
	
	
	
	@GetMapping
	(value="/stockPrice/companyStockPriceBetween/{companyCode}/{stockExchange}/{startDate}/{endDate}", produces="application/json")
	public ResponseEntity<?> getCompanyStockPriceDayBetween(@PathVariable String companyCode, @PathVariable String stockExchange, @PathVariable String startDate, @PathVariable String endDate){
		return new ResponseEntity<List<StockPriceOnPeriod>>(stockPriceServices.getCompanyStockPriceBetween(companyCode, stockExchange, LocalDate.parse(startDate), LocalDate.parse(endDate)),HttpStatus.OK);
	}


	@GetMapping("/stockprice")
	public List<StockPrice> findAll() {
		return stockPriceServices.getAll();
	}
//	@GetMapping("/stockprice")
//	public List<StockPrice> findAll() {
//		return spr.findAll();
//	}

	@GetMapping("/stockprice/{id}")
	public StockPrice findOne(@PathVariable int id) {
		StockPrice stockPrice = stockPriceServices.getOne(id);
		return stockPrice;
	}

//	@GetMapping("/stockprice/{id}")
//	public StockPrice findOne(@PathVariable int id) {
//		Optional<StockPrice> sp = spr.findById(id);
//		StockPrice sep = sp.get();
//		return sep;
//	}

//	@PostMapping("/stockprice")
//	public String save(@RequestBody StockPriceDTO stockPriceDTO ) {
//		String b;
//		b = stockPriceServices.insert(stockPriceDTO);
//		return b;
//	}

//	@PostMapping("/stockprice")
//	public StockPrice save(@RequestBody StockPrice sp) {
//		StockPrice sep = spr.save(sp);
//		return sep;
//	}

	@DeleteMapping("/stockprice/{id}")
	public void delete(@PathVariable int id) {
		stockPriceServices.remove(id);
	}

//	@DeleteMapping("/stockprice/{id}")
//	public void delete(@PathVariable int id) {
//		spr.deleteById(id);
//	}

	@PutMapping("/stockprice")
	public String update(@RequestBody StockPriceDTO stockPriceDTO) {
		String b;
		b = stockPriceServices.alter(stockPriceDTO);
		return b;
	}

//	@PutMapping("/stockprice")
//	public StockPrice update(@RequestBody StockPrice sp) {
//		StockPrice sep = spr.save(sp);
//		return sep;
//	}

	@PostMapping(value = "/stockPrices/uploadStockSheet", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> uploadStocksSheet(@RequestParam("stockSheet") MultipartFile file) {
		logger.info("FILE RECEIVED: {}", file.getOriginalFilename());
		if (file.getOriginalFilename().endsWith(".xls") || file.getOriginalFilename().endsWith(".xlsx")) {
			try {
				ImportSummary summary = stockPriceServices.addStockPricesFromExcelSheet(file);
				return new ResponseEntity<ImportSummary>(summary, HttpStatus.OK);
			} catch (IOException e) {
				e.printStackTrace();
				return new ResponseEntity<String>("Error Reading File", HttpStatus.BAD_REQUEST);
			} catch (Exception e) {
				e.printStackTrace();
				return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
			}
		} else {
			return new ResponseEntity<String>("Wrong File Extension . the File Should be .xls or .xlsx file.",
					HttpStatus.BAD_REQUEST);
		}
	}
}

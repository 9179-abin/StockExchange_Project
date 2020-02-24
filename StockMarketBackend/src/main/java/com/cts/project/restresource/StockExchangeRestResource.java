package com.cts.project.restresource;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.cts.project.models.StockExchange;

@RepositoryRestResource(path = "stocks", collectionResourceRel = "stocks")
public interface StockExchangeRestResource extends PagingAndSortingRepository<StockExchange, Integer> {

}

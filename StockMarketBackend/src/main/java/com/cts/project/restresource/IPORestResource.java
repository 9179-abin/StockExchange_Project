package com.cts.project.restresource;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.cts.project.models.IPO;

@RepositoryRestResource(path = "ipo", collectionResourceRel = "ipo")
public interface IPORestResource extends PagingAndSortingRepository<IPO, Integer> {

}

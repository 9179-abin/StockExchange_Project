package com.cts.project.restresource;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.cts.project.models.Users;

@RepositoryRestResource(path = "users", collectionResourceRel = "users")
public interface UsersRestResource extends PagingAndSortingRepository<Users, Integer>{

}

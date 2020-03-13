package com.cts.training.userservice;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

import com.cts.training.userservice.Company;



@FeignClient("netflix-zuul-api-gateway-server")
//@FeignClient(name="",url="")
public interface UserServiceProxy {
	@GetMapping("/company-service/company")
	public List<Company> findAll();
}

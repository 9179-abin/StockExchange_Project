package com.cts.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.models.Company;

public interface CompanyRepo extends JpaRepository<Company, Integer> {

}

package com.cts.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.models.Users;

public interface UsersRepo extends JpaRepository<Users, Integer> {

}

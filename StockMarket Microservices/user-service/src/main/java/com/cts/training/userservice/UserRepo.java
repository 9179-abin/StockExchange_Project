package com.cts.training.userservice;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepo extends JpaRepository<Users, Integer> {
	public Users findByEmail(String email);
	public Optional<Users> findByUsernameAndPassword(String username, String password);
}

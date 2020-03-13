package com.cts.training.userservice;

import java.util.List;



public interface UserServices  {
	public String insert(UserDTO userDTO);
	public void remove(int id);
	public List<Users> getAll();
	public Users getOne(int id);
	public UserDTO getUserByUsernameAndPassword(String username, String password1);
	public String alter(UserDTO userDTO);
	public String userActivate(String email);
}

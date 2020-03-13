package com.cts.training.userservice;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class UserDTO {
	@Id
	@GeneratedValue
	private int id;
	private String username;
	private String password;
	private String email;
	private long phone;
	private boolean admin;
	private boolean enabled;
	
	public UserDTO() {}
	
	
	
	public UserDTO(int id, String username, String password, String email, long phone,
			boolean enabled,boolean admin) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.email = email;
		this.phone = phone;
		this.enabled = enabled;
		this.admin=admin;
	}



	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword1(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}



	public boolean isAdmin() {
		return admin;
	}



	public void setAdmin(boolean admin) {
		this.admin = admin;
	}
}

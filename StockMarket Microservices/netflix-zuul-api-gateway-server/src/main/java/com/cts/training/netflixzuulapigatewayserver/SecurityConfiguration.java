package com.cts.training.netflixzuulapigatewayserver;




import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configurable
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	@Autowired
	DataSource dataSource;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception{
		http.cors().and().csrf().disable().authorizeRequests()
        .antMatchers("/").permitAll() 
        .antMatchers("/user-service/login").permitAll()
        .antMatchers("/user-service/activate/").permitAll()
        .antMatchers("/user-service/add/").permitAll()
        .antMatchers("/user-service/useractivate/").permitAll()
        .antMatchers("/company-service/company/**").hasAnyRole("USER","ADMIN")
        .antMatchers("/user-service/company-by-users/").hasAnyRole("USER","ADMIN")
        .antMatchers("/initial-public-offering-service/ipo/**").hasAnyRole("USER","ADMIN")
        .antMatchers("/stock-exchange-service/stocks/**").hasAnyRole("USER","ADMIN")
        .antMatchers("/stock-price-service/stockprice/**").hasAnyRole("USER","ADMIN")
        .antMatchers("/stock-price-service/stockPrices/uploadStockSheet/**").hasAnyRole("USER","ADMIN")
        .antMatchers("/company-service/**").hasAnyRole("USER,ADMIN")
        .antMatchers("/initial-public-offering-service/**").hasAnyRole("USER,ADMIN")
        .antMatchers("/stock-exchange-service/**").hasAnyRole("USER,ADMIN")
        .antMatchers("/stock-price-service/**").hasAnyRole("USER,ADMIN")
		.antMatchers("/user-service/**").access("hasRole('USER')")
		.and()
		.httpBasic();
		
	}
	 
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		auth.jdbcAuthentication()
		.usersByUsernameQuery("select username,password,enabled from users where username=?")
		.authoritiesByUsernameQuery("select username,role from users where username=?")
		.dataSource(dataSource)
		.passwordEncoder(new PasswordEncoder() {
			@Override
			public boolean matches(CharSequence rawPassword, String encodedPassword) {
				// TODO Auto-generated method stub
				return rawPassword.equals(encodedPassword);
			}
			@Override
			public String encode(CharSequence rawPassword) {
				// TODO Auto-generated method stub
				return rawPassword.toString();
			}
		});
	}
	
	@Bean
	public CorsFilter corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowCredentials(true);
		configuration.addAllowedOrigin("*");
		configuration.addAllowedHeader("*");
		configuration.addAllowedMethod("POST");
		configuration.addAllowedMethod("OPTIONS");
		configuration.addAllowedMethod("GET");
		configuration.addAllowedMethod("PUT");
		configuration.addAllowedMethod("DELETE");
		source.registerCorsConfiguration("/**",configuration);
		return new CorsFilter(source);
		
	}

}

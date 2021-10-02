package com.spaceacademy.nebula;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
public class NebulaApplication {

	public static void main(String[] args) {
		SpringApplication.run(NebulaApplication.class, args);
	}

}

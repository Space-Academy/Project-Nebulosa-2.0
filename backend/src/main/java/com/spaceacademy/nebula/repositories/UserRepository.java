package com.spaceacademy.nebula.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spaceacademy.nebula.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

}

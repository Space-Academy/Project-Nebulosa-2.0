package com.spaceacademy.nebula.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spaceacademy.nebula.entities.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
}

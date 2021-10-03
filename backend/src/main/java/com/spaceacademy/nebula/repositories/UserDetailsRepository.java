package com.spaceacademy.nebula.repositories;

import com.spaceacademy.nebula.entities.MyUserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface UserDetailsRepository extends JpaRepository<MyUserDetails, Long> {

    Optional<MyUserDetails> findByEmail(String email);

    @Transactional
    @Modifying
    @Query("UPDATE MyUserDetails a " +
            "SET a.enabled = TRUE WHERE a.email = ?1")
    int enableMyUserDetails(String email);
}

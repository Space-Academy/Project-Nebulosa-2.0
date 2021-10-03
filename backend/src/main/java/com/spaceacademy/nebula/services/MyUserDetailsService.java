package com.spaceacademy.nebula.services;

import com.spaceacademy.nebula.entities.EmailConfirmationToken;
import com.spaceacademy.nebula.entities.MyUserDetails;
import com.spaceacademy.nebula.repositories.UserDetailsRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@AllArgsConstructor
public class MyUserDetailsService implements UserDetailsService {

    private final static String USER_NOT_FOUND_MSG =
            "user with email %s not found";

    private final UserDetailsRepository userDetailsRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final EmailConfirmationTokenService tokenService;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        return userDetailsRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, email)));
    }

    public String signUpUser(MyUserDetails myUserDetails) {
        boolean userExists = userDetailsRepository
                .findByEmail(myUserDetails.getEmail())
                .isPresent();
        if (userExists) {
            throw new IllegalStateException("email already taken");
        }

        String encodedPassword = bCryptPasswordEncoder
                .encode(myUserDetails.getPassword());
        myUserDetails.setPassword(encodedPassword);

        userDetailsRepository.save(myUserDetails);

        String token = UUID.randomUUID().toString();
        EmailConfirmationToken confirmationToken = new EmailConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                myUserDetails
        );

        tokenService.saveConfirmationToken(confirmationToken);
        // TODO:Send email

        return token;
    }

    public int enableMyUserDetails(String email) {
        return userDetailsRepository.enableMyUserDetails(email);
    }
}

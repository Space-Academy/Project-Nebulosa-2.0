package com.spaceacademy.nebula.services;

import com.spaceacademy.nebula.entities.EmailConfirmationToken;
import com.spaceacademy.nebula.repositories.EmailConfirmationTokenRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EmailConfirmationTokenService {

    private final EmailConfirmationTokenRepository tokenRepository;

    public void saveConfirmationToken(EmailConfirmationToken token) {
        tokenRepository.save(token);
    }

    public Optional<EmailConfirmationToken> getToken(String token) {
        return tokenRepository.findByToken(token);
    }

    public int setConfirmedAt(String token) {
        return tokenRepository.updateConfirmedAt(
                token, LocalDateTime.now());
    }
}

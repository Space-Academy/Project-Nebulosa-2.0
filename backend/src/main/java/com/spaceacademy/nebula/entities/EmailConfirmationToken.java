package com.spaceacademy.nebula.entities;

import com.spaceacademy.nebula.entities.MyUserDetails;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class EmailConfirmationToken {

    @SequenceGenerator(
            name = "confirmation_token_sequence",
            sequenceName = "confirmation_token_sequence",
            allocationSize = 1
    )
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "confirmation_token_sequence"
    )
    private Long id;
    @Column(nullable = false)
    private String token;
    @Column(nullable = false)
    private LocalDateTime createdAt;
    @Column(nullable = false)
    private LocalDateTime expiresAt;
    private LocalDateTime confirmedAt;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "my_user_details_id"
    )
    private MyUserDetails myUserDetails;

    public EmailConfirmationToken(String token,
                                  LocalDateTime createdAt,
                                  LocalDateTime expiresAt,
                                  MyUserDetails myUserDetails) {
        this.token = token;
        this.createdAt = createdAt;
        this.expiresAt = expiresAt;
        this.myUserDetails = myUserDetails;
    }
}

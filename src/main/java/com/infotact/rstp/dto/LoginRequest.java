package com.infotact.rstp.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;   // fixed typo (was 'passord')
}

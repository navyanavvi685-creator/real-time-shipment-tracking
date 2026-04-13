package com.infotact.rstp.service;

import com.infotact.rstp.dto.AuthResponse;
import com.infotact.rstp.dto.LoginRequest;
import com.infotact.rstp.dto.RegisterRequest;

public interface AuthService {
    AuthResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
}

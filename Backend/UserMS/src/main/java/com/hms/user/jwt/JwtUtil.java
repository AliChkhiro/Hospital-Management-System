package com.hms.user.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
;

@Component
public class JwtUtil {
    private static final Long JWT_TOKEN_VALIDITY=5*60*60L;

    private static final String SECRET = "b4c0f32f47172a19b57f4270e768134638a2fd032ea57fafdf0a86052a6f522989f5959bee207ce973266521fd2fbdedd967cbe3451e0c8cd84acca045903ff8";

    public String generateToken(UserDetails userDetails){
        Map<String, Object> claims = new HashMap<>();
        CustomUserDetails user = (CustomUserDetails) userDetails;
        claims.put("id",user.getId());
        claims.put("email",user.getEmail());
        claims.put("role",user.getRole());
        claims.put("name",user.getName());
        claims.put("profileId", user.getProfileId());
        return doGenerateToken(claims, user.getUsername());
    }
    public String doGenerateToken(Map<String, Object> claims, String subject){
        return Jwts.builder().setClaims(claims).setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+JWT_TOKEN_VALIDITY*1000))
                .signWith(SignatureAlgorithm.HS512,SECRET).compact();
    }
}

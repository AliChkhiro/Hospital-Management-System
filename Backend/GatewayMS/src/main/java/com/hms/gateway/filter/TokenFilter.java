package com.hms.gateway.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import static java.security.KeyRep.Type.SECRET;


@Component
public class TokenFilter extends AbstractGatewayFilterFactory<TokenFilter.Config> {

    private static final String SECRET = "b4c0f32f47172a19b57f4270e768134638a2fd032ea57fafdf0a86052a6f522989f5959bee207ce973266521fd2fbdedd967cbe3451e0c8cd84acca045903ff8";

    public TokenFilter(){
        super(Config.class);
    }
    @Override
    public GatewayFilter apply(Config config){
        return ((exchange, chain) -> {
            String path = exchange.getRequest().getPath().toString();
            if (path.equals("/user/login")||path.equals("/user/register")){
                return chain.filter(exchange.mutate().request(r->r.header("X-Secret-Key","SECRET")).build());
            }
            HttpHeaders header = exchange.getRequest().getHeaders();
            if (!header.containsKey(HttpHeaders.AUTHORIZATION)){
                throw new RuntimeException("Authorization header is missing");
            }
            String authHeader = header.getFirst(HttpHeaders.AUTHORIZATION);
            if (authHeader==null ||!authHeader.startsWith("Bearer")){
                throw new RuntimeException("Authorization header is invalid");
            }
            String token = authHeader.substring(7);
            try {
                Claims claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody();
                exchange=exchange.mutate().request(r->r.header("X-Secret-Key","SECRET")).build();
            }
            catch (Exception e){
                throw new RuntimeException("Token is invalid");
            }
            return chain.filter(exchange);
        });
    }

    public static class Config{}
}

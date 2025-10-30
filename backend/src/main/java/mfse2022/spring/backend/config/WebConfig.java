package mfse2022.spring.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class WebConfig {

    @Bean
    public CorsFilter corsFilter() {
        var config = new CorsConfiguration();

        // Von wem akzeptieren wir Requests?
        config.setAllowedOrigins(List.of("http://localhost:4200", "https://fullstack-todo-demo.vercel.app"));

        // Welche HTTP-Methoden sind erlaubt?
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));

        // Welche Header darf der Client schicken?
        config.setAllowedHeaders(List.of("Content-Type", "Authorization"));

        // Dürfen Cookies/Auth-Header mitgeschickt werden?
        config.setAllowCredentials(true);

        // Wie lange darf der Browser den Preflight cachen (optional)?
        config.setMaxAge(3600L);

        var source = new UrlBasedCorsConfigurationSource();
        // Gilt für alle Endpoints der API
        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }
}

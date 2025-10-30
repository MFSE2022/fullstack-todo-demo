package mfse2022.spring.backend.repository;

import mfse2022.spring.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByname(String name);
    Optional<User> findByAuth0Id(String auth0Id);
}

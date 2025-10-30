package mfse2022.spring.backend.service;

import lombok.RequiredArgsConstructor;
import mfse2022.spring.backend.model.User;
import mfse2022.spring.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User findOrCreateUser(String auth0Id, String email, String name) {
        return userRepository.findByAuth0Id(auth0Id)
                .orElseGet(() -> {
                    User newUser = new User();
                    newUser.setAuth0Id(auth0Id);
                    newUser.setEmail(email);
                    newUser.setName(name);
                    return userRepository.save(newUser);
                });
    }


}

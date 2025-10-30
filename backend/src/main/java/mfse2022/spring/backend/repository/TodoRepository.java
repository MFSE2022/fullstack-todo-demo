package mfse2022.spring.backend.repository;

import mfse2022.spring.backend.model.Todo;
import mfse2022.spring.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findByUser(User user);

    List<Todo> findByUserAndCompleted(User user, boolean completed);
}

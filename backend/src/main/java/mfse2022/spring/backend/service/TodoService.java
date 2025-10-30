package mfse2022.spring.backend.service;

import lombok.RequiredArgsConstructor;
import mfse2022.spring.backend.dto.TodoDTO;
import mfse2022.spring.backend.model.Todo;
import mfse2022.spring.backend.model.User;
import mfse2022.spring.backend.repository.TodoRepository;
import mfse2022.spring.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;
    private final UserRepository userRepository;

    public List<TodoDTO> getTodosByUser(User user) {
        return todoRepository.findByUser(user)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    private TodoDTO toDTO(Todo todo) {
        TodoDTO dto = new TodoDTO();
        dto.setId(todo.getId());
        dto.setTitle(todo.getTitle());
        dto.setDueDate(todo.getDueDate());
        dto.setDescription(todo.getDescription());
        dto.setCompleted(todo.isCompleted());
        dto.setCreatedAt(todo.getCreatedAt());
        return dto;
    }

    public TodoDTO createTodo(TodoDTO dto, User user) {
        Todo todo = new Todo();
        todo.setTitle(dto.getTitle());
        todo.setDueDate(dto.getDueDate());
        todo.setDescription(dto.getDescription());
        todo.setCompleted(false);
        todo.setUser(user);

        Todo saved = todoRepository.save(todo);
        return toDTO(saved);
    }

    public TodoDTO updateTodo(Long id, TodoDTO dto, User user) {
        Todo todo = todoRepository.findById(id).orElseThrow(() -> new RuntimeException("Todo Not Found"));
        if (!todo.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Not authorized");
        }
        todo.setCompleted(dto.isCompleted());
        todo.setDescription(dto.getDescription());
        todo.setDueDate(dto.getDueDate());
        todo.setCompleted(dto.isCompleted());
        todo.setTitle(dto.getTitle());
        Todo updated = todoRepository.save(todo);
        return toDTO(updated);
    }

    public void deleteTodo(Long id, User user) {
        Todo todo = todoRepository.findById(id).orElseThrow(() -> new RuntimeException("Todo Not Found"));
        if (!todo.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Not authorized");
        }
        todoRepository.delete(todo);

    }

    public TodoDTO getTodoById(Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(() -> new RuntimeException("Todo Not Found"));
        return toDTO(todo);
    }
}

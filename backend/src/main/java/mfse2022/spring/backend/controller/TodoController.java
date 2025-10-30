package mfse2022.spring.backend.controller;

import lombok.RequiredArgsConstructor;
import mfse2022.spring.backend.dto.TodoDTO;
import mfse2022.spring.backend.model.Todo;
import mfse2022.spring.backend.model.User;
import mfse2022.spring.backend.service.TodoService;
import mfse2022.spring.backend.service.UserService;
import mfse2022.spring.backend.util.AuthUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/todos")
@RequiredArgsConstructor
public class TodoController {

   private final TodoService todoService;
   private final UserService userService;

   private User getCurrentUser(Authentication authentication) {
       String auth0Id = AuthUtil.getAuth0Id(authentication);
       String email = AuthUtil.getEmail(authentication);
       String name = AuthUtil.getName(authentication);
       return userService.findOrCreateUser(auth0Id, email, name);
   }
    @GetMapping("/{id}")
    public ResponseEntity<TodoDTO> getTodoById(@PathVariable Long id) {
        TodoDTO todoDTO = todoService.getTodoById(id);
        return ResponseEntity.ok(todoDTO);
    }
   @GetMapping
    public List<TodoDTO> getAllTodos(Authentication authentication) {
       User user = getCurrentUser(authentication);
       return todoService.getTodosByUser(user);
   }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TodoDTO createTodo(@RequestBody TodoDTO todoDTO, Authentication authentication) {
        User user = getCurrentUser(authentication);
        return todoService.createTodo(todoDTO, user);
    }
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public TodoDTO updateTodo(@PathVariable Long id,
                              @RequestBody TodoDTO todoDTO,
                              Authentication authentication) {
        User user = getCurrentUser(authentication);
        return todoService.updateTodo(id, todoDTO, user);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteTodo(@PathVariable Long id, Authentication authentication) {
       User user = getCurrentUser(authentication);
       todoService.deleteTodo(id, user);
    }
}

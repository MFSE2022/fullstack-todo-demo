package mfse2022.spring.backend.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TodoDTO {
    private Long id;
    private String title;
    private String dueDate;
    private String description;
    private boolean completed;
    private LocalDateTime createdAt;

}

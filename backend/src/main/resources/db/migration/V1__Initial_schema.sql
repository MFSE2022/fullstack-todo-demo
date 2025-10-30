CREATE TABLE IF NOT EXISTS users (
     id BIGSERIAL PRIMARY KEY,
     auth0id VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE,
    name VARCHAR(255),
    created_at TIMESTAMP
    );

CREATE TABLE IF NOT EXISTS todos (
     id BIGSERIAL PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
    due_date VARCHAR(255),
    description VARCHAR(1000),
    completed BOOLEAN NOT NULL DEFAULT false,
    user_id BIGINT NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
# Fullstack Todo Demo

<a href="https://fullstack-todo-demo.vercel.app">
<img width="1023" height="806" alt="Demo" src="https://github.com/user-attachments/assets/48156545-36c8-40a8-9c2f-0afeeee7d6fd" />
</a>

# Live Demo

**Login options:**  

👉 [https://fullstack-todo-demo.vercel.app](https://fullstack-todo-demo.vercel.app/)

> Google, Facebook, GitHub, or Test User

- Email: `demo@fullstack-todo.dev`

- Password: `DemoPassword123!`


## Features
- OAuth 2.0 (Auth0)
- CRUD operations for to-dos
- Daily overview with completed / pending tasks
- Modern, responsive user interface
- Deployment via Vercel & Render

**Angular + Spring Boot + Auth0 + PostgreSQL** 

## Tech Stack

### Frontend

-   Angular 20
    
-   Auth0 Angular SDK
    
-   Vercel (Deployment)
    

### Backend

-   [Spring Boot 3](https://spring.io/projects/spring-boot)
    
-   Spring Security (JWT Resource Server)
    
-   Auth0 (JWT Validation)
    
-   Render (Deployment)
    
-   Dockerfile (Build Support)

## UI / Design Concept

A minimalistic Figma concept for the frontend layout:

<img width="639" height="963" alt="fullstack-todo-demo-home" src="https://github.com/user-attachments/assets/69de51d9-ff53-4771-9149-49f139f25a8b" />
<img width="639" height="821" alt="fullstack-todo-demo-edit" src="https://github.com/user-attachments/assets/393b2de5-febb-4dd3-b073-62108982041f" />

> Clean layout with a strong focus on usability
> Fully responsive for desktop & mobile

Design created in [**Figma**](https://www.figma.com/)  
→ implemented in Angular

## Authentication Flow

**Flow:**

1.  User clicks  **Login**  → Auth0 Hosted Login Page opens
    
2.  After successful login → redirect back to Angular (`redirect_uri`).
    
3.  Angular receives an Access Token (JWT) with audience `https://fullstack-todo-demo`.
    
4.  Token is sent with API requests (`/api/todos`) in the header:  `Authorization: Bearer ...` 
    
5.  Spring Boot validates the JWT using the Auth0 Issuer URI & Audience.
    

## Project Structure

```
fullstack-todo-demo/
│
├── frontend/          # Angular App (Vercel)    
    ├── src/app/
│   ├── proxy.conf.json
│   ├── scripts/generate-env.mjs
│   └── ...
│
└── backend/           # Spring Boot App (Render) 
    ├── src/main/java/...
    ├── src/main/resources/
    │   ├── application.yml
    │   ├── application-local.yml
    │   └── application-prod.yml
    └── Dockerfile
``` 

----------

## Local Setup

### 1. Backend

`cd backend
./mvnw spring-boot:run -Dspring-boot.run.profiles=local` 

→ runs on  [http://localhost:8080](http://localhost:8080/)

### 2. Frontend

`cd frontend
npm install
npm start` 

→ runs on  [http://localhost:4200](http://localhost:4200/)

----------

## Beispiel-Endpunkte

| Endpoint | Methode  | Auth | Beschreibung |
|--|--|--|--|
| `/api/health` | GET  | Nein | Healthcheck |
| `/api/todos` | GET  | Ja | Retrieve all todos |
| `/api/todos` | POST  | Ja | Create new todo |
| `/api/todos/{id}` | PUT  | Ja | Update todo |
| `/api/todos/{id}` | DELETE  | Ja | Delete todo |
----------

## Ideas for Future Improvements

-   Search functionality

-   Add tags
        
-   Add priority levels
    
-   Role-based access (groups)
    
-   CI/CD via GitHub Actions
    

----------


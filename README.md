# Fullstack Todo Demo

<img width="478" height="268" alt="To-Do-Demo" src="https://github.com/user-attachments/assets/cf7b71ce-d87e-4ac7-a844-6aff382e9698" /><br>


**Angular + Spring Boot + Auth0** 

Ein kleines vollständiges Projekt zur Demonstration zeitgemäßer Fullstack-Entwicklung mit sicherer Authentifizierung, Deployment und CI/CD.

# Live Demo

**Frontend (Angular, Vercel):**  
👉 [https://fullstack-todo-demo.vercel.app](https://fullstack-todo-demo.vercel.app/)

> direkt mit einem Demo-Account einloggen:

 - **Backend (Spring Boot, Render)**  →  [https://fullstack-todo-demo.onrender.com/api/health](https://fullstack-todo-demo.onrender.com/api/health)


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

## UI / Design Konzept

Ein minimalistisches Figma-Konzept für das Frontend-Layout:

<img width="639" height="963" alt="fullstack-todo-demo-home" src="https://github.com/user-attachments/assets/69de51d9-ff53-4771-9149-49f139f25a8b" />
<img width="639" height="821" alt="fullstack-todo-demo-edit" src="https://github.com/user-attachments/assets/393b2de5-febb-4dd3-b073-62108982041f" />


> Klare Struktur mit Fokus auf Usability
> Responsive Design für Desktop & Mobile geplant

Design erstellt in [**Figma**](https://www.figma.com/)  
→ umgesetzt in Angular 

## Authentifizierung

**Flow:**

1.  Nutzer klickt  **Login**  → Auth0 Hosted Login Page öffnet sich.
    
2.  Nach erfolgreichem Login → Redirect zurück zu Angular (`redirect_uri`).
    
3.  Angular erhält Access Token (JWT) mit Audience  `https://fullstack-todo-demo`.
    
4.  Token wird bei API-Requests (`/api/todos`) im Header  `Authorization: Bearer ...`  gesendet.
    
5.  Spring Boot validiert das JWT über Auth0 Issuer URI & Audience.
    

## Projektstruktur

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

## Lokales Setup

### 1. Backend

`cd backend
./mvnw spring-boot:run -Dspring-boot.run.profiles=local` 

→ läuft auf  [http://localhost:8080](http://localhost:8080/)

### 2. Frontend

`cd frontend
npm install
npm start` 

→ läuft auf  [http://localhost:4200](http://localhost:4200/)

----------

## Beispiel-Endpunkte

| Endpoint | Methode  | Auth | Beschreibung |
|--|--|--|--|
| `/api/health` | GET  | Nein | Healthcheck |
| `/api/todos` | GET  | Ja | Liste der Todos |
| `/api/todos` | POST  | Ja | Neues Todo anlegen |

----------

## Ideen für Erweiterungen
-   Suchfunktion

-   Tags hinzufügen
    
-   Refresh Token Flow
    
-   User-spezifische Todos
    
-   Role-based Access (Admin/User)
    
-   CI/CD mit GitHub Actions
    

----------


# Fullstack Todo Demo

<a href="https://fullstack-todo-demo.vercel.app">
<img width="1023" height="806" alt="Demo" src="https://github.com/user-attachments/assets/48156545-36c8-40a8-9c2f-0afeeee7d6fd" />
</a>

# Link zum Ausprobieren

**Anmelden:**  

👉 [https://fullstack-todo-demo.vercel.app](https://fullstack-todo-demo.vercel.app/)

> Anmeldung mit Google, Facebook - Testnutzer auf Anfrage


## Features
- OAuth 2.0 (Auth0)
- CRUD Operationen für To-Do's
- Tägliche Übersicht mit erledigten / offenen Aufgaben
- Moderne, responsive Benutzeroberfläche
- Deployment über Vercel & Render

**Angular + Spring Boot + Auth0** 

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
> Responsive Design für Desktop & Mobile 

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
| `/api/todos/{id}` | PUT  | Ja | Todo bearbeiten |
| `/api/todos/{id}` | DELETE  | Ja | Todo löschen |
----------

## Ideen für Erweiterungen

-   Suchfunktion

-   Tags hinzufügen
        
-   Prioritäten vergeben
    
-   Role-based Access (Gruppen)
    
-   CI/CD mit GitHub Actions
    

----------


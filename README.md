# TaskManager - Fullstack Todo Demo

![Angular](https://img.shields.io/badge/Angular-20-DD0031?logo=angular)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5-6DB33F?logo=springboot)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)
![Auth0](https://img.shields.io/badge/Auth0-OAuth2-EB5424?logo=auth0&logoColor=white)

Eine moderne Fullstack-Anwendung zur Aufgabenverwaltung mit Angular Frontend, Spring Boot Backend und OAuth2-Authentifizierung.

## Live Demo

**[https://fullstack-todo-demo.vercel.app](https://fullstack-todo-demo.vercel.app/)**

Demo-Zugang:
- Email: `demo@test.at`
- Password: `Passwort123!`

---

## Tech Stack

| Layer | Technologie |
|-------|------------|
| **Frontend** | Angular 20, Tailwind CSS, Auth0 SDK |
| **Backend** | Spring Boot 3, Spring Security, JPA/Hibernate |
| **Datenbank** | PostgreSQL (Prod), H2 (Dev) |
| **Auth** | OAuth 2.0 / JWT via Auth0 |
| **Deployment** | Vercel (Frontend), Render (Backend), Docker |

---

## Features

- OAuth 2.0 Authentifizierung (Google, GitHub, Email)
- Dashboard mit Statistik-Übersicht
- CRUD-Operationen für Aufgaben
- Kategorisierung: Heute fällig / Offen / Erledigt
- Responsive Design
- JWT-basierte API-Absicherung

---

## Architektur

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│     Angular     │ ───► │   Spring Boot   │ ───► │   PostgreSQL    │
│   (Vercel)      │ JWT  │   (Render)      │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘
         │                        │
         └────────┬───────────────┘
                  ▼
           ┌─────────────┐
           │    Auth0    │
           │   (OAuth)   │
           └─────────────┘
```

---

## API Endpoints

| Endpoint | Method | Auth | Beschreibung |
|----------|--------|------|--------------|
| `/api/health` | GET | - | Health Check |
| `/api/todos` | GET | JWT | Alle Todos abrufen |
| `/api/todos` | POST | JWT | Neues Todo erstellen |
| `/api/todos/{id}` | PUT | JWT | Todo aktualisieren |
| `/api/todos/{id}` | DELETE | JWT | Todo löschen |

---

## Lokale Entwicklung

### Voraussetzungen
- Java 17+
- Node.js 18+
- Maven

### Backend starten
```bash
cd backend
./mvnw spring-boot:run -Dspring-boot.run.profiles=local
```
→ http://localhost:8080/api

### Frontend starten
```bash
cd frontend
npm install
npm start
```
→ http://localhost:4200

---

## Projektstruktur

```
fullstack-todo-demo/
├── frontend/                 # Angular SPA
│   ├── src/app/
│   │   ├── components/       # Wiederverwendbare UI-Komponenten
│   │   ├── pages/            # Seiten (Home, Add, Edit)
│   │   └── services/         # API Service
│   └── proxy.conf.json       # Dev-Proxy Konfiguration
│
└── backend/                  # Spring Boot REST API
    ├── src/main/java/
    │   ├── controller/       # REST Controller
    │   ├── service/          # Business Logic
    │   ├── model/            # JPA Entities
    │   └── config/           # Security Config
    ├── Dockerfile
    └── compose.yaml
```

---

## Deployment

**Frontend:** Automatisches Deployment via Vercel bei Push auf `main`

**Backend:** Docker-Image wird auf Render deployed

```dockerfile
# Multi-stage build für optimierte Image-Größe
FROM maven:3.9-eclipse-temurin-21 AS build
# ... build stage

FROM eclipse-temurin:21-jre-alpine AS runtime
# ... runtime stage mit non-root user
```

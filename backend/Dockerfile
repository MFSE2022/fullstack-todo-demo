# syntax=docker/dockerfile:1

# --- Build stage -------------------------------------------------------------
ARG JDK_VERSION=21
FROM maven:3.9-eclipse-temurin-${JDK_VERSION} AS build
WORKDIR /workspace

# Nur pom.xml zuerst kopieren, um Dependencies zu cachen
COPY pom.xml .
RUN mvn -q -DskipTests dependency:go-offline

# Dann den Source-Code
COPY src ./src

# Build (fat jar wird von spring-boot:repackage erzeugt)
RUN mvn -q -DskipTests package \
 && mv target/*.jar app.jar

# --- Runtime stage -----------------------------------------------------------
FROM eclipse-temurin:${JDK_VERSION}-jre-alpine
ENV APP_HOME=/app
WORKDIR $APP_HOME

# Non-root User
RUN addgroup -S spring && adduser -S spring -G spring

# Jar rüberkopieren
COPY --from=build /workspace/app.jar ./app.jar

EXPOSE 8080

# Sinnvolle JVM-Defaults für Container
ENV JAVA_OPTS="-XX:MaxRAMPercentage=75.0 -XX:InitialRAMPercentage=25.0"

# Spring Profile für Prod
ENV SPRING_PROFILES_ACTIVE=prod

USER spring

ENTRYPOINT ["sh","-c","java $JAVA_OPTS -jar app.jar --server.port=${PORT:-8080}"]

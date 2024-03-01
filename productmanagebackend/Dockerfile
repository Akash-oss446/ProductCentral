# Use OpenJDK as the base image
FROM openjdk:8
EXPOSE 8080
ADD target/Spring-boot-Product.jar Spring-boot-Product.jar
WORKDIR /src
ENTRYPOINT ["java","-jar","/Spring-boot-Product.jar"]


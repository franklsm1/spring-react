### Spring-react Example App

__Install [Yarn](https://yarnpkg.com/en/)(a better npm):__

1. Run `npm install -g yarn` to install Yarn

__Setup project:__

1. Clone the repo using `git clone`
2. `cd` into the new project

__Run front-end for development__

1. `cd frontend`
2. Run `yarn run start` to startup the front-end with a mock back-end using json-server
3. Navigate to localhost:3000

__Build and run full stack__

1. Run `./gradlew` to build project
2. `cd backend/build/libs/`
3. Run `java -jar spring-react-0.0.1.jar`
4. Navigate to localhost:8080
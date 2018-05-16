### Spring-react Example App
##### A single project that combines a react/redux front end with a spring boot backend running on one server. 

When building this application the front end component will be minified to static files and bundled up into a jar. The backend will then use that frontend jar at runtime and serve it when the application is opened in a browser.

__Setup project:__
1. Run `npm install -g yarn` to install [Yarn](https://yarnpkg.com/en/)(a better npm) globally
1. Clone the repo using `git clone`
1. `cd` into the project

__Complete install, build, and packaging of both the front and back-end components__
1. Run `gradle` to build everything and run all tests

__Build, test, minify, and create a jar of the front-end code__
1. Run `gradle buildFrontend`

__Build, test, and create a jar of the backend-end code (front end needs to be build first)__
1. Run `gradle build`

__Build, test, and start front-end with a mock back-end using json-server__
1. Run `gradle startFrontend` 
2. Navigate to: localhost:3000

__Start full stack application after a build__
1. Run `gradle bootrun`
2. Navigate to: localhost:8080

__Helpful Links__
- [Link](https://reacttraining.com/react-router/web/example/basic) to react-router example used for frontend piece

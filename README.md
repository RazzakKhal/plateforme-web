# Web

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

To start the recette configuration, run:

```bash
ng serve --configuration rct
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

Environment-specific builds:

```bash
ng build --configuration development
ng build --configuration rct
ng build --configuration production
```

Environment URL mapping:

- `development`: API `http://localhost:8072`, Monetico `https://p.monetico-services.com/test/paiement.cgi`
- `rct`: API `https://rct.ask-plateforme.fr/api`, Monetico `https://p.monetico-services.com/test/paiement.cgi`
- `production`: API `https://ask-plateforme.fr/api`, Monetico `https://p.monetico-services.com/paiement.cgi`

Docker image builds:

```bash
docker build -f Dockerfile -t frontend:rct .
docker build -f Dockerfile.prod -t frontend:1.0.0 .
```

- `Dockerfile`: builds the `rct` Angular configuration
- `Dockerfile.prod`: builds the `production` Angular configuration

GitHub Actions behavior:

- pushes on `main` run tests and publish the `rct` image as `latest`
- manual runs can set `production=true` to build from `Dockerfile.prod`
- manual runs without `production` enabled keep the default `rct` build
- the production image is tagged with the version declared in `package.json`

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

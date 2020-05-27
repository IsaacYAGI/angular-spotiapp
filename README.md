# Spotiapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Configuraciones adicionales

1. Se debe crear un token para cada peticion. Para ello es necesario crearse una cuenta en [Spotify Developer](https://developer.spotify.com/)
1. Se debe crear una app para poder generar un `client_id` y un `client_secret_id` desde [aqui](https://developer.spotify.com/dashboard/applications) (solicitara login)
1. Por ultimo, mediante postman se debe generar un token de acceso. El mismo se genera haciendo una peticion `POST` a `https://accounts.spotify.com/api/token` y se deben enviar los siguientes parametros:

```
- grant_type: client_credentials
- client_id: client_id obtenido al generar la APP en Spotify
- client_secret: client_secret obtenido al generar la APP en Spotify

```

Por ultimo, ese token generado se debe colocar en el archivo `src\app\services\spotify.service.ts` en la variable `token`.

Con eso ya la aplicacion estaria correctamente configurada y las llamadas al servicio no darian error.

Si llega a expirar el token es necesario volver a generar uno y reemplazarlo en el codigo.
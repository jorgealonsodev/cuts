
## Crea hermosa documentación para API REST en Markdown

- Adoptado de: https://stubby4j.com/docs/admin_portal.html
- Inspirado en el estilo y estructura de la documentación de la API Swagger: https://petstore.swagger.io/#/pet

------------------------------------------------------------------------------------------

#### Crear nuevos/sobrescribir stubs y configuraciones de proxy existentes

<details>
 <summary><code>POST</code> <code><b>/</b></code> <code>(sobrescribe todos los stubs y/o configuraciones de proxy en memoria)</code></summary>

##### Parámetros

> | nombre    |  tipo     | tipo de datos           | descripción                                               |
> |-----------|-----------|-------------------------|-----------------------------------------------------------|
> | Ninguno   |  requerido | objeto (JSON o YAML)    | N/A                                                       |

##### Respuestas

> | código http  | tipo de contenido                | respuesta                                                      |
> |--------------|----------------------------------|---------------------------------------------------------------|
> | `201`        | `text/plain;charset=UTF-8`       | `Configuración creada exitosamente`                           |
> | `400`        | `application/json`               | `{"code":"400","message":"Solicitud incorrecta"}`             |
> | `405`        | `text/html;charset=utf-8`        | Ninguno                                                       |

##### Ejemplo cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:8889/
> ```

</details>

------------------------------------------------------------------------------------------

#### Listar stubs y configuraciones de proxy existentes como cadena YAML

<details>
 <summary><code>GET</code> <code><b>/</b></code> <code>(obtiene todos los stubs y configuraciones de proxy en memoria)</code></summary>

##### Parámetros

> Ninguno

##### Respuestas

> | código http  | tipo de contenido                | respuesta                                                      |
> |--------------|----------------------------------|---------------------------------------------------------------|
> | `200`        | `text/plain;charset=UTF-8`       | Cadena YAML                                                   |

##### Ejemplo cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/{stub_numeric_id}</b></code> <code>(obtiene el stub por su id numérico de recurso-{stub_numeric_id} en la configuración YAML)</code></summary>

##### Parámetros

> | nombre              |  tipo     | tipo de datos      | descripción                              |
> |---------------------|-----------|--------------------|------------------------------------------|
> | `stub_numeric_id`   |  requerido | int ($int64)       | El id numérico específico del stub       |

##### Respuestas

> | código http  | tipo de contenido                | respuesta                                                      |
> |--------------|----------------------------------|---------------------------------------------------------------|
> | `200`        | `text/plain;charset=UTF-8`       | Cadena YAML                                                   |
> | `400`        | `application/json`               | `{"code":"400","message":"Solicitud incorrecta"}`             |

##### Ejemplo cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/0
> ```

</details>

<details>
  <summary><code>GET</code> <code><b>/{uuid}</b></code> <code>(obtiene el stub por su propiedad uuid definida)</code></summary>

##### Parámetros

> | nombre  |  tipo      | tipo de datos  | descripción                                  |
> |-------- |------------|----------------|----------------------------------------------|
> | `uuid`  |  requerido | string         | El identificador único específico del stub   |

##### Respuestas

> | código http  | tipo de contenido                | respuesta                                                      |
> |--------------|----------------------------------|---------------------------------------------------------------|
> | `200`        | `text/plain;charset=UTF-8`       | Cadena YAML                                                   |
> | `400`        | `application/json`               | `{"code":"400","message":"Solicitud incorrecta"}`             |

##### Ejemplo cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/some-unique-uuid-string
> ```

</details>


<details>
  <summary><code>GET</code> <code><b>/proxy-config/default</b></code> <code>(obtiene la configuración de proxy <b>default</b>)</code></summary>

##### Parámetros

> Ninguno

##### Respuestas

> | código http  | tipo de contenido                | respuesta                                                      |
> |--------------|----------------------------------|---------------------------------------------------------------|
> | `200`        | `text/plain;charset=UTF-8`       | Cadena YAML                                                   |
> | `400`        | `application/json`               | `{"code":"400","message":"Solicitud incorrecta"}`             |

##### Ejemplo cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/proxy-config/default
> ```

</details>


<details>
  <summary><code>GET</code> <code><b>/proxy-config/{uuid}</b></code> <code>(obtiene la configuración de proxy por su propiedad uuid)</code></summary>

##### Parámetros

> | nombre  |  tipo      | tipo de datos  | descripción                                          |
> |-------- |------------|----------------|------------------------------------------------------|
> | `uuid`  |  requerido | string         | El identificador único específico de la configuración de proxy |

##### Respuestas

> | código http  | tipo de contenido                | respuesta                                                      |
> |--------------|----------------------------------|---------------------------------------------------------------|
> | `200`        | `text/plain;charset=UTF-8`       | Cadena YAML                                                   |
> | `400`        | `application/json`               | `{"code":"400","message":"Solicitud incorrecta"}`             |

##### Ejemplo cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/proxy-config/some-unique-uuid-string
> ```

</details>

------------------------------------------------------------------------------------------

#### Actualizar stubs y configuraciones de proxy existentes

<details>
  <summary><code>PUT</code> <code><b>/{stub_numeric_id}</b></code> <code>(actualiza el stub por su id numérico de recurso-{stub_numeric_id} en la configuración)</code></summary>

##### Parámetros

> | nombre              |  tipo     | tipo de datos      | descripción                              |
> |---------------------|-----------|--------------------|------------------------------------------|
> | `stub_numeric_id`   |  requerido | int ($int64)       | El id numérico específico del stub       |

##### Respuestas

> | código http  | tipo de contenido                | respuesta                                                      |
> |--------------|----------------------------------|---------------------------------------------------------------|
> | `201`        | `text/plain;charset=UTF-8`       | `Solicitud de índice de stub#<stub_numeric_id> actualizada exitosamente"`  |
> | `400`        | `application/json`               | `{"code":"400","message":"Solicitud incorrecta"}`             |
> | `405`        | `text/html;charset=utf-8`        | Ninguno                                                       |

##### Ejemplo cURL

> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @put.json http://localhost:8889/0
> ```

</details>

<details>
  <summary><code>PUT</code> <code><b>/{uuid}</b></code> <code>(actualiza el stub por su propiedad uuid definida)</code></summary>

##### Parámetros

> | nombre  |  tipo      | tipo de datos  | descripción                                  |
> |-------- |------------|----------------|----------------------------------------------|
> | `uuid`  |  requerido | string         | El identificador único específico del stub   |

##### Respuestas

> | código http  | tipo de contenido                | respuesta                                                      |
> |--------------|----------------------------------|---------------------------------------------------------------|
> | `201`        | `text/plain;charset=UTF-8`       | `Solicitud de uuid de stub#<uuid> actualizada exitosamente`   |
> | `400`        | `application/json`               | `{"code":"400","message":"Solicitud incorrecta"}`             |
> | `405`        | `text/html;charset=utf-8`        | Ninguno                                                       |

##### Ejemplo cURL

> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @put.json http://localhost:8889/some-unique-uuid-string
> ```

</details>

<details>
  <summary><code>PUT</code> <code><b>/proxy-config/default</b></code> <code>(actualiza la configuración de proxy <b>default</b>)</code></summary>

##### Parámetros

> Ninguno

##### Respuestas

> | código http  | tipo de contenido                | respuesta                                                      |
> |--------------|----------------------------------|---------------------------------------------------------------|
> | `201`        | `text/plain;charset=UTF-8`       | `Configuración de proxy uuid#default actualizada exitosamente`|
> | `400`        | `application/json`               | `{"code":"400","message":"Solicitud incorrecta"}`             |
> | `405`        | `text/html;charset=utf-8`        | Ninguno                                                       |

##### Ejemplo cURL

> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @put.json http://localhost:8889/proxy-config/default
> ```

</details>

<details>
  <summary><code>PUT</code> <code><b>/proxy-config/{uuid}</b></code> <code>(actualiza la configuración de proxy por su propiedad uuid)</code></summary>

##### Parámetros

> | nombre  |  tipo      | tipo de datos  | descripción                                                  |
> |-------- |------------|----------------|--------------------------------------------------------------|
> | `uuid`  |  requerido | string         | El identificador único específico de la configuración de proxy |

##### Respuestas

> | código http  | tipo de contenido                | respuesta                                                      |
> |--------------|----------------------------------|---------------------------------------------------------------|
> | `201`        | `text/plain;charset=UTF-8`       | `Configuración de proxy uuid#<uuid> actualizada exitosamente` |
> | `400`        | `application/json`               | `{"code":"400","message":"Solicitud incorrecta"}`             |
> | `405`        | `text/html;charset=utf-8`        | Ninguno                                                       |

##### Ejemplo cURL

> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @put.json http://localhost:8889/proxy-config/some-unique-uuid-string
> ```

</details>

------------------------------------------------------------------------------------------

#### Eliminar stubs y configuraciones de proxy existentes

<details>
  <summary><code>DELETE</code> <code><b>/</b></code> <code>(elimina todos los stubs y configuraciones de proxy en memoria)</code></summary>

##### Parámetros

> Ninguno

##### Respuestas

> | código http  | tipo de contenido                | respuesta                                                      |
> |--------------|----------------------------------|---------------------------------------------------------------|
> | `200`        | `text/plain;charset=UTF-8`       | `Toda la configuración YAML en memoria fue eliminada exitosamente` |

##### Ejemplo cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:8889/
> ```

</details>

<details>
  <summary><code>DELETE</code> <code><b>/{stub_numeric_id}</b></code> <code>(elimina el stub por su id numérico de recurso-{stub_numeric_id} en la configuración)</code></summary>

##### Parámetros

> | nombre              |  tipo     | tipo de datos      | descripción                              |
> |---------------------|-----------|--------------------|------------------------------------------|
> | `stub_numeric_id`   |  requerido | int ($int64)       | El id numérico específico del stub       |

##### Respuestas

> | código http  | tipo de contenido                | respuesta                                                      |
> |--------------|----------------------------------|---------------------------------------------------------------|
> | `200`        | `text/plain;charset=UTF-8`       | `Solicitud de índice de stub#<stub_numeric_id> eliminada exitosamente`   |
> | `400`        | `application/json`               | `{"code":"400","message":"Solicitud incorrecta"}`             |

##### Ejemplo cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:8889/0
> ```

</details>


<details>
  <summary><code>DELETE</code> <code><b>/{uuid}</b></code> <code>(elimina el stub por su propiedad uuid definida)</code></summary>

##### Parámetros

> | nombre  |  tipo      | tipo de datos  | descripción                                  |
> |-------- |------------|----------------|----------------------------------------------|
> | `uuid`  |  requerido | string         | El identificador único específico del stub   |

##### Respuestas

> | código http  | tipo de contenido                | respuesta                                                      |
> |--------------|----------------------------------|---------------------------------------------------------------|
> | `200`        | `text/plain;charset=UTF-8`       | `Solicitud de uuid de stub#<uuid> eliminada exitosamente`     |
> | `400`        | `application/json`               | `{"code":"400","message":"Solicitud incorrecta"}`             |

##### Ejemplo cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:8889/some-unique-uuid-string
> ```

</details>


<details>
  <summary><code>DELETE</code> <code><b>/proxy-config/{uuid}</b></code> <code>(elimina la configuración de proxy por su propiedad uuid)</code></summary>

##### Parámetros

> | nombre  |  tipo      | tipo de datos  | descripción                                                  |
> |-------- |------------|----------------|--------------------------------------------------------------|
> | `uuid`  |  requerido | string         | El identificador único específico de la configuración de proxy |

##### Respuestas

> | código http  | tipo de contenido                | respuesta                                                      |
> |--------------|----------------------------------|---------------------------------------------------------------|
> | `200`        | `text/plain;charset=UTF-8`       | `Configuración de proxy uuid#<uuid> eliminada exitosamente`   |
> | `400`        | `application/json`               | `{"code":"400","message":"Solicitud incorrecta"}`             |

##### Ejemplo cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:8889/proxy-config/some-unique-uuid-string
> ```

</details>

------------------------------------------------------------------------------------------


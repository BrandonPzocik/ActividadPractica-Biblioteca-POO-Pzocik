1. ¿Qué diferencia existe entre extends y implements en TypeScript?  
- extends es para que una clase herede de otra  
- implements es para que una clase cumpla con una interfaz

2. ¿Qué ventajas ofrece el tipado fuerte en funciones y clases?  
- Evita errores de tipos  
- Hace el código más claro  
- Facilita mantener y depurar

3. ¿Qué significa que una clase sea abstracta?  
- No se puede instanciar  
- Sirve como plantilla para clases hijas

4. ¿Por qué conviene usar getters y setters para el encapsulamiento?  
- Controlan cómo se accede o cambia una propiedad  
- Permiten validar antes de asignar  
- Ocultan detalles internos

5. Ejemplificar cómo tipar:  

a. Función con parámetros obligatorios y opcionales  
```ts
function sumar(a: number, b?: number): number {
  if (b !== undefined) {
    return a + b
  }
  return a
}
```
b. Función que devuelve una Promise
```ts
function obtenerTexto(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hola mundo"), 1000)
  })
}
```

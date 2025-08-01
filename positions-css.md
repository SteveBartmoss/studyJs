

### Postion Relative

Se determina su posicion tomando en cuenta su posicion original, Esta propiedad de css no colaca el elemento fuera del dominio del documento, se mueve usando las posiciones top, left, right, bottom. 
Lo usaria cuando quiera posicionar un elemento dentro de un div o alguna etiqueta 

```html
<section>
    <div>
        <img class="imagen" />
    </div>
</section>
```

```css
.imagen{
    position: relative;
    top: 10px;
    left: 20px;
}
```

Con lo anterio muevo la imagen tomando su posicion orginal y la muevo dentro de esa misma posicion pero un poco mas abajo, es como moverla en un eje completo de coordenas 'X' o 'Y', el elemento nunca sale de los ejes (su posicion original) solo se mueve en esos mismos ejes

### Position absolute 

Toma uno de los contenedores mas cercanos, por ejemplo el div o etiqueta que tiene como padre y en caso de no estar dentro de ninugna etiquta toma el <html>, esta propiedad si coloca el elemento fuera del dominio del documento pero lo coloca sobre su elemento padre, por ejemplo en un menu desplegable al igual que el anterior se mueve en las posiciones top, left, rigth, bottom. 

Lo usuaria para colocar un elemento junto o sobre la posicion de su elemento padre o su contenedor, por ejemplo para posicionar un menu desplegable debajo de su contenedor con el titulo.

```html
<section>
    <div class='contenedor'>
        <h1>Opciones<h1>
        <div class='elemento'>
            <p>Borrar</p>
            <p>Editar</p>
            <p>Crear</p>
        </div>
    </div>
</section>
```

```css
.contenedor{
    position: relative;
}

.elemento{
    position: absolute;
    top: -10px;
    left: 20px;
}
```

### Position fixed

Toma la posicion con la ventana del navegador (lo que estamos viendo en pantalla) de esta forma se sale del flujo del documento y ademas no toma en cuenta el scroll, se mantiene en la posicion asiganada a pesar de que el usuario haga scroll

Lo usuaria para mantener un elemento en la pagina de manera flotante y sin importar el scroll, por ejemplo un boton para regresar al inicio de una pagina o para mostrar ayuda que siempre estara en la misma posicion

```html
<section>
    <div id='div-inicio'>
        <h1>Inicio del post</h1>
    </div>
    <div>
        <a class='elemento' href='#div-inicio'>ir al inicio</a>
    </div>
</section>
```

```css
.elemento {
  position: fixed;
  bottom: 0;
  right: 0;
}
```
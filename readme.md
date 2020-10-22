![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# STooltip
An easy-to-use tooltip web component for any framework or pure JS.

# How to install
## Pure JS
### Import in html
```html
<script type="module" src="https://seanwong24.github.io/s-tooltip/build/s-tooltip.esm.js"></script>
<script nomodule src="https://seanwong24.github.io/s-tooltip/build/s-tooltip.js"></script>
```
## React
### Use loader
First install using NPM.
```sh
npm i https://github.com/SeanWong24/s-tooltip.git#v0.6.0
```
Then in index.js
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// add this
import { applyPolyfills, defineCustomElements } from "s-tooltip/loader";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// and add this
applyPolyfills().then(() => {
  defineCustomElements();
});
```

# How to use
## Examples
After importing, ```s-tooltip``` tag can be placed in any container in html.
```html
<h3 style="display: inline-block;">
    Hover to see the tooltip
    <s-tooltip orientation="right">This is a tooltip</s-tooltip>
</h3>

```
Also, the tooltip content can be html elements.
```html
<h3 style="display: inline-block;">
    Hover to see the tooltip
    <s-tooltip orientation="right">
        <div>
          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
        </div>
    </s-tooltip>
</h3>
```

# Properties & attibutes
[See here](./src/components/s-tooltip/readme.md)

[Demo](https://seanwong24.github.io/s-tooltip/)
![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# STooltip
An easy-to-use tooltip web component for any framework (Angular, React, Vue, etc.) or pure JS.  

[Demo](https://seanwong24.github.io/s-tooltip/)

# How to install
## Use NPM
```sh
npm i @seanwong24/s-tooltip
```
## Use CDN
```html
<script type="module" src="https://unpkg.com/@seanwong24/s-tooltip/dist/s-tooltip/s-tooltip.esm.js"></script>
<script nomodule src="https://unpkg.com/@seanwong24/s-tooltip/dist/s-tooltip/s-tooltip.js"></script>
```

# How to use
First you need to [import the component to your project](#how-to-import), then the easiest way to use the component is to put ```s-tooltip``` tag inside any element that you want to attach in html.
```html
<h3 style="display: inline-block;">
    Hover to see the tooltip
    <s-tooltip>This is a tooltip</s-tooltip>
</h3>

```
Also, the tooltip content can be html elements.
```html
<h3 style="display: inline-block;">
    Hover to see the tooltip
    <s-tooltip orientation="top">
      <div>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
      </div>
    </s-tooltip>
</h3>
```
In some special cases (such as the parent element cannot contain inner html content or one of ancestor elements of ```s-tooltip``` having ```z-index``` set), you might want put ```s-tooltip``` somewhere else instead of putting it inside the attached element. Then you can set ```attach-to``` attribute to manually attach the tooltip to another element.
```html
<h3 id="example-item" style="display: inline-block;">
  Hover on me
</h3>
<s-tooltip orientation="right" attach-to="#example-item">This is a tooltip attach to sibling element</s-tooltip>
```
Optionally, you can add ```data-s-tooltip-text``` attribute to the attached elements to replace the content inside ```s-tooltip```.
```html
<button class="example-item" style="display: inline-block;">
  Hover on me
</button>
<button class="example-item" style="display: inline-block;"
  data-s-tooltip-text="The tooltip text of this element is replaced.">
  Hover on me
</button>
<s-tooltip orientation="right" attach-to=".example-item">This is a tooltip attach to sibling element</s-tooltip>
``` 
## Properties & attributes
To see the list of available properties and attributes, [check here](./src/components/s-tooltip/readme.md).
## Want to try it yourself?
[![Edit s-tooltip-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/s-tooltip-example-66zqc?fontsize=14&hidenavigation=1&theme=dark)

# How to import
Basically, you want to call ```defineCustomElements()``` from the loader. If you want, you can optionally call ```applyPolyfills()``` first as well. For different project types, please check below sections for more details.
## Pure JS
### Script tag
First, [install using NPM](#use-npm).  
Then in the html
```html
<!-- for ES6 -->
<script type="module" src="node_modules/@seanwong24/s-tooltip/dist/s-tooltip/s-tooltip.esm.js"></script>
<!-- for ES5 -->
<script nomodule src="node_modules/@seanwong24/s-tooltip/dist/s-tooltip/s-tooltip.js"></script>
```
### Import statement
First, [install using NPM](#use-npm).  
Then in JS file
```js
import { applyPolyfills, defineCustomElements } from "node_modules/@seanwong24/s-tooltip/loader/index.js";
applyPolyfills().then(() => {
  defineCustomElements();
});
```
And in html
```html
<script type="module" src="path/to/the/js/file"></script>
```
Note that ```type="module"``` only works in modern browsers.
## Angular
### Use loader
First [install using NPM](#use-npm).  
Then include ```CUSTOM_ELEMENTS_SCHEMA``` in any module that uses ```s-tooltip```. For example, in ```AppModule```
```ts
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  // add this
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```
After that, in ```main.ts```
```ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// add this
import { applyPolyfills, defineCustomElements } from '@seanwong24/s-tooltip/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// and add this
applyPolyfills().then(() => {
  defineCustomElements()
});
```
## React
### Use loader
First [install using NPM](#use-npm).  
Then in ```index.js```
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// add this
import { applyPolyfills, defineCustomElements } from "@seanwong24/s-tooltip/loader";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// and add this
applyPolyfills().then(() => {
  defineCustomElements();
});
```
## Vue
### Use loader
First [install using NPM](#use-npm).
Then in ```main.js```
```js
import Vue from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from '@seanwong24/s-tooltip/loader';

Vue.config.productionTip = false;

// add this
Vue.config.ignoredElements = ['s-tooltip'];

// and add this
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App)
}).$mount('#app');
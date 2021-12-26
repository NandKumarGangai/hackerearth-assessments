# Tailwind Installation Guide

- Create your project

```sh
npm init vite my-project
cd my-project
```

- Install Tailwind CSS

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Configure your template paths

```js
//[tailwind.config.js]
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Add the Tailwind directives to your CSS
Create a ./src/index.css file and add the @tailwind directives for each of Tailwind’s layers.

```CSS
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Import the CSS file
Import the newly-created `./src/index.css` file in your `./src/main.js` file.  

- Start your build process.  
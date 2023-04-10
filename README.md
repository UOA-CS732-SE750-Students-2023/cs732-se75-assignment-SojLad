# COMPSCI 732 / SOFTENG 750 Tech Demo - Seo Joon Yoon

## Weather App using Typescript, Tailwind, React and Electron

<br>
This weather app gets the current weather of any given city in the world. The data that is displayed is the current temperature (high and low), and the forecast for the next 36 hours.

<br>

To get our weather app to run, we need to run a few commands to add dependencies and scripts.

To do this, run the following command in the terminal:

```sh
npm install
```

We need to run a few more commands to get the app to run; run the follow commands in the terminal:

```sh
npm install react-router-dom
```

Now when you run the app using,
```sh
npm run dev
```
you will probably notice that we get an error saying "Failed to resolve import "/dist/output.css" from "src/main.tsx". Does this file exist?"

This is because we do not have our Tailwindcss installed yet! The app cannot import what renders the app without the dependencies.

To do this, install tailwindcss with Vite:

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
This installs tailwindcss and its peer dependencies, then generates the config files we need to run the app with tailwindcss. You might notice that we get a notification saying that tailwind.config.js and postcss.config.js already exists. This is because the repository already has it, and this command is only necessary on a new project (For your future reference).

But we still need to start the Tailwind CLI build process. To do this run this code below:
```sh
npx tailwindcss -o ./dist/output.css --watch
```

Now you can deploy the app using:
```sh
npm run dev
```

<b>Please install Tailwindcss Intellisense Extension on VSCode!</b>

Enter any city you wish and click on one of the available options. Click Search and you can view the weather data for that city!



`Disclaimer/Notes`

On Windows devices, there are backwards and forwards options as well as the toolbar in the App, but in OS there are no options.



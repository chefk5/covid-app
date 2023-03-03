# Covid App

This app utilizes data from [OWID](https://github.com/owid/covid-19-data/tree/master/public/data) and visualizes some metrics.
The project is made with React, Vite, TypeScript, Chakra UI, and Reaviz.

You can view the app [here](https://covid-app-puce.vercel.app).


## Running the project
This project uses Vite and for running it you can use:

```bash
npm run dev
```

## What is this project about?

This app consists of 2 tabs and a country picker. 

#### Reported cases

Here we can view the reported cases in the selected country and switch between 2 metrics (death count or confirmed cases) and 2 counting modes (new daily cases or total).

#### Ranked charts

Here we can view the total number of deaths or the total number of cases in the top 10 countries in the world. You can also select 1,2,3 or 5 countries instead. If you select a country, it will be compared to the top countries. 

## Known issues

- Ranked charts may be a bit slow due to the huge size of data. That's why we used months instead of days. But it may be a bit slow.

- Ranked charts may miss some colors, try to change the number of countries and it will be solved.

- Some TypeScript errors were silenced.

- Some tests could be added.

- Separate logic from components could be better.


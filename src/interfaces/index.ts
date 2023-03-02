export interface IGeneralData {
	[countryAbbreviation: string]: ICountryData
}

export interface ICountryData {
	continent: string
	location: string
	population: number
	population_density: number
	median_age: number
	aged_65_older: number
	aged_70_older: number
	gdp_per_capita: number
	cardiovasc_death_rate: number
	diabetes_prevalence: number
	handwashing_facilities: number
	hospital_beds_per_thousand: number
	life_expectancy: number
	human_development_index: number
	data: ICovidData[]
}

export interface ICovidData {
	location: string
	date: string
	total_cases: number
	new_cases: number
	new_cases_smoothed: number
	total_deaths: number
	new_deaths: number
	new_deaths_smoothed: number
	total_cases_per_million: number
	new_cases_per_million: number
	new_cases_smoothed_per_million: number
	total_deaths_per_million: number
	new_deaths_per_million: number
	new_deaths_smoothed_per_million: number
	reproduction_rate: number
	stringency_index: number
}

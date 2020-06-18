import {api} from './openweather.ts'


Deno.test("Getting Weather for victoria", async() => {
  const Weather = new api.OpenWeather("1243ceb413c799ddad21527b0e41a23e")
  const weatherData = await Weather.getWeatherByCityId(6174032)
    .then(data => {
      return data.json()
    })
  console.log(weatherData)
})
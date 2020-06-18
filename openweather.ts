export module api {
  enum measurementUnits {
    metrics = "metrics",
    imperial = "imperial",
  }

  export class OpenWeather {
    metrics: measurementUnits;
    APP_KEY: string;
    BASE_URL: string;
    constructor(
      APP_KEY: string,
      metrics: measurementUnits = measurementUnits.metrics,
      BASE_URL = "https://api.openweathermap.org/data/2.5",
    ) {
      this.APP_KEY = APP_KEY;
      this.metrics = metrics;
      this.BASE_URL = BASE_URL;
    }
    public getWeatherByCityId(
      city: number
    ): Promise<any> {
      const { APP_KEY, BASE_URL, metrics } = this;
      return fetch(
        `${BASE_URL}/weather?id=${city}&units=${metrics}&APPID=${APP_KEY}`,
      )
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    public getWeatherByCityName(
      cityName: String
    ) {
      const { APP_KEY, BASE_URL, metrics } = this;
      return fetch(
        `${BASE_URL}/weather?q=${cityName}&units=${metrics}&APPID=${APP_KEY}`,
      )
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    }

    public getWeatherByGeoCoordinates(
      latitude: Number,
      longitude: Number
    ) {
      const { APP_KEY, BASE_URL, metrics } = this;
      return fetch(
        `${BASE_URL}/weather?lat=${latitude.toString()}&lon=${longitude.toString()}&units=${metrics}&APPID=${APP_KEY}`,
      )
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    public getCurrentWeatherByZipCode(
      zipCode: Number
    ) {
      const { APP_KEY, BASE_URL, metrics } = this;
      return fetch(
        `${BASE_URL}/weather?zip=${zipCode.toString()}&units=${metrics}&APPID=${APP_KEY}`,
      )
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    public getThreeHourForecastByCityName(
      cityName: String
    ) {
      const { APP_KEY, BASE_URL, metrics } = this;

      return fetch(
        `${BASE_URL}/weather?forecast?q=${cityName}&units=${metrics}&APPID=${APP_KEY}`,
      )
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    public getThreeHourForecastByCityID(
      cityId: Number
    ) {
      const { APP_KEY, BASE_URL, metrics } = this;
      return fetch(
        `${BASE_URL}/weather?forecast?q=${cityId.toString()}&units=${metrics}&APPID=${APP_KEY}`,
      )
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    }

    public getThreeHourForecastByGeoCoordinates(
      latitude: Number,
      longitude: Number
    ) {
      const { APP_KEY, BASE_URL, metrics } = this;

      return fetch(
        `${BASE_URL}/weather?forecast?lat=${latitude.toString()}&lon=${longitude.toString()}&units=${metrics}&APPID=${APP_KEY}`,
      )
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}

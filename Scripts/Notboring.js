/****************************************

项目功能：Not Boring 四件套[天气、习惯、日历、时间] 解锁VIP
下载地址：http://mtw.so/5ukhax
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https?:\/\/api-weather\.andy\.works\/v\d\/\w{13,18}$ url script-response-body https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/Notboring.js

[mitm] 

hostname=api-weather.andy.works

****************************************/


var chxm1023 = JSON.parse($response.body);
chxm1023.body=
{
  "daily" : [
    {
      "windSpeed" : {
        "min" : {
          "value" : 5
        },
        "max" : {
          "value" : 5
        }
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "weatherCode" : "rainLight",
      "sunrise" : "2022-10-28T14:47:00.000Z",
      "moonFraction" : 0.11042831718855362,
      "pressure" : null,
      "uvi" : 2,
      "moonPhase" : "full",
      "lon" : -122.33499999999999,
      "precipitationType" : "rain",
      "minTemp" : {
        "value" : 46
      },
      "maxFeelsLike" : {
        "value" : 58
      },
      "rain" : 0.02,
      "humidity" : null,
      "dewPoint" : null,
      "snow" : 0,
      "timestamp" : "2022-10-28T14:00:00.000Z",
      "cloudCover" : 57,
      "sunset" : "2022-10-29T00:58:00.000Z",
      "lat" : 47.607999999999997,
      "maxTemp" : {
        "value" : 57
      },
      "windDirection" : 117,
      "epaIndex" : 41,
      "pollen" : {
        "grass" : 1,
        "tree" : 1,
        "ragweed" : 1,
        "mold" : 1
      },
      "precipitationProbability" : 56,
      "minFeelsLike" : {
        "value" : 42
      }
    },
    {
      "windSpeed" : {
        "min" : {
          "value" : 8.0999999999999996
        },
        "max" : {
          "value" : 8.0999999999999996
        }
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "weatherCode" : "partlyCloudy",
      "sunrise" : "2022-10-29T14:49:00.000Z",
      "moonFraction" : 0.14785494392553478,
      "pressure" : null,
      "uvi" : 2,
      "moonPhase" : "full",
      "lon" : -122.33499999999999,
      "precipitationType" : "none",
      "minTemp" : {
        "value" : 49
      },
      "maxFeelsLike" : {
        "value" : 55
      },
      "rain" : 0,
      "humidity" : null,
      "dewPoint" : null,
      "snow" : 0,
      "timestamp" : "2022-10-29T14:00:00.000Z",
      "cloudCover" : 60,
      "sunset" : "2022-10-30T00:57:00.000Z",
      "lat" : 47.607999999999997,
      "maxTemp" : {
        "value" : 56
      },
      "windDirection" : 190,
      "epaIndex" : 29,
      "pollen" : {
        "grass" : 1,
        "tree" : 1,
        "ragweed" : 1,
        "mold" : 1
      },
      "precipitationProbability" : 8,
      "minFeelsLike" : {
        "value" : 43
      }
    },
    {
      "windSpeed" : {
        "min" : {
          "value" : 11.5
        },
        "max" : {
          "value" : 11.5
        }
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "weatherCode" : "rainLight",
      "sunrise" : "2022-10-30T14:50:00.000Z",
      "moonFraction" : 0.18552198259236546,
      "pressure" : null,
      "uvi" : 1,
      "moonPhase" : "full",
      "lon" : -122.33499999999999,
      "precipitationType" : "rain",
      "minTemp" : {
        "value" : 50
      },
      "maxFeelsLike" : {
        "value" : 49
      },
      "rain" : 0.13,
      "humidity" : null,
      "dewPoint" : null,
      "snow" : 0,
      "timestamp" : "2022-10-30T14:00:00.000Z",
      "cloudCover" : 99,
      "sunset" : "2022-10-31T00:55:00.000Z",
      "lat" : 47.607999999999997,
      "maxTemp" : {
        "value" : 54
      },
      "windDirection" : 196,
      "epaIndex" : 29,
      "pollen" : {
        "grass" : 1,
        "tree" : 1,
        "ragweed" : 1,
        "mold" : 1
      },
      "precipitationProbability" : 81,
      "minFeelsLike" : {
        "value" : 44
      }
    },
    {
      "windSpeed" : {
        "min" : {
          "value" : 8.0999999999999996
        },
        "max" : {
          "value" : 8.0999999999999996
        }
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "weatherCode" : "rainLight",
      "sunrise" : "2022-10-31T14:52:00.000Z",
      "moonFraction" : 0.2232375770815973,
      "pressure" : null,
      "uvi" : 0,
      "moonPhase" : "full",
      "lon" : -122.33499999999999,
      "precipitationType" : "rain",
      "minTemp" : {
        "value" : 42
      },
      "maxFeelsLike" : {
        "value" : 48
      },
      "rain" : 0.57999999999999996,
      "humidity" : null,
      "dewPoint" : null,
      "snow" : 0,
      "timestamp" : "2022-10-31T14:00:00.000Z",
      "cloudCover" : 99,
      "sunset" : "2022-11-01T00:54:00.000Z",
      "lat" : 47.607999999999997,
      "maxTemp" : {
        "value" : 54
      },
      "windDirection" : 270,
      "epaIndex" : 29,
      "pollen" : {
        "grass" : 1,
        "tree" : 1,
        "ragweed" : 1,
        "mold" : 1
      },
      "precipitationProbability" : 96,
      "minFeelsLike" : {
        "value" : 36
      }
    },
    {
      "windSpeed" : {
        "min" : {
          "value" : 5.7999999999999998
        },
        "max" : {
          "value" : 5.7999999999999998
        }
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "weatherCode" : "rainLight",
      "sunrise" : "2022-11-01T14:53:00.000Z",
      "moonFraction" : 0.2608167617293996,
      "pressure" : null,
      "uvi" : 1,
      "moonPhase" : "full",
      "lon" : -122.33499999999999,
      "precipitationType" : "rain",
      "minTemp" : {
        "value" : 39
      },
      "maxFeelsLike" : {
        "value" : 50
      },
      "rain" : 0.13,
      "humidity" : null,
      "dewPoint" : null,
      "snow" : 0,
      "timestamp" : "2022-11-01T14:00:00.000Z",
      "cloudCover" : 91,
      "sunset" : "2022-11-02T00:52:00.000Z",
      "lat" : 47.607999999999997,
      "maxTemp" : {
        "value" : 49
      },
      "windDirection" : 185,
      "epaIndex" : 29,
      "pollen" : {
        "grass" : 1,
        "tree" : 1,
        "ragweed" : 1,
        "mold" : 1
      },
      "precipitationProbability" : 85,
      "minFeelsLike" : {
        "value" : 36
      }
    },
    {
      "windSpeed" : {
        "min" : {
          "value" : 5.7999999999999998
        },
        "max" : {
          "value" : 5.7999999999999998
        }
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "weatherCode" : "mostlyCloudy",
      "sunrise" : "2022-11-02T14:55:00.000Z",
      "moonFraction" : 0.29808746850433365,
      "pressure" : null,
      "uvi" : 2,
      "moonPhase" : "full",
      "lon" : -122.33499999999999,
      "precipitationType" : "none",
      "minTemp" : {
        "value" : 37
      },
      "maxFeelsLike" : {
        "value" : 49
      },
      "rain" : 0.059999999999999998,
      "humidity" : null,
      "dewPoint" : null,
      "snow" : 0,
      "timestamp" : "2022-11-02T14:00:00.000Z",
      "cloudCover" : 44,
      "sunset" : "2022-11-03T00:50:00.000Z",
      "lat" : 47.607999999999997,
      "maxTemp" : {
        "value" : 49
      },
      "windDirection" : 354,
      "epaIndex" : 29,
      "pollen" : {
        "grass" : 1,
        "tree" : 1,
        "ragweed" : 1,
        "mold" : 1
      },
      "precipitationProbability" : 65,
      "minFeelsLike" : {
        "value" : 39
      }
    },
    {
      "windSpeed" : {
        "min" : {
          "value" : 1.2
        },
        "max" : {
          "value" : 1.2
        }
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "weatherCode" : "mostlyCloudy",
      "sunrise" : "2022-11-03T14:56:00.000Z",
      "moonFraction" : 0.33489474236066541,
      "pressure" : null,
      "uvi" : 1,
      "moonPhase" : "full",
      "lon" : -122.33499999999999,
      "precipitationType" : "none",
      "minTemp" : {
        "value" : 42
      },
      "maxFeelsLike" : {
        "value" : 55
      },
      "rain" : 0,
      "humidity" : null,
      "dewPoint" : null,
      "snow" : 0,
      "timestamp" : "2022-11-03T14:00:00.000Z",
      "cloudCover" : 84,
      "sunset" : "2022-11-04T00:49:00.000Z",
      "lat" : 47.607999999999997,
      "maxTemp" : {
        "value" : 51
      },
      "windDirection" : 309,
      "epaIndex" : 25,
      "pollen" : {
        "grass" : 1,
        "tree" : 1,
        "ragweed" : 1,
        "mold" : 1
      },
      "precipitationProbability" : 25,
      "minFeelsLike" : {
        "value" : 35
      }
    },
    {
      "windSpeed" : {
        "min" : {
          "value" : 13.800000000000001
        },
        "max" : {
          "value" : 13.800000000000001
        }
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "weatherCode" : "rainLight",
      "sunrise" : "2022-11-04T14:58:00.000Z",
      "moonFraction" : 0.3711038433722188,
      "pressure" : null,
      "uvi" : 1,
      "moonPhase" : "full",
      "lon" : -122.33499999999999,
      "precipitationType" : "rain",
      "minTemp" : {
        "value" : 40
      },
      "maxFeelsLike" : {
        "value" : 46
      },
      "rain" : 0.050000000000000003,
      "humidity" : null,
      "dewPoint" : null,
      "snow" : 0,
      "timestamp" : "2022-11-04T14:00:00.000Z",
      "cloudCover" : 97,
      "sunset" : "2022-11-05T00:47:00.000Z",
      "lat" : 47.607999999999997,
      "maxTemp" : {
        "value" : 53
      },
      "windDirection" : 183,
      "epaIndex" : 0,
      "pollen" : {
        "grass" : 1,
        "tree" : 1,
        "ragweed" : 1,
        "mold" : 1
      },
      "precipitationProbability" : 55,
      "minFeelsLike" : {
        "value" : 32
      }
    },
    {
      "windSpeed" : {
        "min" : {
          "value" : 5.7999999999999998
        },
        "max" : {
          "value" : 5.7999999999999998
        }
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "weatherCode" : "rainLight",
      "sunrise" : "2022-11-05T14:59:00.000Z",
      "moonFraction" : 0.40660304357830473,
      "pressure" : null,
      "uvi" : 0,
      "moonPhase" : "full",
      "lon" : -122.33499999999999,
      "precipitationType" : "rain",
      "minTemp" : {
        "value" : 40
      },
      "maxFeelsLike" : {
        "value" : 57
      },
      "rain" : 0.59999999999999998,
      "humidity" : null,
      "dewPoint" : null,
      "snow" : 0,
      "timestamp" : "2022-11-05T14:00:00.000Z",
      "cloudCover" : 100,
      "sunset" : "2022-11-06T00:46:00.000Z",
      "lat" : 47.607999999999997,
      "maxTemp" : {
        "value" : 58
      },
      "windDirection" : 157,
      "epaIndex" : 0,
      "pollen" : {
        "grass" : 1,
        "tree" : 1,
        "ragweed" : 1,
        "mold" : 1
      },
      "precipitationProbability" : 75,
      "minFeelsLike" : {
        "value" : 40
      }
    },
    {
      "windSpeed" : {
        "min" : {
          "value" : 1.2
        },
        "max" : {
          "value" : 1.2
        }
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "weatherCode" : "rain",
      "sunrise" : "2022-11-06T15:01:00.000Z",
      "moonFraction" : 0.44130654168151712,
      "pressure" : null,
      "uvi" : 0,
      "moonPhase" : "full",
      "lon" : -122.33499999999999,
      "precipitationType" : "rain",
      "minTemp" : {
        "value" : 42
      },
      "maxFeelsLike" : {
        "value" : 53
      },
      "rain" : 0.38,
      "humidity" : null,
      "dewPoint" : null,
      "snow" : 0,
      "timestamp" : "2022-11-06T14:00:00.000Z",
      "cloudCover" : 99,
      "sunset" : "2022-11-07T00:44:00.000Z",
      "lat" : 47.607999999999997,
      "maxTemp" : {
        "value" : 50
      },
      "windDirection" : 119,
      "epaIndex" : 0,
      "pollen" : {
        "grass" : 1,
        "tree" : 1,
        "ragweed" : 1,
        "mold" : 1
      },
      "precipitationProbability" : 75,
      "minFeelsLike" : {
        "value" : 37
      }
    }
  ],
  "sourceProvider" : "accuweather",
  "current" : {
    "windDirection" : 135,
    "lon" : -122.33499999999999,
    "windSpeed" : {
      "value" : 1.1000000000000001
    },
    "temp" : {
      "value" : 49
    },
    "timestamp" : "2022-10-29T07:09:00.000Z",
    "humidity" : 90,
    "cloudCover" : 40,
    "feelsLike" : {
      "value" : 50
    },
    "dewPoint" : {
      "value" : 46
    },
    "lat" : 47.607999999999997,
    "location" : {
      "lat" : 47.607999999999997,
      "lon" : -122.33499999999999
    },
    "uvi" : 0,
    "visibility" : 3218.6799999999998,
    "pollen" : {
      "grass" : 1,
      "tree" : 1,
      "ragweed" : 1,
      "mold" : 1
    },
    "precipitationType" : "none",
    "pressure" : 1024.7213113999999,
    "weatherCode" : "partlyCloudy",
    "epaIndex" : 41
  },
  "hourly" : [
    {
      "windSpeed" : {
        "value" : 5.7999999999999998
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 2,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 48
      },
      "rain" : 0,
      "humidity" : 86,
      "dewPoint" : {
        "value" : 46
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T08:00:00.000Z",
      "cloudCover" : 45,
      "lat" : 47.607999999999997,
      "windDirection" : 154,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 50
      },
      "weatherCode" : "partlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 5.7999999999999998
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 2,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 48
      },
      "rain" : 0,
      "humidity" : 86,
      "dewPoint" : {
        "value" : 46
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T08:00:00.000Z",
      "cloudCover" : 45,
      "lat" : 47.607999999999997,
      "windDirection" : 154,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 50
      },
      "weatherCode" : "partlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 5.7999999999999998
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 1,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 47
      },
      "rain" : 0,
      "humidity" : 88,
      "dewPoint" : {
        "value" : 46
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T09:00:00.000Z",
      "cloudCover" : 45,
      "lat" : 47.607999999999997,
      "windDirection" : 156,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 49
      },
      "weatherCode" : "partlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 5.7999999999999998
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 1,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 13019.560599999999,
      "feelsLike" : {
        "value" : 46
      },
      "rain" : 0,
      "humidity" : 88,
      "dewPoint" : {
        "value" : 46
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T10:00:00.000Z",
      "cloudCover" : 45,
      "lat" : 47.607999999999997,
      "windDirection" : 163,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 49
      },
      "weatherCode" : "partlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 6.9000000000000004
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 1,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 9977.9079999999994,
      "feelsLike" : {
        "value" : 46
      },
      "rain" : 0,
      "humidity" : 89,
      "dewPoint" : {
        "value" : 46
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T11:00:00.000Z",
      "cloudCover" : 45,
      "lat" : 47.607999999999997,
      "windDirection" : 174,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 49
      },
      "weatherCode" : "partlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 6.9000000000000004
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 1,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 6904.0685999999996,
      "feelsLike" : {
        "value" : 45
      },
      "rain" : 0,
      "humidity" : 89,
      "dewPoint" : {
        "value" : 45
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T12:00:00.000Z",
      "cloudCover" : 45,
      "lat" : 47.607999999999997,
      "windDirection" : 183,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 48
      },
      "weatherCode" : "fog"
    },
    {
      "windSpeed" : {
        "value" : 6.9000000000000004
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 1,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 3846.3226,
      "feelsLike" : {
        "value" : 44
      },
      "rain" : 0,
      "humidity" : 87,
      "dewPoint" : {
        "value" : 43
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T13:00:00.000Z",
      "cloudCover" : 45,
      "lat" : 47.607999999999997,
      "windDirection" : 184,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 47
      },
      "weatherCode" : "fog"
    },
    {
      "windSpeed" : {
        "value" : 6.9000000000000004
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 1,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 804.66999999999996,
      "feelsLike" : {
        "value" : 42
      },
      "rain" : 0,
      "humidity" : 84,
      "dewPoint" : {
        "value" : 42
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T14:00:00.000Z",
      "cloudCover" : 45,
      "lat" : 47.607999999999997,
      "windDirection" : 178,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 46
      },
      "weatherCode" : "fog"
    },
    {
      "windSpeed" : {
        "value" : 6.9000000000000004
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 0,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 44
      },
      "rain" : 0,
      "humidity" : 82,
      "dewPoint" : {
        "value" : 42
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T15:00:00.000Z",
      "cloudCover" : 76,
      "lat" : 47.607999999999997,
      "windDirection" : 174,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 47
      },
      "weatherCode" : "mostlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 6.9000000000000004
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 0,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 45
      },
      "rain" : 0,
      "humidity" : 79,
      "dewPoint" : {
        "value" : 42
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T16:00:00.000Z",
      "cloudCover" : 76,
      "lat" : 47.607999999999997,
      "windDirection" : 174,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 48
      },
      "weatherCode" : "mostlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 6.9000000000000004
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 0,
      "pressure" : null,
      "uvi" : 1,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 47
      },
      "rain" : 0,
      "humidity" : 74,
      "dewPoint" : {
        "value" : 42
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T17:00:00.000Z",
      "cloudCover" : 76,
      "lat" : 47.607999999999997,
      "windDirection" : 177,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 49
      },
      "weatherCode" : "mostlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 8.0999999999999996
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 0,
      "pressure" : null,
      "uvi" : 1,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 49
      },
      "rain" : 0,
      "humidity" : 71,
      "dewPoint" : {
        "value" : 42
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T18:00:00.000Z",
      "cloudCover" : 76,
      "lat" : 47.607999999999997,
      "windDirection" : 181,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 51
      },
      "weatherCode" : "mostlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 8.0999999999999996
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 0,
      "pressure" : null,
      "uvi" : 1,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 51
      },
      "rain" : 0,
      "humidity" : 68,
      "dewPoint" : {
        "value" : 43
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T19:00:00.000Z",
      "cloudCover" : 76,
      "lat" : 47.607999999999997,
      "windDirection" : 188,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 53
      },
      "weatherCode" : "mostlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 9.1999999999999993
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 0,
      "pressure" : null,
      "uvi" : 1,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 52
      },
      "rain" : 0,
      "humidity" : 65,
      "dewPoint" : {
        "value" : 43
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T20:00:00.000Z",
      "cloudCover" : 76,
      "lat" : 47.607999999999997,
      "windDirection" : 197,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 54
      },
      "weatherCode" : "mostlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 9.1999999999999993
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 0,
      "pressure" : null,
      "uvi" : 2,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 54
      },
      "rain" : 0,
      "humidity" : 62,
      "dewPoint" : {
        "value" : 42
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T21:00:00.000Z",
      "cloudCover" : 45,
      "lat" : 47.607999999999997,
      "windDirection" : 201,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 55
      },
      "weatherCode" : "mostlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 9.1999999999999993
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 0,
      "pressure" : null,
      "uvi" : 2,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 54
      },
      "rain" : 0,
      "humidity" : 61,
      "dewPoint" : {
        "value" : 42
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T22:00:00.000Z",
      "cloudCover" : 45,
      "lat" : 47.607999999999997,
      "windDirection" : 202,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 56
      },
      "weatherCode" : "mostlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 8.0999999999999996
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 0,
      "pressure" : null,
      "uvi" : 1,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 55
      },
      "rain" : 0,
      "humidity" : 59,
      "dewPoint" : {
        "value" : 43
      },
      "snow" : 0,
      "timestamp" : "2022-10-29T23:00:00.000Z",
      "cloudCover" : 45,
      "lat" : 47.607999999999997,
      "windDirection" : 202,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 56
      },
      "weatherCode" : "mostlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 8.0999999999999996
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 0,
      "pressure" : null,
      "uvi" : 1,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 52
      },
      "rain" : 0,
      "humidity" : 61,
      "dewPoint" : {
        "value" : 42
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T00:00:00.000Z",
      "cloudCover" : 45,
      "lat" : 47.607999999999997,
      "windDirection" : 200,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 55
      },
      "weatherCode" : "mostlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 8.0999999999999996
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 0,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 50
      },
      "rain" : 0,
      "humidity" : 65,
      "dewPoint" : {
        "value" : 42
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T01:00:00.000Z",
      "cloudCover" : 45,
      "lat" : 47.607999999999997,
      "windDirection" : 196,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 54
      },
      "weatherCode" : "partlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 8.0999999999999996
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 2,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 49
      },
      "rain" : 0,
      "humidity" : 67,
      "dewPoint" : {
        "value" : 42
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T02:00:00.000Z",
      "cloudCover" : 45,
      "lat" : 47.607999999999997,
      "windDirection" : 191,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 53
      },
      "weatherCode" : "partlyCloudy"
    },
    {
      "windSpeed" : {
        "value" : 8.0999999999999996
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 5,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 48
      },
      "rain" : 0,
      "humidity" : 70,
      "dewPoint" : {
        "value" : 42
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T03:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 187,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 52
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 8.0999999999999996
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 5,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 47
      },
      "rain" : 0,
      "humidity" : 71,
      "dewPoint" : {
        "value" : 42
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T04:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 185,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 51
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 8.0999999999999996
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 6,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 47
      },
      "rain" : 0,
      "humidity" : 73,
      "dewPoint" : {
        "value" : 43
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T05:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 183,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 51
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 8.0999999999999996
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 7,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 47
      },
      "rain" : 0,
      "humidity" : 75,
      "dewPoint" : {
        "value" : 43
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T06:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 182,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 51
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 8.0999999999999996
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 7,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 46
      },
      "rain" : 0,
      "humidity" : 77,
      "dewPoint" : {
        "value" : 44
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T07:00:00.000Z",
      "cloudCover" : 99,
      "lat" : 47.607999999999997,
      "windDirection" : 182,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 51
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 8.0999999999999996
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 11,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 46
      },
      "rain" : 0,
      "humidity" : 79,
      "dewPoint" : {
        "value" : 44
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T08:00:00.000Z",
      "cloudCover" : 99,
      "lat" : 47.607999999999997,
      "windDirection" : 183,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 50
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 8.0999999999999996
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 17,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 46
      },
      "rain" : 0,
      "humidity" : 80,
      "dewPoint" : {
        "value" : 45
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T09:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 185,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 50
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 9.1999999999999993
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 17,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 46
      },
      "rain" : 0,
      "humidity" : 81,
      "dewPoint" : {
        "value" : 45
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T10:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 187,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 50
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 9.1999999999999993
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 22,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 46
      },
      "rain" : 0,
      "humidity" : 81,
      "dewPoint" : {
        "value" : 45
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T11:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 190,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 50
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 9.1999999999999993
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 51,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "rain",
      "lon" : -122.33499999999999,
      "visibility" : 9656.0399999999991,
      "feelsLike" : {
        "value" : 43
      },
      "rain" : 0.029999999999999999,
      "humidity" : 81,
      "dewPoint" : {
        "value" : 45
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T12:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 192,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 50
      },
      "weatherCode" : "rainLight"
    },
    {
      "windSpeed" : {
        "value" : 9.1999999999999993
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 47,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 45
      },
      "rain" : 0,
      "humidity" : 81,
      "dewPoint" : {
        "value" : 44
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T13:00:00.000Z",
      "cloudCover" : 99,
      "lat" : 47.607999999999997,
      "windDirection" : 191,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 50
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 9.1999999999999993
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 43,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 44
      },
      "rain" : 0,
      "humidity" : 82,
      "dewPoint" : {
        "value" : 44
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T14:00:00.000Z",
      "cloudCover" : 99,
      "lat" : 47.607999999999997,
      "windDirection" : 190,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 49
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 10.4
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 47,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 44
      },
      "rain" : 0,
      "humidity" : 82,
      "dewPoint" : {
        "value" : 45
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T15:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 190,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 50
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 10.4
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 51,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "rain",
      "lon" : -122.33499999999999,
      "visibility" : 9656.0399999999991,
      "feelsLike" : {
        "value" : 42
      },
      "rain" : 0.02,
      "humidity" : 82,
      "dewPoint" : {
        "value" : 45
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T16:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 192,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 50
      },
      "weatherCode" : "rain"
    },
    {
      "windSpeed" : {
        "value" : 10.4
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 43,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 45
      },
      "rain" : 0,
      "humidity" : 81,
      "dewPoint" : {
        "value" : 45
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T17:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 194,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 51
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 11.5
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 51,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "rain",
      "lon" : -122.33499999999999,
      "visibility" : 9656.0399999999991,
      "feelsLike" : {
        "value" : 43
      },
      "rain" : 0.02,
      "humidity" : 81,
      "dewPoint" : {
        "value" : 46
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T18:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 196,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 52
      },
      "weatherCode" : "rain"
    },
    {
      "windSpeed" : {
        "value" : 11.5
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 47,
      "pressure" : null,
      "uvi" : 1,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 48
      },
      "rain" : 0,
      "humidity" : 80,
      "dewPoint" : {
        "value" : 47
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T19:00:00.000Z",
      "cloudCover" : 99,
      "lat" : 47.607999999999997,
      "windDirection" : 197,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 53
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 11.5
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 43,
      "pressure" : null,
      "uvi" : 1,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 48
      },
      "rain" : 0,
      "humidity" : 79,
      "dewPoint" : {
        "value" : 47
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T20:00:00.000Z",
      "cloudCover" : 99,
      "lat" : 47.607999999999997,
      "windDirection" : 198,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 53
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 11.5
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 43,
      "pressure" : null,
      "uvi" : 1,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 49
      },
      "rain" : 0,
      "humidity" : 79,
      "dewPoint" : {
        "value" : 47
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T21:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 199,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 54
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 11.5
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 47,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 49
      },
      "rain" : 0,
      "humidity" : 81,
      "dewPoint" : {
        "value" : 49
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T22:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 199,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 54
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 11.5
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 51,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "rain",
      "lon" : -122.33499999999999,
      "visibility" : 9656.0399999999991,
      "feelsLike" : {
        "value" : 46
      },
      "rain" : 0.040000000000000001,
      "humidity" : 85,
      "dewPoint" : {
        "value" : 50
      },
      "snow" : 0,
      "timestamp" : "2022-10-30T23:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 198,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 54
      },
      "weatherCode" : "rain"
    },
    {
      "windSpeed" : {
        "value" : 11.5
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 51,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "rain",
      "lon" : -122.33499999999999,
      "visibility" : 9656.0399999999991,
      "feelsLike" : {
        "value" : 45
      },
      "rain" : 0.040000000000000001,
      "humidity" : 86,
      "dewPoint" : {
        "value" : 50
      },
      "snow" : 0,
      "timestamp" : "2022-10-31T00:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 197,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 54
      },
      "weatherCode" : "rain"
    },
    {
      "windSpeed" : {
        "value" : 11.5
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 47,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 48
      },
      "rain" : 0,
      "humidity" : 86,
      "dewPoint" : {
        "value" : 50
      },
      "snow" : 0,
      "timestamp" : "2022-10-31T01:00:00.000Z",
      "cloudCover" : 99,
      "lat" : 47.607999999999997,
      "windDirection" : 198,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 54
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 11.5
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 49,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "none",
      "lon" : -122.33499999999999,
      "visibility" : 16093.4,
      "feelsLike" : {
        "value" : 48
      },
      "rain" : 0,
      "humidity" : 85,
      "dewPoint" : {
        "value" : 50
      },
      "snow" : 0,
      "timestamp" : "2022-10-31T02:00:00.000Z",
      "cloudCover" : 99,
      "lat" : 47.607999999999997,
      "windDirection" : 199,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 54
      },
      "weatherCode" : "cloudy"
    },
    {
      "windSpeed" : {
        "value" : 11.5
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 75,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "rain",
      "lon" : -122.33499999999999,
      "visibility" : 9656.0399999999991,
      "feelsLike" : {
        "value" : 45
      },
      "rain" : 0.029999999999999999,
      "humidity" : 85,
      "dewPoint" : {
        "value" : 49
      },
      "snow" : 0,
      "timestamp" : "2022-10-31T03:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 200,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 54
      },
      "weatherCode" : "rain"
    },
    {
      "windSpeed" : {
        "value" : 11.5
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 74,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "rain",
      "lon" : -122.33499999999999,
      "visibility" : 9656.0399999999991,
      "feelsLike" : {
        "value" : 44
      },
      "rain" : 0.029999999999999999,
      "humidity" : 85,
      "dewPoint" : {
        "value" : 49
      },
      "snow" : 0,
      "timestamp" : "2022-10-31T04:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 200,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 53
      },
      "weatherCode" : "rain"
    },
    {
      "windSpeed" : {
        "value" : 11.5
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 75,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "rain",
      "lon" : -122.33499999999999,
      "visibility" : 9656.0399999999991,
      "feelsLike" : {
        "value" : 44
      },
      "rain" : 0.029999999999999999,
      "humidity" : 86,
      "dewPoint" : {
        "value" : 49
      },
      "snow" : 0,
      "timestamp" : "2022-10-31T05:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 199,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 53
      },
      "weatherCode" : "rain"
    },
    {
      "windSpeed" : {
        "value" : 10.4
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 75,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "rain",
      "lon" : -122.33499999999999,
      "visibility" : 9656.0399999999991,
      "feelsLike" : {
        "value" : 44
      },
      "rain" : 0.029999999999999999,
      "humidity" : 86,
      "dewPoint" : {
        "value" : 49
      },
      "snow" : 0,
      "timestamp" : "2022-10-31T06:00:00.000Z",
      "cloudCover" : 100,
      "lat" : 47.607999999999997,
      "windDirection" : 199,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 53
      },
      "weatherCode" : "rain"
    },
    {
      "windSpeed" : {
        "value" : 10.4
      },
      "location" : {
        "lat" : 47.607999999999997,
        "lon" : -122.33499999999999
      },
      "precipitationProbability" : 75,
      "pressure" : null,
      "uvi" : 0,
      "precipitationType" : "rain",
      "lon" : -122.33499999999999,
      "visibility" : 9656.0399999999991,
      "feelsLike" : {
        "value" : 44
      },
      "rain" : 0.029999999999999999,
      "humidity" : 86,
      "dewPoint" : {
        "value" : 49
      },
      "snow" : 0,
      "timestamp" : "2022-10-31T07:00:00.000Z",
      "cloudCover" : 99,
      "lat" : 47.607999999999997,
      "windDirection" : 200,
      "epaIndex" : null,
      "pollen" : null,
      "temp" : {
        "value" : 53
      },
      "weatherCode" : "rain"
    }
  ],
  "location" : {
    "lat" : 47.607999999999997,
    "lon" : -122.33499999999999,
    "key" : {
      "kid" : "2628285",
      "expiresMs" : 1667062937000
    }
  },
  "hour" : [

  ]
}

$done({body: JSON.stringify(chxm1023)});

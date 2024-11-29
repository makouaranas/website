import React from 'react';
import { useTranslation } from 'react-i18next';
import { Weather } from '../../types';

const mockWeather: Weather = {
  temperature: 25,
  wind: 15,
  rain: 0,
  waves: 2,
  tides: 1.5,
  pressure: 1013,
  humidity: 65,
  fishActivity: 'high'
};

export default function WeatherWidget() {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{t('weather.title')}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <WeatherItem 
          label={t('weather.temperature')} 
          value={`${mockWeather.temperature}°C`}
        />
        <WeatherItem 
          label={t('weather.wind')} 
          value={`${mockWeather.wind} km/h`}
        />
        <WeatherItem 
          label={t('weather.waves')} 
          value={`${mockWeather.waves}m`}
        />
        <WeatherItem 
          label={t('weather.fishActivity')} 
          value={t(`weather.fishActivity.${mockWeather.fishActivity}`)}
        />
      </div>
    </div>
  );
}

function WeatherItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-gray-600">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
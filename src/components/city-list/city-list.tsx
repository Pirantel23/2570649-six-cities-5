import { useState } from 'react';
import { useAppDispatch } from '@/hooks/index';
import { changeCity } from '@/store/action';
import { City } from '@/types/city';
import { CITIES, DEFAULT_CITY } from '@/const';

export default function CityList(): JSX.Element {
  const dispatch = useAppDispatch();
  const [activeCity, setActiveCity] = useState<City | null>(DEFAULT_CITY);

  const handleCityChange = (city: City) => {
    setActiveCity(city);
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li
          key={city.name}
          className="locations__item"
          onClick={() => handleCityChange(city)}
        >
          <a
            className={`locations__item-link tabs__item ${activeCity?.name === city.name ? 'tabs__item--active' : ''}`}
            href="#"
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

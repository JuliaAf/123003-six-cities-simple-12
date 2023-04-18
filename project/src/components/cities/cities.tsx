import { Link } from 'react-router-dom';
import { cities } from '../../mocks/cities';
import { setSelectedCity } from '../../store/action';
import { useAppDispatch } from '../../hooks/index';
import cn from 'classnames';

type CitiesProps = {
  selectedCity: string;
}

const Cities = ({ selectedCity }: CitiesProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {cities.map((city, index) => {
            const keyValue = `${index}`;
            return (
              <li
                key={keyValue}
                className='locations__item'
              >
                <Link
                  className={cn('locations__item-link tabs__item', city.name === selectedCity && 'tabs__item--active')}
                  to={`/${city.name}`}
                  title={`/${city.name}`}
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(setSelectedCity);
                  }}
                >
                  <span>{city.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div >
  );
};

export default Cities;

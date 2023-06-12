// src/pages/coffee/index.tsx

import { useParams } from 'react-router-dom';
import { coffeeList } from '../../data';

function Coffee() {
  const params = useParams();
  const currentCoffee = coffeeList.find((coffee) => coffee.slug === params.coffee);

  return (
    // ...
  )
}

export default Coffee;
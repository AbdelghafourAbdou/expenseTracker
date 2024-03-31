/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Summary from '../components/Summary/Summary';
import Details from '../components/Details/Details';
import Navigation from '../components/Navigation/Navigation';
import useItems from '../hooks/useItems';
import './App.css'

function App() {
  const [total, setTotal] = useState(0.00);
  const [items, addItem] = useItems();

  useEffect(() => {
    let itemsSum = items.reduce((sum, item) => {
      let costType = typeof item.cost;
      let itemCost = costType === 'number' ? item.cost : Number(item.cost);
      return (sum + itemCost);
    }, 0);
    setTotal(itemsSum);

  }, [items])

  return (
    <div className=''>
      <Header />
      <Summary total={total} />
      <Details items={items} />
      <Navigation addItem={addItem} />
    </div>
  )
}

export default App

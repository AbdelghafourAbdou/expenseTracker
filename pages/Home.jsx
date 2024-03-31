/* eslint-disable react/prop-types */
// import useItems from '../hooks/useItems';
import { useOutletContext } from 'react-router-dom';
import Summary from '../components/Summary/Summary';
import Details from '../components/Details/Details';
import Navigation from '../components/Navigation/Navigation';

export default function Home() {
    const {items, total, addItem} = useOutletContext();

    return (
        <div className=''>
            <Summary total={total} />
            <Details items={items} />
            <Navigation addItem={addItem} />
        </div>
    )
}

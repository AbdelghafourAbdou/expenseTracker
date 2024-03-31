import { useOutletContext } from 'react-router-dom';
import { FaMoneyBill } from "react-icons/fa";
import './pages.css'

export default function Analytics() {
    const { items, total } = useOutletContext();

    let whole = Math.floor(total);
    let decimal = total - whole;
    let roundedDecimal = (Math.round((decimal + Number.EPSILON) * 100) / 100).toString().substring(2, 4);

    let costCast = items.map(item => {
        let costType = typeof item.cost;
        let itemCost = costType === 'number' ? item.cost : Number(item.cost);
        //item = {...item, cost: itemCost};
        return (itemCost);
    });
    let highestSpending = Math.max(...costCast);

    return (
        <div className='analyticsContainer'>
            <h1>Total: {whole}.{roundedDecimal}$</h1>
            <div className='highestPayment'>
                <span className='moneyContext'>
                    <FaMoneyBill size='1.5em'/>
                    Highest Cost
                </span>
                <span className='money'>
                    {highestSpending}$
                </span>
            </div>
        </div>
    )
}

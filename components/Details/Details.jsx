/* eslint-disable react/prop-types */
import './details.css';

export default function Details({ items }) {

    return (
        <div className='detailsContainer'>
            {items.map(item => {
                return (
                    <div key={item.id} className='item'>
                        <span className='leftside'> {item.icon} {item.type} </span>
                        <span className='rightside'>{item.cost} $</span>
                    </div>)
            })}
        </div>
    )
}

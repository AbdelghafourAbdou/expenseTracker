/* eslint-disable react/prop-types */
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaCirclePlus } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";
import './navigation.css'

export default function Navigation({ addItem }) {
    const [popupDisplay, setPopupDisplay] = useState(false);
    const [formData, setFormData] = useState({
        id: 20,
        icon: '',
        type: '',
        cost: 0
    })

    let body = document.getElementById('root');

    function formChange({ target }) {
        const { name, value } = target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        addItem(formData);
        setFormData({
            id: 20,
            icon: '',
            type: '',
            cost: 0
        });
        setPopupDisplay(false);
        body.style.opacity = 1;
    }

    function toggleButton() {
        popupDisplay ? body.style.opacity = 1 : body.style.opacity = 0.5;
        setPopupDisplay(prevD => !prevD);
    }

    return (
        <div className='navContainer'>
            <button className='addButton' onClick={toggleButton}>
                {!popupDisplay ? <FaCirclePlus size='3em' /> : <FaRegWindowClose size='3em' />}
            </button>
            {popupDisplay ?
                createPortal(
                    <form className='addForm' onSubmit={handleSubmit}>
                        <label>
                            Choose an Icon:
                            <input name='icon' type="text" onChange={formChange} value={formData.icon} />
                        </label>
                        <label>
                            Choose a Type:
                            <input name='type' type='text' onChange={formChange} value={formData.type} />
                        </label>
                        <label>
                            Specify a Cost:
                            <input name='cost' type='number' onChange={formChange} value={formData.cost} />
                        </label>
                        <button>Submit!</button>
                    </form>, document.body)
                : null}
        </div>
    )
}

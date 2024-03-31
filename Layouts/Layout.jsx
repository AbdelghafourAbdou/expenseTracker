import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import useItems from '../hooks/useItems';

export default function Layout() {
    const [items, total, addItem] = useItems();

    return (
        <>
            <Header />
            <Outlet context={{items, total, addItem}}/>
        </>
    )
}

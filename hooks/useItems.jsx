import { useState, useEffect } from "react";
import { items } from "./items";

export default function useItems() {
    const [itemss, setItemss] = useState(items);
    const [total, setTotal] = useState(0.00);

    function addItem(item) {
        setItemss(prev => [...prev, item]);
    }

    useEffect(() => {
        let itemsSum = itemss.reduce((sum, item) => {
            let costType = typeof item.cost;
            let itemCost = costType === 'number' ? item.cost : Number(item.cost);
            return (sum + itemCost);
        }, 0);
        setTotal(itemsSum);

    }, [itemss]);

    return [itemss, total, addItem];
}
import { useState } from "react";
import { items } from "./items";

export default function useItems() {
    const [itemss, setItemss] = useState(items);

    function addItem(item) {
        setItemss(prev => [...prev, item])
    }

    return [itemss, addItem];
}
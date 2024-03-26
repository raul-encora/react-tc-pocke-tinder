import { useContext } from "react";
import { ListItemsContext } from "../context/listContext";
import ItemCard, { ItemCardElement } from "../components/ItemCard";

const Favorites = () => {
    const { items, setItems } = useContext(ListItemsContext);
    
    /**
     * 
     * @param id 
     */
    const handleDiscart = (id: number) => {
        const item = items?.favorites.find((i: ItemCardElement) => i.id === id)
        // move unlike item to main list
		setItems({
			...items,
			all: [...items?.all, item],
			favorites: items?.favorites?.filter((i: ItemCardElement) => i.id !== id)
		});
    }

    return (
        <div id="favorites">
            {
                items?.favorites.map((i: ItemCardElement) => (
                    <ItemCard
                        {...i}
                        onDiscart={handleDiscart}
                    />
                ))
            }
            { !items?.favorites.length && <span className="not-found">No items found.</span>}
        </div>
    )
}

export default Favorites
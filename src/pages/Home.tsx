import { useContext } from "react";
import ItemCard, { ItemCardElement } from "../components/ItemCard"
import { ListItemsContext } from "../context/listContext";

const Home = () => {
	const { items, setItems } = useContext(ListItemsContext);

	/**
	 *  init cards to show only the last one and hide rest of them
	 */
	const initCards = () => {
		const allCards = document.querySelectorAll('.item--card');
		allCards.forEach(function (card: any, index: number) {
			card.style.zIndex = allCards.length - index;
			card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
			card.style.opacity = (10 - index) / 10;
		});
	}

	initCards();

	/**
	 * 
	 * @param id 
	 */
	const addToFavorites = (id: number) => {
		const item = items?.all.find((i: ItemCardElement) => i.id === id);
		// move item from general list to favorites list
		setItems({
			...items,
			favorites: [...items?.favorites, item],
			all: items?.all?.filter((i: ItemCardElement) => i.id !== id)
		});
	}

	/**
	 * 
	 * @param id 
	 */
	const discartItem = (id: number) => {
		const item = items?.all.find((i: ItemCardElement) => i.id === id);
		// move item from general list to discart list
		setItems({
			...items,
			discarts: [...items?.discarts, item],
			all: items?.all?.filter((i: ItemCardElement) => i.id !== id)
		});
	}

	return (
		<div className="container loaded">
			<div className="cards-container">
				{
					items?.all?.map((item: ItemCardElement, index: number) => (
						<ItemCard
							{...item}
							key={`${index}-${item.id}`}
							onLike={addToFavorites}
							onDiscart={discartItem}
						/>
					))
				}
				{ 
					!items?.all.length && <span className="not-found">No items found.</span>
				}
			</div>
		</div>
	)
}

export default Home
export interface ItemCardElement { 
	image: string;
	name: string;
	type: string;
	id: number;
	onLike?: (id: number) => void,
	onDiscart: (id: number) => void
}

const ItemCard = ({
	image,
	name,
	type,
	id,
	onLike,
	onDiscart
}: ItemCardElement) => {
	return (
		<div className="item--card">
			<div className="picture">
				<img src={image} />
			</div>
			<h3>{name}</h3>
			<p>Description type: {type}</p>
			<div className="options">
				<button onClick={() => onDiscart(id)}>
					<img src="https://t3.ftcdn.net/jpg/04/37/51/90/360_F_437519066_OLrSfrnBk5hioGeje96IZ0ejr8Xrozw3.jpg" />
				</button>
				{
					onLike ? (
						<button onClick={() => onLike(id)}>
						<img src="https://t3.ftcdn.net/jpg/03/20/35/28/360_F_320352822_Du18cSR0okuxVfYKgQIYYU794iqjQRAU.jpg" />
					</button>
					): <></>
				}
				
			</div>
		</div>
	)
}

export default ItemCard;
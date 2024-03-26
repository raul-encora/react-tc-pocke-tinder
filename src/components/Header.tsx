import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="nav">
			<input type="checkbox" checked={open} id="nav-check" />
			<div className="nav-header">
				<div className="nav-title">
					JoGeek
				</div>
			</div>
			<div className="nav-btn">
				<label onClick={() => setOpen(!open)}>
					<span></span>
					<span></span>
					<span></span>
				</label>
			</div>
			
			<div className="nav-links">
				<Link to="/home" onClick={() => setOpen(false)}>Home</Link>
				<Link to="/favorites" onClick={() => setOpen(false)}>Favorites</Link>
			</div>
		</div>
	)
}

export default Header
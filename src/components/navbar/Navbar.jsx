import { useState } from "react";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Menu } from "../../components";
import "./navbar.scss";

function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="gpt3__navbar ">
			<div className="gpt3__navbar-links">
				<div className="gpt3__navbar-links_logo">
					<img src={logo} alt="Logo" />
				</div>
				<div className="gpt3__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className="gpt3__navbar-sign">
				<p>Sign in</p>
				<button type="button">Sign up</button>
			</div>
			<div className="gpt3__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine color="#FFF" size={27} onClick={() => setToggleMenu(false)} />
				) : (
					<RiMenu3Line color="#FFF" size={27} onClick={() => setToggleMenu(true)} />
				)}
			</div>

			{toggleMenu && (
				<div className="gpt3__navbar-menu_container scale-up-center">
					<div className="gpt3__navbar-menu_container-links">
						<Menu />
						<div className="gpt3__navbar-menu_container-links-sign">
							<p>Sign in</p>
							<button type="button">Sign up</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Navbar;

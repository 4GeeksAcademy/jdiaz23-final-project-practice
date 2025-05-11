import { Link } from "react-router-dom";
import { useState } from "react";
import { SidebarData } from "../SidebarData";


export const Navbar = () => {
	const [sidebar, setsidbar] = useState(false)

	const showSideBar = () => {
		setsidbar(!sidebar);
	}
	return (
		<><div className="row">
			<div className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="col-3">
					<Link to="#" className="menu-bars" onClick={showSideBar}>
						<i class="fa-solid fa-bars"></i>
					</Link>
					Omni

				</div>
				<div className="col-3">
					<div className="wrap">
						<div className="search">
							<input type="text" className="searchTerm" placeholder="What are you looking for?" />
							<button type="submit" className="searchButton">
								<i class="fa fa-search"></i>
							</button>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="ml-auto">
					<Link to="/signup" className="me-2">
						<button className="btn btn-primary">Sign Up</button>
					</Link>
					<Link to="/login" className="me-2">
						<button className="btn btn-primary">Log In</button>
					</Link>
				</div>
				</div>
			</div>
		</div>


			<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
				<ul className="nav-menu-items" onClick={showSideBar}>
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars" >
							<i class="fa-solid fa-xmark"></i>
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>


			</nav>

		</>
	);
};
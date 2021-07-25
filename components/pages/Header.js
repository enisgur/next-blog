
function Header() {
	return (
		<header>
		<nav>
		  <div className="logo"><a href="#!">Tech Blog</a></div>
		  <div className="searchbar">
		    <input
		      type="search"
		      name="inpSearch"
		      id="inpSearch"
		      placeholder="Type and hit enter"
		    />
		  </div>
		  <div className="actions"><a href="#!">Login</a></div>
		</nav>
	      </header>
	)
}

export default Header

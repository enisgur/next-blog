import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/">
            <a>Tech Blog</a>
          </Link>
        </div>
        <div className="searchbar">
          <input
            type="search"
            name="inpSearch"
            id="inpSearch"
            placeholder="Type and hit enter"
          />
        </div>
        <div className="actions">
          <a href="#!">Login</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;

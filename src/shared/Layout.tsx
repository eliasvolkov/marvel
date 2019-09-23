import React from "react";

interface ILayout {
  children?: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Bootstrap
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
      <main className="container pt-5">
        <div className="row">{children}</div>
      </main>
    </>
  );
};

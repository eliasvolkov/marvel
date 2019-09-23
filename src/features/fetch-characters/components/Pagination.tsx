import React from "react";

interface IPagination {
  pages: number;
  currentPage: number;
  nextPage: (page: number) => void;
}

export const Pagination: React.FC<IPagination> = ({
  pages,
  currentPage,
  nextPage
}) => {
  const pageLinks: Array<React.ReactNode> = [];

  for (let i = 1; i < pages; i++) {
    let active = currentPage == i && "active";
    pageLinks.push(
      <li className={`page-item ${active}`} key={i} onClick={() => nextPage(i)}>
        <a className="page-link">{i}</a>
      </li>
    );
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">{pageLinks}</ul>
    </nav>
  );
};

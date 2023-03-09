import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';  
import Data from "./Data.jsx"; // File with JSON Array of projects
import Items from './Items';
import ReactPaginate from "react-paginate";
import "./Pagination.css";

function Pagination({ItemsList, ItemsPerPage}) {

  // const [pageNumber, setPageNumber] = useState(10);
  const [forcePage, setForcePage]=useState(0);

  //Not Working right now
  useEffect(() => {
      setForcePage(0);
      console.log("Running UseEffect");
  },[forcePage, setForcePage])

   // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const items = ItemsList.map((value)=>{
       return value;
  });

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + ItemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  console.log(currentItems);
  const pageCount = Math.ceil(items.length / ItemsPerPage);
  
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * ItemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    setForcePage(0);
  };
  //  console.log(page);
  return (
      <>
        <Items data={currentItems}/>
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel=" >"
          // initialPage={2}
          // activePage={forcePage}
          forcePage={0}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          pageClassName = 'PageElement'
          previousLabel="< "
          renderOnZeroPageCount={null}
        />
      </>
    );
};

export default Pagination;

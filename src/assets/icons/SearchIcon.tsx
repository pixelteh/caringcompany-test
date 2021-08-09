import React from "react";

const SearchIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
      <defs>
        <path id="search-icon-path" d="M8.203 7.046c1.371-1.898.912-4.527-1.024-5.871C5.243-.17 2.561.28 1.19 2.179-.18 4.077.277 6.706 2.214 8.049c1.382.96 3.21 1.034 4.668.19l3.167 3.087c.342.353.911.367 1.271.032.36-.335.375-.893.033-1.246-.01-.012-.021-.022-.033-.032L8.203 7.046zm-3.51.288c-1.53 0-2.77-1.215-2.771-2.715 0-1.5 1.24-2.717 2.77-2.718 1.528 0 2.768 1.213 2.771 2.712.003 1.5-1.236 2.718-2.767 2.72h-.002z"/>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <mask id="search-icon" fill="#fff">
          <use xlinkHref="#search-icon-path"/>
        </mask>
        <use fill="#fff" fillRule="nonzero" xlinkHref="#search-icon-path"/>
        <g fill="#E6E6E6" mask="url(#search-icon)">
          <path d="M0 0H14V14H0z" transform="translate(-1 -1)"/>
        </g>
      </g>
    </svg>
  )
}

export default SearchIcon;

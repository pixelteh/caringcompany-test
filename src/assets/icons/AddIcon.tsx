import React from "react";

const AddIcon = ({fill, width = 10, height = 10}: {fill: string, width?: number, height?: number}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={width} height={height}
         viewBox="0 0 10 10">
      <defs>
        <path id="prefix__a"
              d="M7.286 3.286H4.857c-.079 0-.143-.064-.143-.143V.714C4.714.32 4.394 0 4 0c-.394 0-.714.32-.714.714v2.429c0 .079-.064.143-.143.143H.714C.32 3.286 0 3.606 0 4c0 .394.32.714.714.714h2.429c.079 0 .143.064.143.143v2.429c0 .394.32.714.714.714.394 0 .714-.32.714-.714V4.857c0-.079.064-.143.143-.143h2.429C7.68 4.714 8 4.394 8 4c0-.394-.32-.714-.714-.714z"/>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <mask id="prefix__b" fill="#fff">
          <use xlinkHref="#prefix__a"/>
        </mask>
        <use fill='#fff' fillRule="nonzero" xlinkHref="#prefix__a"/>
        <g fill={fill} mask="url(#prefix__b)">
          <path d="M0 0H10V10H0z" transform="translate(-1 -1)"/>
        </g>
      </g>
    </svg>
  )
}

export default AddIcon;

import React from 'react';
import MyButton from "../button/MyButton";
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages,page,changePage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div style={{display: "flex", justifyContent: "center", margin: " 20px 0"}}>
            {pagesArray.map(p =>
                <MyButton
                    onClick={() => changePage(p)}
                    key={p}
                    style={page === p
                        ? {margin: "0 10px", border: "2px solid orange"}
                        : {margin: "0 10px"}}>{p}
                </MyButton>)}
        </div>
    );
};

export default Pagination;
import React, {useEffect, useState} from "react";
import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.css";

const PaginationWrap = props => {

    const [activePage, setActivePage] = useState(props.activePage);

    useEffect(() => {
        setActivePage(props.activePage);
    }, [props.activePage]);

    let handleClickOnPagination = newPageNumber => {
        setActivePage(newPageNumber);
        props.handlePaginationBtnClick(newPageNumber)
    }

    return(
        <div>
            <Pagination
                {...props}
                totalItemsCount={props.totalItemsCount}
                itemsCountPerPage={props.itemsCountPerPage}
                pageRangeDisplayed={props.pageRangeDisplayed}

                onChange={handleClickOnPagination}
                activePage={activePage}
                itemClass="page-item"
                linkClass="page-link"
            />
        </div>
    )
}

export default PaginationWrap;
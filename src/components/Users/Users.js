//Services
import React from "react";
//Styles
//import s from "./Users.module.scss";
//Components
import UsersList from "./UsersList/UsersList";
import PaginationWrap from "../common/PaginationWrap/PaginationWrap";
import Preloader from "../common/Preloader/Preloader";
import SearchBlock from "../common/SearchBlock/SearchBlock";
import SearchByFilter from "../common/SearchByFilter/SearchByFilter";


const Users = props => {
    let handlePaginationBtn = newPageNumber => {
        props.goToAnotherPage(newPageNumber);
    }

    //For SearchBlock
    let handleSearchBtn = () => {
        props.setAnotherPageAC(1);
        props.getUsersList();
    };
    let handleSearchInput = (e) => {
        props.setTermValueAC(e.target.value)
    };
    let handleResetSearch = () => {
        props.setTermValueAC("");
        props.getUsersList();
    };
    //End For SearchBlock

    return (
        <div>
            <SearchBlock
                value={props.usersPage.term}
                onChange={handleSearchInput}
                onClick={handleSearchBtn}
                onClickReset={handleResetSearch}
            />

            <SearchByFilter
                setAnotherPageAC={props.setAnotherPageAC}
                friend={props.friend}
                setFriendFilterAC={props.setFriendFilterAC}
            />

            <PaginationWrap
                activePage={props.usersPage.page} //Текущая страница
                totalItemsCount={props.usersPage.totalCount} //Всего пользователей
                itemsCountPerPage={props.usersPage.count} //Пользователей на странице
                pageRangeDisplayed={15} //Сколько кнопок показывать за раз
                handlePaginationBtnClick={handlePaginationBtn} //Что делаем по нажатию на кнопку
            />
            {props.usersPagePreloader
                ? <Preloader/>
                : <UsersList
                    users={props.usersPage.items}
                    toggleFollowUser={props.toggleFollowUser}
                    usersInProcessOfSubscribing={props.usersPage.usersInProcessOfSubscribing}
                />
            }

        </div>
    );
}

export default Users;
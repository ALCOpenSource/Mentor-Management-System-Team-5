import React, { useState, useEffect } from "react";
import styles from "./Chats.module.scss";
import cx from "classnames";
import Button from "@/components/Button/Button";
import { useNavigate, useParams, Outlet } from "react-router-dom";

import emptySelectionIcon from "@/assets/icons/empty-selection-icon.svg";
import useIsMobile from "@/hooks/useIsMobile";
import GenericSideBar from "@/components/GenericSideBar/GenericSideBar";
import cardIcon from "@/assets/images/mentor-manager-thumbnail.svg";
import FilterAndSearch from "@/components/FilterAndSearch/FilterAndSearch";
import ChatListItem from "../ChatListItem/ChatListItem";

const Chats = () => {
  const navigate = useNavigate();
  const params = useParams();
  const isMobile = useIsMobile();
  const [selectedMenuId, setSelectedMenuId] = useState(params.id);
  const [openSideBar, setOpenSideBar] = useState(true);

  // Temp fix for handling empty message history
  // const [messageHistory, setMessageHistory] = useState([]);
  const messageHistory = [];

  useEffect(() => {
    !isMobile && setOpenSideBar(true);
  }, [isMobile]);

  useEffect(() => {
    setSelectedMenuId(params.id);
  }, [params.id]);

  // const [showSearchInput, setShowSearchInput] = useState(false);

  const menuItemsArray = [
    {
      id: 1,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview:
        "Lorem is such a text here and more lorem text to test the overflow of the text and more lorem text to test the overflow of the text",
      count: 50
    },
    {
      id: 2,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    },
    {
      id: 3,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    },
    {
      id: 4,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    },
    {
      id: 5,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    },
    {
      id: 6,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    },
    {
      id: 7,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    },
    {
      id: 8,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    },
    {
      id: 9,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    },
    {
      id: 10,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    },
    {
      id: 11,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    },
    {
      id: 12,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    },
    {
      id: 13,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    },
    {
      id: 14,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    },
    {
      id: 15,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    },
    {
      id: 16,
      name: "Peculiar C Umeh",
      time: "30m",
      profileImage: cardIcon,
      messagePreview: "Lorem is such a text here",
      count: 5
    }
  ];

  const getMenuItems = () => {
    let listItems = menuItemsArray.map((item, index) => {
      return {
        component: <ChatListItem key={index} data={item} />,
        id: item.id
      };
    });

    const headerComponent = (
      <FilterAndSearch searchData={handleSearchInput} inputPlaceholder='Search for contact...' mode='search' />
    );

    return { listItems, headerComponent };
  };

  const handleSearchInput = (data) => {
    console.log(data);
  };

  // const handleSelectedFilterItem = (item) => {
  //   console.log(item);
  // };

  // const handleCloseSidebar = () => {
  //   setOpenSideBar({ open: false, category: "" });
  // };

  const handleSelectedMenuItem = (id) => {
    setSelectedMenuId(id);
    navigate(`${id}`);
    if (isMobile) {
      setOpenSideBar(false);
    } else {
      setOpenSideBar(true);
    }
  };

  return (
    <div className={cx(styles.chatsContainer, "flexCol")}>
      <section className={cx(styles.heading, "flexRow-space-between")}>
        <div className={cx(styles.titleAndToggler, "flexRow")}>
          {/* <div className={cx(styles.togglerDiv, "flexCol-fully-centered")}>
            <img
              className={cx(styles.toggler)}
              src={subMenuIcon}
              alt='toggler'
              onClick={() => setOpenSideBar(!openSideBar)}
            />
            <small className={cx(styles.togglerText)}>MENU</small>
          </div> */}
          <h3 className={cx(styles.title)}>Chats</h3>
        </div>
        {/* <div className={cx(styles.searchSortDiv, "flexRow-align-center")}>
          <SearchIcon className={cx(styles.searchIcon)} onClick={() => setShowSearchInput(!showSearchInput)} />
          {showSearchInput && <input className={cx(styles.searchInput)} type='text' placeholder='Search for tasks' />}
          <SortIcon className={cx(styles.sortIcon)} />
        </div> */}
        <Button
          size={isMobile && "small"}
          onClick={() => navigate("/dashboard/messages/broadcast-message")}
          title='Send Broadcast Message'
        />
      </section>

      <section className={cx(styles.mainBody, "flexRow")}>
        {(openSideBar || !selectedMenuId) && (
          <div className={cx(styles.sidebarWrapper)}>
            <GenericSideBar
              data={getMenuItems()}
              selectedMenuItem={handleSelectedMenuItem}
              activeMenuItemClass='active-task-item'
              closeGenericSideBar={() => setOpenSideBar(false)}
            />
          </div>
        )}

        <div className={cx(styles.content)}>
          {selectedMenuId ? (
            <Outlet />
          ) : Array.isArray(messageHistory) && messageHistory.length === 0 && !isMobile ? (
            <div className={cx(styles.emptySelectionDiv, "flexCol-fully-centered")}>
              <img src={emptySelectionIcon} alt='empty-selection-icon' />
              <p>No item selected yet </p>
              <p>Select an item from the list to view a chat</p>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default Chats;

import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import styles from "./Tasks.module.scss";
import GenericSideBar from "@/components/GenericSideBar/GenericSideBar";
import Button from "@/components/Button/Button";
import backIcon from "@/assets/icons/back-icon.svg";
import subMenuIcon from "@/assets/icons/sub-menu-icon.svg";
import emptySelectionIcon from "@/assets/icons/empty-selection-icon.svg";
import TaskListItem from "./TaskListItem/TaskListItem";
import useIsMobile from "@/hooks/useIsMobile";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";
import { getAllTasks, getCompletedTasks, getInprogressTasks } from "@/redux/Tasks/TasksSlice";
import { useDispatch, useSelector } from "react-redux";

function Tasks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const isMobile = useIsMobile();
  const [selectedMenuId, setSelectedMenuId] = useState(params.id);
  const [openSideBar, setOpenSideBar] = useState(false);

  const allTasksData = useSelector((state) => state.tasks.getAllTasksData);
  const allCompletedTasksData = useSelector((state) => state.tasks.getCompletedTasksData);
  const allInprogressTasksData = useSelector((state) => state.tasks.getInprogressTasksData);
  const allTasksDataLoading = useSelector((state) => state.loading.getAllTasksLoading);
  const allCompletedTasksDataLoading = useSelector((state) => state.loading.getCompletedTasksLoading);
  const allInprogressTasksDataLoading = useSelector((state) => state.loading.getInprogressTasksLoading);

  useEffect(() => {
    dispatch(getAllTasks());
    setSelectedMenuId(params.id);
  }, [dispatch, params.id]);

  const [taskData, setTaskData] = useState(allTasksData);
  const [taskDataLoading, setTaskDataLoading] = useState(allTasksDataLoading);
  const [filterValue, setFilterValue] = useState("All");

  useEffect(() => {
    if (filterValue === "All") {
      setTaskData(allTasksData);
      setTaskDataLoading(allTasksDataLoading);
    } else if (filterValue === "Completed") {
      setTaskData(allCompletedTasksData);
      setTaskDataLoading(allCompletedTasksDataLoading);
    } else if (filterValue === "In-progress") {
      setTaskData(allInprogressTasksData);
      setTaskDataLoading(allInprogressTasksDataLoading);
    }
  }, [
    allTasksData,
    allCompletedTasksData,
    allInprogressTasksData,
    allTasksDataLoading,
    allCompletedTasksDataLoading,
    allInprogressTasksDataLoading,
    filterValue
  ]);

  useEffect(() => {
    isMobile ? setOpenSideBar(false) : setOpenSideBar(true);
  }, [isMobile]);

  const [collapseInput, setCollapseInput] = useState(true);
  const [closeSelectElement, setCloseSelectElement] = useState(false);

  const handleCloseSearchInput = () => {
    setCollapseInput(true);
  };

  const handleCloseSelectElement = () => {
    setCloseSelectElement(true);
  };

  const getSideBarData = () => {
    let listItems =
      Array.isArray(taskData) &&
      taskData.map((item, index) => {
        return {
          component: <TaskListItem key={index} data={item} />,
          id: item.id
        };
      });

    const headerComponent = (
      <div className={cx(styles.sideBarHeader, "flexRow-align-center")}>
        <div
          style={{ display: !isMobile && !collapseInput ? "none" : "flex" }}
          className={cx(styles.titleDiv, "flexRow-align-center")}
        >
          {isMobile && (
            <img
              onClick={() => setOpenSideBar(!openSideBar)}
              src={backIcon}
              className={cx(styles.backIcon)}
              alt='close-icon'
            />
          )}
          {collapseInput && <h3 className={cx(styles.title)}>Tasks</h3>}
        </div>
        <div className={cx(styles.searchWrapper)}>
          <Search
            inputPlaceholder='Search for tasks...'
            onChange={handleSearchInput}
            collapseInput={collapseInput}
            setCollapseInput={setCollapseInput}
            closeSelectElement={handleCloseSelectElement}
          />
        </div>
        <Filter
          dropdownItems={[
            { name: "All", id: 1 },
            { name: "Completed", id: 2 },
            { name: "In-progress", id: 3 }
          ]}
          selectedFilterItem={handleSelectedFilterItem}
          closeSearchInput={handleCloseSearchInput}
          closeSelectElement={closeSelectElement}
          setCloseSelectElement={setCloseSelectElement}
        />
      </div>
    );

    return { listItems, headerComponent };
  };

  const handleSearchInput = (data) => {
    console.log(data);
  };

  const handleSelectedFilterItem = (value) => {
    setFilterValue(value);
    navigate("/dashboard/tasks");
    value === "All"
      ? dispatch(getAllTasks())
      : value === "Completed"
      ? dispatch(getCompletedTasks())
      : dispatch(getInprogressTasks());
    setSelectedMenuId(null);
  };

  const handleSelectedMenuItem = (id) => {
    setSelectedMenuId(id);
    navigate(`task-details/${id}`);
  };

  return (
    <div className={cx(styles.tasksContainer, "flexRow")}>
      {openSideBar && (
        <div className={cx(styles.sidebarWrapper)}>
          <GenericSideBar
            data={getSideBarData()}
            selectedMenuItem={handleSelectedMenuItem}
            closeGenericSideBar={() => setOpenSideBar(false)}
            loading={taskDataLoading}
          />
        </div>
      )}

      <section className={cx(styles.mainBody, "flexCol")}>
        <section className={cx(styles.heading, "flexRow-space-between")}>
          <div className={cx(styles.titleAndToggler, "flexRow")}>
            <div className={cx(styles.togglerDiv, "flexCol-fully-centered")}>
              <img
                className={cx(styles.toggler)}
                src={subMenuIcon}
                alt='toggler'
                onClick={() => setOpenSideBar(!openSideBar)}
              />
              <small className={cx(styles.togglerText)}>MENU</small>
            </div>
            <h3 className={cx(styles.title)}>Tasks</h3>
          </div>
          <Button title='Create New Task' onClick={() => navigate("create-task")} />
        </section>

        <div className={cx(styles.content)}>
          {selectedMenuId ? (
            <Outlet />
          ) : (
            <div className={cx(styles.emptySelectionDiv, "flexCol-fully-centered")}>
              <img src={emptySelectionIcon} alt='empty-selection-icon' />
              <p>No item selected yet </p>
              <p>Select an item from the list to view task details</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Tasks;

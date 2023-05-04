import React, { useState, useEffect, useMemo } from "react";
import cx from "classnames";
import styles from "./MentorDetails.module.scss";
import mentorImage from "@/assets/images/sample-profile-image.svg";
import GenericSideBar from "@/components/GenericSideBar/GenericSideBar";
import UserComponent from "../UserComponent/UserComponent";
import FilterAndSearch from "@/components/FilterAndSearch/FilterAndSearch";
import Button from "@/components/Button/Button";
import useIsMobile from "@/hooks/useIsMobile";
import Tabs from "@/components/Tabs/Tabs";

import flagIcon from "@/assets/icons/flag-icon.svg";
import subMenuIcon from "@/assets/icons/sub-menu-icon.svg";

const MentorDetails = () => {
  const isMobile = useIsMobile();
  const [openSideBar, setOpenSideBar] = useState(true);
  const [activeTab, setActiveTab] = useState("mentees");
  const [selectedUser, setSelectedUser] = useState(null);

  const mentorsArray = useMemo(
    () => [
      {
        id: 1,
        name: "Kabiru Omo Isaka",
        designation: "Program Assistant, Andela, He/Him",
        image: mentorImage,
        positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
      },
      {
        id: 2,
        name: "Kabiru Omo Isaka",
        designation: "Program Assistant, Andela, He/Him",
        image: mentorImage,
        positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
      },
      {
        id: 3,
        name: "Kabiru Omo Isaka",
        designation: "Program Assistant, Andela, He/Him",
        image: mentorImage,
        positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
      },
      {
        id: 4,
        name: "Kabiru Omo Isaka",
        designation: "Program Assistant, Andela, He/Him",
        image: mentorImage,
        positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
      },
      {
        id: 5,
        name: "Kabiru Omo Isaka",
        designation: "Program Assistant, Andela, He/Him",
        image: mentorImage,
        positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
      },
      {
        id: 6,
        name: "Kabiru Omo Isaka",
        designation: "Program Assistant, Andela, He/Him",
        image: mentorImage,
        positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
      },
      {
        id: 7,
        name: "Kabiru Omo Isaka",
        designation: "Program Assistant, Andela, He/Him",
        image: mentorImage,
        positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
      },
      {
        id: 8,
        name: "Kabiru Omo Isaka",
        designation: "Program Assistant, Andela, He/Him",
        image: mentorImage,
        positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
      },
      {
        id: 9,
        name: "Kabiru Omo Isaka",
        designation: "Program Assistant, Andela, He/Him",
        image: mentorImage,
        positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
      },
      {
        id: 10,
        name: "Kabiru Omo Isaka",
        designation: "Program Assistant, Andela, He/Him",
        image: mentorImage,
        positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
      }
    ],
    []
  );

  useEffect(() => {
    if (isMobile) {
      setOpenSideBar(false);
    } else {
      setOpenSideBar(true);
    }
    setSelectedUser(mentorsArray[0]);
  }, [isMobile, mentorsArray]);

  const handleSelectedItem = (item) => {
    console.log(item);
  };

  const handleOpenSideBar = (e, open) => {
    e.preventDefault();
    setOpenSideBar(open);
  };

  const handleSearchInput = (e) => {
    console.log(e.target.value);
  };

  const handleSelectedFilterItem = (item) => {
    console.log(item);
  };

  const handleCloseSidebar = () => {
    setOpenSideBar(false);
  };

  const getListComponents = (data) => {
    const listItems =
      Array.isArray(data) &&
      data.map((item, index) => {
        return {
          component: <UserComponent key={index} data={item} />,
          id: item.id
        };
      });

    const headerComponent = (
      <FilterAndSearch
        closeSideBar={handleCloseSidebar}
        dropdownItems={[
          { name: "All", id: 1 },
          { name: "Mentors", id: 2 },
          { name: "Mentor Managers", id: 3 }
        ]}
        searchData={handleSearchInput}
        selectedFilterItem={handleSelectedFilterItem}
        showCloseIcon={true}
        inputPlaceholder='Search for mentor...'
      />
    );

    return { listItems, headerComponent };
  };

  return (
    <div className={cx(styles.mentorDetailsContainer, "flexCol")}>
      {openSideBar ? (
        <div className={cx(styles.sideBarSection)}>
          <GenericSideBar selectedMenuItem={handleSelectedItem} data={getListComponents(mentorsArray)} />
        </div>
      ) : null}

      <div className={cx(styles.outletDiv, "flexCol")}>
        <div className={cx(styles.outletHeading, "flexRow")}>
          <div className={cx(styles.profile, "flexCol")}>
            <div className={cx(styles.bioSummary, "flexRow-align-center")}>
              <img className={cx(styles.profileImage)} src={selectedUser?.image} alt='profile-image' />

              <div className={cx(styles.info, "flexRow")}>
                <div className={cx(styles.nameAndRole, "flexCol")}>
                  <p className={cx(styles.name)}>{selectedUser?.name}</p>
                  <p className={cx(styles.role)}>{selectedUser?.role || "Mentor"}</p>
                </div>

                <img className={cx(styles.flagIcon)} src={flagIcon} alt='flag' />
              </div>
            </div>
            <div className={cx(styles.btnGroup, "flexRow-align-center")}>
              <Button title='Send Message' size={"small"} className={cx(styles.editBtn)} />
              <Button type='secondary' title='Close' size={"small"} className={cx(styles.viewBtn)} />
            </div>
          </div>
          {isMobile && (
            <div className={cx(styles.togglerDiv, "flexCol-fully-centered")}>
              <img
                className={cx(styles.toggler)}
                src={subMenuIcon}
                alt='toggler'
                onClick={(e) => handleOpenSideBar(e, true)}
              />
              <small className={cx(styles.togglerText)}>All Users</small>
            </div>
          )}
        </div>

        <div className={cx(styles.outletBody, "flexCol")}>
          <div className={cx(styles.bodyHeader)}>
            <Tabs />
          </div>

          <div className={cx(styles.rest)}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos explicabo iusto voluptate officia dolor
            maiores possimus deserunt, veritatis sit blanditiis odit, mollitia earum, libero natus quasi assumenda
            pariatur eveniet corporis. Architecto libero sed amet quos commodi facilis consequatur delectus modi
            corporis id itaque, ut nihil velit adipisci fugit deleniti ipsum nulla necessitatibus quis dolore culpa?
            Deleniti asperiores quisquam incidunt adipisci! Fuga veritatis pariatur beatae nam dolorum iure aut facilis
            voluptatibus, earum dignissimos sint voluptas provident autem, aperiam ipsum, dicta harum animi ducimus
            debitis illo quo accusantium recusandae. Natus, numquam ipsam! Quibusdam commodi doloribus amet accusantium,
            vel pariatur nam consequuntur voluptatibus soluta cupiditate ullam autem nobis voluptate. Enim non totam
            sit, incidunt quaerat dolor rerum error molestias inventore. Laudantium, maiores amet! Suscipit, obcaecati!
            Doloremque sapiente fuga eaque, culpa repudiandae cumque, esse sunt harum atque, totam velit. Nemo obcaecati
            illo eligendi iure laboriosam inventore quisquam consequatur. Aut commodi unde voluptatibus pariatur
            similique. Ipsam nihil est harum distinctio. Modi labore laborum hic eligendi. Doloribus id ipsum, harum
            ducimus saepe aut nobis omnis, vel ipsa blanditiis quia! Fuga, minima. Asperiores itaque saepe repellendus
            veniam? Tempore commodi voluptate, fuga est libero exercitationem ipsam magni iste. Vel dicta voluptate
            temporibus maxime illum, porro magni autem? Facere, fugiat odit earum perspiciatis saepe necessitatibus at
            explicabo pariatur perferendis? Eaque modi delectus labore consequatur ipsa iusto necessitatibus architecto
            tempore. Earum explicabo alias voluptatibus quis, natus laudantium aliquid sapiente officia facere,
            exercitationem ratione. Ab quis recusandae nobis aperiam fugit dicta. Quod, autem facilis, ipsa
            reprehenderit quo, tenetur consectetur ex assumenda reiciendis quidem quas vitae? Expedita qui perferendis
            assumenda? Vel eaque quo perspiciatis? Perferendis facere facilis quibusdam earum excepturi accusamus in?
            Eos quisquam ea culpa magni doloremque minima sunt dolor distinctio voluptatem unde recusandae, illo veniam
            molestias possimus id laboriosam voluptate minus quod illum aspernatur! Rerum odit vel odio pariatur
            voluptatibus. Dolorum quasi, nostrum ex facere sit blanditiis beatae reiciendis delectus autem sint est
            sequi dicta aliquid aut, nihil doloribus quo odio reprehenderit quisquam placeat aspernatur! Sed totam
            repudiandae perspiciatis a. Aliquid quia ab rem asperiores a! Praesentium aperiam dolorum sint fugiat dolore
            quam temporibus saepe explicabo minus modi voluptatibus culpa officiis unde ea nobis perferendis
            consequuntur, sit obcaecati nam facilis? Non, voluptatem incidunt cum consectetur reprehenderit quos ratione
            nihil ex soluta perspiciatis corrupti atque nulla quod eveniet vitae consequatur ut, error nobis excepturi
            reiciendis officiis. Praesentium neque mollitia recusandae facere? Mollitia numquam assumenda possimus
            labore dignissimos ipsum recusandae adipisci earum facere aperiam pariatur sequi voluptatem voluptate
            officiis deserunt, id enim totam laborum corrupti consequatur repellendus? Eos, natus! Facilis, ipsam
            molestiae? Suscipit quisquam repellendus vero corporis numquam nulla earum provident ut reprehenderit
            officia dolores quaerat ullam nam accusantium fugit quam iste, modi velit culpa amet nihil sapiente itaque
            consectetur accusamus! Dolore. Libero officiis, ex, eligendi asperiores incidunt placeat omnis assumenda, ab
            deleniti quisquam similique quaerat! Debitis facere tempora eligendi aliquam, recusandae, error dolor
            laborum harum non dolore magnam magni enim vitae. A, hic earum maxime enim ut illum sunt possimus debitis et
            facilis laboriosam tenetur dolore ab accusamus labore! Illum, quae. Doloremque odio excepturi minima eos
            ullam vel voluptates debitis tempore! Recusandae quisquam perferendis dolore eum, voluptatem dolorum autem
            quis, fuga nulla labore minus molestiae, officia enim laudantium animi incidunt magni dicta pariatur
            impedit? Reiciendis harum est tempore, provident voluptas doloribus. Sed nesciunt, cum quidem laborum illo
            voluptas at dolores earum itaque, eos quo, aperiam magni corporis id adipisci autem necessitatibus! Quia
            tempora maiores earum pariatur incidunt culpa nesciunt repudiandae vitae? Rerum, officia sed natus quaerat
            officiis quas porro aspernatur rem cum cumque. Mollitia ex reprehenderit totam quis sequi harum atque
            laborum velit, culpa doloribus reiciendis nesciunt voluptate quasi temporibus consequatur.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetails;

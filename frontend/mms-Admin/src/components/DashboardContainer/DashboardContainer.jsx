import React from "react";
import PropTypes from "prop-types";


import DashboardHeader from "../DashboardHeader/DashboardHeader";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import DashboardContent from "@/components/DashboardContent/DashboardContent";

const DashboardContainer = (props) => {
  const { children } = props;

  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      <DashboardContent> {children} </DashboardContent>
    </div>
  );
};

DashboardContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DashboardContainer;

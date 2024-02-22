// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DashSideBar from "../../components/DashSideBar/DashSideBar";
import DashProfile from "../../components/DashProfile/DashProfile";

function DashboardPage() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="md:w-56">
          {/* Sidebar */}
          <DashSideBar />
        </div>
        <div className="">
          {/* Profile */}
          {tab === "profile" && <DashProfile />}
        </div>
      </div>
    </>
  );
}

export default DashboardPage;

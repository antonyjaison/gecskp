import React from "react";
import {
  DepartmentHod,
  DepartmentMissionVision,
  DepartmentQuickLinks,
} from "../../Components/Department/Department";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "../AdministrativePage/AdministrativePage.css";
import { CommonBanner } from "../OrganisationalChartPage/OrganisationalChartPage";

const AdminOfficeSection = () => {
  return (
    <>
      <div className="admin_office_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 admin_section mt-5">
              <h3>Sections</h3>
              <DepartmentMissionVision
                vision="Excellence through the wings of science and technology ."
                mission="To transform youth to talented engineers with creativity and integrity who can meet the technological challenges for the service of society."
              />
            </div>
            <div className="col-lg-4">
              <DepartmentHod
                title="Administrative Assistant"
                hodName="Sri. V.M. Shine"
                email="apbrshine@gmail.com"
                mobileno="97455 54255"
              />
              <DepartmentQuickLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function AdministrativePage() {
  return (
    <div>
      <Header />
      <CommonBanner title={"Administrative Office"} />
      <AdminOfficeSection />
      <Footer />
    </div>
  );
}

export default AdministrativePage;

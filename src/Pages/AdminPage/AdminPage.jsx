import React from "react";
import AdminAnnouncementForm from "../../Components/AdminAnnouncementForm/AdminAnnouncementForm";
import AdminNewsForm from "../../Components/AdminNewsForm/AdminNewsForm";
import "../AdminPage/AdminPage.css";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import AdminEventForm from "../../Components/AdminEventForm/AdminEventForm";
import AdminData from "../../Components/AdminData/AdminData";

function AdminPage() {
  const [adminFormStatus, setAdminFormStatus] = useState("news");

  return (
    // <div className="adminPage">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-6">
    //         <div className="adminPage_btns">
    //           <button
    //             onClick={() => {
    //               setAdminFormStatus("news");
    //             }}
    //             className={
    //               adminFormStatus === "news" ? "active_admin_btn" : "admin_btn"
    //             }
    //           >
    //             News
    //           </button>
    //           <button
    //             onClick={() => {
    //               setAdminFormStatus("announcements");
    //             }}
    //             className={
    //               adminFormStatus === "announcements"
    //                 ? "active_admin_btn"
    //                 : "admin_btn"
    //             }
    //           >
    //             Announcement
    //           </button>
    //           <button
    //             onClick={() => {
    //               setAdminFormStatus("event");
    //             }}
    //             className={
    //               adminFormStatus === "event" ? "active_admin_btn" : "admin_btn"
    //             }
    //           >
    //             Events
    //           </button>
    //           <button
    //             onClick={() => {
    //               setAdminFormStatus("faculty");
    //             }}
    //             className="admin_btn"
    //           >
    //             Faculty
    //           </button>
    //           <button
    //             onClick={() => {
    //               setAdminFormStatus("achivements");
    //             }}
    //             className="admin_btn"
    //           >
    //             Achivements
    //           </button>
    //         </div>
    //         <div className="">
    //           {adminFormStatus === "news" ? <AdminNewsForm /> : ""}
    //           {adminFormStatus === "announcements" ? (
    //             <AdminAnnouncementForm />
    //           ) : (
    //             ""
    //           )}
    //           {adminFormStatus === "event" ? <AdminEventForm /> : ""}
    //         </div>
    //       </div>

    //       <div className="col-lg-6 admin_data_section">
    //         {adminFormStatus === "news" ? <AdminData /> : ""}
    //         {adminFormStatus === "announcements" ? <AdminData /> : ""}
    //         {adminFormStatus === "event" ? <AdminData /> : ""}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="admin_page_body">
        <div className="row">
          <div className="col-lg-3">
            <Accordion allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Academics</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="admin_accor_para">
                  <p>Courses</p>
                  <p>Admission</p>
                  <p>Rules & Regulation</p>
                  <p>Syllabus</p>
                  <p>AICTE Mandatory Disclosure</p>
                  <p>Affilations & Approvals</p>
                  <p>NIRF 2020 Application</p>
                  <p>IQAC</p>
                  <p>KTU Toppers</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Administration</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="admin_accor_para">
                  <p>BoG</p>
                  <p>Organizational Chart</p>
                  <p>Heads Of Departments</p>
                  <p>Administrative Offiice</p>
                  <p>Complaint Committee</p>
                  <p>Continuing Education Cell</p>
                  <p>Tenders & Quotations</p>
                  <p>Counselling And Guidance</p>
                  <p>Anti Ragging Committee</p>
                  <p>Women's Cell</p>
                  <p>Grievance Cell</p>
                  <p>RTI Act</p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;

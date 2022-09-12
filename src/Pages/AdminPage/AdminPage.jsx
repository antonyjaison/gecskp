import React from "react";
import AdminAnnouncementForm from "../../Components/AdminAnnouncementForm/AdminAnnouncementForm";
import AdminNewsForm from "../../Components/AdminNewsForm/AdminNewsForm";
import "../AdminPage/AdminPage.css";
import { useState } from "react";
import AdminEventForm from "../../Components/AdminEventForm/AdminEventForm";
import AdminData from "../../Components/AdminData/AdminData";
import { db } from "../../firebase";
import { collection,addDoc,Timestamp } from "firebase/firestore";

function AdminPage() {
  const [adminFormStatus, setAdminFormStatus] = useState("news");

  return (
    <div className="adminPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="adminPage_btns">
              <button
                onClick={() => {
                  setAdminFormStatus("news");
                }}
                className={
                  adminFormStatus === "news" ? "active_admin_btn" : "admin_btn"
                }
              >
                News
              </button>
              <button
                onClick={() => {
                  setAdminFormStatus("announcements");
                }}
                className={
                  adminFormStatus === "announcements"
                    ? "active_admin_btn"
                    : "admin_btn"
                }
              >
                Announcement
              </button>
              <button
                onClick={() => {
                  setAdminFormStatus("event");
                }}
                className={
                  adminFormStatus === "event" ? "active_admin_btn" : "admin_btn"
                }
              >
                Events
              </button>
              <button
                onClick={() => {
                  setAdminFormStatus("faculty");
                }}
                className="admin_btn"
              >
                Faculty
              </button>
              <button
                onClick={() => {
                  setAdminFormStatus("achivements");
                }}
                className="admin_btn"
              >
                Achivements
              </button>
            </div>
            <div className="">
              {adminFormStatus === "news" ? <AdminNewsForm /> : ""}
              {adminFormStatus === "announcements" ? (
                <AdminAnnouncementForm />
              ) : (
                ""
              )}
              {adminFormStatus === "event" ? <AdminEventForm /> : ""}
            </div>
          </div>

          <div className="col-lg-6 admin_data_section">
            {adminFormStatus === "news" ? <AdminData /> : ""}
            {adminFormStatus === "announcements" ? <AdminData /> : ""}
            {adminFormStatus === "event" ? <AdminData /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

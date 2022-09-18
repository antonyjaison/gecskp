import React from "react";
import { AdminLine } from "../AdminCourse/AdminCourse";
import { adminStyle } from "../AdminCourse/AdminCourse";

export const AdminInputStyle = {
  width: "60%",
  marginTop: "15px",
  padding:'8px'
};
export const AdminBtnStyle = {
    marginTop:'15px',
    padding:'8px,'
}

function AdminAdmission() {
  return (
    <>
      <div style={adminStyle} className="row">
        <div className="col-lg-6">
          <h3>Admission Help</h3>
          <input style={AdminInputStyle} type="text" placeholder="what Query" />
          <input style={AdminInputStyle} type="text" placeholder="Name of Faculty" />
          <input style={AdminInputStyle} type="text" placeholder="Position odf the faculty" />
          <input style={AdminInputStyle} type="text" placeholder="mail id of the faculty" />
          <input style={AdminInputStyle} type="text" placeholder="phone number of the faculty" /> 
          <br />
          <button style={AdminBtnStyle}>Add Faculty </button>
          <AdminLine />
        </div>

        <div className="col-lg-6">
          <h3>Faculties for admission help</h3>

          <p style={{ fontSize: "22px", margin: "0" }}>
            <b>Admission 2022-23</b>
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ex,
            sed animi possimus, modi excepturi dicta sapiente inventore illo
            ipsam cupiditate quod aspernatur accusantium eius obcaecati rerum
            quis, molestias iste.
          </p>
        </div>
      </div>
    </>
  );
}

export default AdminAdmission;

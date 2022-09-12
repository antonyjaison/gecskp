import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import EventPage from "./Pages/EventPage/EventPage";
import HomePage from "./Pages/HomePage/HomePage";
import NewsPage from "./Pages/NewsPage/NewsPage";
import NotFoundPage from "./Pages/NotFoundPage.jsx/NotFoundPage";
import AnnouncementPage from "./Pages/AnnouncementPage/AnnouncementPage";
import { LanguageContext } from "./Context/LanguageContext";
import { useState } from "react";
import AdminPage from "./Pages/AdminPage/AdminPage";
import PdfView from "./Components/PdfView/PdfView";
import pdf from "../src/pdf_files/Circular.pdf";
import DepartmentPage from "./Pages/DepartmentPage/DepartmentPage";
import { departmentStore } from "./Store/DepartmentStore";
import DeptData from "./jsonFiles/HOD.json";
import CoursePage from "../src/Pages/CoursePage/CoursePage";
import SyllabusPage from '../src/Pages/SyllabusPage/SyllabusPage'
import AffliationsAndApprovals from '../src/Pages/AffliationsAndApprovalsPage/AffliationsAndApprovalsPage'
import OrganisationalChartPage from "../src/Pages/OrganisationalChartPage/OrganisationalChartPage";
import AdmissionPage from "./Pages/AdmissionPage/AdmissionPage";
import { PdfContext } from "./Context/PdfContext";


function App() {
  const [language, setLanguage] = useState(false);
  const setDepartments = departmentStore((state) => state.setDepartments);
  setDepartments(DeptData);

  return (
    <div>
      
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="events" element={<EventPage />} />
              <Route path="announcement" element={<AnnouncementPage />} />
              <Route path="adminpage" element={<AdminPage />} />
              <Route path={pdf} element={<PdfView />} />
              <Route path={"department/:id"} element={<DepartmentPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route
                path={"organisational_chart"}
                element={<OrganisationalChartPage />}
              />
              <Route path={"/syllabus"} element={<SyllabusPage />} />
              <Route
                path={"/affliations"}
                element={<AffliationsAndApprovals />}
              />
              <Route path="/courses" element={<CoursePage />} />
              <Route path="/admission" element={<AdmissionPage />} />
            </Routes>
          </BrowserRouter>
        </LanguageContext.Provider>
      
    </div>
  );
}

export default App;

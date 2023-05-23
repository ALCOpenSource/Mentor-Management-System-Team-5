// eslint-disable-next-line no-unused-vars
import React, { lazy } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Authentication
import Login from "@/pages/Authentication/Login/Login";
import SignUp from "@/pages/Authentication/SignUp/SignUp";
import CategorySelector from "@/pages/Authentication/SignUp/CategorySelector/CategorySelector";
import SignUpConfirmation from "@/pages/Authentication/SignUp/Confirmation/Confirmation";
import ForgotPassword from "@/pages/Authentication/ForgotPassword/ForgotPassword";
import ResetPassword from "@/pages/Authentication/ResetPassword/ResetPassword";

// Authenticated Routes
import AuthenticatedRoutes from "@/components/AuthenticatedRoutes/AuthenticatedRoutes";
import userRoles from "@/constants/userRoles";

// Dashboard
import DashboardContainer from "@/components/DashboardContainer/DashboardContainer";
const Home = lazy(() => import("@/pages/Dashboard/Home/Home"));
const ApprovalRequests = lazy(() => import("@/pages/Dashboard/ApprovalRequests/ApprovalRequests"));
const Certificates = lazy(() => import("@/pages/Dashboard/Certificates/Certificates"));
const Profile = lazy(() => import("@/pages/Dashboard/Profile/Profile"));


//Programs
const Programs = lazy(() => import("@/pages/Dashboard/Programs/Programs"));
const ProgramDetails = lazy(() => import("@/pages/Dashboard/Programs/ProgramDetails/ProgramDetails"));
const CreateProgram = lazy(() => import("@/pages/Dashboard/Programs/CreateProgram/CreateProgram"));
const CreateCriteria = lazy(() => import("@/pages/Dashboard/Programs/CreateProgram/CreateCriteria/CreateCriteria"));


// Mentors
const Mentors = lazy(() => import("@/pages/Dashboard/Mentors/Mentors"));
const MentorDetails = lazy(() => import("@/pages/Dashboard/Mentors/MentorDetails/MentorDetails"));
const MentorDetailsAbout = lazy(() => import("@/pages/Dashboard/Mentors/MentorDetails/About/About"));
const MentorDetailsPrograms = lazy(() => import("@/pages/Dashboard/Mentors/MentorDetails/Programs/Programs"));
const MentorDetailsCertificates = lazy(() =>
  import("@/pages/Dashboard/Mentors/MentorDetails/Certificates/Certificates")
);
const MentorDetailsTasks = lazy(() => import("@/pages/Dashboard/Mentors/MentorDetails/Tasks/Tasks"));

// MentorManagers
const MentorManagers = lazy(() => import("@/pages/Dashboard/MentorManagers/MentorManagers"));
const MentorManagerDetails = lazy(() =>
  import("@/pages/Dashboard/MentorManagers/MentorManagerDetails/MentorManagerDetails")
);
const MentorManagerDetailsAbout = lazy(() =>
  import("@/pages/Dashboard/MentorManagers/MentorManagerDetails/About/About")
);
const MentorManagerDetailsPrograms = lazy(() =>
  import("@/pages/Dashboard/MentorManagers/MentorManagerDetails/Programs/Programs")
);
const MentorManagerDetailsMentors = lazy(() =>
  import("@/pages/Dashboard/MentorManagers/MentorManagerDetails/Mentors/Mentors")
);
const MentorManagerDetailsCertificates = lazy(() =>
  import("@/pages/Dashboard/MentorManagers/MentorManagerDetails/Certificates/Certificates")
);
const MentorManagerDetailsTasks = lazy(() =>
  import("@/pages/Dashboard/MentorManagers/MentorManagerDetails/Tasks/Tasks")
);

// Messages
const Messages = lazy(() => import("@/pages/Dashboard/Messages/Messages"));
const BroadcastMessage = lazy(() => import("@/pages/Dashboard/Messages/BroadcastMessage/BroadcastMessage"));
const Chats = lazy(() => import("@/pages/Dashboard/Messages/Chats/Chats"));
const ChatDetails = lazy(() => import("@/pages/Dashboard/Messages/ChatDetails/ChatDetails"));
const AllPersonels = lazy(() => import("@/pages/Dashboard/Messages/AllPersonels/AllPersonels"));

// Settings
const Settings = lazy(() => import("@/pages/Dashboard/Settings/Settings"));
const SettingsGeneral = lazy(() => import("@/pages/Dashboard/Settings/General/General"));
const SettingsPassword = lazy(() => import("@/pages/Dashboard/Settings/Password/Password"));
const SettingsFAQ = lazy(() => import("@/pages/Dashboard/Settings/FAQ/FAQ"));
const SettingsSupport = lazy(() => import("@/pages/Dashboard/Settings/Support/Support"));
const SettingsArchive = lazy(() => import("@/pages/Dashboard/Settings/Archive/Archive"));
const SettingsPrivacy = lazy(() => import("@/pages/Dashboard/Settings/Privacy/Privacy"));
const SettingsNotifications = lazy(() => import("@/pages/Dashboard/Settings/Notifications/Notifications"));

// Tasks
const Tasks = lazy(() => import("@/pages/Dashboard/Tasks/Tasks"));
const TaskDetails = lazy(() => import("@/pages/Dashboard/Tasks/TaskDetails/TaskDetails"));
const CreateTask = lazy(() => import("@/pages/Dashboard/Tasks/CreateTask/CreateTask"));
const EditTask = lazy(() => import("@/pages/Dashboard/Tasks/EditTask/EditTask"));

// Discussion Forum
const DiscussionForum = lazy(() => import("@/pages/Dashboard/DiscussionForum/DiscussionForum"));
const PostDetails = lazy(() => import("@/pages/Dashboard/DiscussionForum/PostDetails/PostDetails"));

// Reports
const Reports = lazy(() => import("@/pages/Dashboard/Reports/Reports"));
const CreateReport = lazy(() => import("@/pages/Dashboard/Reports/CreateReport/CreateReport"));
const ReportDetails = lazy(() => import("@/pages/Dashboard/Reports/ReportDetails/ReportDetails"));

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up/:category' element={<SignUp />} />
        <Route path='/sign-up-category-selector' element={<CategorySelector />} />
        <Route path='/sign-up-confirmation' element={<SignUpConfirmation />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />

        <Route
          path='/dashboard'
          element={<AuthenticatedRoutes roles={[userRoles.admin]}>
              <DashboardContainer>
                <Outlet />
              </DashboardContainer>
            </AuthenticatedRoutes>}
        >
          <Route index path='' element={<Home />} />
          <Route path='settings' element={<Settings />}>
            <Route index path='' element={<SettingsGeneral />} />
            <Route path='password' element={<SettingsPassword />} />
            <Route path='faq' element={<SettingsFAQ />} />
            <Route path='support' element={<SettingsSupport />} />
            <Route path='archive' element={<SettingsArchive />} />
            <Route path='privacy' element={<SettingsPrivacy />} />
            <Route path='notifications' element={<SettingsNotifications />} />
          </Route>
          <Route path='approval-requests' element={<ApprovalRequests />} />
          <Route index path='certificates' element={<Certificates />} />
          <Route path='discussion-forum'>
            <Route index path='' element={<DiscussionForum />} />
            <Route path='post-details/:id' element={<PostDetails />} />
          </Route>
          <Route path='mentor-managers'>
            <Route index path='' element={<MentorManagers />} />
            <Route path='mentor-manager-details/:id' element={<MentorManagerDetails />}>
              <Route path='' element={<MentorManagerDetailsAbout />} />
              <Route path='about' element={<MentorManagerDetailsAbout />} />
              <Route path='programs' element={<MentorManagerDetailsPrograms />} />
              <Route path='mentors' element={<MentorManagerDetailsMentors />} />
              <Route path='certificates' element={<MentorManagerDetailsCertificates />} />
              <Route path='tasks' element={<MentorManagerDetailsTasks />} />
            </Route>
          </Route>
          <Route path='mentors'>
            <Route index path='' element={<Mentors />} />
            <Route path='mentor-details/:id' element={<MentorDetails />}>
              <Route path='' element={<MentorDetailsAbout />} />
              <Route path='about' element={<MentorDetailsAbout />} />
              <Route path='programs' element={<MentorDetailsPrograms />} />
              <Route path='certificates' element={<MentorDetailsCertificates />} />
              <Route path='tasks' element={<MentorDetailsTasks />} />
            </Route>
          </Route>
          <Route path='messages'>
            <Route path='' element={<Messages />} />
            <Route path='all-personels' element={<AllPersonels />} />
            <Route path='chats' element={<Chats />}>
              <Route path=':id' element={<ChatDetails />} />
            </Route>
            <Route path='broadcast-message' element={<BroadcastMessage />} />
          </Route>
          <Route index path='profile' element={<Profile />} />
          <Route path='programs'>
              <Route path='' element={<Programs />}>
                <Route path='program-details/:id' element={<ProgramDetails />} />
                <Route path='create-program'>
                  <Route path='' element={<CreateProgram />} />
                  <Route path='create-criteria' element={<CreateCriteria />} />
                </Route>
              </Route>
          </Route>

          <Route path='reports'>
            <Route path='' element={<Reports />}>
              <Route path='report-details/:id' element={<ReportDetails />} />
            </Route>
            <Route path='create-report' element={<CreateReport />} />
          </Route>
          <Route path='tasks'>
            <Route path='' element={<Tasks />}>
              <Route path='task-details/:id' element={<TaskDetails />} />
            </Route>
            <Route path='create-task' element={<CreateTask />} />
            <Route path='edit-task/:id' element={<EditTask />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;

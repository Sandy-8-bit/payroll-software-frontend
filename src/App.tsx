import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./components/layout/MainLayout";

// Routes
import { appRoutes } from "./routes/appRoutes";
import { Spinner } from "./components/layout/Spinner";

// Pages
const AttendancePage = lazy(() => import("./pages/AttendancePage"));
const DashBoardPage = lazy(() => import("./pages/DashBoardPage"));
const EmployeesPage = lazy(() => import("./pages/EmployeesPage"));
const LoanPage = lazy(() => import("./pages/LoanPage"));
const MasterPage = lazy(() => import("./pages/MasterPage"));
const UsersPage = lazy(() => import("./pages/UsersPage"));

const ErrorPage = lazy(() => import("./pages/ErrorPage"));

// const AuthenticationPage = lazy(() => import("./pages/AuthPage"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-full h-screen">
          <Spinner />
        </div>
      }
    >
      <Routes>
        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<Navigate to={appRoutes.dashboardPage} replace />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path={appRoutes.dashboardPage} element={<DashBoardPage />} />
          <Route path={appRoutes.attendancePage} element={<AttendancePage />} />
          <Route path={appRoutes.employeesPage} element={<EmployeesPage />} />
          <Route path={appRoutes.loanPage} element={<LoanPage />} />
          <Route path={appRoutes.masterPage} element={<MasterPage />} />
          <Route path={appRoutes.usersPage} element={<UsersPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

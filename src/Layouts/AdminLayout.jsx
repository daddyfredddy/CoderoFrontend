import { Outlet } from 'react-router-dom';
import Topbar from '../Pages/Admin/Topbar';
import Sidebar from '../Pages/Admin/Sidebar';

function AdminLayout() {
  return (
    <div className=" flex w-full">
      {/* Fixed sidebar */}

      <div className="w-1/5 bg-gray-900 min-h-screen text-white">
        <Sidebar />
      </div>

      {/* Fixed header */}
      <div className="w-4/5">
        <Topbar />

        {/* Add Outlet component to render the child routes */}
        <main className="pt-4 px-4">
          <div className=" mx-auto py-0">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;

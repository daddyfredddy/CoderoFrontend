import Topbar from '../Components/Admin/Topbar';
import Sidebar from '../Components/Admin/Sidebar';
import ProductionTable from '../Components/Admin/ProductionTable';

function AdminDashboard() {
  return (
    <div className=" flex w-full">
      <div class="w-1/5 bg-gray-900 min-h-screen text-white">
        <Sidebar />
      </div>
      <div class="w-4/5 ">
        <Topbar />
        <div class="p-4">
          <ProductionTable />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

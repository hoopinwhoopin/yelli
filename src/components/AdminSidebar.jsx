import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiInbox,
  HiOutlineLogout,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="h-full">
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                href="/admin/blogs"
                icon={HiViewBoards}
                // label="Pro"
                labelColor="dark"
              >
                Blogs
              </Sidebar.Item>
              <Sidebar.Item href="/admin/photostories" icon={HiInbox}>
                Photo Stories
              </Sidebar.Item>
              <Sidebar.Item href="/admin/videostories" icon={HiUser}>
                Video Stories
              </Sidebar.Item>
              <Sidebar.Item href="/admin/testimonials" icon={HiUser}>
                Testimonials
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div>
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item icon={HiOutlineLogout}>
                <div onClick={handleLogout} className="cursor-pointer">
                  Logout
                </div>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
}
export default AdminSidebar;

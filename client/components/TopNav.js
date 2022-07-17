import { Menu } from "antd";
import { useState } from "react";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ToggleTheme from "./ToggleTheme";
import Link from "next/link";

const TopNav = () => {
  const [current, setCurrent] = useState("mail");
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu onClick={handleClick} mode="horizontal" selectedKeys={[current]}>
      <Menu.Item key="mail" icon={<MailOutlined />}>
        <Link href="/">
          <a>CMS</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="signup" icon={<MailOutlined />}>
        <Link href="/signup">
          <a>Signup</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="signin" icon={<MailOutlined />}>
        <Link href="/signin">
          <a>Signin</a>
        </Link>
      </Menu.Item>
      <Menu.SubMenu
        key="SubMenu"
        title="Dashboard"
        icon={<SettingOutlined />}
        style={{ marginLeft: "auto" }}
      >
        <Menu.ItemGroup title="Management">
          <Menu.Item key="three" icon={<AppstoreOutlined />}>
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
      <Menu.Item key="toggle">
        <ToggleTheme />
      </Menu.Item>
    </Menu>
  );
};

export default TopNav;

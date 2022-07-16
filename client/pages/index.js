import { Button } from "antd";
import ToggleTheme from "../components/ToggleTheme";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button type="primary">Click me</Button>
      <ToggleTheme />
    </div>
  );
}

export default Home;

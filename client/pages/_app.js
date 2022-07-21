// import "antd/dist/antd.css";
import { ThemeProvider } from "../context/theme";
import { AuthProvider } from "../context/auth";
import { Toaster } from "react-hot-toast";
import TopNav from "../components/TopNav";

import "../public/css/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TopNav />
        <Toaster />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;

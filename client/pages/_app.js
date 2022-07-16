import "antd/dist/antd.css";
import { ThemeProvider } from "../context/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

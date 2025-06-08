import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import useLenis from "~/Hooks/useLenis";
import { AuthProvider } from "~/Context/AuthContext";
import { TemplateProvider } from "~/Context/TemplateContext";
import "react-tooltip/dist/react-tooltip.css";
import { WidgetProvider } from "~/Context/WidgetContext";
import { MusicProvider } from "~/Context/MusicContext";

const StarterHandling = () => {
  // useLenis();

  return (
    <>
      <AuthProvider>
        <TemplateProvider>
          <WidgetProvider>
            {/*<MusicProvider>*/}
            {/*<RouteChangeEvent />*/}
            <Outlet />
            <Toaster />
            {/*</MusicProvider>*/}
          </WidgetProvider>
        </TemplateProvider>
      </AuthProvider>
    </>
  );
};

export default StarterHandling;

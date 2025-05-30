import Template from "~/Components/Template";
import ActionBar from "~/Components/Template/ActionBar";
import GET from "~/Services/Axios/Methods/GET";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import { ToastSetting } from "~/Services/Setting";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useAuth from "~/Hooks/useAuth";
import type { Route } from "../+types";
import useTemplate from "~/Hooks/useTemplate";
import useWidget from "~/Hooks/useWidget";

export function meta({}: Route.MetaArgs) {
  return [{ title: "دستو 🔵 یهترین برای همیشه" }];
}

const index = () => {
  const { setTemplate, template } = useTemplate();
  const { setWidgets } = useWidget();
  const params = useParams();
  const { user, pending } = useAuth();
  const [forMe, setForMe] = useState(false);

  const fetchData = async () => {
    const response = await GET(`/template/${params.username}`);

    if (response.status === 200 && response.data.success === true) {
      setTemplate(response.data.data);
      setWidgets(response.data.data.widgets);
    } else if (response.status === 404) {
      return;
    } else {
      toast.error("مشکلی پیش امده است!", ToastSetting);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.username]);

  useEffect(() => {
    if (!pending) {
      setForMe(user?.mobile === template?.user?.mobile);
      document.title = template?.profile?.name;
    }
  }, [template, pending]);

  return (
    <>
      {/*{loading && <h1>loading</h1>}*/}
      <AnimatePresence>
        <Template />
        {forMe && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key="box"
            className={"fixed w-screen z-[100]"}
          >
            <ActionBar />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default index;

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

export function meta({}: Route.MetaArgs) {
  return [{ title: "دستو 🔵 یهترین برای همیشه" }];
}

const index = () => {
  const defaultData = {
    user: {
      mobile: "",
    },
    profile: {
      name: "",
    },
  };

  const params = useParams();
  const [template, setTemplate] = useState(defaultData);
  const [loading, setLoading] = useState(false);
  const { login, user, pending } = useAuth();
  const [forMe, setForMe] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await GET(`/template/${params.username}`);

    if (response.status === 200 && response.data.success === true) {
      setTemplate(response.data.data);
    } else if (response.status === 404) {
      setTemplate(defaultData);
    } else {
      toast.error("مشکلی پیش امده است!", ToastSetting);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        <Template template={template} />
        {forMe && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key="box"
            className={"fixed w-screen"}
          >
            <ActionBar template={template} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default index;

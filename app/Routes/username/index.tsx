import Template from "~/Components/Template";
import ActionBar from "~/Components/Template/ActionBar";
import GET from "~/Services/Axios/Methods/GET";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import { ToastSetting } from "~/Services/Setting";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useAuth from "~/Hooks/useAuth";

const index = () => {
  const params = useParams();
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login, user, pending } = useAuth();
  const [forMe, setForMe] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await GET(`/template/${params.username}`);

    if (response.status === 200 && response.data.success === true) {
      setTemplate(response.data.data);
    } else if (response.status === 404) {
      setTemplate(null);
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
    }
  }, [template, pending]);

  return (
    <>
      {/*{loading && <h1>loading</h1>}*/}
      <div className={"h-screen"}>
        <AnimatePresence>
          <Template template={template} />
          {forMe && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key="box"
              className={"fixed w-screen"}
            >
              <ActionBar template={template} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default index;

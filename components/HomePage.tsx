import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import TodoList from "./TodoList";

const HomePage = () => {
  const router = useRouter();

  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    if (router && typeof window === "undefined") {
      router.push("/");
    } else {
      setUserId(window.localStorage?.getItem("userId") || "");
    }
  }, [router]);

  return (
    <Layout>
      <div>
        <TodoList userId={userId} />
      </div>
    </Layout>
  );
};

export default HomePage;

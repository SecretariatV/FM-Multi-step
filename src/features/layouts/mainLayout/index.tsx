import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import S from "./index.module.scss";
import { useApp } from "@contexts/AppContext";

const MainLayout = () => {
  const [buttonTitle, setButtonTitle] = useState<string>("Next Step");
  const { app, setApp } = useApp();
  const navigate = useNavigate();

  const clickNextStep = () => {
    setApp((prevState) => ({ step: prevState.step + 1 }));
  };

  useEffect(() => {
    switch (app.step) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/plan");
        break;
      case 2:
        navigate("/pick");
        break;
      case 3:
        navigate("/finish");
        setButtonTitle("Confirm");
        break;
      case 4:
        navigate("/confirm");
        break;
      default:
        break;
    }
  }, [app.step, navigate]);

  return (
    <section className={S.root}>
      <Outlet />
      <button data-testid="next-button" onClick={clickNextStep}>
        {buttonTitle}
      </button>
    </section>
  );
};

export default MainLayout;

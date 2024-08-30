import { useApp } from "@contexts/AppContext";
import S from "./index.module.scss";

const ConfirmArticle = () => {
  const { app, setApp } = useApp();

  const goHome = () => {
    setApp({ step: 0 });
  };

  return (
    <article className={S.root} role="region" aria-labelledby="confirm-title">
      <h2 id="confirm-title">Thank you!</h2>

      <button
        data-testid="forward-button"
        aria-hidden={app.step === 5}
        onClick={goHome}
      >
        Home
      </button>
    </article>
  );
};

export default ConfirmArticle;

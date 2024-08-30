import S from "./index.module.scss";

const FinishArticle = () => {
  return (
    <article className={S.root} role="region" aria-labelledby="step-title">
      <h2 id="step-title">Finishing up</h2>
    </article>
  );
};

export default FinishArticle;

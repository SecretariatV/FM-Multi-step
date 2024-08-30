import S from "./index.module.scss";

const PickArticle = () => {
  return (
    <article className={S.root} role="region" aria-labelledby="step-title">
      <h2 id="step-title">Pick add-ons</h2>
    </article>
  );
};

export default PickArticle;

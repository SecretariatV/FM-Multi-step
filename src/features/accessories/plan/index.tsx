import S from "./index.module.scss";

const PlanSection = () => {
  return (
    <article className={S.root} role="region" aria-labelledby="step-title">
      <h2 id="step-title">Select your plan</h2>
    </article>
  );
};

export default PlanSection;

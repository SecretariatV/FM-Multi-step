import S from "./index.module.scss";

const PersonalSection = () => {
  return (
    <article className={S.root} role="region" aria-labelledby="step-title">
      <h2 id="step-title">Personal info</h2>
    </article>
  );
};

export default PersonalSection;

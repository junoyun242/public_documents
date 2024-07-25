const Title = () => {
  const subtitle = "다양한 신체적 문제로 인해 발생한 발성 문제";
  return (
    <section>
      <div className="title-page-container">
        <h2>발성 문제</h2>
        <p>{subtitle.toUpperCase()}</p>
        <p>{String("Juno Yun").toUpperCase()}</p>
      </div>
    </section>
  );
};

export default Title;

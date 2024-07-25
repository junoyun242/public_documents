const TitleSlide = () => {
  return (
    <section className="centered-layout">
      <div>
        <h2>Trip to New York</h2>
        <p className="text-sm" style={{ fontWeight: "bold" }}>
          2024-08-10 ~ 2024-08-23
        </p>
        <img
          width={300}
          height={300}
          src="https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg"
        />
      </div>
    </section>
  );
};

export default TitleSlide;

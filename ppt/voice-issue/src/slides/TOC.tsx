const TOC = () => {
  return (
    <section>
      <div className="non-center">
        <h3>목차</h3>
        <div className="two-page">
          <ol>
            <li>
              <b>
                <a href="#/introduction">서론</a>
              </b>
              <ol>
                <li>
                  <a href="#/voice-status">현재 목 상태</a>
                </li>
                <li>
                  <a href="#/what-i-did">시도해본 것들</a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#/causes">
                <b>원인</b>
              </a>
              <ol>
                <li>
                  <a href="#/direct-cause">직접적 원인</a>
                </li>
                <li>
                  <a href="#/root-cause">근본 원인</a>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TOC;

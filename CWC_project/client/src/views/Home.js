import "./Home.css";
import Contents from "../components/dummycontents";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="home-container">
      
            <Link to="/login">
              <button className="button-Login">Login</button>
            </Link>
          
        <div className="home-h1-gradient"></div>
        <span class="home-dot"></span>
        <div className="home-small_text">Web2.0</div>
        <div className="home-team-paragrph">Buy NFTs with CWC Token.</div>
        <div className="home-mypage-css">
          <Contents />
        </div>
      </div>

      <div className="home-homepage">
        <div className="home-home-text">CWC</div>
        <div className="home-home-paragrph">
          CWC is an incentive token-based community. Web2.0 기반 커뮤니티
          사이트의 아키텍처를 기반으로 인센티브 시스템의 동작 원리, ERC-20
          스마트 컨트랙트,이해한 뒤 새로운 형태의 함수와 서버기반 지갑 서비스를
          구현한 서비스입니다.
        </div>
      </div>

      {/* <div className="homepage-image">
      <div className="team-text">Hello World,</div>
      
    </div>     */}
    </div>
  );
}

export default Home;

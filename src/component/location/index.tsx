import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            2호선, 6호선 <b>합정역</b> 하차 – <b>2번 출구</b> 도보 4분
            <br />
            홍대입구, 공항철도, 경의선 <b>1번출구</b> 도보 11분
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            서교동 / 우리은행서교동지점 / 합정역 하차
            <br />
            <br />
            - 파랑(간선): 271, 602, 603, 604, 761, 921,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N26, N51, N62, N72
            <br />
            - 초록(지선): 마포08, 마포09, 마포15, 마포16,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5712, 5714, 6712, 6716,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7612, 7734, 7739
            <br />
            - 빨강(광역): 3100, 3100N, 1000, 1100, 1101,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1200, 1300, 1301, 1302, 1601
            <br />
            - 삼화고속: (인천→서울) 합정 전철역
          </div>
        </div>

        {/* 주차 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">주차</div>
          <div />
          <div className="content">
            내방하시는 차량은 <b>[건물 정문]</b>에서
            <br />
            주차 안내를 받으시기 바랍니다.
            <br />
            <br />
            제1주차장 : 본 건물
            <br />
            제2주차장 : H스퀘어
            <br />
            제3주차장 : 서교빌딩 주차장
            <br />
            <br />
            * 주차장은 2시간 무료 이용 가능합니다.
          </div>
        </div>
      </LazyDiv>
    </>
  )
}

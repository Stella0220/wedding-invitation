import { BRIDE_FULLNAME, GROOM_FULLNAME } from "../../const"
import ktalkIcon from "../../icons/ktalk-icon.png"
import { LazyDiv } from "../lazyDiv"

const baseUrl = import.meta.env.BASE_URL

/**
 * 청첩장 URL을 공유할 수 있는 버튼 컴포넌트입니다.
 * 모바일에서는 공유 앱 선택 창이 뜨고, PC에서는 링크를 복사합니다.
 *
 * @returns {JSX.Element} 공유 버튼 섹션
 */
export const ShareButton = () => {
  return (
    <LazyDiv className="footer share-button">
      <button
        className="ktalk-share"
        onClick={async () => {
          const url =
            window.location.protocol +
            "//" +
            window.location.host +
            baseUrl

          if (navigator.share) {
            try {
              await navigator.share({
                title: `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식에 초대합니다.`,
                url,
              })
            } catch {
              // 사용자가 공유 취소한 경우 무시
            }
          } else {
            try {
              await navigator.clipboard.writeText(url)
              alert("링크가 복사되었습니다.\n카카오톡에 붙여넣기 하세요.")
            } catch {
              alert("복사에 실패했습니다.\n" + url)
            }
          }
        }}
      >
        <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
      </button>
    </LazyDiv>
  )
}

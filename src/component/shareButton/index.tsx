import { BRIDE_FULLNAME, GROOM_FULLNAME } from "../../const"
import ktalkIcon from "../../icons/ktalk-icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"

const baseUrl = import.meta.env.BASE_URL
const OG_IMAGE_URL =
  "https://stella0220.github.io/wedding-invitation/preview_image.jpg"

export const ShareButton = () => {
  const kakao = useKakao()

  const handleShare = async () => {
    const url =
      window.location.protocol + "//" + window.location.host + baseUrl

    if (kakao) {
      kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식에 초대합니다.`,
          description: "소중한 분들을 모시고 저희 두 사람이 사랑의 약속을 하려 합니다.",
          imageUrl: OG_IMAGE_URL,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      })
    } else if (navigator.share) {
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
  }

  return (
    <LazyDiv className="footer share-button">
      <button className="ktalk-share" onClick={handleShare}>
        <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
      </button>
    </LazyDiv>
  )
}

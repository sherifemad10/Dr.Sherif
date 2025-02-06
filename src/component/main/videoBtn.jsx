import './main.scss';
import Link from "next/link";

const VideoBtn = () => {
  return (
    <>
      <div className="watch-video" data-aos="fade-up" data-aos-delay="300">
          <div className="button-border">
            <div className="button-base">
              <Link href="/video">
                <button className="button">
                  Watch <span>Video</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default VideoBtn
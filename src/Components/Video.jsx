
import { useParams } from 'react-router-dom';

const Video = ({ mute = false }) => {
  const { videoId } = useParams();
  const src = `https://geo.dailymotion.com/player.html?video=${videoId}&mute=${mute ? 'true' : 'false'}`;

  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}
        className='video_div'
    >
      <iframe
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        src={src}
        allowFullScreen
        allow="autoplay; web-share"
        title="DailyMotion Video"
      />
    </div>
  );
};

export default Video;

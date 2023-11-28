// HomeVideo.tsx
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { motion } from 'framer-motion';
import { Spin } from 'antd';
import './index.scss';

interface HomeVideoProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function HomeVideo({ isVisible, onClose }: HomeVideoProps) {
  const [loading, setLoading] = useState(true);
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    setLoading(false);
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '490',
    width: '740',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    setLoading(isVisible);
  }, [isVisible]);

  return isVisible ? (
    <div className="mask" onClick={onClose}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="centered-div"
        onClick={(e) => e.stopPropagation()}
      >
        {loading && <Spin size="large" />}
        <YouTube videoId="py6R8wYQDAA" opts={opts} onReady={onPlayerReady} />
      </motion.div>
    </div>
  ) : null;
}

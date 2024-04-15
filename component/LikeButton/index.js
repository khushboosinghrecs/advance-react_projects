import { useState } from "react";
import { HeartIcon, SpinnerIcon } from "./icons";
import './style.css'

export const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);

    const handleLikeUnlike = async () => {
        setError(null);
        setIsFetching(true);
    
        try {
          const response = await fetch(
            "https://www.greatfrontend.com/api/questions/like-button",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                action: liked ? "unlike" : "like",
              }),
            },
          );
    
          if (response.status >= 200 && response.status < 300) {
            setLiked(!liked);
          } else {
            const res = await response.json();
            setError(res.message);
            return;
          }
        } finally {
          setIsFetching(false);
        }
      };
    

    return (
        <div>
            <button onClick={handleLikeUnlike} className={`likeBtn ${liked ? 'liked' : ''}`}>
                {isFetching ? <SpinnerIcon /> : <HeartIcon />}
                {liked ? 'liked' : 'like'}
            </button>
            {error && <div className="error">{error}</div>}
        </div>
    )
}

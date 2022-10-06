import { Trash, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }: any) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((currentLikeNumber) => currentLikeNumber + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https:github.com/hernanytec.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Hernany Costa</strong>
              <time
                title="03 de Outubro às 23:08h"
                dateTime="2022-03-10 23:08:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

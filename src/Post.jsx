// eslint-disable-next-line react/prop-types
export const Post = ({ author, content }) => (
  <article>
    <h2>{author}</h2>
    <p>{content}</p>
  </article>
);

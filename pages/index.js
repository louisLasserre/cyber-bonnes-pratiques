import React from "react";
import Link from "next/link";
// eslint-disable-next-line import/no-unresolved
import { withContext } from "../with";

export default function HomePage({ quiz }) {
  return (
    <div>
      <h1>Welcome to my blog</h1>
      <ul>
        {quiz.map((data, i) => (
          <li key={i}>
            <Link href={`/post/${data.slug}`}>{data.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const context = await withContext();
  const quiz = await context.query.Quizz.findMany({
    query: "id title slug",
  });
  return {
    props: {
      quiz,
    },
  };
}

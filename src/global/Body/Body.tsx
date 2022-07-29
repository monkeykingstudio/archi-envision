import { Fragment, ReactNode } from "react";

type bodyProps = {
  nav: ReactNode;
  content: ReactNode;
}

export default function Body({nav, content}: bodyProps)  {
  return (
      <div className="body">
        {nav}
        {content}
      </div>
  )
}

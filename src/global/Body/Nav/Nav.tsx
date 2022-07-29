import { Fragment } from "react";

export default function Nav(props: any) {
  return (
    <div className="body__nav">
    {props.children}
    </div>
  )
}

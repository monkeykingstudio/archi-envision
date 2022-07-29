import { ReactNode } from "react";

type LayoutProps = {
    header: ReactNode;
    body: ReactNode;
}

export default function Layout({header, body}: LayoutProps) {
    return (
        <div className="layout">
            {header}
            {body}
        </div>
    );
  }
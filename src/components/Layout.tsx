import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
    // h-screen => height: 100vh
    // grid => display: grid
    // place-item-center => place-item : center;
    return <main className="h-screen grid place-items-center">{children}</main>;
}

export default Layout;

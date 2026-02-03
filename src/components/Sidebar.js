"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname(); // get current route

    const tabs = [
        { label: "About Me", href: "/" },
        { label: "Experience", href: "/experience" },
        { label: "Projects", href: "/projects" },
        { label: "Resume", href: "/resume" },
        { label: "Contact Me", href: "/contact" },
    ];

    return (
        <div className="sidebar">
            {tabs.map((tab) => (
                <Link key={tab.href} href={tab.href} className={`sidebar-box ${pathname === tab.href ? "active" : ""}`}>
                    {tab.label}
                </Link>
            ))}
        </div>
    );
}

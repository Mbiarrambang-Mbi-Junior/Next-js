"use client"

import Upstart from "./Upstart"
import upstartData from "@/utils/upstartData.json"

function Footer() {
    const { themes } = upstartData;
    const { lightTheme } = themes;

    const footerLinks = [
        {
            title: "lorem ipsum",
            links: ["lorem ipsum", "lorem ipsum", "lorem ipsum"]
        },
        {
            title: "lorem ipsum",
            links: ["lorem ipsum", "lorem ipsum", "lorem ipsum"]
        },
        {
            title: "lorem ipsum",
            links: ["lorem ipsum", "lorem ipsum", "lorem ipsum"]
        }
    ];

    return (
        <footer 
            className="px-6 md:px-10 py-5 border-t"
            style={{ 
                backgroundColor: lightTheme.color.primary, 
                borderColor: `${lightTheme.color.primary}10`,
                color: lightTheme.color.secondary 
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Top Section: Logo and Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <div className="w-fit">
                            <Upstart />
                        </div>
                        <p className="text-sm opacity-70 leading-relaxed max-w-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa cupiditate dolores alias accusamus rem illum, voluptate at ex harum.
                        </p>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((column, idx) => (
                        <div key={idx} className="flex flex-col gap-6">
                            <h3 className="font-bold uppercase tracking-wider text-sm">
                                {column.title}
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {column.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar: Copyright */}
                <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 opacity-50 text-xs"
                     style={{ borderColor: `${lightTheme.color.primary}10` }}>
                    <p>© {new Date().getFullYear()} Upstart. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:underline">Facebook</a>
                        <a href="#" className="hover:underline">Twitter</a>
                        <a href="#" className="hover:underline">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
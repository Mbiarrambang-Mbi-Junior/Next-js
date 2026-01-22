"use client"

import upstartData from "@/utils/upstartData.json"

function Contact() {
    const { themes } = upstartData;
    const { lightTheme } = themes;

    return (
        <section 
            id="contact" 
            style={{ 
                backgroundColor: lightTheme.color.primary,
                color: lightTheme.color.secondary 
            }}
            className="px-6 md:px-20 py-24"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

                {/* Left Side: Text Content */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                    {/* Fixed: Changed heading color to secondary so it's visible against primary bg */}
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: lightTheme.color.secondary }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <p className="text-lg opacity-80 leading-relaxed mb-8 max-w-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    {/* Optional Contact Info */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <span className="font-bold">Email:</span>
                            <span className="opacity-80 font-medium">lorem@upstart.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-bold">Office:</span>
                            <span className="opacity-80 font-medium">lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:w-1/2">
                    <form
                        className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl flex flex-col gap-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="flex flex-col gap-2">
                            {/* Labels are now dark (gray-800) to be readable on the white form card */}
                            <label className="text-sm font-bold text-gray-800 ml-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-gray-50 text-black focus:bg-white focus:ring-2 outline-none transition-all"
                                style={{ borderColor: `${lightTheme.color.primary}20` }}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-800 ml-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-gray-50 text-black focus:bg-white focus:ring-2 outline-none transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-800 ml-1">Message</label>
                            <textarea
                                rows={4}
                                placeholder="Tell us about your project..."
                                className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-gray-50 text-black focus:bg-white focus:ring-2 outline-none transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl font-bold text-white shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
                            style={{ 
                                backgroundColor: lightTheme.color.primary,
                                boxShadow: `0 10px 15px -3px ${lightTheme.color.primary}40` 
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
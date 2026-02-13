import React, { useEffect, useState } from "react";

const formatDate = (value) => {
    if (!value) {
        return "";
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return "";
    }

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const getBlogPalette = (isDark) => ({
    cardShell: isDark
        ? "bg-zinc-900/80 border-zinc-800 hover:border-cyan-400/60"
        : "bg-white border-slate-200 hover:border-cyan-500/40 shadow-sm",
    titleColor: isDark ? "text-white" : "text-slate-900",
    descColor: isDark ? "text-zinc-400" : "text-slate-600",
    pillShell: isDark
        ? "text-zinc-400 bg-zinc-800/50 border border-zinc-700/50"
        : "text-slate-600 bg-slate-100 border border-slate-200",
    linkTone: isDark ? "text-cyan-300" : "text-cyan-700",
    buttonTone: isDark
        ? "border-cyan-400/40 text-cyan-200 hover:bg-cyan-400/10"
        : "border-cyan-500/40 text-cyan-700 hover:bg-cyan-50",
});

const Blogs = ({ theme = "dark", username = "vyankateshbairagi", maxItems = 3 }) => {
    const isDark = theme === "dark";
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const palette = getBlogPalette(isDark);

    useEffect(() => {
        let isActive = true;
        const controller = new AbortController();

        const loadBlogs = async () => {
            setIsLoading(true);
            setError("");

            try {
                const response = await fetch(
                    `https://dev.to/api/articles?username=${username}`,
                    {
                        signal: controller.signal,
                        headers: {
                            Accept: "application/json",
                            "User-Agent": "portfolio-site/1.0",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`DEV.to API error: ${response.status}`);
                }

                const data = await response.json();
                if (isActive) {
                    setBlogs(Array.isArray(data) ? data : []);
                }
            } catch (err) {
                if (err.name !== "AbortError" && isActive) {
                    setError("Unable to load blogs right now.");
                }
            } finally {
                if (isActive) {
                    setIsLoading(false);
                }
            }
        };

        loadBlogs();

        return () => {
            isActive = false;
            controller.abort();
        };
    }, [username]);

    const visibleBlogs = blogs.slice(0, maxItems);
    const showViewAll = blogs.length > maxItems;

    let content = null;

    if (isLoading) {
        content = (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        key={index}
                        className={`h-64 rounded-2xl border animate-pulse ${palette.cardShell}`}
                    />
                ))}
            </div>
        );
    } else if (error) {
        content = (
            <div className="text-center">
                <p className={`${palette.descColor}`}>{error}</p>
                <a
                    href={`https://dev.to/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex mt-4 text-sm font-semibold ${palette.linkTone}`}
                >
                    View on DEV.to
                </a>
            </div>
        );
    } else {
        content = (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleBlogs.map((blog) => (
                    <article
                        key={blog.id}
                        className={`group rounded-2xl border overflow-hidden transition-colors duration-300 ${palette.cardShell}`}
                    >
                        {blog.cover_image ? (
                            <a href={blog.url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={blog.cover_image}
                                    alt={blog.title}
                                    className="h-40 w-full object-cover"
                                    loading="lazy"
                                />
                            </a>
                        ) : null}
                        <div className="p-6 flex flex-col h-full">
                            <p className={`text-xs uppercase tracking-[0.2em] ${palette.descColor}`}>
                                {formatDate(blog.published_at || blog.created_at)}
                            </p>
                            <h3 className={`mt-3 text-lg font-semibold ${palette.titleColor}`}>
                                <a href={blog.url} target="_blank" rel="noopener noreferrer">
                                    {blog.title}
                                </a>
                            </h3>
                            <p className={`mt-3 text-sm leading-relaxed ${palette.descColor}`}>
                                {blog.description || blog.title}
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {(blog.tag_list || []).slice(0, 3).map((tag) => (
                                    <span key={tag} className={`px-3 py-1 text-xs rounded-full ${palette.pillShell}`}>
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={blog.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-6 text-sm font-semibold ${palette.linkTone}`}
                            >
                                Read on DEV.to {"->"}
                            </a>
                        </div>
                    </article>
                ))}
                {showViewAll ? (
                    <div className="sm:col-span-2 lg:col-span-3 flex justify-center pt-2">
                        <a
                            href={`https://dev.to/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`rounded-full border px-6 py-2 text-sm font-semibold transition-colors ${palette.buttonTone}`}
                        >
                            View all blogs
                        </a>
                    </div>
                ) : null}
            </div>
        );
    }

    return (
        <section id="blogs" className={`py-24 px-6 relative overflow-hidden transition-colors duration-500 ${isDark ? '' : 'bg-white/80'}`}>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-12 text-center">
                    <h2
                        className={`text-3xl md:text-4xl font-bold mb-3 font-['Manrope'] ${palette.titleColor}`}
                    >
                        Latest <span className={isDark ? "text-cyan-300" : "text-cyan-600"}>Blogs</span>
                    </h2>
                    <p className={`${palette.descColor} max-w-xl mx-auto`}>
                        Fresh writing and experiments from my DEV.to profile.
                    </p>
                </div>
                {content}
            </div>
            <div
                className={`absolute inset-0 z-0 pointer-events-none ${
                    isDark
                        ? 'bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_60%)]'
                        : 'bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.15),transparent_60%)]'
                }`}
            />
        </section>
    );
};

export default Blogs;

"use client";

import {
  Home,
  Compass,
  History,
  Clock,
  ThumbsUp,
  Menu,
  Bell,
  Upload,
  Search,
  Mic,
} from "lucide-react";
import ThemeToggle from "@/components/ToggleButton";
import { useRouter } from "next/navigation";

const historyVideos = [
  {
    id: 1,
    thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/maxresdefault.jpg",
    duration: "28:16",
    title: "React Tutorial for Beginners 🚀",
    channel: "Code with Bro",
    views: "1.2M views",
    time: "Watched 2 days ago",
    channelLogo: "https://i.pravatar.cc/150?img=31",
  },
  {
    id: 2,
    thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
    duration: "5:22",
    title: "UI Design Tips for Developers",
    channel: "Design Academy",
    views: "98K views",
    time: "Watched 1 week ago",
    channelLogo: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    thumbnail: "https://i.ytimg.com/vi/ScMzIvxBSi4/maxresdefault.jpg",
    duration: "1:10:12",
    title: "Podcast: Future of AI in Nepal",
    channel: "TechTalks Nepal",
    views: "10K views",
    time: "Watched 3 weeks ago",
    channelLogo: "https://i.pravatar.cc/150?img=33",
  },
];

export default function HistoryPage() {
    const router = useRouter();
  return (
    <div className="flex h-screen bg-[var(--background)] text-[var(--text)]">
      {/* Sidebar */}
      <aside className="w-60 flex flex-col py-4 border-r border-[var(--border)] bg-[var(--card-bg)]">
        <div className="px-6 py-2 flex items-center gap-2 text-xl font-bold text-red-600">
          <Menu className="w-6 h-6" />
          <span>YouTube</span>
        </div>
        <nav className="mt-4 space-y-1">
          <button onClick={()=> router.push("/")} className="flex items-center gap-4 w-full px-6 py-2 hover:bg-[var(--hover)] rounded-lg">
            <Home /> Home
          </button>
          <button className="flex items-center gap-4 w-full px-6 py-2 hover:bg-[var(--hover)] rounded-lg">
            <Compass /> Subscriptions
          </button>
          <button className="flex items-center gap-4 w-full px-6 py-2 bg-[var(--hover)] rounded-lg font-semibold">
            <History /> History
          </button>
          <button className="flex items-center gap-4 w-full px-6 py-2 hover:bg-[var(--hover)] rounded-lg">
            <Clock /> Watch Later
          </button>
          <button className="flex items-center gap-4 w-full px-6 py-2 hover:bg-[var(--hover)] rounded-lg">
            <ThumbsUp /> Liked Videos
          </button>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-3 border-b border-[var(--border)] bg-[var(--background)]">
          <div className="flex-1 flex justify-center">
            <div className="flex items-center w-1/2">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-4 py-2 border rounded-l-full bg-[var(--hover)] outline-none"
              />
              <button className="p-2 border rounded-r-full bg-[var(--hover)]">
                <Search />
              </button>
              <button className="ml-2 p-2 rounded-full hover:bg-[var(--hover)]">
                <Mic />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Upload />
            <Bell />
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* History Videos */}
        <main className="p-6 flex flex-col gap-6 overflow-y-auto">
          {historyVideos.map((video) => (
            <div
              key={video.id}
              className="flex gap-4 cursor-pointer hover:scale-[1.01] transition"
            >
              <div className="relative w-64">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-36 object-cover rounded-lg"
                />
                <span className="absolute bottom-2 right-2 text-xs bg-black bg-opacity-80 text-white px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="font-semibold text-sm line-clamp-2">
                  {video.title}
                </h2>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{video.channel}</p>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                  {video.views} • {video.time}
                </p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

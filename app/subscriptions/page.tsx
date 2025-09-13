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

const subscriptions = [
  {
    id: 1,
    thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/maxresdefault.jpg",
    duration: "12:45",
    title: "Behind The Scenes | Project Kura Documentary",
    channel: "Project Kura",
    views: "85K views",
    time: "3 days ago",
    channelLogo: "https://i.pravatar.cc/150?img=21",
  },
  {
    id: 2,
    thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
    duration: "4:10",
    title: "New Music Release 🎵 | UFF Behind The Scenes",
    channel: "Sushant KC Official",
    views: "500K views",
    time: "1 week ago",
    channelLogo: "https://i.pravatar.cc/150?img=22",
  },
  {
    id: 3,
    thumbnail: "https://i.ytimg.com/vi/ScMzIvxBSi4/maxresdefault.jpg",
    duration: "1:02:10",
    title: "Deep Dive Podcast | Special Guest",
    channel: "In Depth Story",
    views: "32K views",
    time: "2 weeks ago",
    channelLogo: "https://i.pravatar.cc/150?img=23",
  },
  {
    id: 4,
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    duration: "8:05",
    title: "Classic Charlie Chaplin Comedy Scene",
    channel: "Charlie Chaplin",
    views: "2.1M views",
    time: "6 years ago",
    channelLogo: "https://i.pravatar.cc/150?img=24",
  },
];



export default function SubscriptionsPage() {
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
          <button onClick={()=>router.push("/")} className="flex items-center gap-4 w-full px-6 py-2 hover:bg-[var(--hover)] rounded-lg">
            <Home /> Home
          </button>
          <button className="flex items-center gap-4 w-full px-6 py-2 bg-[var(--hover)] rounded-lg font-semibold">
            <Compass /> Subscriptions
          </button>
          <button className="flex items-center gap-4 w-full px-6 py-2 hover:bg-[var(--hover)] rounded-lg">
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

        {/* Subscriptions Video Grid */}
        <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto">
          {subscriptions.map((video) => (
            <div
              key={video.id}
              className="flex flex-col cursor-pointer hover:scale-[1.01] transition"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <span className="absolute bottom-2 right-2 text-xs bg-black bg-opacity-80 text-white px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="flex gap-3 mt-3">
                <img
                  src={video.channelLogo}
                  alt={video.channel}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="font-semibold text-sm line-clamp-2">
                    {video.title}
                  </h2>
                  <p className="text-xs text-[var(--muted)]">{video.channel}</p>
                  <p className="text-xs text-[var(--muted)]">
                    {video.views} • {video.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

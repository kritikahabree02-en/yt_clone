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
import Link from "next/link";
import Image from "next/image";

const categories = [
  "All",
  "Gaming",
  "Charlie Chaplin",
  "Live",
  "Music",
  "Drama",
  "Art&Craft",
  "Nature",
  "Comedy",
  "UI Design",
  "Movie",
  "Dance",
];

const videos = [
  {
    id: 1,
    thumbnail: "/thumb/sunita.jpg",
    duration: "28:16",
    title: "Our Exciting Meet After a Long Wait ❤️ | EMOTIONAL MOMENT",
    channel: "Sunita Rai Shrestha",
    views: "575 views",
    time: "1 year ago",
    channelLogo: "/logo/sunita.jpg",
  },
  {
    id: 2,
    thumbnail: "thumb/uff.jpg",
    duration: "3:30",
    title: "UFF (Music Video) | Sushant KC, Swastima Khadka",
    channel: "Sushant KC Official",
    views: "10M views",
    time: "2 months ago",
    channelLogo: "/logo/T series.jpg",
  },
  {
    id: 3,
    thumbnail: "thumb/sudip.jpg",
    duration: "2:21:20",
    title: "Episode 173: Sudip Bhai Subedi | In-Depth Story",
    channel: "Sushant Pradhan Podcast",
    views: "443K views",
    time: "1 year ago",
    channelLogo: "/logo/project kura.jpg",
  },
  {
    id: 4,
    thumbnail: "/thumb/charlie.jpg",
    duration: "4:10",
    title: "Charlie Chaplin - The Mirror Maze (The Circus)",
    channel: "Charlie Chaplin",
    views: "69M views",
    time: "7 years ago",
    channelLogo: "/logo/charlie.jpg",
  },
  {
    id: 5,
    thumbnail: "/thumb/nepal.jpg",
    duration: "17:12",
    title: "Nepal's Glaciers Can Destroy Everything 🌍",
    channel: "Project Kura",
    views: "145K views",
    time: "2 days ago",
    channelLogo: "/logo/depthstory.png",
  },
  {
    id: 6,
    thumbnail: "/thumb/humsafar.jpg",
    duration: "37:41",
    title: "Mere Humsafar Episode 1 (English Subtitles)30th December",
    channel: "ARY Digital",
    views: "65M views",
    time: "3 years ago",
    channelLogo: "/logo/T series.jpg",
  },
  {
    id: 7,
    thumbnail: "/thumb/gulabi.jpg",
    duration: "5:22",
    title: "GULABI SAAWARIYA (Lyrics): Divya Khossla | Rajniesh Duggall",
    channel: "T sereis",
    views: "150K views",
    time: "1 years ago",
    channelLogo: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 8,
    thumbnail: "/thumb/side.jpg",
    duration: "17:12",
    title: "The side of Nepal the media won't show you 🇳🇵",
    channel: "wehatethecold",
    views: "15M views",
    time: "2 days ago",
    channelLogo: "/logo/cold.jpg",
  },
  {
    id: 9,
    thumbnail: "/thumb/balen.jpg",
    duration: "3:12",
    title:
      "BALEN - NEPAL HASEKO (LAAJ SHARANAM OST) | Bijaya, Sagar, Sitaram, Arjun, Hari, Mala, Arpan",
    channel: "Balen",
    views: "8.1M views",
    time: "7 month ago",
    channelLogo: "/logo/savage.jpg",
  },
];

export default function HomePage() {
  return (
    <div
      className="flex h-screen"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Sidebar */}
      <aside
        className="w-60 flex flex-col py-4 border-r"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        <div className="px-6 py-2 flex items-center gap-2 text-xl font-bold text-[var(--primary)]">
          <Menu className="w-6 h-6" />
          <Image src="/logo.png" height={150} width={150} alt="logo" />
        </div>
        <nav className="mt-4 space-y-1">
          {[
            { icon: <Home />, label: "Home", link: "/" },
            {
              icon: <Compass />,
              label: "Subscription",
              link: "/subscriptions",
            },
            { icon: <History />, label: "History", link: "/history" },
            { icon: <Clock />, label: "Watch Later", link: "/watch-later" },
            { icon: <ThumbsUp />, label: "Liked Videos", link: "/liked" },
          ].map((item, idx) => (
            <Link
              href={item.link}
              key={idx}
              className="flex items-center gap-4 w-full px-6 py-2 rounded-lg hover:bg-[var(--hover)]"
              style={{ color: "var(--foreground)" }}
            >
              {item.icon} {item.label}
            </Link>
          ))}
        </nav>

        {/* Subscriptions */}
        <div
          className="mt-6 px-6 text-sm font-semibold"
          style={{ color: "var(--muted-foreground)" }}
        >
          Subscriptions
        </div>
        <div className="mt-2 space-y-2">
          {[
            {
              id: 1,
              name: "T-Series",
              image: "https://i.pravatar.cc/150?img=20",
            },
            {
              id: 2,
              name: "In Depth Story",
              image: "https://i.pravatar.cc/150?img=21",
            },
            {
              id: 3,
              name: "Project Kura",
              image: "https://i.pravatar.cc/150?img=22",
            },
            {
              id: 4,
              name: "Charlie Chaplin",
              image: "https://i.pravatar.cc/150?img=23",
            },
            {
              id: 5,
              name: "Ary Digital HD",
              image: "https://i.pravatar.cc/150?img=24",
            },
          ].map((sub) => (
            <div
              key={sub.id}
              className="flex items-center gap-3 px-6 py-2 rounded-lg cursor-pointer"
              style={{
                color: "var(--foreground)",
              }}
            >
              <img
                src={sub.image}
                alt={sub.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm">{sub.name}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header
          className="flex items-center justify-between px-6 py-3 border-b"
          style={{
            backgroundColor: "var(--background)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex-1 flex justify-center">
            <div className="flex items-center w-1/2">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-4 py-2 rounded-l-full outline-none"
                style={{
                  backgroundColor: "var(--muted)",
                  color: "var(--foreground)",
                  border: `1px solid var(--border)`,
                }}
              />
              <button
                className="p-2 rounded-r-full"
                style={{
                  backgroundColor: "var(--muted)",
                  border: `1px solid var(--border)`,
                }}
              >
                <Search />
              </button>
              <button
                className="ml-2 p-2 rounded-full"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--accent-foreground)",
                }}
              >
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

        {/* Categories */}
        <div
          className="flex items-center gap-3 px-6 overscroll-x-auto py-3 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="px-4 py-1 flex justify-center font-semibold items-center whitespace-nowrap rounded-md"
              style={{
                backgroundColor:
                  idx === 0 ? "var(--foreground)" : "var(--muted)",
                color:
                  idx === 0 ? "var(--background)" : "var(--muted-foreground)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 overflow-y-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex flex-col cursor-pointer hover:scale-[1.01] transition"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-55 object-cover rounded-lg"
                />
                <span
                  className="absolute bottom-2 right-2 text-xs px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: "rgba(0,0,0,0.8)", color: "#fff" }}
                >
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
                  <p
                    style={{ color: "var(--muted-foreground)" }}
                    className="text-xs"
                  >
                    {video.channel}
                  </p>
                  <p
                    style={{ color: "var(--muted-foreground)" }}
                    className="text-xs"
                  >
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

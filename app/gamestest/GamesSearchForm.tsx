"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GamesSearchForm() {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const router = useRouter();

  function onPlatformClick(platform: string) {
    setSelectedPlatform(platform);
    const urlSearchParams = new URLSearchParams();
    if (platform) {
      urlSearchParams.set("platform", platform);
    }
    router.push(`/gamestest?${urlSearchParams.toString()}`);
  }

  return (
    <div>
      <button
        className={`bg-neutral-300 p-2 mr-4 ${selectedPlatform === "" ? "bg-green-300" : ""}`}
        onClick={() => onPlatformClick("")}
      >
        All
      </button>
      <button
        className={`bg-neutral-300 p-2 mr-4 ${selectedPlatform === "pc" ? "bg-green-300" : ""}`}
        onClick={() => onPlatformClick("pc")}
      >
        PC
      </button>
      <button
        className={`bg-neutral-300 p-2 mr-4 ${selectedPlatform === "browser" ? "bg-green-300" : ""}`}
        onClick={() => onPlatformClick("browser")}
      >
        Browser
      </button>
    </div>
  );
}

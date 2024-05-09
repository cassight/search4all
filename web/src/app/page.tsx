"use client";
import React, { useState } from "react";
import { Footer } from "@/app/components/footer";
import { Logo } from "@/app/components/logo";
import { PresetQuery } from "@/app/components/preset-query";
import { Search } from "@/app/components/search";
import { AllLangs, ALL_LANG_OPTIONS, changeLang, getLang } from "./locales";

export default function Home() {
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handlePasswordSubmit = () => {
    if (password === process.env.password) {
      setIsPasswordCorrect(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  if (!isPasswordCorrect) {
    return (
      <div className="absolute inset-0 min-h-[500px] flex items-center justify-center">
        <div className="relative flex flex-col gap-8 px-4">
          <h2 className="text-2xl font-bold">Enter Password</h2>
          <input
            type="password"
            className="rounded border border-gray-300 text-zinc-400 bg-white p-2 shadow-sm text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="rounded bg-blue-500 text-white px-4 py-2"
            onClick={handlePasswordSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 min-h-[500px] flex items-center justify-center">
      {/* 语言下拉菜单 */}
      <div className="absolute top-0 right-0 m-4">
        <select
          className="rounded border border-gray-300 text-zinc-400 bg-white p-1 shadow-sm text-sm"
          value={getLang()}
          onChange={(e) => {
            changeLang(e.target.value as any);
          }}
        >
          {AllLangs.map((lang) => (
            <option value={lang} key={lang}>
              {" "}
              {ALL_LANG_OPTIONS[lang]}{" "}
            </option>
          ))}
        </select>
      </div>
      <div className="relative flex flex-col gap-8 px-4 -mt-24">
        <Logo></Logo>
        <Search></Search>
        <div className="flex gap-2 flex-wrap justify-center">
          <PresetQuery query="Who said live long and prosper?"></PresetQuery>
          <PresetQuery query="Why do we only see one side of the moon?"></PresetQuery>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

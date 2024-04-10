"use client";
import { Button } from "antd";
import Link from "next/link";

export default function MainPage() {
  return (
    <div className="text-center my-10 text-2xl font-bold">
      <Link href="/signin">Login</Link>
    </div>
  );
}

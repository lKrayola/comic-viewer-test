import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ComicViewer from "react-comic-viewer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <>
    <ComicViewer
      direction="ltr"
      pages={[
        "hoge.png",
        "fuga.jpg",
        "piyo.jpg",
        "moge.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
      ]}
    />
  );
}

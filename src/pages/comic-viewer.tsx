import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import react dynamic function
import dynamic from "next/dynamic";

// Disable server-side rendering for the ComicViewer component by using the dynamic component from Next.js. 
// This will ensure that the component is only rendered on the client-side and not on the server.
const DynamicComicViewer = dynamic(() => import("react-comic-viewer"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // use the new dynamic comic viewer instead of the default.
    <DynamicComicViewer
      direction="ltr"
      pages={[
        "https://picsum.photos/id/9/600/600",
        "https://picsum.photos/id/20/600/600",
        "https://picsum.photos/id/26/600/600",
        "https://picsum.photos/id/796/600/600",
        "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
        "https://picsum.photos/id/882/600/600",
      ]}
    />
  );
}

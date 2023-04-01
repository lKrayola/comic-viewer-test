import { Inter } from 'next/font/google'

// import react dynamic function
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import axios from 'axios'

// Disable server-side rendering for the ComicViewer component by using the dynamic component from Next.js.
// This will ensure that the component is only rendered on the client-side and not on the server.
const DynamicComicViewer = dynamic(() => import('react-comic-viewer'), {
  ssr: false
})

// const inter = Inter({ subsets: ["latin"] });

const comicChapterId = 'juc245vegaemm49'

export default function Home() {
  const [chatperPages, setChapterPages] = useState([])

  const fetchData = async () => {
    let pagesSourceList = []
    try {
      const chapterId = new URLSearchParams({ id: comicChapterId })

      const response = await axios.get(
        `/api/chapters/view?${chapterId.toString()}`
      )

      if (response.data.record.expand.pages)
        pagesSourceList = response.data.record.expand.pages.map(
          (page: any) => page.source
        )
      setChapterPages(pagesSourceList)
    } catch (err: any) {
      console.warn(err.response.data.code, err.response.data.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    // use the new dynamic comic viewer instead of the default.
    <DynamicComicViewer direction='rtl' pages={chatperPages} />
  )
}

import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const { namaundangan } = router.query

  useEffect(() => {
    if (router.isReady) {
      router.push(`/undangan/galang&sasti/${namaundangan}`)
    }
  }, [namaundangan, router])

  return null
}

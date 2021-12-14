import { useRouter } from "next/router"

const blogName = () => {
    const router = useRouter()
    const blogname = router.query.blogName
    return (
        <><h1>{blogname}</h1></>
    )
}

export default blogName

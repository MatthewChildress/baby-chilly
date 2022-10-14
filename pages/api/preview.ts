import { getPreviewArticleBySlug } from "../../lib/api";

export default async function preview(req: any, res: any) {
    if (req.query.secret !== process.env.STRAPI_PREVIEW_SECRET || !req.query.string) {
        return res.status(401).json({ message: 'Invalid Token' })
    }
    const article = await getPreviewArticleBySlug(req.query.slug)

    if (!article) {
        return res.status(401).json({ message: 'Invalid Slug' })
    }

    res.setPreviewData({})

    res.writeHead(307, { Location: `/posts/${article.slug}` })
    res.end()
}


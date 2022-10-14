async function fetchAPI(query: string, { variables }: any = {}): Promise<any> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json.data
}

export async function getPreviewArticleBySlug(slug: string) {
    const data: any = await fetchAPI(
        `
        query ArticleBySlug($where: JSON) {
            articles(where: $where) {
                slug
            }
        }
        `,
        {
            variables: {
                where: {
                    slug,
                },
            },
        }
    )
    return data?.articles[0]
}

export async function getAllArticlesWithSlug() {
    const data: any = fetchAPI(`
    {
        articles {
            slug
        }
    }
    `)
    return data?.allArticles
}

export async function getAllArticlesForHome(preview: any) {
    const data: any = await fetchAPI(
        `
        query Articles($where: JSON) {
            articles(sort: "date:desc", limit: 10, where: $where) {
                title
                slug
                data
                image {
                    url
                }
                author {
                    name
                    picture {
                        url
                    }
                }
            }
        }
        `,
        {
            variables: {
                where: {
                    ...(preview ? {} : { status: "published" }),
                },
            },
        }
    )
    return data?.articles
}

export async function getArticlesAndMoreArticles(slug: string, preview: any) {
    const data: any = await fetchAPI(
        `
        query ArticlesBySlug($where: JSON, $where_ne: JSON) {
            articles(where: $where) {
                title
                slug
                content
                date
                image {
                    url
                }
                author {
                    name
                    picture {
                        url
                    }
                }
            }

            moreArticles: articles(sort: "date:desc", limit: 2, where: $where_ne) {
                title
                slug
                date
                image {
                    url
                }
                author {
                    name
                    picture {
                        url
                    }
                }
            }
        }
        `,
        {
            preview,
            variables: {
                where: {
                    slug,
                    ...(preview ? {} : { status: 'published' }),
                    slug_ne: slug,
                },
            },
        }
    )
    return data
}



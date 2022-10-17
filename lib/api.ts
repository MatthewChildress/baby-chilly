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

export async function getAllArticlesForHome() {
    const data: any = await fetchAPI(
        `
        query Articles {
            articles {
                data {
                    attributes {
                        title
                        slug
                        dateString
                        image {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        author {
                            data {
                                attributes {
                                    name
                                    picture {
                                        data {
                                            attributes {
                                                url
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        `,
    )
    return data?.articles
}

export async function getArticleAndMoreArticles(slug: any) {
    const data: any = await fetchAPI(
        `
        query ArticlesBySlug {
            articles {
                title
                slug
                content
                dateString
                image {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                author {
                    name
                    picture {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
                }
            }

            moreArticles: articles {
                title
                slug
                dateString
                image {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                author {
                    name
                    picture {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
        `,
    )
    return data
}



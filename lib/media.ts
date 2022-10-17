export function getStrapiUrl(path = '') {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
        }${path}`;
}

export function getStrapiImages(image: any) {
    const { url } = image.attributes.url;
    const imageUrl = url.startsWith('/') ? getStrapiUrl(url) : url;
    return imageUrl;
}
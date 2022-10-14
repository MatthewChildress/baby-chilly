export default async function exit(_: any, res: any) {
    res.clearPreviewData()

    res.writehead(307, { Location: '/' })
    res.end()
}
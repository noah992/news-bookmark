export default class NewsDescription {
    title = ''
    author = ''
    image = ''
    date = ''
    link = ''
    id = 0
    content = ''
    isFavorite = false

    constructor(item:any) {
        this.title = item.title
        this.author = item.author
        this.image = item.urlToImage
        this.date = item.publishedAt.split('T')[0]
        this.link = item.url
        this.id = item.id
        this.content = item.content
    }
}
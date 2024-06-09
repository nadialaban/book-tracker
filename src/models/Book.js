import Model from "@/models/Model";

class Book extends Model {
    constructor(description) {
        super()
        this.init(description)
    }

    init(description) {
        super.init(description);

        this.title = description.bookTemplate.title
        this.genres = description.bookTemplate.genres
        this.authors = description.bookTemplate.authors
        this.totalPages = description.totalPages

        this.status = description.status
        this.currentPage = description.currentPage
        this.progress = (this.currentPage / this.totalPages) * 100

        this.startTime = description.startTime
        this.finishTime = description.finishTime

        this.comment = description.comment
        this.rating = description.rating
    }
}

export default Book
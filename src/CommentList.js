class CommentList {

  constructor(arrayOfStrings = []) {
    this.comments = []
    arrayOfStrings.forEach( string => {
      let comment = new Comment(string)
      this.comments.push(comment)
    })
  }

  addComment(text) {
    let comment = new Comment(text)
    this.comments.push(comment)
  }

  render() {
    let html = "<ul>"
    this.comments.forEach(function(comment) {
      html += comment.render()
    })
    html += "</ul>"
    return html
  }

}

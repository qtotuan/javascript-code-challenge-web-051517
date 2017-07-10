$(document).ready(function(){
  let myList = new CommentList()
  $("#remove-filter").hide()
  submitButtonListener(myList)
  searchButtonListener(myList)
})

function submitButtonListener(list) {
  $("#comment-button").on('click', e => {
    e.preventDefault()
    let text = $("#comment").val()
    list.addComment(text)
    $("#comments-list").html(list.render())
    $("#comment").val("")
  })
}

function searchButtonListener(list) {
  $("#search-button").on('click', e => {
    e.preventDefault()
    let searchTerm = $("#search-term").val()
    let allComments = list.comments
    let filteredComments = []
    allComments.forEach(function(comment) {
      if (comment.text.split(" ").includes(searchTerm)) {
        filteredComments.push(comment.text)
      }
    })
    $("#comments-list").empty()
    $("#search-term").val("")
    filteredComments.forEach(function(comment) {
      $("#comments-list").append(`<li>${comment}</li>`)
    })
    if (filteredComments.length < 1) {
      $("#comments-list").append(`Sorry there are no results`)
    }
    $("#remove-filter").show()
    removeFilterListener(list)
  })

  function removeFilterListener(list) {
    $("#remove-filter").on('click', e => {
      e.preventDefault()
      $("#comments-list").html(list.render())
      $("#remove-filter").hide()
    })
  }
}

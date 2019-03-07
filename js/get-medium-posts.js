

function mediumPost(title, content, date){
  this.title = title;
  this.content = content;
  this.date = date;
}


function writeMediumPost(title, content, date){
  var html = '<div class="blog-post-content">';
  html += '<div class="title">' + title + '</div>';
  html += '<div class="content">' + content +'</div>';
  html += '<div class="date"> by <strong>Pedro Mata Rodrigues</strong> at ' + date + '</div>';
  html += '</div>';
  

  return html;

}
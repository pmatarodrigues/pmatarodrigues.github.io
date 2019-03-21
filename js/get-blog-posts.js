
async function getPosts(){   

    var md = window.markdownit();

    var url = "blog-posts/";      
    var mediumBlogPosts = new Array(); 
    var fileNames = new Array();  

    // FILES NAMES MUST BE ADDED HERE (LAST DOWN)
    fileNames.push("facebook-is-dying.md");
    fileNames.push("net-neutrality-is-in-danger-you-should-care.md");
    fileNames.push("flutter-reasons-you-will-fall-in-love.md");


    fileNames.forEach(file => {
        url = "./blog-posts/" + file;
        fetch(url)
            .then(response => response.text())
            // GETS XML TO STRING
            .then(data => {                                 
                var post = document.createElement('div');
                post.className = "blog-content";
                // TRANSFORM MARKDOWN CONTENT INTO HTML
                post.innerHTML = md.render(data);
                // ADD ALL POSTS INTO ARRAY
                mediumBlogPosts.push(post);
                // APPEND POSTS TO HTML
                document.getElementById("blog-body").appendChild(post);
            })                
    });

}

getPosts();


async function getPosts(){   

    var md = window.markdownit();

    var url = "blog-posts/";      
    var mediumBlogPosts = new Array(); 
    var fileNames = new Array();  

    await fetch(url, {method: 'GET'})
        .then(response => response.text())
        // GETS XML TO STRING
        .then(data => {        
            
            console.log("STARTS --------_>");
            
            jQuery(function($){
                $(data).find("td > a").each(function(text){
                    if(openFile($(this).attr("href"))){
                        fileNames.push($(this).attr("href"));
                    }
                });

                console.log(fileNames);



                fileNames.forEach(file => {
                    url = "./blog-posts/" + file;
                    fetch(url)
                        .then(response => response.text())
                        // GETS XML TO STRING
                        .then(data => {                            
                            console.log(data);
                            
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

            });
            
            // VERIFY IF IT'S A VALID FILE
            function openFile(file) {
                var extension = file.substr( (file.lastIndexOf('.') +1) );
                switch(extension) {
                    case 'md':
                        return true;
                        break;
                    default:
                        return false;
                }
            };            
                        
    });
}

getPosts();

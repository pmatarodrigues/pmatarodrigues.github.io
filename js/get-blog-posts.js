async function getPosts(){   
    var url = "blog-posts/";      
    var mediumBlogPosts = new Array(); 
    var fileNames = new Array();  

    var converter = new showdown.Converter();
    converter.setFlavor('github');

    await fetch(url, {method: 'GET'})
        .then(response => response.text())
        // GETS XML TO STRING
        .then(data => {            
            jQuery(function($){
                $(data).find("td > a").each(function(text){
                    if(openFile($(this).attr("href"))){
                        fileNames.push($(this).attr("href"));
                    }
                });
                fileNames.forEach(file => {
                    url = "/blog-posts/" + file;

                    fetch(url)
                        .then(response => response.text())
                        // GETS XML TO STRING
                        .then(data => { 
                            document.getElementById("blog-body").innerHTML = converter.makeHtml(data);
                            
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

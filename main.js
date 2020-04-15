let list = $('.userList');

//this will render posts on page
$("#myButton").click(()=>{
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(x){
    console.log(x);
    x.forEach(function(x){
        var li = $('<li></li>');
        li.text(JSON.stringify(x)); //this renders it on the page in legible characters
        list.append(li);
    })
});
})

//Hide the results from the previous actions
$("#deleteList").click(()=>{
    list.empty();
})

//Get all of the posts
$("#allPost").click(()=>{
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(x){
    console.log(x);
});
})

//Get Id of 10
$("#idTen").click(()=>{
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10', function(x){
        console.log(x);
    });
    })

//Get the comments from comments from post with id of 12 
$("#commentTwelve").click(()=>{
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12/comments', function(x){
        console.log(x);
    });
    })

//Get all the posts from user with id of 2
$("#idTwo").click(()=>{
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/2', function(x){
        console.log(x);
    });
    })

//Create a new post and log the id generated for it by the server
$("#createPost").click(()=>{
$.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{
	userId: 1,
	title: "My New Post",
	body: "This is the body"
}, function(x){
	console.log(x.id)
})
})

//Replace the post with id of 14 and render the responseJSON
$("#replacePost12").click(()=>{
$.ajax({
	method: 'PUT',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
	data: {
		userId: 1,
		title: "New Post",
		body: "New post added"
	},
	complete: function(response){
		console.log(response.responseJSON);
	}
})
 })

 //Delete the post with id of 14 and render a success message
 $("#deletePost14").click(()=>{
 $.ajax({
	method: 'DELETE',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
	complete: function(response){
		console.log(response.statusText);
	}
})
 })


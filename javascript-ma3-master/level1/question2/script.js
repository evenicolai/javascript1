//Console.log out elements in JSON file

var author = 
{
    "video": [{
        "id": 12312412312,
        "name": "Ecuaciones Diferenciales",
        "url": "/video/math/edo/12312412312",
        "author": {
            "data": [{
                "name_author": "Alejandro Morales",
                "url": "/author/alejandro-morales",
                "type": "master"
            }]
        }
    }]
}

for (i in author.video) {
  console.log(author.video[i].id)
  console.log(author.video[i].name)
  console.log(author.video[i].url)
	for (j in author.video[i].author.data) {
		console.log(author.video[i].author.data[j].name_author);
		console.log(author.video[i].author.data[j].url);
		console.log(author.video[i].author.data[j].type);	
	}
}
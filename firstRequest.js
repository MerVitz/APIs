var request = require('request')
request('http://www.reddit.com', function(error, response, body){
    if(error){
        console.log("Something went wwrong")
        console.log(error)
    }else{
        if(response.statusCode == 200){
            //Things worked!
            console.log(body)
        }
    }
})
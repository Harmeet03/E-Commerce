var fs = require("fs");

fs.rename('File.txt', 'myrenamedfile.txt', function(err){
    if(err){
        throw err;
    }

    else{
        throw "File name is changed"
    }
})
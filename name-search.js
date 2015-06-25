var text = "lkdh lkdhl dhlk dh lkdlk dh lkd james ;lkd; lk l k; ;lk ;lk ;lk ;lk jameslk l k; ;lk ;lk";
var myName = "james";
var hits = [];

for(var i = 0; i < text.length; i++){
    if(text[i] === myName[0]){
        for(var j = i; j < (myName.length + i); j++){
            hits.push(text[j]);
        }
    }
}
if(hits[0] === null){
    console.log("Your name wasn't found!");
}else{
    console.log(hits);
}
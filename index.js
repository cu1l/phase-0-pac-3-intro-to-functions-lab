function shout(string) {
    return string.toUpperCase();
}
shout("hello");

function whisper(string) {
    return string.toLowerCase();
}
whisper("HELLO");

function logShout(string){
    console.log("hello".toUpperCase());
}
logShout();

function logWhisper(string){
    console.log("hello".toLowerCase());
}
logWhisper();

function sayHiToHeadphonedRoommate(string) {
    switch(string){
        case "hello":
            return "I can't hear you!";
        case "HELLO":
            return "YES INDEED!";
        case "Let's have dinner together!":
            return "I would love to!"
    }
}
import { stringifyList, stringifyWhenWhere } from "./utils/markdown";

export type tagTitle = "inside" | "outside" | "covid-safe";

export interface tag {
    title: tagTitle;
    description: string;
    color: string;
}

export const TAGS = [
{
    title: 'outside',
    description: '',
    color: '#1EA896'
},
{
    title: 'inside',
    description: '',
    color: '#8D5A97'
},
{
    title: 'covid-safe',
    description: '',
    color: '#DA344D'
},
] as tag[];

export interface date {
    title: string;
    description: string;
    tags: tagTitle[];
    date?: Date;
}

export const TEMPLATE = 
{
    title: "",
    description: "",
    tags: []
}

export const DATES = [
{
    title: "Coffee Date",
    description: "Sometimes the best way to date is to keep it short. A quick 15-30 minute coffee date will let us know if we like each other quickly, and then we can figure out where to go from there.",
    tags: ["inside", "outside"]
},
{
    title: "Turtle Racing",
    description: "There's a bar in Marina Del Rey that does turtle races. I dont really know what that means, but it sounds like a good time." + stringifyWhenWhere("Every third Thursday", "[Brennans](https://www.brennansla.com/turtle-races)"),
    tags: ["inside"],
},
{
    title: "Grab a drink",
    description: "Sometimes classics are classics for a reason. Let's find a swanky spot, get some drinks, and sit and get to know each other. \n Spots I'm interested in: " + stringifyList(["[Nostalgia](https://nostalgiabarandlounge.com/)", "[Bathtub Gin](https://www.bathtubginnyc.com/location/bathtub-gin-la/)", "[Banter Bar](https://www.facebook.com/profile.php?id=100068606482990&ref=py_c)"]),
    tags: ['inside', 'outside']
},
{
    title: "Cat Cafe Coffee Date",
    description: "A coffee date but with cats! There are some cool Cat Cafe's around Los Angeles like this one -> [https://www.catcafelounge.com/](https://www.catcafelounge.com/)",
    tags: ["inside"]
},
{
    title: "Walk/bike on the beach",
    description: "Long walks on the beach get lots of hate and for no reason. I think it would be fun to go for a walk or bike ride on the strand. Talk and people watch and soak up the sun all at once.",
    tags: ["outside", "covid-safe"]
},
{
    title: "Bar Trivia",
    description: "There's a world famous pub trivia near me that I love going to. The bar loves to tout that it's a place where lot's of Jeapordy contestants hang out, and the quiz is really good. I suck, but it's still a ton of fun. Pick a Monday and Wednesday and we'll see how many points we can scrounge." +  stringifyWhenWhere("Every Monday and Wednesday at 8PM", "[O'Briens](https://g.page/obrienssantamonica?share)"),
    tags: ['inside']
},
{
    title: "Hike",
    description: "I havent been outside in California nearly enough since I moved here. I'd love to go out and see the beautiful countryside. \n Hikes I'm interested in:" + stringifyList(["[Skull Rock](https://www.alltrails.com/trail/us/california/skull-rock-loop)", "Griffith Park", "[Santa Paula Punch Bowl](https://www.alltrails.com/trail/us/california/santa-paula-canyon-and-punch-bowls-trail)"]),
    tags: ["outside"]
},
{
    title: "Board Games",
    description: "No better way to get to know a person than over a board game. I've got a couple of fun two player board games I'm always down for. And if you have an actual group of gamers you don't mind inviting a stranger to then I will pay good snacks to get an invite. \n My favorite 2 person board game is Fog of Love. It sounds cheesy but it's really fun.",
    tags: ['inside']
},
{
    title: "Tennis",
    description: "I haven't played tennis in a while but I want to get into it as a second sport alongside frisbee. I'm ready to get smoked :)",
    tags: ['outside', 'covid-safe']
},
{
    title: "Video Games",
    description: "I work for a video game company so there's a certain amount of video games I'm legally required to play. Whether you need a League of Legends duo queue partner or someone to show off your stardew valley farm to, Im ready for an evening of takeout and video games on IRL or on discord.",
    tags: ['inside', "covid-safe"]
},
{
    title: "Cliff Diving",
    description: "I read that there's cliff diving around Los Angeles and now I desperately want to go do it. I have no idea whether any of these are in season, but I'm ready to scope it out. [https://www.monsterchildren.com/top-7-cliff-jumps-in-southern-california/](https://www.monsterchildren.com/top-7-cliff-jumps-in-southern-california/)",
    tags: ["outside"]
}

] as date[];
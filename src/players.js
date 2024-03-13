// Define an array of player objects, each representing a different football (soccer) player
const players = [
  {
    name: " Kylian Mbappe", // Player's name
    team: "PSG", // Player's team
    nationality: "Paris ,France", // Player's nationality (with unnecessary spaces)
    jnumber: "9", // Player's jersey number
    age: "25", // Player's age (as a string)
    image:
      "https://i.guim.co.uk/img/media/d68853cd520858a07c593010a5250207fcd26d2b/117_174_4816_2891/master/4816.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b5e42c6001cc0fc1144e2165648b5a66", // URL to player's image
  },
  {
    name: "Rodri", // Player's name
    team: "Mancity", // Player's team
    nationality: "Madrid, spain", // Player's nationality (with unnecessary capitalization)
    jnumber: "5", // Player's jersey number
    age: "27", // Player's age (as a string)
    image:
      "https://imagevars.gulfnews.com/2023/06/17/Rodri-Hernandez_188c9bb918e_large.jpg", // URL to player's image
  },
  {
    name: "Lionel Messi", // Player's name
    team: "Inter Miami", // Player's team
    nationality: "Argentina", // Player's nationality
    jnumber: "10", // Player's jersey number
    age: "36", // Player's age (as a string)
    image:
      "https://www.fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg?rxy=0.32986930611281567,0.18704579979466449&rnd=133378758718600000", // URL to player's image
  },
  {
    name: "Mohamed Salah", // Player's name
    team: "liverpool", // Player's team
    nationality: "Egyptian", // Player's nationality
    jnumber: "11", // Player's jersey number
    age: "35", // Player's age (as a string)
    image:
      "https://static.footballtransfers.com/images/cn/image/upload/q_75,w_1200/footballcritic/odhkehay4isd0hfukeut.webp", // URL to player's image
  },
];

// Export the array of player objects for use in other parts of the application
export default players;

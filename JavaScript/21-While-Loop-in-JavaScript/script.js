// ! <<===================<< <| WHILE LOOP |> >>=====================>>
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

const friends = ["Olive", "Martin", "Gary", "Rosa", "Carl", "Melvin", "Rosalie"];
let index = 0;
while (index < friends.length) {
  friends[index] += " Payne";
  console.log(`${index + 1}. ${friends[index]}`);
  index++;
}

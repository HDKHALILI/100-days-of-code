// Who likes it?

// You probably know the "like" system from Facebook and other pages. People
// can "like" blog posts, pictures or other items. We want to create the text
// that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input
// array, containing the names of people who like an item. It must return the
// display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jac

function getMentionedNames(names) {
  if (names.length === 2) {
    return names.join(" and ");
  } else if (names.length === 3) {
    let [first, second, third] = names;
    return `${first}, ${second} and ${third}`;
  }

  let firstTwoNames = names.slice(0, 2).join(", ");
  let restOfNames = names.slice(2);
  return `${firstTwoNames} and ${restOfNames.length} others`;
}

function likes(names) {
  // TODO
  let message;
  let likeOrLikes = names.length > 1 ? "like" : "likes";

  if (names.length === 0) {
    message = "no one likes this";
  } else if (names.length === 1) {
    message = names[0] + " likes this";
  } else {
    message = `${getMentionedNames(names)} ${likeOrLikes} this`;
  }

  return message;
}

console.log(likes([])); // 'no one likes this'
console.log(likes(["Peter"])); // 'Peter likes this'
console.log(likes(["Jacob", "Alex"])); // 'Jacob and Alex like this'
console.log(likes(["Max", "John", "Mark"])); // 'Max, John and Mark like this'
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // 'Alex, Jacob and 2 others like this'

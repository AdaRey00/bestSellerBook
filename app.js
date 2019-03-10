'use strict';
{
  const bookTitles = [
    'the_lord_of_the_rings',
    "harry_potter_and_the_philosopher's_stone",
    'the_hobbit',
    'and_then_there_were_none',
    'the_da_vinci_code',
    'the_alchemist',
    'one_hundred_years_of_solitude',
    'lolita',
    'the-little-prince',
    'the-name-of-the-rose',
    'dream_of_the_red_chamber',
    'the_lion_the_witch_and_the_wardrobe',
    'the_catcher_in_the_rye',
    'the_bridges_of_madison_county',
  ];

  const bookInfo = {
    the_lord_of_the_rings: {
      title: 'The Lord of The Rings',
      author: 'J. R. R. Tolkien',
      language: 'English',
      genre: 'fiction, fantasy (novel)',
      published: 1955,
    },
    harry_potter_and_the_philosopher_stone: {
      title: "Harry Potter and The Philosopher's Stone",
      author: 'J. K. Rowling',
      language: 'English',
      genre: 'fiction, fantasy (novel)',
      published: 1997,
    },
    the_hobbit: {
      title: 'The Hobbit',
      author: 'J. R. R. Tolkien',
      language: 'English',
      genre: 'fiction, fantasy (novel)',
      published: 1937,
    },
    and_then_there_were_none: {
      title: 'And Then There Were None',
      author: 'Agatha Christie',
      language: 'English',
      genre: 'fiction, mystery (novel)',
      published: 1939,
    },
    the_da_vinci_code: {
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      language: 'English',
      genre: 'fiction, mystery, thriller (novel)',
      published: 2003,
    },
    the_alchemist: {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      language: 'Portuguese',
      genre: 'fiction, fantasy (novel)',
      published: 1988,
    },
    one_hundred_years_of_solitude: {
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
      language: 'Spanish',
      genre: 'fiction, magic realism (novel)',
      published: 1967,
    },
    lolita: {
      title: 'Lolita',
      author: 'Vladimir Nabokov',
      language: 'English',
      genre: 'fiction, general fiction (novel)',
      published: 1955,
    },
    the_little_prince: {
      title: 'The Little Prince',
      author: 'Antoine de Saint-Exupéry',
      language: 'French',
      genre: 'fiction (novel)',
      published: 1943,
    },
    the_name_of_the_rose: {
      title: 'The Name of The Rose',
      author: 'Umberto Eco',
      language: 'Italian',
      genre: 'historical novel, mystery',
      published: 1980,
    },
    dream_of_the_red_chamber: {
      title: 'Dream of the Red Chamber',
      author: 'Cao Xueqin',
      language: 'Vernacular Chinese',
      genre: 'Novel, Family saga',
      published: 1791,
    },
    the_lion_the_witch_and_the_wardrobe: {
      title: 'The Lion, the Witch and the Wardrobe',
      author: 'C. S. Lewis',
      language: 'English',
      genre: "Children's fantasy novel, Christian literature",
      published: 1950,
    },
    the_catcher_in_the_rye: {
      title: 'The Catcher in the Rye',
      author: 'J. D. Salinger',
      language: 'English',
      genre: 'Realistic fiction',
      published: 1951,
    },
    the_bridges_of_madison_county: {
      title: 'The Bridges of Madison County',
      author: 'Robert James Waller',
      language: 'English',
      genre: 'fiction',
      published: 1992,
    },
  };

  const bookCover = {
    the_lord_of_the_rings: 'image/the_lord_of_the_rings.gif',
    harry_potter_and_the_philosopher_stone: 'image/harry_potter_and_the_philosopher_stone.jpg',
    the_hobbit: 'image/the_hobbit.jpg',
    and_then_there_were_none: 'image/and_then_there_were_none.jpg',
    the_da_vinci_code: 'image/the_da_vinci_code.jpg',
    the_alchemist: 'image/the_alchemist.jpg',
    one_hundred_years_of_solitude: 'image/one_hundred_years_of_solitude.jpg',
    lolita: 'image/lolita.jpg',
    the_little_prince: 'image/the_little_prince.jpg',
    the_name_of_the_rose: 'image/the_name_of_the_rose.jpg',
    dream_of_the_red_chamber: 'image/dream_of_the_red_chamber.jpg',
    the_lion_the_witch_and_the_wardrobe: 'image/the_lion_the_witch_and_the_wardrobe.jpg',
    the_catcher_in_the_rye: 'image/the_catcher_in_the_rye.jpg',
    the_bridges_of_madison_county: 'image/the_bridges_of_madison_county.jpg',
  };

  //Start Here//

  let myPage = document.getElementById('wrapper');
  let heading = document.createElement('h1');
  myPage.appendChild(heading);
  let text = document.createTextNode('Bestselling Books of All Time');
  heading.appendChild(text);
  let myDiv = document.createElement('div');
  myPage.appendChild(myDiv);

  for (let key in bookInfo) {
    let newUl = document.createElement('ul');
    myDiv.appendChild(newUl);
    let newSrc = bookCover[key];
    let newPic = document.createElement('IMG');
    newPic.setAttribute('src', newSrc);
    newUl.appendChild(newPic);
    for (let key2 in bookInfo[key]) {
      let newLi = document.createElement('li');
      newUl.appendChild(newLi);
      let liElement = bookInfo[key][key2];
      newLi.innerHTML = liElement;
    }
  }
}

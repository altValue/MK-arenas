/* ---MK - JSMarathon --- */

// fighters
const player1 = {
  name: 'SUB ZERO',
  hp: '80%',
  img: './assets/fighters/subzero.gif',
  weapon: ['ice shot', 'jump', 'fatality', 'slide', 'sinking down', 'brutality'],

  attack: function() {
    console.log(this.name + ' Fight...')
  }
}
const player2 = {
  name: 'LIU KANG',
  hp: '95%',
  img: './assets/fighters/liukang.gif',
  weapon: ['legs boxing', 'jump', 'fatality', 'slide'],

  attack: function() {
    console.log(this.name + ' Fight...')
  }
}


// player element
const createPlayer = (fighterClass, fighter) => {
  const $player = createElement('div', [fighterClass]);
  const $progressbar  = createElement('div', ['progressbar']);
  $player.append($progressbar);

  const $life = createElement('div', ['life']);
  $life.style.width = fighter.hp;

  const $name = createElement('div', ['name']);
  $name.innerText = fighter.name;
  $progressbar.append($life);
  $progressbar.append($name);

  const $character = createElement('div', ['character']);
  $player.append($character);

  const $img = createElement('img', ['fighterImg'], {
    src: fighter.img,
    alt: fighter.name
  })
  $character.append($img);

  return $player;
};

const createElement = (tagName, classNames, attribs) => {
	const elem = document.createElement(tagName);

	if (classNames) {
		elem.classList.add(...classNames);
	}
	if (attribs) {
		for (let attrib in attribs) {
			elem[attrib] = attribs[attrib];
		}
	}
	return elem;
};

// render
const $arenas = document.querySelector('.arenas');
$arenas.append(createPlayer('player1', player1));
$arenas.append(createPlayer('player2', player2));
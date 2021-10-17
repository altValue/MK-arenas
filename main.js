/* ---MK - JSMarathon --- */

const $arenas = document.querySelector('.arenas');
const $randmBtn = document.querySelector('.button');

// fighters
const player1 = {
  id: 1,
  name: 'KITANA',
  hp: 100,
  img: './assets/fighters/kitana.gif',
  weapon: ['chop by knives', 'jump', 'fatality', 'slide', 'sinking down', 'brutality'],

  attack: function(name) {
    console.log(name + ' Fight...')
  }
};

const player2 = {
  id: 2,
  name: 'SONYA',
  hp: 100,
  img: './assets/fighters/sonya.gif',
  weapon: ['boxing', 'jump', 'fatality', 'slide'],

  attack: function(name) {
    console.log(name + ' Fight...')
  }
};

// player element
const createPlayer = (fighter) => {
  const $player = createElement('div', ['player' + fighter.id])
  const $progressbar  = createElement('div', ['progressbar'])
  const $life = createElement('div', ['life'])
  const $name = createElement('div', ['name'])
  const $character = createElement('div', ['character']);
  const $img = createElement('img', ['fighterImg'], {
    src: fighter.img,
    alt: fighter.name
  })

  $life.style.width = fighter.hp + '%'
  $name.innerText = fighter.name
  $progressbar.append($life)
  $progressbar.append($name)

  $player.append($progressbar)
  $player.append($character)
  $character.append($img)

  return $player
};

const createElement = (tagName, classNames, attribs) => {
	const $elem = document.createElement(tagName);

	if (classNames) {
		$elem.classList.add(...classNames);
	}
	if (attribs) {
		for (let attrib in attribs) {
			$elem[attrib] = attribs[attrib];
		}
	}
	return $elem;
};

// check winner
const theWinnerIs = (name) => {
  let $winTitle = createElement('div', ['winTitle'])
  $winTitle.innerText = name + ' wins'

  $randmBtn.style.cursor = 'default'
  $randmBtn.innerText = 'Refresh page!'
  
  return $winTitle
};

// greeting
const touch = () => {
  let $lkt = createElement('div', ['lkt', 'fade'])
  $lkt.innerText = "Let's keep in touch!"
  $arenas.append($lkt)
};

// click handler. lives remover
const livesRemover = player => {
  let lifeLine = document.querySelector('.player' + player.id + ' .life')

  player.hp -= randomizer()
  lifeLine.style.width = player.hp + '%'

  if (player.hp < 0) {
    lifeLine.style.width = 0
    $randmBtn.style.backgroundColor = '#000'
    $randmBtn.style.transition = '5s'
    $randmBtn.disabled = true
    setTimeout(touch, 2000)
  }

  if (player1.hp <= 0) {
    $arenas.append(theWinnerIs(player2.name)) 
  } else if (player2.hp <= 0) {
    $arenas.append(theWinnerIs(player1.name))
  }
};

// randomizer
const randomizer = () => {
  let rnd = Math.ceil(Math.random() * 20)

  return rnd
}

// add Event Listener
$randmBtn.addEventListener('click', function() {
  livesRemover(player1);
  livesRemover(player2);
});

// render
$arenas.append(createPlayer(player1));
$arenas.append(createPlayer(player2));
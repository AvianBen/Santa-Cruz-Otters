//original code by https://www.youtube.com/watch?v=R1S_NhKkvGA Web Dev Simplified


const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

const imageChange = document.getElementById('image')






let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Otto wakes up on his back, the sun shining on his whiskers, where should otto swim?',

    options: [
      {
        text: 'Towards the shore',

        nextText: 2
      },
      {
        text: 'Towards the ocean',
        nextText: 3
      },
      {
        text: 'To the Boat',
        nextText: 6
      },
      {
        text: 'Towards the swarm of seaguls',
        nextText: 7
      },
    ]
  },
  {
    id: 2,
    text: 'Otto gets to the beach, the warm sand inbetween his little otter paws feels comforting as he smiles to the tourists.Where does he walk?',
    options: [
      {
        text: 'Towards the rollercoaster',

        nextText: 12
      },
      {
        text: 'To UCSC',

        nextText: 13
      },
      {
        text: 'To the fish shop',

        nextText: 14
      },

    ]
  },
  {
    id: 3,
    text: 'Otto swims out, the water gets colder and a dark wind blows. Otto shivers as he dives down below to look for food.',
    options: [
      {
        text: 'Next',
        nextText: 4
      },

    ]
  },
  {
    id: 4,
    text: 'As he comes back to the surface with a fistfull of clams he notices a fin in the corner of his eye..',
    options: [
      {
        text: 'RUN!',
        nextText:5
      }
    ]
  },
  {
    id: 12,
    text: 'Otto rides the big dipper and at the highest point he jumps out back towards the ocean!',
    options: [
      {
        text: 'back to start!',
        nextText:-1
      }
    ]
  },
  {
    id: 13,
    text: 'Otto takes the 20 bus and gets off at OPERS, he sun tans a little bit, but forgets he is far from the ocean. He misses the bus back and overheats in the sun. RIP',
    options: [
      {
        text: 'You Died.',
        nextText:-1
      }
    ]
  },
  {
    id: 14,
    text: 'Otto strolls up to the register, where the merchant says “Hey Otto! Here ya go.” And throws him a fish. Mmm, starfish, his favorite..',
    options: [
      {
        text: 'Eat! And return home.',
        nextText:-1
      }
    ]
  },
  {
    id: 15,
    text: 'As he comes back to the surface with a fistfull of clams he notices a show un the corner of his eye..',
    options: [
      {
        text: 'RUN!',
        nextText:5
      }
    ]
  },
  {
    id: 4,
    text: 'As he comes back to the surface with a fistfull of clams he notices a fin in the corner of his eye..',
    options: [
      {
        text: 'RUN!',
        nextText:5
      }
    ]
  },


  {
    id: 5,
    text: 'Otto swims as fast as possible to shallow water to try and escape, but he is much too slow!',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Otto comes across a large yacht. He climbs aboard and is swarmed by hot girls in bikins and is treated like a king. Best day ever.',
    options: [
      {
        text: 'Play again?',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: 'As he swims closer to the colony, he notices tufts of fur floating along the surface. His nose fills with the scent of a rival group of male otters. Ohhhh shit.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack the meanies',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },

    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the bullies catch up to you and throw clams at your back and laugh. Shitty day :(',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()

import {Component} from 'react'

import ButtonEle from './ButtonEle'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeButton: languageGreetingsList[0].id,
  }

  buttonClicked = id => {
    this.setState({activeButton: id})
  }

  getGreeting = () => {
    const {activeButton} = this.state
    const result = languageGreetingsList.find(i => i.id === activeButton)
    return result
  }

  render() {
    const {activeButton} = this.state
    const {imageUrl, imageAltText} = this.getGreeting()

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="ul-list">
            {languageGreetingsList.map(each => (
              <ButtonEle
                key={each.id}
                details={each}
                onButtonClick={this.buttonClicked}
                isActive={activeButton === each.id}
              />
            ))}
          </ul>
          <img src={imageUrl} alt={imageAltText} className="image" />
        </div>
      </div>
    )
  }
}

export default App

import React, { Component } from "react";
import Section from "./Section/section";
import Statistics from "./Statistics";
import FeedbackOptions from "./Feedback-options";
import Notification from './Notification'

export default class App extends Component {
  state = {
    neutral:0,
    good: 0,
    bad: 0,
  }
  onLeaveFeedback = (opt) => {
    this.setState((prevState => {
      return {
        [opt]: prevState[opt] +1
      }
    }))
  
  }

  
  render() {
    const { good, bad, neutral } = this.state;
    const total = Object.values(this.state).reduce((acc, el) => acc += el, 0);
    const positivePercentage = (good * 100) / total;
    
    return (
      <div className = "app" >
      <Section title='Please Leave Feedback'>
          <FeedbackOptions options={['good', 'bad', 'neutral']} onLeavefeedback={ this.onLeaveFeedback} />
        </Section>
        
        {total === 0 ? <Section><Notification message="There is no feedback"/></Section> :<Section title='Statistics'>
          <Statistics good={good} bad={bad} neutral={neutral} total={total} positivePercentage ={positivePercentage} />
      </Section>  }
     
    </div >
    )
  }
};


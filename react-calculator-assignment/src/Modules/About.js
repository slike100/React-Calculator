import React from 'react';

class About extends React.PureComponent {
  render() {
    return (
      <div id='aboutPage'>
        <p>
          - How is arithmetic logic being handled?
            The logic is being handled fairly straight forward. You put in one number, click an operator, and then type in another number, and finally hit equal. The number that is displayed then become the first number and you can do operations on it, or you may clear it. Additionally, the period button, plus/minus, and percent button all work.
        </p>
        <p>
          - What components were used to create this calculator?
            I am using a calculator component, a display component, and a button component.
        </p>
        <p>
          - What is the purpose of each component used?
            The calc component handles all of the logic and holds the display and button components. The button component creates all the buttons dynamically and finally the display is only displaying the current information given to it.
        </p>
        <p>
          - Knowing what you now know, would you have refactored how you organized your components?  List some of the pros and cons that you notice within your current component tree.
            Knowing what I know today, I would have found a better way to do my logic. Currently, I have a pretty big if else statement that handles ALL logic, which I do not currently like to look at. I think there could have been a better way to do it.
        </p>
      </div>
    );
  }
}

export default About
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

/* https://devdude.me/blog/rnDismissableModalStacks*/
export default function DismissableStackNavigator(routes, options) {
  const StackNav = createStackNavigator(routes, options);

  return class DismissableStackNav extends Component {
    static router = StackNav.router;

    render() {
      const { state, goBack } = this.props.navigation;
      const props = {
        ...this.props.screenProps,
        dismiss: () => goBack(state.key),
      };
      return (
        <StackNav
          screenProps={props}
          navigation={this.props.navigation}
        />
      );
    }
  }
};

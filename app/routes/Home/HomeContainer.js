import React from 'react';
import Home from './Home';
import Routes from '../../config/routes';

const HomeContainer = function (props) {
    return (
        <Home
            onDetailsPress={function () {
                return props.navigator.push(Routes.getDetailsRoute());
            }}
        />
    );
};

HomeContainer.propTypes = {
  navigator: React.PropTypes.object,
};

export default HomeContainer;

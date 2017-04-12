import React from 'react';
import Meteor, {createContainer} from 'react-native-meteor';

import LoggedOut from './layouts/LoggedOut';
import LoggedIn from './layouts/LoggedIn';
import Loading from './components/Loading';
import settings from './config/settings';

Meteor.connect(settings.FLEXURIO_URL);

const FLEXURIOMOBILE = function (props) {
    const {status, user, loggingIn} = props;

    if (status.connected === false || loggingIn) {
        return <Loading />;
    } else if (user !== null) {
        return <LoggedIn />;
    }
    return <LoggedOut />;
};

FLEXURIOMOBILE.propTypes = {
    status: React.PropTypes.object,
    user: React.PropTypes.object,
    loggingIn: React.PropTypes.bool,
};

export default createContainer(function () {
    return {
        status: Meteor.status(),
        user: Meteor.user(),
        loggingIn: Meteor.loggingIn(),
    };
}, FLEXURIOMOBILE);

import React, {PropTypes} from 'react';
import Meteor, {createContainer} from 'react-native-meteor';
import Details from './Details';

const DetailsContainer = function ({detailsReady, details}) {
    return (
        <Details
            detailsReady={detailsReady}
            details={details}
        />
    );
};

DetailsContainer.propTypes = {
    detailsReady: PropTypes.bool,
    details: PropTypes.array,
};

export default createContainer(function () {
    const handle = Meteor.subscribe('menu', {aktifYN: 1}, {}, 0);

    return {
        detailsReady: handle.ready(),
        details: Meteor.collection('menu').find({aktifYN: 1}),
    };
}, DetailsContainer);

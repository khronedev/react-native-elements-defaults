const _defaults = require('lodash.defaults');
const utils = require('../utils');

function compose(defaultStyles) {
    return function(__oldModuleDefault__) {
        const FeaturedTile = function(props) {
            const newProps = {};

            newProps.style = utils.overrideBottom(props.style, defaultStyles.style);
            newProps.iconContainerStyle = utils.overrideBottom(props.iconContainerStyle, defaultStyles.iconContainerStyle);
            newProps.titleStyle = utils.overrideBottom(props.titleStyle, defaultStyles.titleStyle);
            newProps.captionStyle = utils.overrideBottom(props.captionStyle, defaultStyles.captionStyle);
            newProps.containerStyle = utils.overrideBottom(props.containerStyle, defaultStyles.containerStyle);
            newProps.imageContainerStyle = utils.overrideBottom(props.imageContainerStyle, defaultStyles.imageContainerStyle);
            newProps.contentContainerStyle = utils.overrideBottom(props.contentContainerStyle, defaultStyles.contentContainerStyle);

            return __oldModuleDefault__.call(undefined, _defaults(newProps, props));
        };

        FeaturedTile.propTypes = __oldModuleDefault__.propTypes;
        FeaturedTile.defaultProps = __oldModuleDefault__.defaultProps;

        return FeaturedTile;
    }
}

module.exports = {
    compose,
    override: new utils.ModuleOverride('molecules/featuredTile', require('react-native-elements/src/tile/FeaturedTile'), compose),
};
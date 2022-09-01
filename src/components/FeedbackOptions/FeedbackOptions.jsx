import Proptypes from 'prop-types';

const feedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(button => {
        return (
            <button key={button} type='button' onClick={onLeaveFeedback} name={button} >
                {button}
            </button>
        )
    })
};

feedbackOptions.propTypes = {
    options: Proptypes.arrayOf(Proptypes.string.isRequired),
    onLeaveFeedback: Proptypes.func.isRequired
}

export default feedbackOptions;
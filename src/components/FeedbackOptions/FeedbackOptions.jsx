import Proptypes from 'prop-types';
import styles from './Feedback.module.css';

const feedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(button => {
        return (
            <button className={styles['button']} key={button} type='button' onClick={onLeaveFeedback} name={button} >
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
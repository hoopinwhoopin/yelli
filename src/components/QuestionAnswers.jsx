import PropTypes from 'prop-types';

function QuestionAnswers({ question, answer }) {
    return (
        <div className="flex flex-col sm:flex-row sm:w-[70%] sm:ml-0 mx-10 mt-5">
              <p className="flex-1 text-[#FFCA00] text-left sm:text-right sm:mr-5 text-2xl uppercase Boldy sm:text-3xl">
                {question}
              </p>
              <p className="flex-[3] text-[#D8CAB1] Courier ">
                {answer}
              </p>
    
            </div>
      )
    }

QuestionAnswers.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};

export default QuestionAnswers;
 


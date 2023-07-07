// QuestionList.js
import Question from "./Question";

function QuestionList() {
  return (
    <ul className="questions">
      <Question
        question="How many team members can I invite?"
        answer="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
      />
      <Question
        question="What is the maximum file upload size?"
        answer="No more than 2GB. All files in your account must fit your allotted storage space."
      />
      <Question
        question="How do I reset my password?"
        answer="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
      />
      <Question
        question="Can I cancel my subscription?"
        answer="Yes! Send us a message and we’ll process your request no questions asked."
      />
      <Question
        question="Do you provide additional support?"
        answer="Chat and email support is available 24/7. Phone lines are open during normal business hours."
      />
    </ul>
  );
}

export default QuestionList;

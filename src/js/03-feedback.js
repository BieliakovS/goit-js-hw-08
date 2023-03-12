import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInput = formEl.querySelector('input[name="email"]');
const messageInput = formEl.querySelector('textarea[name="message"]');

const feedbackDataKey = 'feedback-form-state';

const onFormInput = throttle(() => {
  const feedbackData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(feedbackDataKey, JSON.stringify(feedbackData));
}, 500);

const feedbackData = JSON.parse(localStorage.getItem(feedbackDataKey));
if (feedbackData) {
  emailInput.value = feedbackData.email;
  messageInput.value = feedbackData.message;
}

emailInput.addEventListener('input', onFormInput);
messageInput.addEventListener('input', onFormInput);

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const feedbackData = {
    email: '',
    message: '',
  };
  localStorage.removeItem(feedbackDataKey);
  emailInput.value = '';
  messageInput.value = '';
  console.log(feedbackData);
});

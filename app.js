let advice;
let id;
const btn = document.querySelector('.btn-container');

const getAdvice = async () => {
  try {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    advice = data.slip.advice;
    id = data.slip.id;
  } catch (err) {
    document.querySelector('.card').style.display = 'none';
    btn.style.display = 'none';
    document.querySelector('.error-card').style.display = 'flex';
  }
  document.querySelector('.advice-text').textContent = advice;
  document.getElementById('advice-num').textContent = id;
};

window.onload = getAdvice;
btn.addEventListener('click', getAdvice);

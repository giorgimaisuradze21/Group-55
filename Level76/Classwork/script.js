const btn = document.createElement('button');
btn.textContent = 'Click Me!';


document.body.appendChild(btn);

btn.style.backgroundColor = '#4CAF50'; // მწვანე ფერი
btn.style.color = 'white';
btn.style.padding = '10px 20px';
btn.style.fontSize = '16px';
btn.style.border = 'none';
btn.style.borderRadius = '5px';
btn.style.cursor = 'pointer';

setTimeout(() => {
  btn.remove();
}, 3000);
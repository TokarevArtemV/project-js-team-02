export function setupCheckoutButton(checkoutButton) {
  checkoutButton.addEventListener('click', () => {
    const emailInput = document.querySelector('.email-input');
    const email = emailInput.value;

    if (!email.trim()) {
      alert('Please enter a valid email address.');
      return;
    }
  });
}


export function setupDeleteAllButton(deleteAllButton) {
  deleteAllButton.addEventListener('click', () => {
    localStorage.removeItem('cart');
    window.location.reload();
  });
}

async function main() {
    const ethereumButton = document.querySelector('connect-wallet');

    ethereumButton.addEventListener('click', () => {
    //Will Start the metamask extension
    ethereum.request({ method: 'eth_requestAccounts' });
    });
}
window.addEventListener("load", () => {
  const connectButton = document.getElementById("connect");

  const connectMetamask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.enable();
        console.log("MetaMask account connected");
      } else {
        console.error("MetaMask not found");
      }
    } catch (error) {
      console.error("Error connecting MetaMask:", error.message);
    }
  };

  connectButton.addEventListener("click", connectMetamask);
});

connectButton.addEventListener("load", connectMetamask);

const copyText = document.querySelector(".text-copy");
      const copyInfo = document.querySelector(".copy-info");

    function copyTextToClipboard() {
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      copyInfo.classList.add("isClicked")
        copyInfo.innerHTML = "Nomor disalin"
        setTimeout(() => {
          copyInfo.classList.remove("isClicked")
          copyInfo.innerHTML = "Salin nomor"
        }, 1000);
      document.execCommand("copy");
    }
    copyText.addEventListener("click", copyTextToClipboard)
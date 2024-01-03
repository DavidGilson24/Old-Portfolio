const toTopButton = document.querySelector("#to-top");

function toggleToTopButton() 
{
    if (window.scrollY > 300) 
    {
      toTopButton.style.opacity = "1";
    } 

    else 
    {
      toTopButton.style.opacity = "0";
    }
  }

  toggleToTopButton();

  window.addEventListener("scroll", toggleToTopButton);

  toTopButton.addEventListener("click", function() 
  {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
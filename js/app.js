// var myFunction = function(target) {
//     target.parentNode.querySelector('.dropdown__content').classList.toggle('show');
//     target.parentNode.querySelector('.dropdown__title').classList.toggle('bold');
//     target.parentNode.querySelector('.dropdown__arrow').classList.toggle('flip'); 
//  }

//  window.onclick = function(event) {
//    if (!event.target.matches('.dropbtn')) {
 
//      var dropdowns = document.getElementsByClassName("dropdown__content");
//      var i;
//      for (i = 0; i < dropdowns.length; i++) {
//        var openDropdown = dropdowns[i];
//        if (openDropdown.classList.contains('show')) {
//          openDropdown.classList.remove('show');
//        }
//      }
//    }
//  }


const questions = document.querySelectorAll('.question');
questions.forEach((ques) => {
    const btn = ques.querySelector('.question-btn');

    btn.addEventListener('click', () => {
        questions.forEach((item) => {
            if (item != ques) {
                item.classList.remove('show-text');
            }
        });
        ques.classList.toggle('show-text');
        
    });
});

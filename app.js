// here we are setting the initial value for the counter
let count = 0;

// here we are selecting the value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {

        //here we are tapping into the event that did the clicking and then storing it in a variable which 
        //will be used to make changes on the counter
        const styles = e.currentTarget.classList;

        //here we check the conditions 
        if(styles.contains('decrease')){
            count --;
        } else if (styles.contains('increase')) {
            count ++
        } else if (styles.contains('reset')) {
            count = 0;
        }
        

        //here we are changing the colors of the value based on the number 
        if(count == 0 ) {
            value.style.color = "blue"
        } else if(count < 0 ) {
            value.style.color = "red"
        } else if(count > 0 ) {
            value.style.color = "green"
        }





        //based on the conditions, we update the text on the counter
        value.textContent = count;
    })
})
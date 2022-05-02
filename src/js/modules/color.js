const color = () => {
    
    function changeColor(titleSelector) {

        const title = document.querySelector(titleSelector);
        
        if(+title.innerHTML < 100) {
            title.style.color = "red";
        } else if(+title.innerHTML === 100) {
            title.style.color = "yellow";
        } else if(+title.innerHTML > 100) {
            title.style.color = "#36C496";
        }; 

    };

    changeColor('.main__statistic__value__result');
    
};

export default color;
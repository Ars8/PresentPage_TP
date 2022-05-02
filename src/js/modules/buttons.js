const buttons = () => {
    function addEventOnButton(triggerSelector) {
        const trigger = document.querySelector(triggerSelector);

        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
                console.log(`btn ${triggerSelector} was pressed`)
            } else{
                console.log('btn was pressed')
            }
        });
    };
    addEventOnButton('.header__prev__btn');
    addEventOnButton('.header__next__btn');
    addEventOnButton('.header__down__btn');
    addEventOnButton('.header__group__btn');
    addEventOnButton('.main__progress__status__btn');
};
export default buttons;
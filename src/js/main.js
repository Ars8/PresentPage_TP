import move from './modules/progress';
import buttons from './modules/buttons';
import color from './modules/color';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    move();
    buttons();
    color();
});
import Vue from 'vue'

Vue.filter('returnButtonName', function (str) {
    console.log(str)
    return 'buttons';
})

Vue.filter('returnButtonName2', function () {
    return 'buttons2';
})

Vue.filter('getInputValue', function (str) {
    if (!str) {
        return null;
    }
    return str + '哈哈哈';
})

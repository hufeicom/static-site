module.exports = ($globalPage = document.getElementById('app'))
$globalPage.setTitle = function(str){
    document.title = str;
}
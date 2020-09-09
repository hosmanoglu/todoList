var apiUrl="http://localhost:4400"
function addWork() {
    //add work
    if ($("#add-text").val() !== "") {
        $.ajax({
            type: "POST",
            url: apiUrl+"/addList",
            contentType: 'application/json',
            data: JSON.stringify({ text: $("#add-text").val() }),
        }).then(function (val) {
            console.log(val)
            renderList(val)
            $("#add-text").val("")
        }).catch(
            // Log the rejection reason
            function (reason) {
                console.log('Handle rejected promise (' + reason + ') here.');
            });
    }
    
}

function check(element,id) {
    //check checkbox
    $.ajax({
        type: "POST",
        url: apiUrl+"/editList",
        contentType: 'application/json',
        data: JSON.stringify({ "id": id ,"checked":element.checked}),
    }).then(function (val) {
        console.log(val)
        renderList(val)
    }).catch(
        // Log the rejection reason
        function (reason) {
            console.log('Handle rejected promise (' + reason + ') here.');
        });
}

function del(id) {
    //del line
    $.ajax({
        type: "POST",
        url: apiUrl+"/delList",
        contentType: 'application/json',
        data: JSON.stringify({ "id": id } ),
    }).then(function (val) {
        console.log(val)
        renderList(val)
    }).catch(
        // Log the rejection reason
        function (reason) {
            console.log('Handle rejected promise (' + reason + ') here.');
        });
}
function renderList(arr) {
    // delete list render again
    $("#list").empty();
    for (let index = 0; index < arr.length; index++) {

        $("#list").append("<div id='" + index + "'>" +
            "<input type='text' readonly value='" + arr[index].text + "' onClick='textClick(this)' >" +
            "<input type='checkbox' onChange='check(this,"+index+")' "+((arr[index].checked) ? "checked" : '') +"  />" +
            "<button type='button' onClick='del(" + index + ")' text='delete' />delete" +
            "</div>")
    }
}
function textClick(element) {
    element.nextElementSibling.click()
}

$( document ).ready(function() {
    $.ajax({//getList
        type: "GET",
        url: apiUrl+"/getList",
        contentType: 'application/json',
    }).then(function (val) {
        console.log(val)
        renderList(val)
    }).catch(
        // Log the rejection reason
        function (reason) {
            console.log('Handle rejected promise (' + reason + ') here.');
        });
});

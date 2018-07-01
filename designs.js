// Select color input
// Select size input
// Select buttons
var color, height, width, removeGridButton, removeColor

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
    event.preventDefault();

    makeGrid(height, width);
})

function makeGrid(x, y) {
    $('tr').remove();
    // to get the Grid sizes, remove grid and color buttons
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    removeGridButton = $('#removeGrid');
    removeColor = $('#removeColor');

    for(i = 1; i <= x; i++){
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for(j = 1; j <= y; j++){
            $('#table' + i).append('<td></td>');
        }
    }

    //adding color to a cell by the user
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')){
            $(this).removeAttr('style');
        } else{
            $(this).attr('style', 'background-color:' + color);
        }
    })

    //remove or clear the grid
    $('#removeGrid').click(function () {
        $('tr').remove();
      });

    //remove color from the grid
    $('#removeColor').click(function () {
        $('td').removeAttr('style');
    });
}


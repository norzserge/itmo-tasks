$(function() {
    const url = 'https://kodaktor.ru/j/rates';
    let tableContent = '';
    let ajaxFunction = (e) => {
        $(e.target).hide();
        $('.table-wrapper').addClass('success');
        jQuery.ajax({
            url: url,
            context: $('tbody'),
            dataType: 'json',
        })
        .done(function(result) {
            $('thead').html('<tr><td><div>Валюта</div></td><td><div>Продажа</div></td><td><div>Покупка</div></td></tr>');
            $('thead td').first().css('width', '170px');
            $('thead div').css({
                'padding': '5px 10px',
                'background-color': '#5a5a5a',
                'font-weight': 'bold',
                'color': '#fff',
                'border-radius': '5px',
            });
            $(result).each((index, element) => {
                tableContent += 
                    `<tr>
                        <td>${element.name}</td>
                        <td>${element.sell}</td>
                        <td>${element.buy}</td>
                    </tr>`
            });
            $(this).html(tableContent);
            $('tbody tr:odd').css('background-color', '#ccc');
            $('tbody td').css('padding', '5px 10px');
        })
    };
    $('button').on('click', ajaxFunction);
});
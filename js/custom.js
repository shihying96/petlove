function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.drop li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}

DropDown.prototype = {
    initEvents: function () {
        let obj = this;
        obj.dd.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass('active');
            $(this).toggleClass('teamwork');
            // $(this).toggleClass('footlonger1');
            // $('.footer').css('height', '850px');
        });
        obj.opts.on('click', function () {
            let opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
            opt.siblings().removeClass('selected');
            opt.filter(':contains("' + obj.val + '")').addClass('selected');


        }).change();
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    // create new variable for each menu
    let dd1 = new DropDown($('.noble-gases'));
    // var dd2 = new DropDown($('#other-gases'));
    $(document).click(function () {
        // close menu on document click
        $('.wrap-drop').removeClass('active');

    });
});

$('.noble-gases').click(function () {
    $('.footer').css('height', '1250px');


})






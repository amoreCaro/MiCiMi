export default function megaMenu() {
  const hasChildren = $('.has-children');
  const back = $('.submenu__item-back');
  const items = $('.submenu__item');
  const submenuItem = $('.submenu-item');

  hasChildren.on('click', function () {
    const megaMenuDropdown = $(this).find('.mega__menu-dropdown');

    if (megaMenuDropdown.length) {
      megaMenuDropdown.toggleClass('show');
    } 
  });
  back.on('click', function () {
    items.removeClass('show').addClass('h-animation-right');
  });

  // $('.submenuItem').each(function () {
  //   const svg = $('<img>');
  //   svg.attr('src', './img/arrow-right--black.svg');
  //   svg.attr('alt', 'Arrow Icon');

  //   $(this).append(svg);
  // });
}

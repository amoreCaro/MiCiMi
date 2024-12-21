export default function megaMenu() {
  const hasChildren = $('.has-children');

  hasChildren.on('click', function () {
    const megaMenuDropdown = $(this).find('.mega__menu-dropdown');

    if (megaMenuDropdown.length) {
      megaMenuDropdown.toggleClass('show');
    } 
  });
}

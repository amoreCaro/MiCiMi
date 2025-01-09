export default function sidebarLogic() {
  const sidebar = $('.sidebar');
  const openModal = $('.openModal');
  const closeModal = $('.closeModal');
  const overlay = $('.overlay');

  const hasChildren = $('.has-children');
  const items = $('.dropdown__items');
  const back = $('.dropdown__item-back');

  if (overlay.length === 0) {
    console.error('Overlay element not found');
    return;
  }

  openModal.on('click', function () {
    const sidebarId = $(this).data('sidebarTarget');
    const overlayId = '.overlay';

    if (sidebarId) {
      $(sidebarId).addClass('active');
      $(overlayId).addClass('active');
    }
  });

  closeModal.on('click', function () {
    const overlayId = '.overlay';
    sidebar.removeClass('active');
    $(overlayId).removeClass('active');
  });

  hasChildren.on('click', function () {
    const submenu = $(this).find('.submenu');

    if (submenu.length) {
      submenu.toggleClass('show');
    }
  });

  back.on('click', function () {
    items.removeClass('show').addClass('h-animation-right');
  });

  $('.has-children').each(function() {
    const svg = $('<img>'); // Створюємо новий елемент img
    svg.attr('src', '../../img/arrow-right--black.svg'); // Встановлюємо шлях до SVG
    svg.attr('alt', 'Arrow Icon'); // Встановлюємо alt текст для доступності
    
    // Додаємо SVG як img до поточного елемента
    $(this).append(svg);
  });
}

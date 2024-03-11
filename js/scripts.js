window.addEventListener('DOMContentLoaded', function () {
  var resizeTimeout = !1;

  var grid_content = document.querySelectorAll('.grid-content');
  var grid_title = document.querySelectorAll('.grid-title');

  // console.log(grid_title);

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.classList.contains('selected')) {
      e.target.classList.toggle('selected');
      e.currentTarget.nextElementSibling.classList.toggle('selected');
    } else {
      grid_title.forEach((item) => {
        item.classList.remove('selected');
        item.nextElementSibling.classList.remove('selected');
      });

      e.target.classList.add('selected');
      e.currentTarget.nextElementSibling.classList.add('selected');
    }
  };

  grid_title.forEach(function (item) {
    item.addEventListener('click', handleClick);
  });

  function adjustGridRowStart(count_start, count_end, row_start, items) {
    // for (var i = 0; i <= items.length; i++) {
    //   if (count_start === null && count_end === null) {
    //     items[i].style.gridRowStart = row_start;
    //     row_start++;
    //   }
    //   if (count_start <= count_end - 1) {
    //     items[i].style.gridRowStart = row_start;
    //     count_start++;
    //   }
    //   if (
    //     count_start !== null &&
    //     count_end !== null &&
    //     count_start === count_end
    //   ) {
    //     count_start = 0;
    //     row_start++;
    //   }
    // }

    items.forEach((item) => {
      if (count_start === null && count_end === null) {
        item.style.gridRowStart = row_start;
        row_start++;
      }
      if (count_start <= count_end - 1) {
        item.style.gridRowStart = row_start;
        count_start++;
      }
      if (
        count_start !== null &&
        count_end !== null &&
        count_start === count_end
      ) {
        count_start = 0;
        row_start++;
      }
    });
  }

  function expandableGrid() {
    if (window.innerWidth >= 640 && window.innerWidth < 1024) {
      adjustGridRowStart(0, 2, 2, grid_content);
    } else if (window.innerWidth >= 1024) {
      adjustGridRowStart(0, 3, 2, grid_content);
    } else {
      adjustGridRowStart(null, null, 2, grid_content);
    }
  }

  expandableGrid();

  window.onresize = function (e) {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      expandableGrid();
    }, 250);
  };
});

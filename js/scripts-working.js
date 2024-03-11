window.addEventListener('DOMContentLoaded', function () {
  // var styles = window.getComputedStyle(gritItem);
  // var gridColumn = styles['grid-column-start'];
  // var gridRow = styles['grid-row-start'];

  // const columns = document.querySelectorAll('.grid-wrapper .grid-title').length;
  // console.log(columns);

  var resizeTimeout = !1;
  const grid1 = document.querySelector('.grid-wrapper');
  // const grid_items = grid1.children.length;
  const grid_items = grid1.children;

  var grid_content = document.querySelectorAll('.grid-content');

  // console.log(grid_items);

  // // logs the number of columns in the first grid
  // console.log(grid1.children.length);

  // var styles = window.getComputedStyle(grid1);
  // var gridColumn = styles['grid-column-start'];
  // var gridRow = styles['grid-row-start'];

  // console.log(gridColumn);

  // console.log(grid_content);

  //   console.log(grid1.children.length);
  //   var items = Math.floor(grid1.children.length / 2);
  //   console.log(items);

  grid1.addEventListener('click', function (e) {
    // console.log(grid_items.length);
    // grid_items.forEach((element) => {
    //   if (element.classList.contain('selected')) {
    //     element.classList.remove('selected');
    //   }
    // });
    for (item of grid_items) {
      // code to be executed
      if (
        e.target.classList.contains('grid-title') &&
        item.classList.contains('selected')
      ) {
        item.classList.remove('selected');
        item.nextElementSibling.classList.remove('selected');
      }
    }

    if (e.target.classList.contains('grid-title')) {
      console.log(e.target);
      // e.target.classList.add('selected');
      // e.target.nextElementSibling.classList.add('selected');

      e.target.classList.add('selected');
      e.target.nextElementSibling.classList.add('selected');

      // if (e.target.classList.contains('selected')) {
      //   // e.target.classList.remove('selected');
      //   // e.target.nextElementSibling.classList.remove('selected');
      console.log('Hello');
      // } else {
      //   e.target.classList.add('selected');
      //   e.target.nextElementSibling.classList.add('selected');
      // }

      // e.target.classList.toggle('selected');
      // e.target.nextElementSibling.classList.toggle('selected');
    }

    //   console.log(window.getComputedStyle(e.target));
    //   console.log(window.getComputedStyle(e.target)['grid-row-start']);
  });

  // var row_start = 2;
  // var count = 0;
  // for (var i = 0; i <= grid_content.length; i++) {
  //   if (count <= 1) {
  //     grid_content[i].style.gridRowStart = row_start;
  //     count++;
  //   }
  //   if (count === 2) {
  //     count = 0;
  //     row_start++;
  //   }
  // }

  // var row_start = 2;
  // var count = 0;
  // for (var i = 0; i <= grid_content.length; i++) {
  //   if (count < 3) {
  //     grid_content[i].style.gridRowStart = row_start;
  //     count++;
  //   }
  //   if (count === 3) {
  //     count = 0;
  //     row_start++;
  //   }
  // }

  // var row_start = 2;
  // var count = null;
  // for (var i = 0; i <= grid_content.length; i++) {
  //   if (count === null) {
  //     grid_content[i].style.gridRowStart = row_start;
  //     row_start++;
  //   }
  //   // if (count <= 3) {
  //   //   grid_content[i].style.gridRowStart = row_start;
  //   //   count++;
  //   // }
  //   // if (count === 3) {
  //   //   count = 0;
  //   //   row_start++;
  //   // }
  // }

  // 1col
  // adjustGridRowStart(null, null, 2, grid_content);

  // 2col
  // adjustGridRowStart(0, 2, 2, grid_content);

  // 3col
  // adjustGridRowStart(0, 3, 2, grid_content);

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

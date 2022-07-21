var tasks = [
    {
      id: 'Task 1',
      name: 'Redesign website',
      start: '2016-12-28',
      end: '2016-12-31',
      progress: 20,
      dependencies: 'Task 2, Task 3',
      custom_class: 'bar-milestone' // optional
    },
    {
        id: 'Task 2',
        name: 'hogehoge',
        start: '2016-11-28',
        end: '2016-12-02',
        //dependencies: 'Task 3',
        progress: 50,
      },
      {
        id: 'Task 3',
        name: 'hogehoge2',
        start: '2016-11-28',
        end: '2016-12-16',
        progress: 70,
      },
  ]

var options = {
    header_height: 50,
    column_width: 30,
    step: 24,
    view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
    bar_height: 20,
    bar_corner_radius: 3,
    arrow_curve: 5,
    padding: 18,
    view_mode: 'Day',
    date_format: 'YYYY-MM-DD',
    custom_popup_html: null
};

var gantt = new Gantt("#gantt", tasks);
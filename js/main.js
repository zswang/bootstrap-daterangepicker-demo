$('input[name="daterange"]').daterangepicker({
  locale: {
    applyLabel: '应用',
    cancelLabel: '取消',
    fromLabel: '从',
    toLabel: '至',
  }
});


$(function () {
  var start = moment().subtract(29, 'days');
  var end = moment();

  function cb(start, end) {
    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  }

  $('#reportrange').daterangepicker({
    startDate: start,
    endDate: end,
    locale: {
      applyLabel: '应用',
      cancelLabel: '取消',
      fromLabel: '从',
      toLabel: '至',
      customRangeLabel: '自定义'
    },
    ranges: {
      '今天': [moment(), moment()],
      '昨天': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      '最近 7 天': [moment().subtract(6, 'days'), moment()],
      '最近 30 天': [moment().subtract(29, 'days'), moment()],
      '本月': [moment().startOf('month'), moment().endOf('month')],
      '上月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
  }, cb);

  cb(start, end);

});
